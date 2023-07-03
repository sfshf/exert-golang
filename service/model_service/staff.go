package model_service

import (
	"context"
	"log"
	"time"

	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	rootID *primitive.ObjectID
)

func Root() *primitive.ObjectID {
	return rootID
}

func IsRoot(id interface{}) bool {
	if rootID == nil {
		return false
	}
	switch id.(type) {
	case string:
		return id.(string) == rootID.Hex()
	case primitive.ObjectID:
		return id.(primitive.ObjectID).Hex() == rootID.Hex()
	case *primitive.ObjectID:
		return id.(*primitive.ObjectID).Hex() == rootID.Hex()
	}
	return false
}

// InvokeRootAccount load root account, will insert one if not exist.
func InvokeRootAccount(ctx context.Context, account, password string) error {
	root, err := repo.FindOne[model.Staff](
		ctx,
		bson.M{
			"account": account, // unique index.
		},
		options.FindOne().SetProjection(bson.D{{Key: "_id", Value: 1}}),
	)
	if err != nil {
		if err != mongo.ErrNoDocuments {
			return err
		}
		rootID := model.NewObjectIDPtr()
		ctx = model.WithSession(ctx, rootID, model.NewDatetime(time.Now()))
		salt := model.NewPasswdSaltPtr()
		passwd := model.PasswdPtr(password, *salt)
		root.Model = &model.Model{
			ID:        rootID,
			CreatedBy: rootID,
			CreatedAt: model.NewDatetime(time.Now()),
		}
		root.Account = &account
		root.Password = passwd
		root.PasswordSalt = salt
		_, err = repo.InsertOne(ctx, root)
		if err != nil {
			return err
		}
	}
	rootID = root.ID
	return nil
}

// VerifyAccountAndPassword verify account's password, and return the whole staff model.
func VerifyAccountAndPassword(ctx context.Context, account, password string) (*model.Staff, error) {
	staff, err := repo.FindOne[model.Staff](
		ctx,
		model.FilterEnabled(bson.D{
			{Key: "account", Value: account},
		}),
	)
	if err != nil {
		log.Println(err)
		return nil, err
	}
	if passwd := model.PasswdPtr(
		password,
		*staff.PasswordSalt,
	); *passwd != *staff.Password {
		log.Println(ErrInvalidAccountOrPassword)
		return nil, ErrInvalidAccountOrPassword
	}
	return &staff, nil
}

// SignIn account sign in with some required arguments.
func SignIn(ctx context.Context, clientIp string, token string) error {
	sessionID := model.SessionID(ctx)
	sessionDT := model.SessionDateTime(ctx)
	one := &model.Staff{
		Model: &model.Model{
			ID:        sessionID,
			UpdatedBy: sessionID,
			UpdatedAt: sessionDT,
		},
		SignInToken:    &token,
		LastSignInIp:   &clientIp,
		LastSignInTime: sessionDT,
	}
	if _, err := repo.UpdateOneModelByID(ctx, one.ID, one); err != nil {
		return err
	}
	return nil
}

func SignOut(ctx context.Context) error {
	sessionID := model.SessionID(ctx)
	sessionDateTime := model.SessionDateTime(ctx)
	if _, err := repo.UpdateOneModelByID(ctx, model.SessionID(ctx), &model.Staff{
		Model: &model.Model{
			ID:        sessionID,
			UpdatedBy: sessionID,
			UpdatedAt: sessionDateTime,
		},
		SignInToken:     model.StringPtr(""),
		LastSignOutTime: sessionDateTime,
	}); err != nil {
		return err
	}
	return nil
}
