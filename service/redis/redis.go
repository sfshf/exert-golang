package redis

import (
	"context"
	"log"

	"github.com/go-redis/redis/v8"
)

var (
	redisCli *redis.Client
)

type RedisOption struct {
	Network  string
	Addr     string
	Username string
	Password string
	DB       int
}

func LaunchDefaultWithOption(ctx context.Context, opt RedisOption) (clear func(), err error) {
	redisCli = redis.NewClient(&redis.Options{
		Network:  opt.Network,
		Addr:     opt.Addr,
		Username: opt.Username,
		Password: opt.Password,
		DB:       opt.DB,
	})
	if _, err := redisCli.Ping(ctx).Result(); err != nil {
		return nil, err
	}
	log.Println("Redis Cache is on !!!")
	return func() {
		redisCli.Close()
	}, nil
}

func RedisClientEnabled() bool {
	return redisCli != nil
}

func RedisClient() *redis.Client {
	return redisCli
}
