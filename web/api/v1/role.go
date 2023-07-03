package api

import (
	"errors"
	"log"
	"slices"
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

// AddRoleReq arguments to add a role.
type AddRoleReq struct {
	Name  *string   `form:"name" json:"name" binding:"required" label:"名称"` // 名称
	Alias *[]string `form:"alias" json:"alias" binding:"" label:"别名"`       // 别名
	Seq   *int      `form:"seq" json:"seq" binding:"required" label:"序号"`   // 序号
	Icon  *string   `form:"icon" json:"icon" binding:"" label:"图标"`         // 图标
	Memo  *string   `form:"memo" json:"memo" binding:"" label:"备注"`         // 备注
}

// AddRole
// @description Add a new role.
// @id role-add
// @tags role
// @summary Add a new role.
// @accept json
// @produce json
// @param body body AddRoleReq true "required attributes to add a new role."
// @security ApiKeyAuth
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles [POST]
func AddRole(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req AddRoleReq
	if err := c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Role](ctx, req, model.CopyForInsert)
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

// ListRoleReq search arguments to list roles.
type ListRoleReq struct {
	Name           *string   `form:"name" json:"name" binding:"" label:"名称"`                                        // 名称
	Alias          *[]string `form:"alias" json:"alias" binding:"" label:"别名"`                                      // 别名
	Seq            *int      `form:"seq" json:"seq" binding:"omitempty,gte=0" label:"序号"`                           // 序号
	CreatedBy      *string   `form:"createdBy" json:"v" binding:"" label:"创建者"`                                     // 创建者
	CreatedAtBegin *int64    `form:"createdAtBegin" json:"createdAtBegin" binding:"omitempty,gte=0" label:"创建时间起始"` // 创建时间起始
	CreatedAtEnd   *int64    `form:"createdAtEnd" json:"createdAtEnd" binding:"omitempty,gte=0" label:"创建时间结束"`     // 创建时间结束
	DomainID       *string   `form:"domainID" json:"domainID" binding:"" label:"域ID"`                               // 域ID
	SortBy         SortBy    `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`                                // 字段排序条件
	Deleted        *bool     `form:"deleted" json:"deleted" binging:"" label:"是否被软删除"`                              // 是否被软删除
	PaginationArg
}

// RoleListElem an element of role list.
type RoleListElem struct {
	ID          *primitive.ObjectID   `json:"id,omitempty"`          // ID
	Name        *string               `json:"name,omitempty"`        // 名称
	Alias       *[]string             `json:"alias"`                 // 别名
	Seq         *int                  `json:"seq,omitempty"`         // 序号
	Icon        *string               `json:"icon,omitempty"`        // 图标
	Memo        *string               `json:"memo,omitempty"`        // 备注
	CreatedBy   *primitive.ObjectID   `json:"createdBy,omitempty"`   // 创建者
	CreatedAt   *primitive.DateTime   `json:"createdAt,omitempty"`   // 创建时间、注册时间
	UpdatedBy   *primitive.ObjectID   `json:"updatedBy,omitempty"`   // 更新者
	UpdatedAt   *primitive.DateTime   `json:"updatedAt,omitempty"`   // 更新时间
	DeletedBy   *primitive.ObjectID   `json:"deletedBy,omitempty"`   // 禁用者
	DeletedAt   *primitive.DateTime   `json:"deletedAt,omitempty"`   // 禁用时间
	DomainIDs   []*primitive.ObjectID `json:"domainIDs,omitempty"`   // 域IDs
	DomainNames []string              `json:"domainNames,omitempty"` // 域名
}

// ListRoleRet return of listing roles.
type ListRoleRet struct {
	PaginationRet
}

// ListRole
// @description Get a list of role.
// @id role-list
// @tags role
// @summary Get a list of role.
// @produce json
// @param query query ListRoleReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} RoleListElem "role list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles [GET]
func ListRole(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req ListRoleReq
	if err := c.ShouldBindQuery(&req); err != nil {
		log.Println(err)
		JSONWithBadRequest(c, err)
		return
	}
	var and bson.A
	if req.Name != nil {
		and = append(and, bson.E{Key: "name", Value: req.Name})
	}
	if req.Seq != nil {
		and = append(and, bson.E{Key: "seq", Value: req.Seq})
	}
	// TODO should use the creator's account.
	if req.CreatedBy != nil {
		and = append(and, bson.E{Key: "creator", Value: req.CreatedBy})
	}
	if req.CreatedAtBegin != nil {
		and = append(and, bson.E{Key: "createdAt", Value: bson.E{Key: "$gte", Value: primitive.DateTime(*req.CreatedAtBegin)}})
	}
	if req.CreatedAtEnd != nil {
		and = append(and, bson.E{Key: "createdAt", Value: bson.E{Key: "$lt", Value: primitive.DateTime(*req.CreatedAtBegin)}})
	}
	if req.Deleted != nil {
		and = append(and, bson.E{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: *req.Deleted}})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	// total, err := repo.Collection(model.Role{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	// if err != nil {
	// 	JSONWithImplicitError(c, err)
	// 	return
	// }
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.Role](ctx, filter, opt)
	if err != nil {
		log.Println(err)
		JSONWithImplicitError(c, err)
		return
	}
	ret := make([]*RoleListElem, 0, len(res))
	if err = structure.Copy(&ret, res); err != nil {
		log.Println(err)
		JSONWithImplicitError(c, err)
		return
	}
	for _, role := range ret {
		domainIDs, err := model_service.GetDomainIDsOfRole(ctx, role.ID)
		if err != nil {
			log.Println(err)
			JSONWithImplicitError(c, err)
			return
		}
		if len(domainIDs) > 0 {
			role.DomainIDs = domainIDs
			names, err := repo.Collection(model.Domain{}).
				Distinct(
					ctx,
					"name",
					model.FilterEnabled(
						bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: domainIDs}}}},
					))
			if err != nil {
				log.Println(err)
				JSONWithImplicitError(c, err)
				return
			}
			var domainNames []string
			for _, dn := range names {
				domainNames = append(domainNames, dn.(string))
			}
			role.DomainNames = domainNames
		}
	}
	if req.DomainID != nil {
		var ret2 []*RoleListElem
		for _, role := range ret {
			if len(role.DomainIDs) > 0 {
				if slices.ContainsFunc[*primitive.ObjectID](role.DomainIDs, func(e *primitive.ObjectID) bool {
					return e.Hex() == *req.DomainID
				}) {
					ret2 = append(ret2, role)
				}
			}
		}
		JSONWithOK(c, &ListRoleRet{
			PaginationRet{
				List:  ret2,
				Total: int64(len(ret2)),
			},
		})
		return
	}
	JSONWithOK(c, &ListRoleRet{
		PaginationRet{
			List:  ret,
			Total: int64(len(ret)),
		},
	})
	return
}

// ProfileRoleRet return of profile a role.
type ProfileRoleRet struct {
	ID        *primitive.ObjectID `json:"id"`                  // ID
	Name      *string             `json:"name,omitempty"`      // 名称
	Alias     *[]string           `json:"alias,omitempty"`     // 别名
	Seq       *int                `json:"seq,omitempty"`       // 序号
	Icon      *string             `json:"icon,omitempty"`      // 图标
	Memo      *string             `json:"memo,omitempty"`      // 备注
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt *primitive.DateTime `json:"createdAt,omitempty"` // 创建时间、注册时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt *primitive.DateTime `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
}

// ProfileRole
// @description Get the profile of a role.
// @id role-profile
// @tags role
// @summary Get infos of a role.
// @produce json
// @param id path string true "id of the role."
// @security ApiKeyAuth
// @success 200 {object} ProfileRoleRet "profile of the role."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id [GET]
func ProfileRole(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := repo.FindByID[model.Role](ctx, id)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	var ret ProfileRoleRet
	if err = structure.Copy(&ret, one); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, ret)
	return
}

// EditRoleReq arguments to edit a role.
type EditRoleReq struct {
	Name  *string   `form:"name" json:"name" binding:"" label:"名称"`   // 名称
	Alias *[]string `form:"alias" json:"alias" binding:"" label:"别名"` // 别名
	Seq   *int      `form:"seq" json:"seq" binding:"" label:"序号"`     // 序号
	Icon  *string   `form:"icon" json:"icon" binding:"" label:"图标"`   // 图标
	Memo  *string   `form:"memo" json:"memo" binding:"" label:"备注"`   // 备注
}

// EditRole
// @description Update a specific role.
// @id role-update
// @tags role
// @summary Update a specific role.
// @accept json
// @produce json
// @param id path string true "id of the role to edit."
// @param body body EditRoleReq true "attributes need to update."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id [PUT]
func EditRole(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var req EditRoleReq
	if err = c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Role](ctx, req, model.CopyForUpdate)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if _, err = repo.UpdateOneModelByID(ctx, id, one); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// RoleDomainsRet return of getting domains of a role.
type RoleDomainsRet struct {
	DomainIDs []*primitive.ObjectID `json:"domainIDs"` // 域IDs
}

// RoleDomains
// @description Get domains of a specific role.
// @id role-domains
// @tags role
// @summary Get domains of a specific role.
// @accept json
// @produce json
// @param id path string true "id of the role."
// @security ApiKeyAuth
// @success 200 {object} RoleDomainsRet "domains of the role."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id/domains [GET]
func RoleDomains(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	domainIDs, err := model_service.GetDomainIDsOfRole(ctx, id)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, RoleDomainsRet{domainIDs})
	return
}

// RoleAuthoritiesRet return of getting authorities of a role.
type RoleAuthoritiesRet struct {
	MenuIDs   []*primitive.ObjectID `json:"menuIDs"`   // 菜单IDs
	WidgetIDs []*primitive.ObjectID `json:"widgetIDs"` // 组件IDs
}

// RoleAuthorities
// @description Get authorities of a specific role.
// @id role-authorities
// @tags role
// @summary Get authorities of a specific role.
// @accept json
// @produce json
// @param id path string true "id of the role."
// @param domainId path string true "id of a domain which the role belongs to."
// @security ApiKeyAuth
// @success 200 {object} RoleAuthoritiesRet "authorities of the role."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id/authorities/:domainId [GET]
func RoleAuthorities(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(c.Param("domainId"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	menuIDs, err := repo.ProjectMany(
		ctx,
		func(m model.RelationDomainRoleMenu) *primitive.ObjectID {
			return m.MenuID
		},
		model.FilterEnabled(
			bson.D{
				{Key: "domainID", Value: domainID},
				{Key: "roleID", Value: id},
			},
		),
		options.Find().SetProjection(bson.D{
			{Key: "_id", Value: 0},
			{Key: "menuID", Value: 1},
		}),
	)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	widgetIDs, err := repo.ProjectMany(
		ctx,
		func(m model.RelationDomainRoleMenuWidget) *primitive.ObjectID {
			return m.WidgetID
		},
		model.FilterEnabled(
			bson.D{
				{Key: "domainID", Value: domainID},
				{Key: "roleID", Value: id},
			},
		),
		options.Find().SetProjection(bson.D{
			{Key: "_id", Value: 0},
			{Key: "widgetID", Value: 1},
		}),
	)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &RoleAuthoritiesRet{
		MenuIDs:   menuIDs,
		WidgetIDs: widgetIDs,
	})
	return
}

// AuthorizeRoleReq arguments to authorize a role.
type AuthorizeRoleReq struct {
	MenuIDs   []*primitive.ObjectID `form:"menuIDs" json:"menuIDs" binding:"" label:"菜单的IDs"`     // 菜单的IDs
	WidgetIDs []*primitive.ObjectID `form:"widgetIDs" json:"widgetIDs" binding:"" label:"控件的IDs"` // 控件的IDs
}

// AuthorizeRole
// @description Allocate authorities to a specific role using menu-widgets pairs.
// @id role-authorize
// @tags role
// @summary Allocate authorities to a specific role.
// @accept json
// @produce json
// @param id path string true "id of the role to be allocated authorities."
// @param domainId path string true "id of a domain which the role belongs to."
// @param body body AuthorizeRoleReq true "menu-widgets pairs."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id/authorize/:domainId [POST]
func AuthorizeRole(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	sessionDT := model.NewDatetime(time.Now())
	ctx := model.WithSession(c.Request.Context(), sessionID, sessionDT)
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(c.Param("domainId"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var req AuthorizeRoleReq
	if err = c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	// validate domainID.
	if _, err := repo.FindByID[model.Domain](
		ctx,
		domainID,
		options.FindOne().SetProjection(bson.D{{Key: "_id", Value: 1}}),
	); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var requiredMenuWidgets []model.MenuWidget
	// validate menuIDs and widgetIDs if has.
	if len(req.MenuIDs) > 0 {
		if menus, err := repo.FindMany[model.Menu](
			ctx,
			model.FilterEnabled(bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: req.MenuIDs}}}}),
			options.Find().SetProjection(bson.D{{Key: "_id", Value: 1}}),
		); err != nil {
			JSONWithBadRequest(c, err)
			return
		} else {
			if len(menus) != len(req.MenuIDs) {
				JSONWithBadRequest(c, errors.New("invalid menu id."))
				return
			}
		}
		menuWidgets, err := repo.FindMany[model.MenuWidget](
			ctx,
			model.FilterEnabled(bson.D{{Key: "menuID", Value: bson.D{{Key: "$in", Value: req.MenuIDs}}}}),
			options.Find().SetProjection(bson.D{
				{Key: "_id", Value: 1},
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
		)
		if err != nil {
			JSONWithBadRequest(c, err)
			return
		}
		for _, v := range req.WidgetIDs {
			var required bool
			for _, w := range menuWidgets {
				if v.Hex() == w.ID.Hex() {
					required = true
					requiredMenuWidgets = append(requiredMenuWidgets, w)
					break
				}
			}
			if !required {
				JSONWithBadRequest(c, errors.New("invalid widget id"))
				return
			}
		}
	}
	var relationDomainRoleMenus []model.RelationDomainRoleMenu
	for _, v := range req.MenuIDs {
		relationDomainRoleMenus = append(relationDomainRoleMenus, model.RelationDomainRoleMenu{
			Model: &model.Model{
				ID:        model.NewObjectIDPtr(),
				CreatedBy: sessionID,
				CreatedAt: sessionDT,
			},
			DomainID: domainID,
			RoleID:   id,
			MenuID:   v,
		})
	}
	var relationDomainRoleMenuWidgets []model.RelationDomainRoleMenuWidget
	for _, v := range req.WidgetIDs {
		relationDomainRoleMenuWidgets = append(relationDomainRoleMenuWidgets, model.RelationDomainRoleMenuWidget{
			Model: &model.Model{
				ID:        model.NewObjectIDPtr(),
				CreatedBy: sessionID,
				CreatedAt: sessionDT,
			},
			DomainID: domainID,
			RoleID:   id,
			WidgetID: v,
		})
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// NOTE: remove relative RelationDomainRoleMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{
				{Key: "domainID", Value: domainID},
				{Key: "roleID", Value: id},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: insert new RelationDomainRoleMenus if has.
		if len(relationDomainRoleMenus) > 0 {
			if _, err = repo.InsertMany(sessCtx, relationDomainRoleMenus); err != nil {
				return nil, err
			}
		}
		// NOTE: remove relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{
				{Key: "domainID", Value: domainID},
				{Key: "roleID", Value: id},
			},
		); err != nil {
			return nil, err
		}
		// NOTE: insert new RelationDomainRoleMenuWidgets if has.
		if len(relationDomainRoleMenuWidgets) > 0 {
			if _, err = repo.InsertMany(sessCtx, relationDomainRoleMenuWidgets); err != nil {
				return nil, err
			}
		}
		// NOTE: update casbin policies.
		// first step: delete policies of the role.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeP},
				{Key: "v0", Value: id.Hex()},
				{Key: "v1", Value: domainID.Hex()},
			},
		); err != nil {
			return nil, err
		}
		// second step: insert new policies of the role.
		if len(requiredMenuWidgets) > 0 {
			newPolicies := make([]model.Casbin, 0, len(req.WidgetIDs))
			for _, v := range requiredMenuWidgets {
				// reference to https://casbin.org/docs/rbac-with-domains
				newPolicies = append(newPolicies, model.Casbin{
					Model: &model.Model{
						ID:        model.NewObjectIDPtr(),
						CreatedBy: sessionID,
						CreatedAt: sessionDT,
					},
					PType: model.StringPtr(model.PTypeP),
					V0:    model.StringPtr(id.Hex()),
					V1:    model.StringPtr(domainID.Hex()),
					V2:    v.ApiPath,
					V3:    v.ApiMethod,
				})
			}
			if _, err = repo.InsertMany[model.Casbin](sessCtx, newPolicies); err != nil {
				return nil, err
			}
		}
		return nil, nil
	}); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// EnableRole
// @description Enable a role.
// @id role-enable
// @tags role
// @summary Enable a role.
// @accept json
// @produce json
// @param id path string true "id of the role."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id/enable [PATCH]
func EnableRole(c *gin.Context) {
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
		// enable the role.
		if _, err = repo.EnableOneByID[model.Role](sessCtx, id); err != nil {
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

// DisableRole
// @description Disable a role.
// @id role-disable
// @tags role
// @summary Disable a role.
// @accept json
// @produce json
// @param id path string true "id of the role."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id/disable [PATCH]
func DisableRole(c *gin.Context) {
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
		// disable the role.
		if _, err = repo.DisableOneByID[model.Role](sessCtx, id); err != nil {
			return nil, err
		}
		// NOTE: need to remove the relative RelationDomainRoleMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{{Key: "roleID", Value: id}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove the relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{{Key: "roleID", Value: id}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove the relative Casbin policies.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{{Key: "$or", Value: bson.A{
				bson.D{{Key: "pType", Value: model.PTypeP}, {Key: "v0", Value: id.Hex()}},
				bson.D{{Key: "pType", Value: model.PTypeG}, {Key: "v1", Value: id.Hex()}},
			}}},
		); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}

// RemoveRole
// @description Remove the role forever, not soft-deletion.
// @id role-remove
// @tags role
// @summary Remove a specific role.
// @produce json
// @param id path string true "id of the role to remove."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id [DELETE]
func RemoveRole(c *gin.Context) {
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
		// remove the role.
		if _, err = repo.DeleteByID[model.Role](sessCtx, id); err != nil {
			return nil, err
		}
		// NOTE: need to remove the relative RelationDomainRoleMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{{Key: "roleID", Value: id}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove the relative RelationDomainRoleMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{{Key: "roleID", Value: id}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove the relative Casbin policies.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{{Key: "$or", Value: bson.A{
				bson.D{{Key: "pType", Value: model.PTypeP}, {Key: "v0", Value: id.Hex()}},
				bson.D{{Key: "pType", Value: model.PTypeG}, {Key: "v1", Value: id.Hex()}},
			}}},
		); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}
