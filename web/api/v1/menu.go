package api

import (
	"errors"
	"sort"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/casbin"
	"github.com/sfshf/exert-golang/service/model_service"
	"github.com/sfshf/exert-golang/util/structure"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// AddMenuReq arguments to add a menu.
type AddMenuReq struct {
	Name     *string             `form:"name" json:"name" binding:"required" label:"名称"`     // 名称
	Seq      *int                `form:"seq" json:"seq" binding:"required" label:"序号"`       // 序号
	Icon     *string             `form:"icon" json:"icon" binding:"" label:"图标"`             // 图标
	Route    *string             `form:"route" json:"route" binding:"required" label:"页面路由"` // 页面路由
	Memo     *string             `form:"v" json:"memo" binding:"" label:"备注"`                // 备注
	Show     *bool               `form:"show" json:"show" binding:"" label:"是否显示"`           // 是否显示
	ParentID *primitive.ObjectID `form:"parentID" json:"parentID" binding:"" label:"父级Id"`   // 父级Id
	IsItem   *bool               `form:"isItem" json:"isItem" binding:"" label:"是否是菜单项"`     // 是否是菜单项
}

// AddMenu
// @description Add a new menu.
// @id menu-add
// @tags menu
// @summary Add a new menu.
// @accept json
// @produce json
// @param body body AddMenuReq true "required attributes to add a new menu."
// @security ApiKeyAuth
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus [POST]
func AddMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req AddMenuReq
	if err := c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Menu](ctx, req, model.CopyForInsert)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	res, err := repo.InsertOne(ctx, &one)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithCreated(c, res.InsertedID.(primitive.ObjectID).Hex())
	return
}

// ListMenuReq search arguments to list menus.
type ListMenuReq struct {
	Name     *string `form:"name" json:"name" binding:"" label:"名称"`                 // 名称
	Route    *string `form:"route" json:"route" binding:"" label:"页面路由"`             // 页面路由
	Show     *bool   `form:"show" json:"show" binding:"" label:"是否已显示"`              // 是否已显示
	NeedTree bool    `form:"needTree" json:"needTree" binding:"" label:"数据是否要转为树结构"` // 数据是否要转为树结构
	SortBy   SortBy  `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`         // 字段排序条件
	Deleted  *bool   `form:"deleted" json:"deleted" binging:"" label:"是否被软删除"`       // 是否被软删除
	PaginationArg
}

// MenuListElem view model of listing domains.
type MenuListElem struct {
	ID        *primitive.ObjectID `json:"id,omitempty"`        // ID
	Name      *string             `json:"name,omitempty"`      // 名称
	Seq       *int                `json:"seq,omitempty"`       // 序号
	Icon      *string             `json:"icon,omitempty"`      // 图标
	Route     *string             `json:"route,omitempty"`     // 页面路由
	Memo      *string             `json:"memo,omitempty"`      // 备注
	ParentID  *primitive.ObjectID `json:"parentID,omitempty"`  // 父级ID
	Show      *bool               `json:"show,omitempty"`      // 是否已显示
	IsItem    *bool               `json:"isItem,omitempty"`    // 是否是菜单项
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt *primitive.DateTime `json:"createdAt,omitempty"` // 创建时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt *primitive.DateTime `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
	Children  []*MenuListElem     `json:"children,omitempty"`
}

// ListMenuRet return of listing menus.
type ListMenuRet struct {
	PaginationRet
}

// menuListConvertedToTree convert menu models to menu list views.
func menuListConvertedToTree(menuList []*MenuListElem, parentID string) ([]*MenuListElem, error) {
	siblingMenus := make([]*MenuListElem, 0)
	remainMenus := make([]*MenuListElem, 0)
	for i := 0; i < len(menuList); i++ {
		if (menuList[i].ParentID == nil && parentID == "") || (menuList[i].ParentID != nil && menuList[i].ParentID.Hex() == parentID) {
			siblingMenus = append(siblingMenus, menuList[i])
		} else {
			remainMenus = append(remainMenus, menuList[i])
		}
	}
	sort.Slice(siblingMenus, func(i, j int) bool {
		if siblingMenus[i].Seq != nil && siblingMenus[j].Seq != nil {
			return *siblingMenus[i].Seq < *siblingMenus[j].Seq
		} else {
			return false
		}
	})
	if len(remainMenus) > 0 {
		for i := 0; i < len(siblingMenus); i++ {
			children, err := menuListConvertedToTree(remainMenus, siblingMenus[i].ID.Hex())
			if err != nil {
				return nil, err
			}
			sort.Slice(children, func(i, j int) bool {
				if children[i].Seq != nil && children[j].Seq != nil {
					return *children[i].Seq < *children[j].Seq
				} else {
					return false
				}
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
// @produce json
// @param query query ListMenuReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} MenuListElem "menu list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /menus [GET]
func ListMenu(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req ListMenuReq
	if err := c.ShouldBindQuery(&req); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.Name != nil {
		and = append(and, bson.E{Key: "name", Value: req.Name})
	}
	if req.Route != nil {
		and = append(and, bson.E{Key: "route", Value: req.Route})
	}
	if req.Show != nil {
		and = append(and, bson.E{Key: "show", Value: req.Show})
	}
	if req.Deleted != nil {
		and = append(and, bson.E{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: *req.Deleted}})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.Menu{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.Menu](ctx, filter, opt)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	ret := make([]*MenuListElem, 0, len(res))
	if err = structure.Copy(&ret, res); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if req.NeedTree {
		ret, err = menuListConvertedToTree(ret, "")
		if err != nil {
			JSONWithImplicitError(c, err)
			return
		}
	}
	JSONWithOK(c, &ListMenuRet{
		PaginationRet{
			List:  ret,
			Total: total,
		},
	})
	return
}

// ProfileMenuRet return of profiling a menu.
type ProfileMenuRet struct {
	ID        *primitive.ObjectID `json:"id,omitempty"`        // ID
	Name      *string             `json:"name,omitempty"`      // 名称
	Seq       *int                `json:"seq,omitempty"`       // 序号
	Icon      *string             `json:"icon,omitempty"`      // 图标
	Route     *string             `json:"route,omitempty"`     // 页面路由
	Memo      *string             `json:"memo,omitempty"`      // 备注
	ParentID  *primitive.ObjectID `json:"parentID,omitempty"`  // 父级ID
	Show      *bool               `json:"show,omitempty"`      // 是否已显示
	IsItem    *bool               `json:"isItem,omitempty"`    // 是否是菜单项
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt *primitive.DateTime `json:"createdAt,omitempty"` // 创建时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt *primitive.DateTime `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
}

// ProfileMenu
// @description Get the profile of a menu.
// @id menu-profile
// @tags menu
// @summary Get infos of a menu.
// @produce json
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
		JSONWithBadRequest(c, err)
		return
	}
	one, err := repo.FindByID[model.Menu](ctx, id)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	var ret ProfileMenuRet
	if err = structure.Copy(&ret, one); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, ret)
	return
}

// EditMenuReq arguments to edit a menu.
type EditMenuReq struct {
	Name     *string             `form:"name" json:"name" binding:"required" label:"名称"`     // 名称
	Seq      *int                `form:"seq" json:"seq" binding:"required" label:"序号"`       // 序号
	Icon     *string             `form:"icon" json:"icon" binding:"" label:"图标"`             // 图标
	Route    *string             `form:"route" json:"route" binding:"required" label:"页面路由"` // 页面路由
	Memo     *string             `form:"memo" json:"memo" binding:"" label:"备注"`             // 备注
	Show     *bool               `form:"show" json:"show" binding:"" label:"是否显示"`           // 是否显示
	ParentID *primitive.ObjectID `form:"parentID" json:"parentID" binding:"" label:"父级Id"`   // 父级Id
	IsItem   *bool               `form:"isItem" json:"isItem" binding:"" label:"是否是菜单项"`     // 是否是菜单项
}

// EditMenu
// @description Update a specific menu.
// @id menu-update
// @tags menu
// @summary Update a specific menu.
// @accept json
// @produce json
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
		JSONWithBadRequest(c, err)
		return
	}
	var req EditMenuReq
	if err = c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Menu](ctx, req, model.CopyForUpdate)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if _, err := repo.UpdateOneModelByID(ctx, id, one); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// EnableMenu
// @description Enable a menu.
// @id menu-enable
// @tags menu
// @summary Enable a menu.
// @accept json
// @produce json
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
		JSONWithBadRequest(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
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
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// DisableMenu
// @description Disable a menu.
// @id menu-disable
// @tags menu
// @summary Disable a menu.
// @accept json
// @produce json
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
		JSONWithBadRequest(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
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

// RemoveMenu
// @description remove the menu forever, not soft-deletion.
// @id menu-remove
// @tags menu
// @summary remove the menu forever.
// @produce json
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
		JSONWithBadRequest(c, err)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
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
