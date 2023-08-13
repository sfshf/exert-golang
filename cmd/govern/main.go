package main

import (
	_ "expvar"
	_ "net/http/pprof"

	"github.com/alecthomas/kong"
)

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
