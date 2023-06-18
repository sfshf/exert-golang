package api

import (
	"errors"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/casbin"
	"github.com/sfshf/exert-golang/util/structure"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// AddMenuWidgetReq arguments to add a menu-widget.
type AddMenuWidgetReq struct {
	Name      *string `form:"name" json:"name" binding:"required" label:"名称"`                      // 名称
	Seq       *int    `form:"seq" json:"seq" binding:"required" label:"序号"`                        // 序号
	Icon      *string `form:"icon" json:"icon" binding:"" label:"图标"`                              // 图标
	ApiMethod *string `form:"apiMethod" json:"apiMethod" binding:"required" label:"相应的API的Method"` // 相应的API的Method
	ApiPath   *string `form:"apiPath" json:"apiPath" binding:"required" label:"相应的API的Path"`       // 相应的API的Path
	Memo      *string `form:"memo" json:"memo" binding:"" label:"备注"`                              // 备注
	Show      *bool   `form:"show" json:"show" binding:"" label:"是否已显示"`                           // 是否已显示
}

// AddMenuWidget
// @description Add a widget for a specific menu.
// @id menu-widget-add
// @tags menu
// @summary Add a widget for a specific menu.
// @accept json
// @produce json
// @param id path string true "id of the menu."
// @param body body AddMenuWidgetReq true "necessary attributes to add a widget."
// @security ApiKeyAuth
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets [POST]
func AddMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, errors.New("invalid menu id"))
		return
	}
	var req AddMenuWidgetReq
	if err := c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.MenuWidget](ctx, req, model.CopyForInsert)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	} else {
		one.MenuID = menuID
	}
	if _, err := repo.InsertOne(ctx, one); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithCreated(c, one.ID.Hex())
	return
}

// ListMenuWidgetReq search arguments to list menu-widgets.
type ListMenuWidgetReq struct {
	Name    *string `form:"name" json:"name" binding:"" label:"名称"`           // 名称
	SortBy  SortBy  `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`   // 字段排序条件
	Deleted *bool   `form:"deleted" json:"deleted" binging:"" label:"是否被软删除"` // 是否被软删除
	PaginationArg
}

// MenuWidgetListElem an element of menu-widget list.
type MenuWidgetListElem struct {
	ID        *primitive.ObjectID `json:"id,omitempty"`        // ID
	Name      *string             `json:"name,omitempty"`      // 名称
	Seq       *int                `json:"seq,omitempty"`       // 序号
	Icon      *string             `json:"icon,omitempty"`      // 图标
	ApiMethod *string             `json:"apiMethod,omitempty"` // 相应的API的Method
	ApiPath   *string             `json:"apiPath,omitempty"`   // 相应的API的Path
	Show      *bool               `json:"show,omitempty"`      // 是否已显示
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt *primitive.DateTime `json:"createdAt,omitempty"` // 创建时间、注册时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt *primitive.DateTime `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
}

// ListMenuWidgetRet  return of listing menu-widgets.
type ListMenuWidgetRet struct {
	PaginationRet
}

// ListMenuWidget
// @description Get a widget list of a specific menu.
// @id menu-widget-list
// @tags menu
// @summary Get a widget list of a specific menu.
// @produce json
// @param id path string true "id of the menu."
// @security ApiKeyAuth
// @success 200 {object} MenuWidgetListElem "role list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets [GET]
func ListMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var req ListMenuWidgetReq
	if err := c.ShouldBindQuery(&req); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	and := bson.D{{Key: "menuID", Value: menuID}}
	if req.Name != nil {
		and = append(and, bson.E{Key: "name", Value: req.Name})
	}
	if req.Deleted != nil {
		and = append(and, bson.E{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: *req.Deleted}})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.MenuWidget{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.MenuWidget](ctx, filter, opt)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	ret := make([]*MenuWidgetListElem, 0, len(res))
	if err = structure.Copy(&ret, res); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &ListMenuWidgetRet{
		PaginationRet{
			List:  ret,
			Total: total,
		},
	})
	return
}

// ProfileMenuWidgetRet return of profile a menu-widget.
type ProfileMenuWidgetRet struct {
	ID        *primitive.ObjectID `json:"id,omitempty"`        // ID
	Name      string              `json:"name,omitempty"`      // 名称
	Seq       int                 `json:"seq,omitempty"`       // 序号
	Icon      string              `json:"icon,omitempty"`      // 图标
	ApiMethod string              `json:"apiMethod,omitempty"` // 相应的API的Method
	ApiPath   string              `json:"apiPath,omitempty"`   // 相应的API的Path
	Memo      string              `json:"memo,omitempty"`      // 备注
	Show      bool                `json:"show,omitempty"`      // 是否已显示
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt primitive.DateTime  `json:"createdAt,omitempty"` // 创建时间、注册时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt primitive.DateTime  `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
}

// ProfileMenuWidget
// @description Get the profile of a widget.
// @id menu-widget-profile
// @tags menu
// @summary Get infos of a widget.
// @produce json
// @param id path string true "id of the menu."
// @param widgetId path string true "id the a widget."
// @security ApiKeyAuth
// @success 200 {object} ProfileMenuWidgetRet "profile of the role."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets/:widgetId [GET]
func ProfileMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	widget, err := repo.FindOne[model.MenuWidget](
		ctx,
		bson.D{
			{Key: "_id", Value: widgetID},
			{Key: "menuID", Value: menuID},
		})
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	var ret ProfileMenuWidgetRet
	if err = structure.Copy(&ret, &widget); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, ret)
	return
}

// EditMenuWidgetReq
type EditMenuWidgetReq struct {
	Name      *string `form:"name" json:"name" binding:"required" label:"名称"`                      // 名称
	Seq       *int    `form:"seq" json:"seq" binding:"required" label:"序号"`                        // 序号
	Icon      *string `form:"icon" json:"icon" binding:"" label:"图标"`                              // 图标
	ApiMethod *string `form:"apiMethod" json:"apiMethod" binding:"required" label:"相应的API的Method"` // 相应的API的Method
	ApiPath   *string `form:"apiPath" json:"apiPath" binding:"required" label:"相应的API的Path"`       // 相应的API的Path
	Memo      *string `form:"memo" json:"memo" binding:"" label:"备注"`                              // 备注
	Show      *bool   `form:"show" json:"show" binding:"" label:"是否已显示"`                           // 是否已显示
}

// EditMenuWidget
// @description Update infos of a widget.
// @id menu-update-widget-update
// @tags menu
// @summary Update infos of a widget.
// @accept json
// @produce json
// @param id path string true "id of the menu."
// @param widgetId path string true "id the a widget."
// @param body body EditMenuWidgetReq true "some attributes to update."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets/:widgetId [PUT]
func EditMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var req EditMenuWidgetReq
	if err = c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
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
		JSONWithImplicitError(c, err)
		return
	}
	newM, err := model.CopyToModelWithSessionContext[model.MenuWidget](ctx, req, model.CopyForUpdate)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		if _, err = repo.UpdateOneModelByID(sessCtx, widgetID, newM); err != nil {
			return nil, err
		}
		// NOTE: return if the api has not been changed.
		if *req.ApiMethod == *oldM.ApiMethod && *req.ApiPath == *oldM.ApiPath {
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
		if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// EnableMenuWidget
// @description Enable a menu-widget.
// @id menu-widget-enable
// @tags menu
// @summary Enable a menu-widget.
// @produce json
// @param id path string true "id of the menu."
// @param widgetId path string true "id the a menu-widget."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets/:widgetId/enable [PATCH]
func EnableMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	if _, err = repo.EnableOne[model.MenuWidget](
		ctx,
		bson.D{
			{Key: "menuID", Value: menuID},
			{Key: "_id", Value: widgetID},
		},
	); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// DisableMenuWidget
// @description Disable a menu-widget.
// @id menu-widget-disable
// @tags menu
// @summary Disable a menu-widget.
// @produce json
// @param id path string true "id of the menu."
// @param widgetId path string true "id the a menu-widget."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets/:widgetId/disable [PATCH]
func DisableMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		JSONWithBadRequest(c, err)
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
		JSONWithImplicitError(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
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
		// NOTE: need to remove relative RelationRoleMenuWidget.
		if _, err = repo.DeleteMany[model.RelationRoleMenuWidget](
			sessCtx,
			bson.D{
				{Key: "WidgetID", Value: widgetID},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies, and reload.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeP},
				{Key: "v2", Value: oldM.ApiPath},
				{Key: "v3", Value: oldM.ApiMethod},
			},
		); err != nil {
			return nil, err
		}
		if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// RemoveMenuWidget
// @description Remove the menu-widget forever, not soft-deletion.
// @id menu-widget-remove
// @tags menu
// @summary remove the menu-widget forever.
// @accept json
// @produce json
// @param id path string true "id of the menu."
// @param widgetId path string true "id of the menu-widget."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 403 {error} error "forbidden."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/widgets/:widgetId [DELETE]
func RemoveMenuWidget(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	menuID, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	widgetID, err := model.ObjectIDPtrFromHex(c.Param("widgetId"))
	if err != nil {
		JSONWithBadRequest(c, err)
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
		JSONWithImplicitError(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
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
		// NOTE: need to remove relative RelationRoleMenuWidget.
		if _, err = repo.DeleteMany[model.RelationRoleMenuWidget](
			sessCtx,
			bson.D{
				{Key: "WidgetID", Value: widgetID},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies, and reload.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeP},
				{Key: "v2", Value: oldM.ApiPath},
				{Key: "v3", Value: oldM.ApiMethod},
			},
		); err != nil {
			return nil, err
		}
		if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithNoContent(c, nil)
	return
}
