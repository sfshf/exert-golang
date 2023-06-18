package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Role struct {
	*Model `bson:"inline"`
	Name   *string   `bson:"name,omitempty" json:"name,omitempty" repo:"index:name,unique"`
	Alias  *[]string `bson:"alias,omitempty" json:"alias,omitempty"`
	Seq    *int      `bson:"seq,omitempty" json:"seq,omitempty"`
	Icon   *string   `bson:"icon,omitempty" json:"icon,omitempty"`
	Memo   *string   `bson:"memo,omitempty" json:"memo,omitempty"`
}

type RelationRoleMenu struct {
	*Model `bson:"inline"`
	RoleID *primitive.ObjectID `bson:"roleID,omitempty" json:"roleID,omitempty"`
	MenuID *primitive.ObjectID `bson:"menuID,omitempty" json:"menuID,omitempty"`
}

type RelationRoleMenuWidget struct {
	*Model   `bson:"inline"`
	RoleID   *primitive.ObjectID `bson:"roleID,omitempty" json:"roleID,omitempty"`
	WidgetID *primitive.ObjectID `bson:"widgetID,omitempty" json:"widgetID,omitempty"`
}
