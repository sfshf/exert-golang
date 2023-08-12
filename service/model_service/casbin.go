package model_service

import (
	"context"
	"log"

	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/casbin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetDomainIDsOfStaff(ctx context.Context, staffID *primitive.ObjectID) ([]*primitive.ObjectID, error) {
	policies := casbin.CasbinEnforcer().GetFilteredGroupingPolicy(0, staffID.Hex())
	var domainIDs []*primitive.ObjectID
	for _, policy := range policies {
		domainID, err := model.ObjectIDPtrFromHex(policy[2])
		if err != nil {
			log.Println(err)
			return nil, err
		}
		domainIDs = append(domainIDs, domainID)
	}
	return domainIDs, nil
}

func GetDomainIDsOfStaffFromDB(ctx context.Context, staffID *primitive.ObjectID) ([]*primitive.ObjectID, error) {
	domainIds, err := repo.Collection(model.Casbin{}).
		Distinct(ctx, "v2", model.FilterEnabled(bson.D{
			{Key: "pType", Value: model.PTypeG},
			{Key: "v0", Value: staffID.Hex()},
		}))
	if err != nil {
		return nil, err
	}
	var domainIDs []*primitive.ObjectID
	for _, v := range domainIds {
		roleID, err := model.ObjectIDPtrFromHex(v.(string))
		if err != nil {
			return nil, err
		}
		domainIDs = append(domainIDs, roleID)
	}
	return domainIDs, nil
}

func GetRoleIDsOfStaffInDomain(ctx context.Context, domainID, staffID *primitive.ObjectID) ([]*primitive.ObjectID, error) {
	roleIds := casbin.CasbinEnforcer().GetRolesForUserInDomain(staffID.Hex(), domainID.Hex())
	var roleIDs []*primitive.ObjectID
	for _, v := range roleIds {
		roleID, err := model.ObjectIDPtrFromHex(v)
		if err != nil {
			log.Println(err)
			return nil, err
		}
		roleIDs = append(roleIDs, roleID)
	}
	return roleIDs, nil
}

func GetRoleIDsOfStaffInDomainFromDB(ctx context.Context, domainID, staffID *primitive.ObjectID) ([]*primitive.ObjectID, error) {
	roleIds, err := repo.Collection(model.Casbin{}).
		Distinct(ctx, "v1", model.FilterEnabled(bson.D{
			{Key: "pType", Value: model.PTypeG},
			{Key: "v0", Value: staffID.Hex()},
			{Key: "v2", Value: domainID.Hex()},
		}))
	if err != nil {
		return nil, err
	}
	var roleIDs []*primitive.ObjectID
	for _, v := range roleIds {
		roleID, err := model.ObjectIDPtrFromHex(v.(string))
		if err != nil {
			return nil, err
		}
		roleIDs = append(roleIDs, roleID)
	}
	return roleIDs, nil
}
