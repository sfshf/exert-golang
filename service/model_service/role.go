package model_service

import (
	"context"
	"errors"
	"os"

	"github.com/sfshf/exert-golang/repo"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func ImportRolesFromYaml(ctx context.Context, path string, sessionID *primitive.ObjectID) error {
	if path == "" {
		return errors.New("invalid file path")
	}
	// unmarshal menu config file.
	_, err := os.Open(path)
	if err != nil {
		return err
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		return err
	}
	defer session.EndSession(ctx)
	if _, err := session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		return nil, nil
	}); err != nil {
		return err
	}
	return nil
}
