package config

import (
	"log"
	"time"

	"github.com/sfshf/exert-golang/util/json"
	"github.com/spf13/viper"
)

func init() {
	viper.BindEnv("casbin.model", EnvCasbinModelFile)
	viper.BindEnv("global.originmenufile", EnvOriginMenuFile)
	viper.BindEnv("mongodb.serveruri", EnvMongoUri)
	viper.BindEnv("mongodb.database", EnvMongoDatabase)
	viper.BindEnv("redis.addr", EnvRedisAddress)
	viper.BindEnv("http.host", EnvHttpHost)
	viper.BindEnv("http.certfile", EnvCertFile)
	viper.BindEnv("http.certkeyfile", EnvCertKeyFile)
	viper.AutomaticEnv()
	fpath := viper.GetString(EnvConfigFile)
	if fpath == "" {
		fpath = "config/config.toml"
	}
	viper.SetConfigFile(fpath)
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}
	if err := viper.Unmarshal(&C); err != nil {
		panic(err)
	}
	if C.PrintConfig {
		log.Printf("%s\n", json.MarshalIndent2String(C))
	}
}

var (
	EnvConfigFile      = "GOVERN_CONFIG_FILE"
	EnvCasbinModelFile = "GOVERN_CASBIN_MODEL_FILE"
	EnvOriginMenuFile  = "GOVERN_ORIGIN_MENU_FILE"
	EnvMongoUri        = "GOVERN_MONGO_URI"
	EnvMongoDatabase   = "GOVERN_MONGO_DATABASE"
	EnvRedisAddress    = "GOVERN_REDIS_ADDRESS"
	EnvHttpHost        = "GOVERN_HTTP_HOST"
	EnvCertFile        = "GOVERN_HTTP_CERT_FILE"
	EnvCertKeyFile     = "GOVERN_HTTP_CERT_KEY_FILE"

	C struct {
		RunMode     string
		WWW         string
		Swagger     bool
		PrintConfig bool
		Global      struct {
			AppName          string
			AppIcon          string
			DateFormat       string
			DatetimeFormat   string
			TimeZone         string
			OriginDomainFile string
			OriginMenuFile   string
		}
		MongoDB struct {
			ServerUri string
			Database  string
		}
		Root struct {
			Account  string
			Password string
		}
		ServiceLog struct {
			Enable     bool
			SkipStdout bool
			Log2Mongo  bool
			MaxWorkers int
			MaxBuffers int
		}
		CORS struct {
			Enable           bool
			AllowOrigins     []string
			AllowMethods     []string
			AllowHeaders     []string
			AllowCredentials bool
			MaxAge           time.Duration
		}
		GZIP struct {
			Enable bool
		}
		Cache struct {
			Enable  bool
			IsLRU   bool
			MaxKeys int
			TTL     int
		}
		Redis struct {
			Enable   bool
			Network  string
			Addr     string
			Username string
			Password string
			DB       int
		}
		JWTAuth struct {
			Enable     bool
			SigningKey string
			Expired    int64
			Stored     bool
		}
		Casbin struct {
			Enable           bool
			Debug            bool
			Model            string
			AutoSave         bool
			AutoLoad         bool
			AutoLoadInternal int
		}
		PicCaptcha struct {
			Enable      bool
			Length      int
			Width       int
			Height      int
			MaxSkew     float64
			DotCount    int
			Threshold   int
			Expiration  time.Duration
			RedisStore  bool
			RedisDB     int
			RedisPrefix string
		}
		HTTP struct {
			Host             string
			Port             int
			CertFile         string
			CertKeyFile      string
			ShutdownTimeout  int
			MaxContentLength int
			MaxLoggerLength  int
		}
	}
)
