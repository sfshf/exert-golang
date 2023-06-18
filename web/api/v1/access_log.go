package api

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/util/structure"
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

// AccessLogListResp return of listing access logs.
type AccessLogListResp struct {
	PaginationRet
}

// AccessLogListElem an element of access logs list.
type AccessLogListElem struct {
	ID              *primitive.ObjectID `json:"id,omitempty"`              // ID
	Level           string              `json:"level,omitempty"`           // 日志级别
	Time            primitive.DateTime  `json:"time,omitempty"`            // 访问时间
	ClientIp        string              `json:"clientIp,omitempty"`        // 客户端IP
	Proto           string              `json:"proto,omitempty"`           // 网络协议 -- HTTP/1.0 or HTTP/1.1 ...
	Method          string              `json:"method,omitempty"`          // 请求方法
	Path            string              `json:"path,omitempty"`            // 请求路径
	Queries         string              `json:"queries,omitempty"`         // 查询条件
	RequestHeaders  string              `json:"requestHeaders,omitempty"`  // 请求头部
	RequestBody     string              `json:"requestBody,omitempty"`     // 请求体
	StatusCode      string              `json:"statusCode,omitempty"`      // 响应状态码
	ResponseHeaders string              `json:"responseHeaders,omitempty"` // 响应头部
	ResponseBody    string              `json:"responseBody,omitempty"`    // 响应体
	Latency         string              `json:"latency,omitempty"`         // 请求延迟
	TraceId         string              `json:"traceId,omitempty"`         // 跟踪Id
	SessionId       string              `json:"sessionId,omitempty"`       // 会话Id
	Tag             string              `json:"tag,omitempty"`             // 标签
	Stack           string              `json:"stack,omitempty"`           // 栈信息
	CreatedBy       *primitive.ObjectID `json:"createdBy,omitempty"`       // 创建者
	CreatedAt       primitive.DateTime  `json:"createdAt,omitempty"`       // 创建时间、注册时间
	UpdatedBy       *primitive.ObjectID `json:"updatedBy,omitempty"`       // 更新者
	UpdatedAt       primitive.DateTime  `json:"updatedAt,omitempty"`       // 更新时间
}

// ListAccessLog
// @description get a list of access logs.
// @id access-log-list
// @tags access-log
// @summary get a list of access logs.
// @produce json
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
		JSONWithBadRequest(c, err)
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
		JSONWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.AccessLog](ctx, filter, opt)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	ret := make([]AccessLogListElem, 0, len(res))
	if err = structure.Copy(&ret, res); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &AccessLogListResp{
		PaginationRet{
			List:  ret,
			Total: total,
		},
	})
	return
}
