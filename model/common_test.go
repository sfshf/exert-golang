package model_test

import (
	"context"
	"encoding/json"
	"testing"
	"time"

	"github.com/sfshf/exert-golang/model"
)

func TestCopyToModelWithSessionContext(t *testing.T) {
	type TestModel struct {
		model.Model
		FieldString string
		FieldInt    int
	}
	ctx := model.WithSession(context.Background(), model.NewObjectIDPtr(), model.NewDatetime(time.Now()))
	testModel, err := model.CopyToModelWithSessionContext[TestModel](ctx, struct {
		FieldString string
		FieldInt    int
	}{
		FieldString: "fieldString",
		FieldInt:    123,
	}, model.CopyForInsert)
	if err != nil {
		t.Errorf("copy failed: %v\n", err)
	}
	data, err := json.MarshalIndent(testModel, "", "\t")
	if err != nil {
		t.Errorf("json marshal failed: %v\n", err)
	}
	t.Logf("%s\n", data)
}
