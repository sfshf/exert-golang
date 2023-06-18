package main

//go:generate swag init --pd

import (
	"context"
	"crypto/tls"
	_ "expvar"
	"fmt"
	"log"
	stdlog "log"
	"net/http"
	_ "net/http/pprof"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/sfshf/exert-golang/config"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/cache"
	"github.com/sfshf/exert-golang/service/captcha"
	"github.com/sfshf/exert-golang/service/casbin"
	service_log "github.com/sfshf/exert-golang/service/log"
	"github.com/sfshf/exert-golang/service/model_service"
	"github.com/sfshf/exert-golang/service/redis"
	"github.com/sfshf/exert-golang/web"
	"github.com/sfshf/exert-golang/web/api/v1"
	"github.com/urfave/cli/v3"
	"go.mongodb.org/mongo-driver/mongo"
)

// @title Govern APIs
// @version 0.0.1-beta
// @description This is a back-end government app.
// @termsOfService http://swagger.io/terms/

// @contact.name gavin
// @contact.url http://github.com/sfshf
// @contact.email sfshf@github.com

// @license.name MIT
// @license.url https://github.com/sfshf/sprout/blob/main/LICENSE

// @host localhost:8000
// @basePath /api/v1
// @query.collection.format multi

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization
func main() {
	app := &cli.App{
		Name:  "govern",
		Usage: "",
		Action: func(cliCtx *cli.Context) error {
			state := 1
			sc := make(chan os.Signal, 1)
			signal.Notify(sc, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM, syscall.SIGQUIT)
			// init repos.
			clear, err := repo.InitRepo(cliCtx.Context, config.C.MongoDB.ServerUri, config.C.MongoDB.Database)
			if err != nil {
				panic(err)
			}
			defer clear()
			// launch services.
			// cache service.
			if config.C.Cache.Enable {
				clear, err = cache.LaunchDefaultWithOption(cliCtx.Context, cache.CacheOption{
					IsLRU:   config.C.Cache.IsLRU,
					MaxKeys: config.C.Cache.MaxKeys,
					TTL:     config.C.Cache.TTL,
				})
				if err != nil {
					panic(err)
				}
				defer clear()
			}
			// captcha service.
			if config.C.PicCaptcha.Enable {
				clear, err = captcha.LaunchDefaultWithOption(cliCtx.Context, captcha.CaptchaOption{
					Length:      config.C.PicCaptcha.Length,
					Width:       config.C.PicCaptcha.Width,
					Height:      config.C.PicCaptcha.Height,
					MaxSkew:     config.C.PicCaptcha.MaxSkew,
					DotCount:    config.C.PicCaptcha.DotCount,
					Threshold:   config.C.PicCaptcha.Threshold,
					Expiration:  config.C.PicCaptcha.Expiration,
					RedisStore:  config.C.PicCaptcha.RedisStore,
					RedisDB:     config.C.PicCaptcha.RedisDB,
					RedisPrefix: config.C.PicCaptcha.RedisPrefix,
				})
				if err != nil {
					panic(err)
				}
				defer clear()
			}
			// casbin service.
			if config.C.Casbin.Enable {
				clear, err = casbin.LaunchDefaultWithOption(cliCtx.Context, casbin.CasbinOption{
					Debug:            config.C.Casbin.Debug,
					Model:            config.C.Casbin.Model,
					AutoSave:         config.C.Casbin.AutoSave,
					AutoLoad:         config.C.Casbin.AutoLoad,
					AutoLoadInternal: config.C.Casbin.AutoLoadInternal,
				})
				if err != nil {
					panic(err)
				}
				defer clear()
			}
			// log service.
			if config.C.ServiceLog.Enable {
				clear, err = service_log.LaunchDefaultWithOption(cliCtx.Context, service_log.LoggerOption{
					SkipStdout: config.C.ServiceLog.SkipStdout,
					Log2Mongo:  config.C.ServiceLog.Log2Mongo,
					MaxWorkers: config.C.ServiceLog.MaxWorkers,
					MaxBuffers: config.C.ServiceLog.MaxBuffers,
				})
				if err != nil {
					panic(err)
				}
				defer clear()
			}
			// model services.
			// staff service.
			if config.C.Root.Account != "" && config.C.Root.Password != "" {
				if err = model_service.InvokeRootAccount(
					cliCtx.Context,
					config.C.Root.Account,
					config.C.Root.Password,
				); err != nil {
					panic(err)
				}
			}
			// domain service.
			if config.C.Global.OriginDomainFile != "" {
				// if err = model_service.ImportDomainsFromYaml(
				// 	cliCtx.Context,
				// 	config.C.Global.OriginDomainFile,
				// 	model_service.Root(),
				// ); err != nil {
				// 	panic(err)
				// }
			}
			// menu service.
			if config.C.Global.OriginMenuFile != "" {
				if err = model_service.ImportMenuWidgetsFromYaml(
					cliCtx.Context,
					config.C.Global.OriginMenuFile,
					model_service.Root(),
				); err != nil {
					if !mongo.IsDuplicateKeyError(err) {
						panic(err)
					}
				}
			}
			// redis service.
			if config.C.Redis.Enable {
				clear, err = redis.LaunchDefaultWithOption(cliCtx.Context, redis.RedisOption{
					Network:  config.C.Redis.Network,
					Addr:     config.C.Redis.Addr,
					Username: config.C.Redis.Username,
					Password: config.C.Redis.Password,
					DB:       config.C.Redis.DB,
				})
				if err != nil {
					panic(err)
				}
				defer clear()
			}
			// launch http server.
			cancel := RunHTTPServer(cliCtx.Context)
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
			time.Sleep(time.Second)
			os.Exit(state)
			return nil
		},
	}
	app.Run(os.Args)
}

// RunHTTPServer run the http server.
func RunHTTPServer(ctx context.Context) func() {
	webHandler, err := web.NewHandler(ctx, web.Config{
		RunMode: config.C.RunMode,
		ApiConfig: api.Config{
			Swagger: config.C.Swagger,
			CORS: struct {
				Enable           bool
				AllowOrigins     []string
				AllowMethods     []string
				AllowHeaders     []string
				AllowCredentials bool
				MaxAge           time.Duration
			}{
				Enable:           config.C.CORS.Enable,
				AllowOrigins:     config.C.CORS.AllowOrigins,
				AllowMethods:     config.C.CORS.AllowMethods,
				AllowHeaders:     config.C.CORS.AllowHeaders,
				AllowCredentials: config.C.CORS.AllowCredentials,
				MaxAge:           config.C.CORS.MaxAge,
			},
			GZIP: struct {
				Enable bool
			}{
				Enable: config.C.GZIP.Enable,
			},
			JWTAuth: struct {
				Enable     bool
				SigningKey string
				Expired    int64
				Stored     bool
			}{
				Enable:     config.C.JWTAuth.Enable,
				SigningKey: config.C.JWTAuth.SigningKey,
				Expired:    config.C.JWTAuth.Expired,
				Stored:     config.C.JWTAuth.Stored,
			},
		},
	})
	if err != nil {
		panic(err)
	}
	addr := fmt.Sprintf("%s:%d", config.C.HTTP.Host, config.C.HTTP.Port)
	srv := &http.Server{
		Addr:         addr,
		Handler:      webHandler,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  15 * time.Second,
	}
	go func() {
		log.Printf("HTTP server is running at %s", addr)
		if config.C.HTTP.CertFile != "" && config.C.HTTP.CertKeyFile != "" {
			srv.TLSConfig = &tls.Config{MinVersion: tls.VersionTLS12}
			err = srv.ListenAndServeTLS(config.C.HTTP.CertFile, config.C.HTTP.CertKeyFile)
		} else {
			err = srv.ListenAndServe()
		}
		if err != nil && err != http.ErrServerClosed {
			panic(err)
		}
	}()

	return func() {
		ctx, cancel := context.WithTimeout(ctx, time.Second*time.Duration(config.C.HTTP.ShutdownTimeout))
		defer cancel()
		srv.SetKeepAlivesEnabled(false)
		if err := srv.Shutdown(ctx); err != nil {
			log.Println(err.Error())
		}
	}
}
