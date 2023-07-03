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

// AddDomainReq arguments to add a domain.
type AddDomainReq struct {
	Name     *string             `form:"name" json:"name" binding:"required" label:"名称"`   // 名称
	Alias    *[]string           `form:"alias" json:"alias" binding:"" label:"别名"`         // 别名
	Seq      *int                `form:"seq" json:"seq" binding:"required" label:"序号"`     // 序号
	Icon     *string             `form:"icon" json:"icon" binding:"" label:"图标"`           // 图标
	Memo     *string             `form:"memo" json:"memo" binding:"" label:"备注"`           // 备注
	ParentID *primitive.ObjectID `form:"parentID" json:"parentID" binding:"" label:"父级Id"` // 父级Id
}

// AddDomain
// @description Add a new domain.
// @id domain-add
// @tags domain
// @summary Add a new domain.
// @accept json
// @produce json
// @param body body AddDomainReq true "required attributes to add a new domain."
// @security ApiKeyAuth
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /domains [POST]
func AddDomain(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req AddDomainReq
	if err := c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Domain](ctx, req, model.CopyForInsert)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	res, err := repo.InsertOne(ctx, &one)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithCreated(c, res.InsertedID.(primitive.ObjectID).Hex())
	return
}

// ListDomainReq search arguments to list domains.
type ListDomainReq struct {
	Name     *string `form:"name" json:"name" binding:"" label:"名称"`                 // 名称
	NeedTree bool    `form:"needTree" json:"needTree" binding:"" label:"数据是否要转为树结构"` // 数据是否要转为树结构
	SortBy   SortBy  `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`         // 字段排序条件
	Deleted  *bool   `form:"deleted" json:"deleted" binging:"" label:"是否被软删除"`       // 是否被软删除
	PaginationArg
}

// DomainListElem view model of listing domains.
type DomainListElem struct {
	ID        *primitive.ObjectID `json:"id,omitempty"`        // ID
	Name      *string             `json:"name,omitempty"`      // 名称
	Alias     *[]string           `json:"alias"`               // 别名
	Seq       *int                `json:"seq,omitempty"`       // 序号
	Icon      *string             `json:"icon,omitempty"`      // 图标
	Memo      *string             `json:"memo,omitempty"`      // 备注
	ParentID  *primitive.ObjectID `json:"parentID,omitempty"`  // 父级ID
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt *primitive.DateTime `json:"createdAt,omitempty"` // 创建时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt *primitive.DateTime `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
	Children  []*DomainListElem   `json:"children,omitempty"`
}

// ListDomainRet return of listing domains.
type ListDomainRet struct {
	PaginationRet
}

// ListDomain
// @description Get a list of domain.
// @id domain-list
// @tags domain
// @summary Get a list of domain.
// @produce json
// @param query query ListDomainReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} DomainListElem "domain list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /domains [GET]
func ListDomain(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req ListDomainReq
	if err := c.ShouldBindQuery(&req); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var and bson.D
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
	total, err := repo.Collection(model.Domain{}).CountDocuments(ctx, filter, options.Count().SetMaxTime(time.Minute))
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.Domain](ctx, filter, opt)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	ret := make([]*DomainListElem, 0, len(res))
	if err = structure.Copy(&ret, res); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	if req.NeedTree {
		ret, err = domainListConvertedToTree(ret, "")
		if err != nil {
			JSONWithImplicitError(c, err)
			return
		}
	}
	JSONWithOK(c, &ListDomainRet{
		PaginationRet{
			List:  ret,
			Total: total,
		},
	})
	return
}

// domainListConvertedToTree convert domain models to domain list views.
func domainListConvertedToTree(menuList []*DomainListElem, parentID string) ([]*DomainListElem, error) {
	siblinDomains := make([]*DomainListElem, 0)
	remainDomains := make([]*DomainListElem, 0)
	for i := 0; i < len(menuList); i++ {
		if (menuList[i].ParentID == nil && parentID == "") || (menuList[i].ParentID != nil && menuList[i].ParentID.Hex() == parentID) {
			siblinDomains = append(siblinDomains, menuList[i])
		} else {
			remainDomains = append(remainDomains, menuList[i])
		}
	}
	sort.Slice(siblinDomains, func(i, j int) bool {
		if siblinDomains[i].Seq != nil && siblinDomains[j].Seq != nil {
			return *siblinDomains[i].Seq < *siblinDomains[j].Seq
		} else {
			return false
		}
	})
	if len(remainDomains) > 0 {
		for i := 0; i < len(siblinDomains); i++ {
			children, err := domainListConvertedToTree(remainDomains, siblinDomains[i].ID.Hex())
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
			siblinDomains[i].Children = children
		}
	}
	return siblinDomains, nil
}

// ProfileDomainRet return of profiling a domain.
type ProfileDomainRet struct {
	ID        *primitive.ObjectID `json:"id,omitempty"`        // ID
	Name      *string             `json:"name,omitempty"`      // 名称
	Alias     *[]string           `json:"alias,omitempty"`     // 别名
	Seq       *int                `json:"seq,omitempty"`       // 序号
	Icon      *string             `json:"icon,omitempty"`      // 图标
	Memo      *string             `json:"memo,omitempty"`      // 备注
	ParentID  *primitive.ObjectID `json:"parentID,omitempty"`  // 父级ID
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty"` // 创建者
	CreatedAt *primitive.DateTime `json:"createdAt,omitempty"` // 创建时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty"` // 更新者
	UpdatedAt *primitive.DateTime `json:"updatedAt,omitempty"` // 更新时间
	DeletedBy *primitive.ObjectID `json:"deletedBy,omitempty"` // 禁用者
	DeletedAt *primitive.DateTime `json:"deletedAt,omitempty"` // 禁用时间
}

// ProfileDomain
// @description Get the profile of a domain.
// @id domain-profile
// @tags domain
// @summary Get infos of a domain.
// @produce json
// @param id path string true "id of the domain."
// @security ApiKeyAuth
// @success 200 {object} ProfileDomainRet "profile of the domain."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /domains/:id [GET]
func ProfileDomain(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := repo.FindByID[model.Domain](ctx, id)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	var ret ProfileDomainRet
	if err = structure.Copy(&ret, one); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, ret)
	return
}

// EditDomainReq arguments to edit a domain.
type EditDomainReq struct {
	Name     *string             `form:"name" json:"name" binding:"required" label:"名称"`   // 名称
	Alias    *[]string           `form:"alias" json:"alias" binding:"" label:"别名"`         // 别名
	Seq      *int                `form:"seq" json:"seq" binding:"required" label:"序号"`     // 序号
	Icon     *string             `form:"icon" json:"icon" binding:"" label:"图标"`           // 图标
	Memo     *string             `form:"memo" json:"memo" binding:"" label:"备注"`           // 备注
	ParentID *primitive.ObjectID `form:"parentID" json:"parentID" binding:"" label:"父级Id"` // 父级Id
}

// EditDomain
// @description Update a specific domain.
// @id domain-update
// @tags domain
// @summary Update a specific domain.
// @accept json
// @produce json
// @param id path string true "id of the domain to update."
// @param body body EditDomainReq true "attributes need to update."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /domains/:id [PUT]
func EditDomain(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var req EditDomainReq
	if err = c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Domain](ctx, req, model.CopyForUpdate)
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

// EnableDomain
// @description Enable a domain.
// @id domain-enable
// @tags domain
// @summary Enable a domain.
// @accept json
// @produce json
// @param id path string true "id of the domain."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /domains/:id/enable [PATCH]
func EnableDomain(c *gin.Context) {
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
		// NOTE: forbiden to update if the target Domain's parent Domain is disabled.
		one, err := repo.FindByID[model.Domain](
			sessCtx,
			id,
			options.FindOne().SetProjection(
				bson.D{
					{Key: "_id", Value: 0},
					{Key: "parentID", Value: 1},
				},
			),
		)
		if err != nil {
			return nil, err
		}
		if one.ParentID != nil {
			parent, err := repo.FindByID[model.Domain](
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
		// enable the domain.
		if _, err = repo.EnableOneByID[model.Domain](sessCtx, id); err != nil {
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

// DisableDomain
// @description Disable a domain.
// @id domain-disable
// @tags domain
// @summary Disable a domain.
// @accept json
// @produce json
// @param id path string true "id of the domain."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /domains/:id/disable [PATCH]
func DisableDomain(c *gin.Context) {
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
		domainIDsNeedToDisabled, err := repo.ProjectDescendantIDs[model.Domain](sessCtx, id)
		if err != nil {
			return nil, err
		} else {
			domainIDsNeedToDisabled = append(domainIDsNeedToDisabled, id)
		}
		if _, err = repo.DisableMany[model.Domain](
			sessCtx,
			bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: domainIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: disable the relative RelationDomainMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{{Key: "domainID", Value: bson.D{{Key: "$in", Value: domainIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: disable the relative RelationDomainMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{{Key: "domainID", Value: bson.D{{Key: "$in", Value: domainIDsNeedToDisabled}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to disable casbin policies that belong to the target domains.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{{Key: "$or", Value: bson.A{
				bson.D{{Key: "$and", Value: bson.A{
					bson.D{{Key: "pType", Value: model.PTypeP}},
					bson.D{{Key: "v1", Value: bson.D{{Key: "$in", Value: model.HexsFromObjectIDPtrs(domainIDsNeedToDisabled)}}}},
				}}}, // role policies.
				bson.D{{Key: "$and", Value: bson.A{
					bson.D{{Key: "pType", Value: model.PTypeG}},
					bson.D{{Key: "v2", Value: bson.D{{Key: "$in", Value: model.HexsFromObjectIDPtrs(domainIDsNeedToDisabled)}}}},
				}}}, // subject policies.
			}}},
		); err != nil {
			return nil, err
		}
		// reload casbin policies
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

// RemoveDomain
// @description remove the domain forever, not soft-deletion.
// @id domain-remove
// @tags domain
// @summary remove the domain forever.
// @produce json
// @param id path string true "id of the domain to remove."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 403 {error} error "forbidden."
// @failure 500 {error} error "internal server error."
// @router /domains/:id [DELETE]
func RemoveDomain(c *gin.Context) {
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
		// NOTE: need to remove target's children.
		domainIDsNeedToRemoved, err := repo.ProjectDescendantIDs[model.Domain](sessCtx, id)
		if err != nil {
			return nil, err
		} else {
			domainIDsNeedToRemoved = append(domainIDsNeedToRemoved, id)
		}
		if _, err = repo.DeleteMany[model.Domain](
			sessCtx,
			bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: domainIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: remove the relative RelationDomainMenus.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenu](
			sessCtx,
			bson.D{{Key: "domainID", Value: bson.D{{Key: "$in", Value: domainIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: remove the relative RelationDomainMenuWidgets.
		if _, err = repo.DeleteMany[model.RelationDomainRoleMenuWidget](
			sessCtx,
			bson.D{{Key: "domainID", Value: bson.D{{Key: "$in", Value: domainIDsNeedToRemoved}}}},
		); err != nil {
			return nil, err
		}
		// NOTE: need to remove casbin policies that belong to the target domains.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{{Key: "$or", Value: bson.A{
				bson.D{{Key: "$and", Value: bson.A{
					bson.D{{Key: "pType", Value: model.PTypeP}},
					bson.D{{Key: "v1", Value: bson.D{{Key: "$in", Value: model.HexsFromObjectIDPtrs(domainIDsNeedToRemoved)}}}},
				}}}, // role policies.
				bson.D{{Key: "$and", Value: bson.A{
					bson.D{{Key: "pType", Value: model.PTypeG}},
					bson.D{{Key: "v2", Value: bson.D{{Key: "$in", Value: model.HexsFromObjectIDPtrs(domainIDsNeedToRemoved)}}}},
				}}}, // subject policies.
			}}},
		); err != nil {
			return nil, err
		}
		// reload casbin policies
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
