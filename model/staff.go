package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var (
	PasswdSalt = "sprout:v1:passwd:"
)

type Staff struct {
	*Model            `bson:"inline"`
	Account           *string             `bson:"account,omitempty" json:"account,omitempty" repo:"index:account,unique"` // analogous to the username.
	Password          *string             `bson:"password,omitempty" json:"password,omitempty"`
	PasswordSalt      *string             `bson:"passwordSalt,omitempty" json:"passwordSalt,omitempty"`
	NickName          *string             `bson:"nickName,omitempty" json:"nickName,omitempty"`
	RealName          *string             `bson:"realName,omitempty" json:"realName,omitempty"`
	Email             *string             `bson:"email,omitempty" json:"email,omitempty"`
	Phone             *string             `bson:"phone,omitempty" json:"phone,omitempty"`
	Gender            *string             `bson:"gender,omitempty" json:"gender,omitempty"`
	Avatar            *string             `bson:"avatar,omitempty" json:"avatar,omitempty"`
	SignInIpWhitelist *[]string           `bson:"signInIpWhitelist,omitempty" json:"signInIpWhitelist,omitempty"`
	SignInToken       *string             `bson:"signInToken,omitempty" json:"signInToken,omitempty"`
	LastSignInIp      *string             `bson:"lastSignInIp,omitempty" json:"lastSignInIp,omitempty"`
	LastSignInTime    *primitive.DateTime `bson:"lastSignInTime,omitempty" json:"lastSignInTime,omitempty"`
	LastSignOutTime   *primitive.DateTime `bson:"lastSignOutTime,omitempty" json:"lastSignOutTime,omitempty"`
	Status            *string             `bson:"status,omitempty" json:"status,omitempty"` // online,outline,busy,leisure
}

// Genders.
const (
	MaleGender   = "Male"
	FemaleGender = "Female"
)

// Statuses.
const (
	OnLine  = "ONLINE"
	OffLine = "OFFLINE"
	Busy    = "BUSY"
)
