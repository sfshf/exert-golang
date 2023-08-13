package api

import (
	"errors"
	"log"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/sfshf/exert-golang/dto"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/casbin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// AddMenuWidget Add a widget for a specific menu.
func AddMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, errors.New("invalid menu id"))
		return
	}
	var req dto.AddMenuWidgetReq
	if err := c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.MenuWidget](ctx, &req, model.CopyForInsert)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	} else {
		one.MenuID = menuID
	}
	res, err := repo.InsertOne(ctx, one)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithCreated(c, res.InsertedID.(primitive.ObjectID).Hex())
	return
}

// ListMenuWidget Get a widget list of a specific menu.
func ListMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.ListMenuWidgetReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	and := bson.A{bson.D{{Key: "menuID", Value: menuID}}}
	if req.Name != "" {
		and = append(and, bson.D{{Key: "name", Value: req.Name}})
	}
	if req.Deleted {
		and = append(and, bson.D{{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: req.Deleted}}})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.MenuWidget{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PerPage * (req.Page - 1)).
		SetLimit(req.PerPage)
	res, err := repo.FindMany[model.MenuWidget](ctx, filter, opt)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ret := make([]*dto.MenuWidgetListElem, 0, len(res))
	if err = model.Copy(&ret, res); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.ListMenuWidgetRet{List: ret, Total: total})
	return
}

// ProfileMenuWidget Get the profile of a widget.
func ProfileMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widget, err := repo.FindOne[model.MenuWidget](
		ctx,
		bson.D{
			{Key: "_id", Value: widgetID},
			{Key: "menuID", Value: menuID},
		})
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	var ret dto.ProfileMenuWidgetRet
	if err = model.Copy(&ret, &widget); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &ret)
	return
}

// EditMenuWidget Update infos of a widget.
func EditMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.EditMenuWidgetReq
	if err = c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	oldM, err := repo.FindOne[model.MenuWidget](
		ctx,
		model.FilterEnabled(bson.D{
			{Key: "menuID", Value: menuID},
			{Key: "_id", Value: widgetID},
		}),
		options.FindOne().SetProjection(
			bson.D{
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
	)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	newM, err := model.CopyToModelWithSessionContext[model.MenuWidget](ctx, &req, model.CopyForUpdate)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		if _, err = repo.UpdateOneModelByID(sessCtx, widgetID, newM); err != nil {
			return nil, err
		}
		// NOTE: return if the api has not been changed.
		if req.ApiMethod == *oldM.ApiMethod && req.ApiPath == *oldM.ApiPath {
			return nil, nil
		}
		// NOTE: update casbin policies if the api has been changed.
		if _, err = repo.UpdateMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeP},
				{Key: "v2", Value: oldM.ApiPath},
				{Key: "v3", Value: oldM.ApiMethod},
			},
			bson.D{
				{Key: "v2", Value: req.ApiPath},
				{Key: "v3", Value: req.ApiMethod},
			},
		); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.EditMenuWidgetRet{Id: widgetID.Hex()})
	return
}

// EnableMenuWidget Enable a menu-widget.
func EnableMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	if _, err = repo.EnableOne[model.MenuWidget](
		ctx,
		bson.D{
			{Key: "menuID", Value: menuID},
			{Key: "_id", Value: widgetID},
		},
	); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.EnableMenuWidgetRet{Id: widgetID.Hex()})
	return
}

// DisableMenuWidget Disable a menu-widget.
func DisableMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widget, err := repo.FindOne[model.MenuWidget](
		ctx,
		model.FilterEnabled(bson.D{
			{Key: "menuID", Value: menuID},
			{Key: "_id", Value: widgetID},
		}),
		options.FindOne().SetProjection(
			bson.D{
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
	)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// NOTE: need to disable MenuWidget.
		if _, err = repo.DisableOne[model.MenuWidget](
			sessCtx,
			bson.D{
				{Key: "menuID", Value: menuID},
				{Key: "_id", Value: widgetID},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{
				{Key: "widgetID", Value: widgetID},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies, and reload.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeP},
				{Key: "v2", Value: widget.ApiPath},
				{Key: "v3", Value: widget.ApiMethod},
			},
		); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.DisableMenuWidgetRet{Id: widgetID.Hex()})
	return
}

// RemoveMenuWidget Remove the menu-widget forever, not soft-deletion.
func RemoveMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widget, err := repo.FindOne[model.MenuWidget](
		ctx,
		model.FilterEnabled(bson.D{
			{Key: "menuID", Value: menuID},
			{Key: "_id", Value: widgetID},
		}),
		options.FindOne().SetProjection(
			bson.D{
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
	)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// NOTE: need to remove MenuWidget.
		if _, err = repo.DeleteOne[model.MenuWidget](
			sessCtx,
			bson.D{
				{Key: "menuID", Value: menuID},
				{Key: "_id", Value: widgetID},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{
				{Key: "widgetID", Value: widgetID},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies, and reload.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeP},
				{Key: "v2", Value: widget.ApiPath},
				{Key: "v3", Value: widget.ApiMethod},
			},
		); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithNoContent(c, nil)
	return
}
