package captcha

import (
	"context"
	"log"
	"time"

	b64Captcha "github.com/mojocn/base64Captcha"
)

var (
	picCaptcha *b64Captcha.Captcha
)

type CaptchaOption struct {
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

func LaunchDefaultWithOption(ctx context.Context, opt CaptchaOption) (clear func(), err error) {
	driver := b64Captcha.NewDriverDigit(opt.Height, opt.Width, opt.Length, opt.MaxSkew, opt.DotCount)
	var store b64Captcha.Store
	if opt.RedisStore {
		// TODO Redis store. Here maybe have clear function.
	} else {
		store = b64Captcha.NewMemoryStore(opt.Threshold, opt.Expiration)
	}
	picCaptcha = b64Captcha.NewCaptcha(driver, store)
	log.Println("Picture Captcha is on!!!")
	return clear, nil
}

func PicCaptchaEnabled() bool {
	return picCaptcha != nil
}

func PicCaptcha() *b64Captcha.Captcha {
	return picCaptcha
}

func VerifyPictureCaptcha(id string, answer string) bool {
	if !PicCaptchaEnabled() {
		return true
	}
	if id == "" || answer == "" {
		return false
	}
	return PicCaptcha().Verify(id, answer, true)
}
