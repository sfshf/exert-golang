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

// AccessLogListReq request parameters to list access-logs.
type AccessLogListReq struct {
	Level     *string `form:"level" json:"level" binding:"" label:"日志级别"`           // 日志级别
	TimeBegin *int64  `form:"timeBegin" json:"timeBegin" binding:"" label:"访问时间起始"` // 访问时间起始
	TimeEnd   *int64  `form:"timeEnd" json:"timeEnd" binding:"" label:"访问时间结束"`     // 访问时间结束
	ClientIp  *string `form:"clientIp" json:"clientIp" binding:"" label:"客户端IP"`    // 客户端IP
	Path      *string `form:"path" json:"path" binding:"" label:"请求路径"`             // 请求路径
	TraceId   *string `form:"traceId" json:"traceId" binding:"" label:"跟踪Id"`       // 跟踪Id
	SessionId *string `form:"sessionId" json:"sessionId" binding:"" label:"会话Id"`   // 会话Id
	Tag       *string `form:"tag" json:"tag" binding:"" label:"标签"`                 // 标签
	SortBy    SortBy  `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`       // 字段排序条件
	PaginationArg
}

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
	var req AccessLogListReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.Level != nil {
		and = append(and, bson.E{Key: "level", Value: req.Level})
	}
	if req.TimeBegin != nil {
		and = append(and, bson.E{Key: "time", Value: bson.D{{Key: "$gte", Value: primitive.DateTime(*req.TimeBegin)}}})
	}
	if req.TimeEnd != nil {
		and = append(and, bson.E{Key: "time", Value: bson.D{{Key: "$lt", Value: primitive.DateTime(*req.TimeEnd)}}})
	}
	if req.ClientIp != nil {
		and = append(and, bson.E{Key: "clientIp", Value: req.ClientIp})
	}
	if req.Path != nil {
		and = append(and, bson.E{Key: "path", Value: req.Path})
	}
	if req.TraceId != nil {
		and = append(and, bson.E{Key: "traceId", Value: req.TraceId})
	}
	if req.SessionId != nil {
		and = append(and, bson.E{Key: "sessionId", Value: req.SessionId})
	}
	if req.Tag != nil {
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
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
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
