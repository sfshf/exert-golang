package main

import (
	"bytes"
	"context"
	"crypto/tls"
	"fmt"
	"html/template"
	"io"
	"io/ioutil"
	stdlog "log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"runtime/debug"
	"strings"
	"syscall"
	"time"

	"github.com/alecthomas/kong"
	"github.com/gin-gonic/gin"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/cache"
	"github.com/sfshf/exert-golang/service/captcha"
	"github.com/sfshf/exert-golang/service/casbin"
	"github.com/sfshf/exert-golang/service/model_service"
	"github.com/sfshf/exert-golang/service/redis"
	"github.com/sfshf/exert-golang/web/govern"
	"github.com/sfshf/exert-golang/web/govern/api/v1"
	"go.mongodb.org/mongo-driver/mongo"
)

// Build information. Populated at build-time.
var (
	AppName   = "govern"
	Version   = "v0.0.0-20230716-beta"
	Revision  string
	Branch    string
	BuildUser string
	BuildDate string
	GoVersion = runtime.Version()
	GoOS      = runtime.GOOS
	GoArch    = runtime.GOARCH
)

// versionInfoTmpl contains the template used by Info.
var (
	versionInfoTmpl = `
{{.program}}, version {{.version}} (branch: {{.branch}}, revision: {{.revision}})
	build user:       {{.buildUser}}
	build date:       {{.buildDate}}
	go version:       {{.goVersion}}
	platform:         {{.platform}}
	tags:             {{.tags}}
`
)

type GovernCmd struct {
	Version   versionFlag `short:"v" help:"Show version info."`
	VerCmd    VerCmd      `cmd:"" name:"version" help:"Show version info."`
	WebSrvCmd WebSrvCmd   `cmd:"" name:"websrv" help:"Start govern web server."`
}

type versionFlag bool

func (a versionFlag) BeforeReset(kCtx *kong.Context) error {
	if err := kCtx.Run(&VerCmd{}); err != nil {
		return err
	}
	return nil
}

type VerCmd struct{}

func (cmd *VerCmd) Run(kCtx *kong.Context) error {
	m := map[string]string{
		"program":   AppName,
		"version":   Version,
		"revision":  getRevision(),
		"branch":    Branch,
		"buildUser": BuildUser,
		"buildDate": BuildDate,
		"goVersion": GoVersion,
		"platform":  GoOS + "/" + GoArch,
		"tags":      getTags(),
	}
	t := template.Must(template.New("version").Parse(versionInfoTmpl))
	var buf bytes.Buffer
	if err := t.ExecuteTemplate(&buf, "version", m); err != nil {
		panic(err)
	}
	fmt.Println(strings.TrimSpace(buf.String()))
	kCtx.Kong.Exit(0)
	return nil
}

var computedRevision string
var computedTags string

func getRevision() string {
	if Revision != "" {
		return Revision
	}
	return computedRevision
}

func getTags() string {
	return computedTags
}

func init() {
	computedRevision, computedTags = computeRevision()
}

func computeRevision() (string, string) {
	var (
		rev      = "unknown"
		tags     = "unknown"
		modified bool
	)

	buildInfo, ok := debug.ReadBuildInfo()
	if !ok {
		return rev, tags
	}
	for _, v := range buildInfo.Settings {
		if v.Key == "vcs.revision" {
			rev = v.Value
		}
		if v.Key == "vcs.modified" {
			if v.Value == "true" {
				modified = true
			}
		}
		if v.Key == "-tags" {
			tags = v.Value
		}
	}
	if modified {
		return rev + "-modified", tags
	}
	return rev, tags
}

type WebSrvCmd struct {
	Global struct {
		Detach           bool          `short:"d" help:"Run web server in background and print pid."`
		RunMode          string        `optional:"" enum:"debug,release,test" default:"debug" name:"" help:"Running mode(debug|release|test) of web server."`
		TimeZone         string        `optional:"" default:"Asia/Shanghai" name:"" help:""`
		DateFormat       string        `optional:"" default:"2006-01-02" name:"" help:""`
		DateTimeFormat   string        `optional:"" default:"2006-01-02 15:04:05" name:"" help:""`
		RootAccount      string        `optional:"" default:"root" name:"" help:""`
		RootPasswd       string        `optional:"" default:"12341234" name:"" help:""`
		OriginDomain     string        `optional:"" default:"./config/domain.yaml" name:"" help:""`
		OriginMenu       string        `optional:"" default:"./config/menu.yaml" name:"" help:""`
		SrvHost          string        `optional:"" default:"127.0.0.1" name:"" help:""`
		SrvPort          int           `optional:"" default:"8000" name:"" help:""`
		SrvReadTimeout   time.Duration `optional:"" default:"5s" name:"" help:""`
		SrvWriteTimeout  time.Duration `optional:"" default:"10s" name:"" help:""`
		SrvIdleTimeout   time.Duration `optional:"" default:"15s" name:"" help:""`
		CertFile         string        `optional:"" default:"" name:"" help:""`
		CertKeyFile      string        `optional:"" default:"" name:"" help:""`
		ShutdownTimeout  int           `optional:"" default:"5" name:"" help:""`
		MaxContentLength int           `optional:"" default:"8192" name:"" help:""`
		MaxLoggerLength  int           `optional:"" default:"8192" name:"" help:""`
	} `embed:"" prefix:"global." help:""`
	MongoDB struct {
		ServerUri string `optional:"" default:"mongodb://127.0.0.1:27017/govern?directConnection=true" name:"" help:"Uri to the mongo database."`
		Database  string `optional:"" default:"govern" name:"" help:"The name of a database."`
	} `embed:"" prefix:"mongodb." help:""`
	Cache struct {
		Enable  bool          `optional:"" default:"true" name:"" help:""`
		LRU     bool          `optional:"" default:"true" name:"" help:""`
		MaxKeys int           `optional:"" default:"10000" name:"" help:""`
		TTL     time.Duration `optional:"" default:"3m" name:"" help:""`
	} `embed:"" prefix:"cache." help:""`
	// 'redis://<user>:<password>@<host>:<port>/<db_number>' or 'unix://<user>:<password>@</path/to/redis.sock>?db=<db_number>'
	Redis struct {
		Enable   bool   `optional:"" default:"false" name:"" help:""`
		Network  string `optional:"" default:"tcp" name:"" help:""`
		Addr     string `optional:"" default:"127.0.0.1:6379" name:"" help:""`
		Username string `optional:"" default:"" name:"" help:""`
		Password string `optional:"" default:"" name:"" help:""`
		DB       int    `optional:"" default:"0" name:"db" help:""`
	} `embed:"" prefix:"redis." help:""`
	JWT struct {
		Enable     bool          `optional:"" default:"true" name:"" help:""`
		SigningKey string        `optional:"" default:"" name:"" help:""`
		Expired    time.Duration `optional:"" default:"168h" name:"" help:""`
		Stored     bool          `optional:"" default:"false" name:"" help:""`
	} `name:"jwt" embed:"" prefix:"jwt." help:""`
	Casbin struct {
		Enable           bool          `optional:"" default:"true" name:"" help:""`
		Debug            bool          `optional:"" default:"false" name:"" help:""`
		Model            string        `optional:"" default:"./config/casbin_rbac.model" name:"" help:""`
		AutoSave         bool          `optional:"" default:"true" name:"" help:""`
		AutoLoad         bool          `optional:"" default:"false" name:"" help:""`
		AutoLoadInterval time.Duration `optional:"" default:"60s" name:"" help:""`
	} `name:"" embed:"" prefix:"casbin." help:""`
	PicCaptcha struct {
		Enable      bool          `optional:"" default:"false" name:"" help:""`
		Length      int           `optional:"" default:"4" name:"" help:""`
		Width       int           `optional:"" default:"680" name:"" help:""`
		Height      int           `optional:"" default:"450" name:"" help:""`
		MaxSkew     float64       `optional:"" default:"1.0" name:"" help:""`
		DotCount    int           `optional:"" default:"10" name:"" help:""`
		Threshold   int           `optional:"" default:"100" name:"" help:""`
		Expiration  time.Duration `optional:"" default:"60s" name:"" help:""`
		RedisStore  bool          `optional:"" default:"false" name:"" help:""`
		RedisDB     int           `optional:"" default:"0" name:"" help:""`
		RedisPrefix string        `optional:"" default:"Govern:PicCaptcha" name:"" help:""`
	} `name:"" embed:"" prefix:"pic-captcha." help:""`
	AccessLogger struct {
		Enable     bool `optional:"" default:"false" name:"" help:"If true, the use the custom logger."`
		SkipStdout bool `optional:"" default:"false" name:"" help:"If true, then skip lo logger to os.Stdout."`
		LogToMongo bool `optional:"" default:"false" name:"" help:"If true, then logger to mongo database."`
		MaxWorkers int  `optional:"" default:"50" name:"" help:"Max value of the number of workers in the task queue."`
		MaxBuffers int  `optional:"" default:"10000" name:"" help:"Max value of the number of buffers in the task queue."`
	} `name:"" embed:"" prefix:"access-logger." help:""`
	CORS struct {
		Enable           bool          `optional:"" default:"true" name:"" help:""`
		AllowOrigins     []string      `optional:"" default:"www.sfshf.com" name:"" help:""`
		AllowMethods     []string      `optional:"" default:"OPTIONS,GET,POST,PUT,PATCH,DELETE,HEAD" name:"" help:""`
		AllowHeaders     []string      `optional:"" default:"Origin,Content-Length,Content-Type,Authorization" name:"" help:""`
		AllowCredentials bool          `optional:"" default:"false" name:"" help:""`
		MaxAge           time.Duration `optional:"" default:"5m" name:"" help:""`
	} `name:"" embed:"" prefix:"cors." help:""`
	GZIP struct {
		Enable bool `optional:"" default:"false" name:"" help:""`
	} `name:"" embed:"" prefix:"gzip." help:""`
}

func (cmd *WebSrvCmd) Run(kCtx *kong.Context) error {
	if cmd.Global.Detach {
		// TODO: need to optimize.
		var args []string
		for _, v := range kCtx.Args {
			if v != "-d" {
				args = append(args, v)
			}
		}
		// NOTE: enable service log.
		args = append(args, "--access-logger.enable", "--access-logger.skip-stdout", "--access-logger.log-to-mongo")
		command := exec.Command(os.Args[0], args...)
		if err := command.Start(); err != nil {
			panic(err)
		}
		if err := ioutil.WriteFile("./govern.pid", []byte(fmt.Sprintf("%d", command.Process.Pid)), 0666); err != nil {
			stdlog.Println(err)
			if err = command.Process.Kill(); err != nil {
				panic(err)
			}
		}
		stdlog.Println("pid of detached process:", command.Process.Pid)
		kCtx.Exit(0)
	}
	ctx := context.Background()
	stdlog.SetOutput(os.Stdout)
	stdlog.SetFlags(stdlog.Lshortfile | stdlog.LstdFlags)
	if cmd.Global.RunMode != gin.DebugMode {
		stdlog.SetOutput(io.Discard)
	}
	state := 1
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM, syscall.SIGQUIT)
	// init repos.
	clear, err := repo.InitRepo(ctx, cmd.MongoDB.ServerUri, cmd.MongoDB.Database)
	if err != nil {
		panic(err)
	}
	defer clear()
	// launch services.
	// cache service.
	if cmd.Cache.Enable {
		clear, err = cache.LaunchDefaultWithOption(ctx, cache.CacheOption{
			LRU:     cmd.Cache.LRU,
			MaxKeys: cmd.Cache.MaxKeys,
			TTL:     cmd.Cache.TTL,
		})
		if err != nil {
			panic(err)
		}
		defer clear()
	}
	// captcha service.
	if cmd.PicCaptcha.Enable {
		clear, err = captcha.LaunchDefaultWithOption(ctx, captcha.CaptchaOption{
			Length:      cmd.PicCaptcha.Length,
			Width:       cmd.PicCaptcha.Width,
			Height:      cmd.PicCaptcha.Height,
			MaxSkew:     cmd.PicCaptcha.MaxSkew,
			DotCount:    cmd.PicCaptcha.DotCount,
			Threshold:   cmd.PicCaptcha.Threshold,
			Expiration:  cmd.PicCaptcha.Expiration,
			RedisStore:  cmd.PicCaptcha.RedisStore,
			RedisDB:     cmd.PicCaptcha.RedisDB,
			RedisPrefix: cmd.PicCaptcha.RedisPrefix,
		})
		if err != nil {
			panic(err)
		}
		defer clear()
	}
	// casbin service.
	if cmd.Casbin.Enable {
		clear, err = casbin.LaunchDefaultWithOption(ctx, casbin.CasbinOption{
			Debug:            cmd.Casbin.Debug,
			Model:            cmd.Casbin.Model,
			AutoSave:         cmd.Casbin.AutoSave,
			AutoLoad:         cmd.Casbin.AutoLoad,
			AutoLoadInterval: cmd.Casbin.AutoLoadInterval,
		})
		if err != nil {
			panic(err)
		}
		defer clear()
	}
	// access log service.
	if cmd.AccessLogger.Enable {
		clear, err = model_service.LaunchDefaultWithOption(ctx, model_service.LoggerOption{
			SkipStdout: cmd.AccessLogger.SkipStdout,
			LogToMongo: cmd.AccessLogger.LogToMongo,
			MaxWorkers: cmd.AccessLogger.MaxWorkers,
			MaxBuffers: cmd.AccessLogger.MaxBuffers,
		})
		if err != nil {
			panic(err)
		}
		defer clear()
	}
	// model services.
	// staff service.
	if cmd.Global.RootAccount != "" && cmd.Global.RootPasswd != "" {
		if err = model_service.InvokeRootAccount(
			ctx,
			cmd.Global.RootAccount,
			cmd.Global.RootPasswd,
		); err != nil {
			panic(err)
		}
	}
	// domain service.
	if cmd.Global.OriginDomain != "" {
		// if err = model_service.ImportDomainsFromYaml(
		// 	cliCtx.Context,
		// 	cmd.C.Global.OriginDomainFile,
		// 	model_service.Root(),
		// ); err != nil {
		// 	panic(err)
		// }
	}
	// menu service.
	if cmd.Global.OriginMenu != "" {
		if err = model_service.ImportMenuWidgetsFromYaml(
			ctx,
			cmd.Global.OriginMenu,
			model_service.Root(),
		); err != nil {
			if !mongo.IsDuplicateKeyError(err) {
				panic(err)
			}
		}
	}
	// redis service.
	if cmd.Redis.Enable {
		clear, err = redis.LaunchDefaultWithOption(ctx, redis.RedisOption{
			Network:  cmd.Redis.Network,
			Addr:     cmd.Redis.Addr,
			Username: cmd.Redis.Username,
			Password: cmd.Redis.Password,
			DB:       cmd.Redis.DB,
		})
		if err != nil {
			panic(err)
		}
		defer clear()
	}
	// launch http server.
	cancel := RunHTTPServer(ctx, cmd)
	defer cancel()
	// net/http/pprof & prometheus
	go func() {
		http.Handle("/metrics", promhttp.Handler())
		stdlog.Println(http.ListenAndServe(":8010", nil))
	}()

EXIT:
	for {
		sig := <-sc
		stdlog.Printf("Signal[%s]", sig.String())
		switch sig {
		case syscall.SIGQUIT, syscall.SIGTERM, syscall.SIGINT:
			state = 0
			break EXIT
		case syscall.SIGHUP:
		default:
			break EXIT
		}
	}
	stdlog.Println("Server Exit")
	os.Exit(state)
	return nil
}

// RunHTTPServer run the http server.
func RunHTTPServer(ctx context.Context, cmd *WebSrvCmd) func() {
	webHandler, err := govern.NewHandler(ctx, govern.Config{
		RunMode: cmd.Global.RunMode,
		ApiConfig: api.Config{
			Swagger: cmd.Global.RunMode == gin.DebugMode,
			CORS: api.CORSConfig{
				Enable:           cmd.CORS.Enable,
				AllowOrigins:     cmd.CORS.AllowOrigins,
				AllowMethods:     cmd.CORS.AllowMethods,
				AllowHeaders:     cmd.CORS.AllowHeaders,
				AllowCredentials: cmd.CORS.AllowCredentials,
				MaxAge:           cmd.CORS.MaxAge,
			},
			GZIP: api.GZIPConfig{
				Enable: cmd.GZIP.Enable,
			},
			JWTAuth: api.JWTAuthConfig{
				Enable:     cmd.JWT.Enable,
				SigningKey: cmd.JWT.SigningKey,
				Expired:    cmd.JWT.Expired,
				Stored:     cmd.JWT.Stored,
			},
		},
	})
	if err != nil {
		panic(err)
	}
	addr := fmt.Sprintf("%s:%d", cmd.Global.SrvHost, cmd.Global.SrvPort)
	srv := &http.Server{
		Addr:         addr,
		Handler:      webHandler,
		ReadTimeout:  cmd.Global.SrvReadTimeout,
		WriteTimeout: cmd.Global.SrvWriteTimeout,
		IdleTimeout:  cmd.Global.SrvIdleTimeout,
	}
	go func() {
		stdlog.Printf("HTTP server is running at %s", addr)
		if cmd.Global.CertFile != "" && cmd.Global.CertKeyFile != "" {
			srv.TLSConfig = &tls.Config{MinVersion: tls.VersionTLS12}
			err = srv.ListenAndServeTLS(cmd.Global.CertFile, cmd.Global.CertKeyFile)
		} else {
			err = srv.ListenAndServe()
		}
		if err != nil && err != http.ErrServerClosed {
			panic(err)
		}
	}()

	return func() {
		ctx, cancel := context.WithTimeout(ctx, time.Second*time.Duration(cmd.Global.ShutdownTimeout))
		defer cancel()
		srv.SetKeepAlivesEnabled(false)
		if err := srv.Shutdown(ctx); err != nil {
			stdlog.Println(err.Error())
		}
	}
}
