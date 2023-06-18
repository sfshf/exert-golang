package model_service

import (
	"context"
	"errors"
	"os"
	"time"

	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"gopkg.in/yaml.v3"
)

type DomainView struct {
	Id       string       `yaml:"-" json:"-"`
	Name     string       `yaml:"name,omitempty" json:"name,omitempty"`
	Alias    []string     `yaml:"alias,omitempty" json:"alias,omitempty"`
	Seq      int          `yaml:"seq,omitempty" json:"seq,omitempty"`
	Icon     string       `yaml:"icon,omitempty" json:"icon,omitempty"`
	Memo     string       `yaml:"memo,omitempty" json:"memo,omitempty"`
	Enable   bool         `yaml:"enable,omitempty" json:"enable,omitempty"`
	Children []DomainView `yaml:"children,omitempty" json:"children,omitempty"`
}

func ImportDomainsFromYaml(ctx context.Context, path string, sessionID *primitive.ObjectID) error {
	if path == "" {
		return errors.New("invalid file path")
	}
	// unmarshal domain config file.
	f, err := os.Open(path)
	if err != nil {
		return err
	}
	var originDomains []DomainView
	if err := yaml.NewDecoder(f).Decode(&originDomains); err != nil {
		return err
	}
	modelDomains, err := ConvertToDomainModels(rootID, originDomains, nil)
	if err != nil {
		return err
	}
	ctx = model.WithSession(ctx, sessionID, model.NewDatetime(time.Now()))
	session, err := repo.Client().StartSession()
	if err != nil {
		return err
	}
	defer session.EndSession(ctx)
	if _, err := session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		if _, err = repo.InsertMany(sessCtx, modelDomains); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		return err
	}
	return nil
}

func ConvertToDomainModels(rootID *primitive.ObjectID, domainViews []DomainView, parentID *primitive.ObjectID) ([]model.Domain, error) {
	domainModels := make([]model.Domain, 0)
	for i := 0; i < len(domainViews); i++ {
		one := model.Domain{
			Model: &model.Model{
				ID:        model.NewObjectIDPtr(),
				CreatedAt: model.NewDatetime(time.Now()),
				CreatedBy: rootID,
			},
			Name:     &domainViews[i].Name,
			Alias:    &domainViews[i].Alias,
			Seq:      &domainViews[i].Seq,
			Icon:     &domainViews[i].Icon,
			Memo:     &domainViews[i].Memo,
			ParentID: parentID,
		}
		if len(domainViews[i].Children) > 0 {
			children, err := ConvertToDomainModels(rootID, domainViews[i].Children, one.ID)
			if err != nil {
				return nil, err
			}
			domainModels = append(domainModels, children...)
		}
		domainModels = append(domainModels, one)
	}
	return domainModels, nil
}
