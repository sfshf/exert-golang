package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type ChatMessage struct {
	*Model         `bson:"inline"`
	StaffIdFrom    *primitive.ObjectID `bson:"staffIdFrom" json:"staffIdFrom"`
	StaffIdTo      *primitive.ObjectID `bson:"staffIdTo" json:"staffIdTo"`
	MessageContent *[]byte             `bson:"messageContent" json:"messageContent"`
	MessageType    *int                `bson:"messageType" json:"messageType"` // 1: text, 2: image, 3: audio, 4: video
}
