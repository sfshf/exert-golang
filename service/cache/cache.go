package cache

import (
	"context"
	"log"
	"time"

	cache "github.com/go-pkgz/expirable-cache/v2"
)

var (
	strAnyCache cache.Cache[string, any]
)

type CacheOption struct {
	IsLRU   bool
	MaxKeys int
	TTL     int
}

func LaunchDefaultWithOption(ctx context.Context, opt CacheOption) (clear func(), err error) {
	strAnyCache = cache.NewCache[string, any]()
	if opt.IsLRU {
		strAnyCache.WithLRU()
	}
	if opt.MaxKeys > 0 {
		strAnyCache.WithMaxKeys(opt.MaxKeys)
	}
	if opt.TTL > 0 {
		strAnyCache.WithTTL(time.Duration(opt.TTL))
		ctx, clear = context.WithCancel(ctx)
		tick := time.Tick(time.Duration(opt.TTL / 2))
		go func() {
			for {
				select {
				case <-tick:
					strAnyCache.DeleteExpired()
				case <-ctx.Done():
					return
				}
			}
		}()
	}
	strAnyCache.WithOnEvicted(func(key string, value interface{}) {
		log.Printf("LocalCache: %s was evicted.\n", key)
	})
	log.Println("Local Cache is on !!!")
	return
}

func StringAnyCache() cache.Cache[string, any] {
	return strAnyCache
}

func StringAnyCacheEnabled() bool {
	return strAnyCache != nil
}
