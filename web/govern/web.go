package govern

import (
	"context"
	stdlog "log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/go-playground/validator/v10"
	"github.com/sfshf/exert-golang/web/govern/api/v1"
)

type Config struct {
	ApiConfig api.Config
	RunMode   string
}

func NewHandler(ctx context.Context, conf Config) (http.Handler, error) {
	gin.SetMode(conf.RunMode)
	router := gin.New()
	// Customize validation.
	if validate, ok := binding.Validator.Engine().(*validator.Validate); ok {
		if err := validate.RegisterValidationCtx(
			"custom_example",
			func(ctx context.Context, fl validator.FieldLevel) bool {
				return true
			},
			true); err != nil {
			return router, err
		}
	}
	api.RegisterAPIs(ctx, router, conf.ApiConfig)
	stdlog.Println("Gin Router is on!!!")
	return router, nil
}
