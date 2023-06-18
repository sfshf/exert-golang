package repo

import (
	"context"

	"github.com/sfshf/exert-golang/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/x/bsonx"
)

func ProjectRoleIDsByMenuID(ctx context.Context, menuID *primitive.ObjectID, enabled *bool) ([]primitive.ObjectID, error) {
	filter := bson.M{"menuID": menuID}
	if enabled != nil {
		filter["enable"] = enabled
	}
	res, err := ProjectMany(
		ctx,
		func(m model.RelationRoleMenu) primitive.ObjectID {
			return *m.RoleID
		},
		filter,
		options.Find().SetProjection(bson.M{
			"roleID": bsonx.Int32(1),
			"_id":    bsonx.Int32(0),
		}),
	)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func ProjectMenuIDsByRoleID(ctx context.Context, roleID *primitive.ObjectID, enabled *bool) ([]primitive.ObjectID, error) {
	filter := bson.M{"roleID": roleID}
	if enabled != nil {
		filter["enable"] = enabled
	}
	res, err := ProjectMany(
		ctx,
		func(m model.RelationRoleMenu) primitive.ObjectID {
			return *m.MenuID
		},
		filter,
		options.Find().SetProjection(bson.M{
			"menuID": bsonx.Int32(-1),
			"_id":    bsonx.Int32(0),
		}),
	)
	if err != nil {
		return nil, err
	}
	return res, nil
}
