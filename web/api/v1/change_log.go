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

// ChangeLogListReq request parameters to list change-logs.
type ChangeLogListReq struct {
	CollName    *string             `form:"collName" json:"collName" binding:"" label:"集合（表）名"`       // 集合（表）名
	RecordId    *primitive.ObjectID `form:"recordId" json:"recordId" binding:"" label:"记录ID"`         // 记录ID
	OpTimeBegin *int64              `form:"opTimeBegin" json:"opTimeBegin" binding:"" label:"操作时间起始"` // 操作时间起始
	OpTimeEnd   *int64              `form:"opTimeEnd" json:"opTimeEnd" binding:"" label:"操作时间结束"`     // 操作时间结束
	SortBy      SortBy              `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`           // 字段排序条件
	PaginationArg
}

// ChangeLogListElem an element of change logs list.
type ChangeLogListElem struct {
	ID        *primitive.ObjectID      `json:"id,omitempty"`        // ID
	CollName  string                   `json:"collName,omitempty"`  // 集合（表）名
	RecordId  *primitive.ObjectID      `json:"recordId,omitempty"`  // 记录ID
	FieldDiff map[string][]interface{} `json:"fieldDiff,omitempty"` // 记录差异
	CreatedBy *primitive.ObjectID      `json:"createdBy,omitempty"` // 创建者
	CreatedAt primitive.DateTime       `json:"createdAt,omitempty"` // 创建时间、注册时间
	UpdatedBy *primitive.ObjectID      `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt primitive.DateTime       `json:"updatedAt,omitempty"` // 更新时间
}

// ChangeLogListResp return of listing change logs.
type ChangeLogListResp struct {
	PaginationRet
}

// ListChangeLog
// @description get a list of change logs.
// @id change-log-list
// @tags change-log
// @summary get a list of change logs.
// @produce json
// @param query query ChangeLogListReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} ChangeLogListElem "change logs list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /changeLogs [GET]
func ListChangeLog(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req ChangeLogListReq
	if err := c.ShouldBindQuery(&req); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.CollName != nil {
		and = append(and, bson.E{Key: "collName", Value: req.CollName})
	}
	if req.OpTimeBegin != nil {
		and = append(and, bson.E{Key: "createdAt", Value: bson.D{{Key: "$gte", Value: primitive.DateTime(*req.OpTimeBegin)}}})
	}
	if req.OpTimeEnd != nil {
		and = append(and, bson.E{Key: "createdAt", Value: bson.D{{Key: "$lt", Value: primitive.DateTime(*req.OpTimeEnd)}}})
	}
	if req.RecordId != nil {
		and = append(and, bson.E{Key: "recordId", Value: req.RecordId})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.ChangeLog{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.ChangeLog](ctx, filter, opt)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	ret := make([]ChangeLogListElem, 0, len(res))
	if err = structure.Copy(&ret, &res); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &ChangeLogListResp{
		PaginationRet{
			List:  ret,
			Total: total,
		},
	})
	return
}
