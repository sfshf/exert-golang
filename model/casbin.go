package model

type Casbin struct {
	*Model `bson:"inline"`
	PType  *string `bson:"pType,omitempty" json:"pType,omitempty" repo:"index:policy,unique"`
	V0     *string `bson:"v0,omitempty" json:"v0,omitempty" repo:"index:policy,unique"`
	V1     *string `bson:"v1,omitempty" json:"v1,omitempty" repo:"index:policy,unique"`
	V2     *string `bson:"v2,omitempty" json:"v2,omitempty" repo:"index:policy,unique"`
	V3     *string `bson:"v3,omitempty" json:"v3,omitempty" repo:"index:policy,unique"`
	V4     *string `bson:"v4,omitempty" json:"v4,omitempty" repo:"index:policy,unique"`
	V5     *string `bson:"v5,omitempty" json:"v5,omitempty" repo:"index:policy,unique"`
}

const (
	PTypeP = "p" // Policy Type -- policy definition.
	PTypeG = "g" // Policy Type -- role or group definition.
)

const (
	PriorityMIN = 1
	PriorityMAX = 31
)
