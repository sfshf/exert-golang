package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type ChangeLog struct {
	*Model    `bson:"inline"`
	CollName  *string                  `bson:"collName,omitempty" json:"collName,omitempty"`
	RecordId  *primitive.ObjectID      `bson:"recordId,omitempty" json:"recordId,omitempty"`
	FieldDiff map[string][]interface{} `bson:"fieldDiff,omitempty" json:"fieldDiff,omitempty"`
}
