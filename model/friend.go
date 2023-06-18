package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Friend struct {
	*Model   `bson:"inline"`
	StaffId  *primitive.ObjectID `bson:"staffId" json:"staffId"`
	FriendId *primitive.ObjectID `bson:"friendId" json:"friendId"`
	Memo     *string             `bson:"memo" json:"memo"`
	Status   *int                `bson:"status" json:"status"` // 1: friend, 2: star, 3: defriend, 4: blacklist
}

type FriendApply struct {
	*Model       `bson:"inline"`
	StaffIdFrom  *primitive.ObjectID `bson:"staffIdFrom" json:"staffIdFrom"`
	StaffIdTo    *primitive.ObjectID `bson:"staffIdTo" json:"staffIdTo"`
	ApplyMessage *string             `bson:"applyMessage" json:"applyMessage"`
	ApplyTime    *primitive.DateTime `bson:"applyTime" json:"applyTime"`
	Status       *int                `bson:"status" json:"status"` // 1: pending, 2: approved, 3: rejected
}
