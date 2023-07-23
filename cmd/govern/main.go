package main

//go:generate swag init --pd

import (
	_ "expvar"
	_ "net/http/pprof"

	"github.com/alecthomas/kong"
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
	var config GovernCmd
	kCtx := kong.Parse(&config)
	switch kCtx.Command() {
	case "version":
		panic(kCtx.Run(&config.VerCmd))
	case "websrv":
		panic(kCtx.Run(&config.WebSrvCmd))
	default:
		panic(kCtx.Command())
	}
}
