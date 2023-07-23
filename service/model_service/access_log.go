package model_service

import (
	"context"
	"errors"
	"io"
	stdlog "log"
	"os"

	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/util/log"
)

var (
	logger             *log.Logger
	ErrLoggerNotLaunch = errors.New("logger not launch")
)

type LoggerOption struct {
	SkipStdout bool
	LogToMongo bool
	MaxWorkers int
	MaxBuffers int
}

func LaunchDefaultWithOption(ctx context.Context, opt LoggerOption) (clear func(), err error) {
	var writers []io.Writer
	if !opt.SkipStdout {
		writers = append(writers, os.Stdout)
		stdlog.Println("Enable logging to stdout !!!")
	}
	// TODO enable logging to files.
	if opt.LogToMongo {
		var mongodbWriter io.Writer
		mongodbWriter, err = log.MongoWriter(repo.Collection(model.AccessLog{}))
		if err != nil {
			return
		}
		writers = append(writers, mongodbWriter)
		stdlog.Println("Enable logging to MongoDB !!!")
	}
	logger = log.NewLogger(writers...)
	stdlog.Println("Access logger is on!!!")
	return
}

func LoggerEnabled() bool {
	return logger != nil
}

func Logger() *log.Logger {
	return logger
}
