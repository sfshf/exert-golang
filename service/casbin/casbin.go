package casbin

import (
	"context"
	"log"
	"time"

	"github.com/casbin/casbin/v3"
	"github.com/casbin/casbin/v3/model"
	"github.com/sfshf/exert-golang/repo"
)

var (
	casbinEnforcer *casbin.Enforcer
)

type CasbinOption struct {
	Debug            bool
	Model            string
	AutoSave         bool
	AutoLoad         bool
	AutoLoadInternal int
}

func LaunchDefaultWithOption(ctx context.Context, opt CasbinOption) (clear func(), err error) {
	m, err := model.NewModelFromFile(opt.Model)
	if err != nil {
		log.Println(err)
		return
	}
	casbinEnforcer, err = casbin.NewEnforcer(m, repo.CasbinAdapter(ctx))
	if err != nil {
		log.Println(err)
		return
	}
	casbinEnforcer.EnableLog(opt.Debug)
	if opt.AutoLoad {
		casbinEnforcer.StartAutoLoadPolicy(time.Second * time.Duration(opt.AutoLoadInternal))
	}
	casbinEnforcer.EnableAutoSave(opt.AutoSave)
	casbinEnforcer.EnableEnforce(true)
	if err = CasbinEnforcerWithContext(ctx).LoadPolicy(); err != nil {
		log.Println(err)
		return
	}
	log.Println("Authority enforcer is on!!!")
	return func() {
		casbinEnforcer.SavePolicy()
	}, nil
}

func CasbinEnforcerEnabled() bool {
	return casbinEnforcer != nil
}

func CasbinEnforcer() *casbin.Enforcer {
	return casbinEnforcer
}

func CasbinEnforcerWithContext(ctx context.Context) *casbin.Enforcer {
	// TODO need to check data race.
	enforcer := new(casbin.Enforcer)
	*enforcer = *casbinEnforcer
	enforcer.SetAdapter(repo.CasbinAdapter(ctx))
	return enforcer
}

func GetDomainsBySubject(subject string) []string {
	// reference to https://casbin.org/docs/rbac-with-domains
	// policy rule: g = _, _, _
	policies := CasbinEnforcer().GetFilteredGroupingPolicy(0, subject)
	var domainIds []string
	for _, policy := range policies {
		if policy[1] == subject {
			domainIds = append(domainIds, policy[3])
		}
	}
	return domainIds
}
