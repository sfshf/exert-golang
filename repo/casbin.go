package repo

import (
	"context"
	"fmt"

	casbinModel "github.com/casbin/casbin/v3/model"
	"github.com/casbin/casbin/v3/persist"
	"github.com/sfshf/exert-golang/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func CasbinRepo() *mongo.Collection {
	return Collection(model.Casbin{})
}

var _ persist.Adapter = (Adapter)(nil)
var _ persist.BatchAdapter = (Adapter)(nil)

// A implementation of Adapter, BatchAdapter, FilteredAdapter interfaces of github.com/casbin/casbin/v3/persist package.
type Adapter func() *mongo.Collection

func loadPolicyLine(line *model.Casbin, m casbinModel.Model) {
	var p string
	if line.PType != nil && line.V0 != nil {
		p += *line.PType + ", " + *line.V0
	} else {
		return
	}
	if line.V1 != nil {
		p += ", " + *line.V1
	}
	if line.V2 != nil {
		p += ", " + *line.V2
	}
	if line.V3 != nil {
		p += ", " + *line.V3
	}
	if line.V4 != nil {
		p += ", " + *line.V4
	}
	if line.V5 != nil {
		p += ", " + *line.V5
	}
	persist.LoadPolicyLine(p, m)
}

func lineToModel(pType string, rule []string) *model.Casbin {
	m := &model.Casbin{
		PType: model.StringPtr(pType),
	}
	if len(rule) > 0 {
		m.V0 = &rule[0]
	}
	if len(rule) > 1 {
		m.V1 = &rule[1]
	}
	if len(rule) > 2 {
		m.V2 = &rule[2]
	}
	if len(rule) > 3 {
		m.V3 = &rule[3]
	}
	if len(rule) > 4 {
		m.V4 = &rule[4]
	}
	if len(rule) > 5 {
		m.V5 = &rule[5]
	}
	return m
}

func lineToBsonD(pType string, rule []string) bson.D {
	m := make(bson.D, 0, 6)
	m = append(m, bson.E{Key: "pType", Value: pType})
	if len(rule) > 0 {
		m = append(m, bson.E{Key: "v0", Value: rule[0]})
	}
	if len(rule) > 1 {
		m = append(m, bson.E{Key: "v1", Value: rule[1]})
	}
	if len(rule) > 2 {
		m = append(m, bson.E{Key: "v2", Value: rule[2]})
	}
	if len(rule) > 3 {
		m = append(m, bson.E{Key: "v3", Value: rule[3]})
	}
	if len(rule) > 4 {
		m = append(m, bson.E{Key: "v4", Value: rule[4]})
	}
	if len(rule) > 5 {
		m = append(m, bson.E{Key: "v5", Value: rule[5]})
	}
	return m
}

// LoadPolicy loads all policy rules from the storage.
func (a Adapter) LoadPolicy(m casbinModel.Model) error {
	ctx := context.Background()
	// load enabled policies.
	cursor, err := a().Find(ctx, model.FilterEnabled(bson.D{}))
	if err != nil {
		return err
	}
	var p model.Casbin
	for cursor.Next(ctx) {
		if err := cursor.Decode(&p); err != nil {
			return err
		}
		loadPolicyLine(&p, m)
	}
	if err := cursor.Err(); err != nil {
		return err
	}
	return cursor.Close(ctx)
}

// SavePolicy saves all policy rules to the storage.
func (a Adapter) SavePolicy(m casbinModel.Model) error {
	ctx := context.Background()
	if err := a().Drop(ctx); err != nil {
		return err
	}
	var ms []interface{}
	for pType, ast := range m[model.PTypeP] {
		for _, rule := range ast.Policy {
			m := lineToModel(pType, rule)
			ms = append(ms, m)
		}
	}
	for pType, ast := range m[model.PTypeG] {
		for _, rule := range ast.Policy {
			m := lineToModel(pType, rule)
			ms = append(ms, m)
		}
	}
	if _, err := a().InsertMany(ctx, ms); err != nil {
		return err
	}
	return nil
}

// AddPolicy adds a policy rule to the storage.
// This is part of the Auto-Save feature.
func (a Adapter) AddPolicy(sec string, pType string, rule []string) error {
	ctx := context.Background()
	m := lineToModel(pType, rule)
	if _, err := a().InsertOne(ctx, m); err != nil {
		return err
	}
	return nil
}

// RemovePolicy removes a policy rule from the storage.
// This is part of the Auto-Save feature.
func (a Adapter) RemovePolicy(sec string, pType string, rule []string) error {
	ctx := context.Background()
	line := lineToBsonD(pType, rule)
	if _, err := a().DeleteOne(ctx, line); err != nil {
		return err
	}
	return nil
}

// RemoveFilteredPolicy removes policy rules that match the filter from the storage.
// This is part of the Auto-Save feature.
func (a Adapter) RemoveFilteredPolicy(sec string, pType string, fieldIndex int, fieldValues ...string) error {
	ctx := context.Background()
	if len(fieldValues) > 0 {
		field := fmt.Sprintf("v%d", fieldIndex)
		filter := bson.D{
			{Key: "pType", Value: pType},
			{Key: field, Value: fieldValues[0]},
		}
		_, err := a().DeleteMany(ctx, filter)
		return err
	}
	return nil
}

// AddPolicies adds policy rules to the storage.
// This is part of the Auto-Save feature.
func (a Adapter) AddPolicies(sec string, pType string, rules [][]string) error {
	ctx := context.Background()
	var ms []interface{}
	for _, rule := range rules {
		m := lineToModel(pType, rule)
		ms = append(ms, m)
	}
	if _, err := a().InsertMany(ctx, ms); err != nil {
		return err
	}
	return nil
}

// RemovePolicies removes policy rules from the storage.
// This is part of the Auto-Save feature.
func (a Adapter) RemovePolicies(sec string, pType string, rules [][]string) error {
	ctx := context.Background()
	for _, rule := range rules {
		line := lineToBsonD(pType, rule)
		if _, err := a().DeleteOne(ctx, line); err != nil {
			return err
		}
	}
	return nil
}
