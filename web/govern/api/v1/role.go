package api

import (
	"errors"
	"log"
	"slices"
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

// AddRole
// @description Add a new role.
// @id role-add
// @tags role
// @summary Add a new role.
// @accept protobuf
// @produce protobuf
// @param body body AddRoleReq true "required attributes to add a new role."
// @security ApiKeyAuth
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles [POST]
func AddRole(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.AddRoleReq
	if err := c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Role](ctx, &req, model.CopyForInsert)
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

// ListRole
// @description Get a list of role.
// @id role-list
// @tags role
// @summary Get a list of role.
// @produce protobuf
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
		ProtoBufWithBadRequest(c, err)
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
	// 	ProtoBufWithImplicitError(c, err)
	// 	return
	// }
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.Role](ctx, filter, opt)
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ret := make([]*dto.RoleListElem, 0, len(res))
	if err = model.Copy(&ret, res); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	for _, role := range ret {
		domainIDs, err := model_service.GetDomainIDsOfRole(ctx, role.Id)
		if err != nil {
			log.Println(err)
			ProtoBufWithImplicitError(c, err)
			return
		}
		if len(domainIDs) > 0 {
			role.DomainIds = domainIDs
			names, err := repo.Collection(model.Domain{}).
				Distinct(
					ctx,
					"name",
					model.FilterEnabled(
						bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: domainIDs}}}},
					))
			if err != nil {
				log.Println(err)
				ProtoBufWithImplicitError(c, err)
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
		var ret2 []*dto.RoleListElem
		for _, role := range ret {
			if len(role.DomainIds) > 0 {
				if slices.ContainsFunc[string](role.DomainIds, func(e string) bool {
					return e == *req.DomainID
				}) {
					ret2 = append(ret2, role)
				}
			}
		}
		ProtoBufWithOK(c, &dto.ListRoleRet{List: ret2, Total: int64(len(ret2))})
		return
	}
	ProtoBufWithOK(c, &dto.ListRoleRet{List: ret, Total: int64(len(ret))})
	return
}

// ProfileRole
// @description Get the profile of a role.
// @id role-profile
// @tags role
// @summary Get infos of a role.
// @produce protobuf
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
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := repo.FindByID[model.Role](ctx, id)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	var ret dto.ProfileRoleRet
	if err = model.Copy(&ret, one); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &ret)
	return
}

// EditRole
// @description Update a specific role.
// @id role-update
// @tags role
// @summary Update a specific role.
// @accept protobuf
// @produce protobuf
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
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.EditRoleReq
	if err = c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Role](ctx, &req, model.CopyForUpdate)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	if _, err = repo.UpdateOneModelByID(ctx, id, one); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// RoleDomains
// @description Get domains of a specific role.
// @id role-domains
// @tags role
// @summary Get domains of a specific role.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the role."
// @security ApiKeyAuth
// @success 200 {object} RoleDomainsRet "domains of the role."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /roles/:id/domains [GET]
func RoleDomains(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	domainIds, err := model_service.GetDomainIDsOfRole(ctx, c.Param("id"))
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.RoleDomainsRet{DomainIds: domainIds})
	return
}

// RoleAuthorities
// @description Get authorities of a specific role.
// @id role-authorities
// @tags role
// @summary Get authorities of a specific role.
// @accept protobuf
// @produce protobuf
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
		ProtoBufWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(c.Param("domainId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	menuIds, err := repo.ProjectMany(
		ctx,
		func(m model.RelationDomainRoleMenu) string {
			return m.MenuID.Hex()
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
		ProtoBufWithImplicitError(c, err)
		return
	}
	widgetIds, err := repo.ProjectMany(
		ctx,
		func(m model.RelationDomainRoleMenuWidget) string {
			return m.WidgetID.Hex()
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
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.RoleAuthoritiesRet{
		MenuIds:   menuIds,
		WidgetIds: widgetIds,
	})
	return
}

// AuthorizeRole
// @description Allocate authorities to a specific role using menu-widgets pairs.
// @id role-authorize
// @tags role
// @summary Allocate authorities to a specific role.
// @accept protobuf
// @produce protobuf
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
		ProtoBufWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(c.Param("domainId"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.AuthorizeRoleReq
	if err = c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	// validate domainID.
	if _, err := repo.FindByID[model.Domain](
		ctx,
		domainID,
		options.FindOne().SetProjection(bson.D{{Key: "_id", Value: 1}}),
	); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var requiredMenuWidgets []model.MenuWidget
	// validate menuIDs and widgetIDs if has.
	menuIDs, err := model.ObjectIDPtrsFromHexs(req.MenuIds)
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	widgetIDs, err := model.ObjectIDPtrsFromHexs(req.WidgetIds)
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	if len(menuIDs) > 0 {
		if menus, err := repo.FindMany[model.Menu](
			ctx,
			model.FilterEnabled(bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: menuIDs}}}}),
			options.Find().SetProjection(bson.D{{Key: "_id", Value: 1}}),
		); err != nil {
			ProtoBufWithBadRequest(c, err)
			return
		} else {
			if len(menus) != len(menuIDs) {
				ProtoBufWithBadRequest(c, errors.New("invalid menu id."))
				return
			}
		}
		menuWidgets, err := repo.FindMany[model.MenuWidget](
			ctx,
			model.FilterEnabled(bson.D{{Key: "menuID", Value: bson.D{{Key: "$in", Value: menuIDs}}}}),
			options.Find().SetProjection(bson.D{
				{Key: "_id", Value: 1},
				{Key: "apiMethod", Value: 1},
				{Key: "apiPath", Value: 1},
			}),
		)
		if err != nil {
			ProtoBufWithBadRequest(c, err)
			return
		}
		for _, v := range widgetIDs {
			var required bool
			for _, w := range menuWidgets {
				if v.Hex() == w.ID.Hex() {
					required = true
					requiredMenuWidgets = append(requiredMenuWidgets, w)
					break
				}
			}
			if !required {
				ProtoBufWithBadRequest(c, errors.New("invalid widget id"))
				return
			}
		}
	}
	var relationDomainRoleMenus []model.RelationDomainRoleMenu
	for _, v := range menuIDs {
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
	for _, v := range widgetIDs {
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
		ProtoBufWithImplicitError(c, err)
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
			newPolicies := make([]model.Casbin, 0, len(widgetIDs))
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
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// EnableRole
// @description Enable a role.
// @id role-enable
// @tags role
// @summary Enable a role.
// @accept protobuf
// @produce protobuf
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
		// enable the role.
		if _, err = repo.EnableOneByID[model.Role](sessCtx, id); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// DisableRole
// @description Disable a role.
// @id role-disable
// @tags role
// @summary Disable a role.
// @accept protobuf
// @produce protobuf
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
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// RemoveRole
// @description Remove the role forever, not soft-deletion.
// @id role-remove
// @tags role
// @summary Remove a specific role.
// @produce protobuf
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
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err = casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}
