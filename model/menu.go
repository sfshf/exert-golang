package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Menu struct {
	*Model   `bson:"inline"`
	Name     *string             `bson:"name,omitempty" json:"name,omitempty" repo:"index:name_route,unique"`
	Seq      *int                `bson:"seq,omitempty" json:"seq,omitempty"`
	Icon     *string             `bson:"icon,omitempty" json:"icon,omitempty"`
	Route    *string             `bson:"route,omitempty" json:"route,omitempty" repo:"index:name_route,unique"`
	Memo     *string             `bson:"memo,omitempty" json:"memo,omitempty"`
	ParentID *primitive.ObjectID `bson:"parentID,omitempty" json:"parentID,omitempty"`
	Show     *bool               `bson:"show,omitempty" json:"show,omitempty"` // true: show; false/nil: hide.
	IsItem   *bool               `bson:"isItem,omitempty" json:"isItem,omitempty"`
}

type MenuWidget struct {
	*Model    `bson:"inline"`
	MenuID    *primitive.ObjectID `bson:"menuID,omitempty" json:"menuID,omitempty"`
	Name      *string             `bson:"name,omitempty" json:"name,omitempty"`
	Seq       *int                `bson:"seq,omitempty" json:"seq,omitempty"`
	Icon      *string             `bson:"icon,omitempty" json:"icon,omitempty"`
	ApiMethod *string             `bson:"apiMethod,omitempty" json:"apiMethod,omitempty"`
	ApiPath   *string             `bson:"apiPath,omitempty" json:"apiPath,omitempty"`
	Memo      *string             `bson:"memo,omitempty" json:"memo,omitempty"`
	Show      *bool               `bson:"show,omitempty" json:"show,omitempty"` // true: show; false/nil: hide.
}
