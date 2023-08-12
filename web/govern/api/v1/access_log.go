package api

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sfshf/exert-golang/dto"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// ListAccessLog
// @description get a list of access logs.
// @id access-log-list
// @tags access-log
// @summary get a list of access logs.
// @produce protobuf
// @param query query AccessLogListReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} AccessLogListElem "access logs list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /accessLogs [GET]
func ListAccessLog(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.ListAccessLogReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.Level != "" {
		and = append(and, bson.E{Key: "level", Value: req.Level})
	}
	if req.TimeBegin > 0 {
		and = append(and, bson.E{Key: "time", Value: bson.D{{Key: "$gte", Value: primitive.DateTime(req.TimeBegin)}}})
	}
	if req.TimeEnd > 0 {
		and = append(and, bson.E{Key: "time", Value: bson.D{{Key: "$lt", Value: primitive.DateTime(req.TimeEnd)}}})
	}
	if req.ClientIp != "" {
		and = append(and, bson.E{Key: "clientIp", Value: req.ClientIp})
	}
	if req.Path != "" {
		and = append(and, bson.E{Key: "path", Value: req.Path})
	}
	if req.TraceId != "" {
		and = append(and, bson.E{Key: "traceId", Value: req.TraceId})
	}
	if req.SessionId != "" {
		and = append(and, bson.E{Key: "sessionId", Value: req.SessionId})
	}
	if req.Tag != "" {
		and = append(and, bson.E{Key: "tag", Value: req.Tag})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.AccessLog{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PerPage * (req.Page - 1)).
		SetLimit(req.PerPage)
	res, err := repo.FindMany[model.AccessLog](ctx, filter, opt)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ret := make([]*dto.ListAccessLogElem, 0, len(res))
	if err = model.Copy(&ret, res); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.ListAccessLogRet{List: ret, Total: total})
	return
}
