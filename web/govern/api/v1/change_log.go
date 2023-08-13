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

// ListChangeLog get a list of change logs.
func ListChangeLog(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.ListChangeLogReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.CollName != "" {
		and = append(and, bson.E{Key: "collName", Value: req.CollName})
	}
	if req.OpTimeBegin > 0 {
		and = append(and, bson.E{Key: "createdAt", Value: bson.D{{Key: "$gte", Value: primitive.DateTime(req.OpTimeBegin)}}})
	}
	if req.OpTimeEnd > 0 {
		and = append(and, bson.E{Key: "createdAt", Value: bson.D{{Key: "$lt", Value: primitive.DateTime(req.OpTimeEnd)}}})
	}
	if req.RecordId != "" {
		and = append(and, bson.E{Key: "recordId", Value: req.RecordId})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.ChangeLog{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PerPage * (req.Page - 1)).
		SetLimit(req.PerPage)
	res, err := repo.FindMany[model.ChangeLog](ctx, filter, opt)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ret := make([]*dto.ListChangeLogElem, 0, len(res))
	if err = model.Copy(&ret, &res); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.ListChangeLogRet{List: ret, Total: total})
	return
}
