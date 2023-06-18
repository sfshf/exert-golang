package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Domain struct {
	*Model   `bson:"inline"`
	Name     *string             `bson:"name,omitempty" json:"name,omitempty"`
	Alias    *[]string           `bson:"alias,omitempty" json:"alias,omitempty"`
	Seq      *int                `bson:"seq,omitempty" json:"seq,omitempty"`
	Icon     *string             `bson:"icon,omitempty" json:"icon,omitempty"`
	Memo     *string             `bson:"memo,omitempty" json:"memo,omitempty"`
	ParentID *primitive.ObjectID `bson:"parentID,omitempty" json:"parentID,omitempty"`
}
