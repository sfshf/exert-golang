package api

import (
	"errors"
	"sort"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/sfshf/exert-golang/dto"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/casbin"
	"github.com/sfshf/exert-golang/service/model_service"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// AddMenu
// @description Add a new menu.
// @id menu-add
// @tags menu
// @summary Add a new menu.
// @accept protobuf
// @produce protobuf
// @param body body AddMenuReq true "required attributes to add a new menu."
// @security ApiKeyAuth
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus [POST]
func AddMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.AddMenuReq
	if err := c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Menu](ctx, &req, model.CopyForInsert)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	res, err := repo.InsertOne(ctx, &one)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithCreated(c, res.InsertedID.(primitive.ObjectID).Hex())
	return
}

// menuListConvertedToTree convert menu models to menu list views.
func menuListConvertedToTree(menuList []*dto.MenuListElem, parentId string) ([]*dto.MenuListElem, error) {
	siblingMenus := make([]*dto.MenuListElem, 0)
	remainMenus := make([]*dto.MenuListElem, 0)
	for i := 0; i < len(menuList); i++ {
		if (menuList[i].ParentId == "" && parentId == "") || (menuList[i].ParentId != "" && menuList[i].ParentId == parentId) {
			siblingMenus = append(siblingMenus, menuList[i])
		} else {
			remainMenus = append(remainMenus, menuList[i])
		}
	}
	sort.Slice(siblingMenus, func(i, j int) bool {
		return siblingMenus[i].Seq < siblingMenus[j].Seq
	})
	if len(remainMenus) > 0 {
		for i := 0; i < len(siblingMenus); i++ {
			children, err := menuListConvertedToTree(remainMenus, siblingMenus[i].Id)
			if err != nil {
				return nil, err
			}
			sort.Slice(children, func(i, j int) bool {
				return children[i].Seq < children[j].Seq
			})
			siblingMenus[i].Children = children
		}
	}
	return siblingMenus, nil
}

// ListMenu
// @description Get a list of menu.
// @id menu-list
// @tags menu
// @summary Get a list of menu.
// @produce protobuf
// @param query query ListMenuReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} MenuListElem "menu list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus [GET]
func ListMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.ListMenuReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.Name != "" {
		and = append(and, bson.E{Key: "name", Value: req.Name})
	}
	if req.Route != "" {
		and = append(and, bson.E{Key: "route", Value: req.Route})
	}
	if req.Show {
		and = append(and, bson.E{Key: "show", Value: req.Show})
	}
	if req.Deleted {
		and = append(and, bson.E{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: req.Deleted}})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.Menu{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PerPage * (req.Page - 1)).
		SetLimit(req.PerPage)
	res, err := repo.FindMany[model.Menu](ctx, filter, opt)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ret := make([]*dto.MenuListElem, 0, len(res))
	if err = model.Copy(&ret, res); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	if req.NeedTree {
		ret, err = menuListConvertedToTree(ret, "")
		if err != nil {
			ProtoBufWithImplicitError(c, err)
			return
		}
	}
	ProtoBufWithOK(c, &dto.ListMenuRet{List: ret, Total: total})
	return
}

// ProfileMenu
// @description Get the profile of a menu.
// @id menu-profile
// @tags menu
// @summary Get infos of a menu.
// @produce protobuf
// @param id path string true "id of the menu."
// @security ApiKeyAuth
// @success 200 {object} ProfileMenuRet "profile of the menu."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id [GET]
func ProfileMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := repo.FindByID[model.Menu](ctx, id)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	var ret dto.ProfileMenuRet
	if err = model.Copy(&ret, one); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &ret)
	return
}

// EditMenu
// @description Update a specific menu.
// @id menu-update
// @tags menu
// @summary Update a specific menu.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the menu to update."
// @param body body EditMenuReq true "attributes need to update."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id [PUT]
func EditMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.EditMenuReq
	if err = c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Menu](ctx, &req, model.CopyForUpdate)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	if _, err := repo.UpdateOneModelByID(ctx, id, one); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.EditMenuRet{Id: id.Hex()})
	return
}

// EnableMenu
// @description Enable a menu.
// @id menu-enable
// @tags menu
// @summary Enable a menu.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the menu."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/enable [PATCH]
func EnableMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// NOTE: forbiden to update if the target Menu's parent Menu is disabled.
		one, err := repo.FindByID[model.Menu](
			sessCtx,
			id,
			options.FindOne().SetProjection(bson.D{
				{Key: "_id", Value: 0},
				{Key: "parentID", Value: 1},
			}),
		)
		if err != nil {
			return nil, err
		}
		if one.ParentID != nil {
			parent, err := repo.FindByID[model.Menu](
				sessCtx,
				one.ParentID,
				options.FindOne().SetProjection(
					bson.D{
						{Key: "_id", Value: 1},
						{Key: "deletedAt", Value: 1},
					},
				),
			)
			if err != nil {
				return nil, err
			}
			if parent.DeletedAt != nil {
				return nil, model_service.ClientError(errors.New("forbidden: target's parent is disabled"))
			}
		}
		// enable the menu.
		if _, err = repo.EnableOneByID[model.Menu](sessCtx, id); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.EnableMenuRet{Id: id.Hex()})
	return
}

// DisableMenu
// @description Disable a menu.
// @id menu-disable
// @tags menu
// @summary Disable a menu.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the menu."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus/:id/disable [PATCH]
func DisableMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// NOTE: need to disable target's children.
		menuIDsNeedToDisabled, err := repo.ProjectDescendantIDs[model.Menu](sessCtx, id)
		if err != nil {
			return nil, err
		} else {
			menuIDsNeedToDisabled = append(menuIDsNeedToDisabled, id)
		}
		if _, err = repo.DisableMany[model.Menu](
			sessCtx,
			bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: menuIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to disable relative MenuWidgets.
		widgetsNeedToDisabled, err := repo.FindMany[model.MenuWidget](
			sessCtx,
			bson.D{{Key: "menuID", Value: bson.D{{Key: "$in", Value: menuIDsNeedToDisabled}}}},
			options.Find().SetProjection(bson.D{
				{Key: "_id", Value: 1},
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
		)
		if err != nil {
			return nil, err
		}
		var widgetIDsNeedToDisabled []*primitive.ObjectID
		for _, widget := range widgetsNeedToDisabled {
			widgetIDsNeedToDisabled = append(widgetIDsNeedToDisabled, widget.ID)
		}
		if _, err = repo.DisableMany[model.MenuWidget](
			sessCtx,
			bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: widgetIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative RelationDomainRoleMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{{Key: "menuID", Value: bson.D{{Key: "$in", Value: menuIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{{Key: "widgetID", Value: bson.D{{Key: "$in", Value: widgetIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies.
		for _, widget := range widgetsNeedToDisabled {
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
	ProtoBufWithOK(c, &dto.DisableMenuRet{Id: id.Hex()})
	return
}

// RemoveMenu
// @description remove the menu forever, not soft-deletion.
// @id menu-remove
// @tags menu
// @summary remove the menu forever.
// @produce protobuf
// @param id path string true "id of the menu to remove."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 403 {error} error "forbidden."
// @failure 500 {error} error "internal server error."
// @router /menus/:id [DELETE]
func RemoveMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		menuIDsNeedToRemoved, err := repo.ProjectDescendantIDs[model.Menu](sessCtx, id)
		if err != nil {
			return nil, err
		} else {
			menuIDsNeedToRemoved = append(menuIDsNeedToRemoved, id)
		}
		if _, err = repo.DeleteMany[model.Menu](
			sessCtx,
			bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: menuIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative MenuWidgets.
		widgetsNeedToRemoved, err := repo.FindMany[model.MenuWidget](
			sessCtx,
			bson.D{{Key: "menuID", Value: bson.D{{Key: "$in", Value: menuIDsNeedToRemoved}}}},
			options.Find().SetProjection(bson.D{
				{Key: "_id", Value: 1},
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
		)
		if err != nil {
			return nil, err
		}
		var widgetIDsNeedToRemoved []*primitive.ObjectID
		for _, widget := range widgetsNeedToRemoved {
			widgetIDsNeedToRemoved = append(widgetIDsNeedToRemoved, widget.ID)
		}
		if _, err = repo.DeleteMany[model.MenuWidget](
			sessCtx,
			bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: widgetIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative RelationDomainRoleMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{{Key: "menuID", Value: bson.D{{Key: "$in", Value: menuIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{{Key: "widgetID", Value: bson.D{{Key: "$in", Value: widgetIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies.
		for _, widget := range widgetsNeedToRemoved {
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
	ProtoBufWithOK(c, &dto.RemoveMenuRet{Id: id.Hex()})
	return
}
