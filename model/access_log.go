package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type AccessLog struct {
	*Model          `bson:"inline"`
	Level           *string             `bson:"level,omitempty" json:"level,omitempty"`
	Time            *primitive.DateTime `bson:"time,omitempty" json:"time,omitempty"`
	ClientIp        *string             `bson:"clientIp,omitempty" json:"clientIp,omitempty"`
	Proto           *string             `bson:"proto,omitempty" json:"proto,omitempty"`
	Method          *string             `bson:"method,omitempty" json:"method,omitempty"`
	Path            *string             `bson:"path,omitempty" json:"path,omitempty"`
	Queries         *string             `bson:"queries,omitempty" json:"queries,omitempty"`
	RequestHeaders  *string             `bson:"requestHeaders,omitempty" json:"requestHeaders,omitempty"`
	RequestBody     *string             `bson:"requestBody,omitempty" json:"requestBody,omitempty"`
	StatusCode      *string             `bson:"statusCode,omitempty" json:"statusCode,omitempty"`
	ResponseHeaders *string             `bson:"responseHeaders,omitempty" json:"responseHeaders,omitempty"`
	ResponseBody    *string             `bson:"responseBody,omitempty" json:"responseBody,omitempty"`
	Latency         *string             `bson:"latency,omitempty" json:"latency,omitempty"`
	TraceId         *string             `bson:"traceId,omitempty" json:"traceId,omitempty"`
	SessionId       *string             `bson:"sessionId,omitempty" json:"sessionId,omitempty"`
	Tag             *string             `bson:"tag,omitempty" json:"tag,omitempty"`
	Stack           *string             `bson:"stack,omitempty" json:"stack,omitempty"`
}

/*
	VersionKey = "version"
	TraceIDKey = "trace_id"
	UserIDKey  = "user_id"
	TagKey     = "tag"
	StackKey   = "stack"
*/
