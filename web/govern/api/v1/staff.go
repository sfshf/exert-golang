package api

import (
	"errors"
	"log"
	"strings"
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

// AddStaff
// @description add a new staff account.
// @id staff-add
// @tags staff
// @summary add a new staff account.
// @accept protobuf
// @produce protobuf
// @param body body AddStaffReq true "required attributes to add a staff."
// @success 201 {string} string "created successfully."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs [POST]
func AddStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.AddStaffReq
	if err := c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := model.CopyToModelWithSessionContext[model.Staff](ctx, &req, model.CopyForInsert)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	} else {
		salt := model.NewPasswdSaltPtr()
		one.Password = model.PasswdPtr(req.Password, *salt)
		one.PasswordSalt = salt
	}
	res, err := repo.InsertOne(ctx, &one)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithCreated(c, res.InsertedID.(primitive.ObjectID).Hex())
	return
}

// ListStaffReq  request parameter to list staffs.
type ListStaffReq struct {
	Account             *string `form:"account" json:"account" binding:"" label:"账号"`                                              // 账号
	SignIn              *bool   `form:"signIn" json:"signIn" binding:"" label:"是否已登录"`                                             // 是否已登录
	NickName            *string `form:"nickName" json:"nickName" binding:"" label:"昵称"`                                            // 昵称
	RealName            *string `form:"realName" json:"realName" binding:"" label:"真实姓名"`                                          // 真实姓名
	Email               *string `form:"email" json:"email" binding:"" label:"邮箱"`                                                  // 邮箱
	Phone               *string `form:"phone" json:"phone" binding:"" label:"手机号"`                                                 // 手机号
	Gender              *string `form:"gender" json:"gender" binding:"omitempty,oneof=Male Female" label:"性别"`                     // 性别
	LastSignInIp        *string `form:"lastSignInIp" json:"lastSignInIp" binding:"" label:"最近登录IP"`                                // 最近登录IP
	LastSignInTimeBegin *int64  `form:"lastSignInTimeBegin" json:"LastSignInTimeBegin" binding:"omitempty,gte=0" label:"最近登录时间起始"` // 最近登录时间起始
	LastSignInTimeEnd   *int64  `form:"lastSignInTimeEnd" json:"lastSignInTimeEnd" binding:"omitempty,gte=0" label:"最近登录时间结束"`     // 最近登录时间结束
	SortBy              SortBy  `form:"sortBy" json:"sortBy" binding:"" label:"字段排序条件"`                                            // 字段排序条件
	Deleted             *bool   `form:"deleted" json:"deleted" binging:"" label:"是否被软删除"`                                          // 是否被软删除
	PaginationArg
}

// ListStaff
// @description get a list of staff accounts.
// @id staff-list
// @tags staff
// @summary get a list of staff accounts.
// @produce protobuf
// @param query query ListStaffReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {object} StaffListElem "staff list."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs [GET]
func ListStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req ListStaffReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.Account != nil {
		and = append(and, bson.E{Key: "account", Value: req.Account})
	}
	if req.SignIn != nil {
		// TODO need to check
		and = append(and, bson.E{Key: "signInToken", Value: bson.E{Key: "$exists", Value: true}})
		and = append(and, bson.E{Key: "signInToken", Value: bson.E{Key: "$ne", Value: ""}})
	}
	if req.NickName != nil {
		and = append(and, bson.E{Key: "nickName", Value: req.NickName})
	}
	if req.RealName != nil {
		and = append(and, bson.E{Key: "realName", Value: req.RealName})
	}
	if req.Email != nil {
		and = append(and, bson.E{Key: "email", Value: req.Email})
	}
	if req.Phone != nil {
		and = append(and, bson.E{Key: "phone", Value: req.Phone})
	}
	if req.Gender != nil {
		and = append(and, bson.E{Key: "gender", Value: strings.ToUpper(*req.Gender)})
	}
	if req.LastSignInIp != nil {
		and = append(and, bson.E{Key: "lastSignInIp", Value: req.LastSignInIp})
	}
	if req.LastSignInTimeBegin != nil {
		and = append(and, bson.E{Key: "lastSignInTime", Value: bson.E{Key: "$gte", Value: primitive.DateTime(*req.LastSignInTimeBegin)}})
	}
	if req.LastSignInTimeEnd != nil {
		and = append(and, bson.E{Key: "lastSignInTime", Value: bson.E{Key: "$lt", Value: primitive.DateTime(*req.LastSignInTimeEnd)}})
	}
	if req.Deleted != nil {
		and = append(and, bson.E{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: *req.Deleted}})
	}
	filter := make(bson.D, 0)
	if len(and) > 0 {
		filter = append(filter, bson.E{Key: "$and", Value: and})
	}
	total, err := repo.Collection(model.Staff{}).CountDocuments(ctx, filter)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	opt := options.Find().
		SetSort(OrderByToBsonD(req.SortBy)).
		SetSkip(req.PaginationArg.PerPage * (req.PaginationArg.Page - 1)).
		SetLimit(req.PaginationArg.PerPage)
	res, err := repo.FindMany[model.Staff](ctx, filter, opt)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ret := make([]*dto.StaffListElem, 0, len(res))
	if err = model.Copy(&ret, res); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	} else {
		for _, v := range ret {
			if v.SignInToken != "" {
				v.SignIn = true
			}
		}
	}
	ProtoBufWithOK(c, &dto.ListStaffRet{List: ret, Total: total})
	return
}

// ProfileStaff
// @description get the profile of a staff account.
// @id staff-profile
// @tags staff
// @summary get infos of a staff account.
// @produce protobuf
// @param id path string true "id of the staff account."
// @security ApiKeyAuth
// @success 200 {object} ProfileStaffRet "profile of the staff."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id [GET]
func ProfileStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	one, err := repo.FindByID[model.Staff](ctx, id)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	var ret dto.ProfileStaffRet
	if err = model.Copy(&ret, one); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	} else {
		if ret.SignInToken != "" {
			ret.SignIn = true
		}
	}
	ProtoBufWithOK(c, ret)
	return
}

// EditStaff
// @description update a staff.
// @id staff-update
// @tags staff
// @summary update a staff.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff account to update."
// @param body body EditStaffReq true "attributes need to update a staff."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id [PUT]
func EditStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.EditStaffReq
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
	ProtoBufWithOK(c, nil)
	return
}

// PatchStaffPassword
// @description update the password of a staff account.
// @id staff-update-password
// @tags staff
// @summary update the password of a staff account.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff account to update."
// @param body body PatchPasswordReq true "attributes need to update the password."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id/password [PATCH]
func PatchStaffPassword(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	sessionDT := model.NewDatetime(time.Now())
	ctx := model.WithSession(c.Request.Context(), sessionID, sessionDT)
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.PatchPasswordReq
	if err = c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	oldM, err := repo.FindByID[model.Staff](
		ctx,
		id,
		options.FindOne().SetProjection(bson.D{
			{Key: "password", Value: 1},
			{Key: "passwordSalt", Value: 1},
		}),
	)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	oldPassword := model.PasswdPtr(req.OldPassword, *oldM.PasswordSalt)
	if *oldPassword != *oldM.Password {
		ProtoBufWithImplicitError(c, model_service.ErrInvalidArguments)
		return
	}
	newSalt := model.NewPasswdSaltPtr()
	one := &model.Staff{
		Model: &model.Model{
			UpdatedBy: sessionID,
			UpdatedAt: sessionDT,
		},
		Password:     model.PasswdPtr(req.NewPassword, *newSalt),
		PasswordSalt: newSalt,
	}
	if _, err = repo.UpdateOneModelByID(ctx, id, one); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// AuthorizeStaffRolesInDomain
// @description update the roles of a staff account in some domain.
// @id staff-update-roles
// @tags staff
// @summary update the roles of a staff account in some domain.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff account to update."
// @param domainId path string true "id of some domain."
// @param body body PatchStaffRolesReq true "attributes need to update the roles."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id/domains/:domainId/roles [POST]
func AuthorizeStaffRolesInDomain(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	sessionDT := model.NewDatetime(time.Now())
	ctx := model.WithSession(c.Request.Context(), sessionID, sessionDT)
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(c.Param("domainId"))
	if err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	var req dto.AuthorizeStaffRolesInDomainReq
	if err = c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	// validate domainID.
	if _, err := repo.FindByID[model.Domain](
		ctx,
		domainID,
		options.FindOne().SetProjection(bson.D{{Key: "_id", Value: 1}}),
	); err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	// validate roleIDs if has.
	roleIDs, err := model.ObjectIDPtrsFromHexs(req.RoleIds)
	if err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	if len(roleIDs) > 0 {
		if roles, err := repo.FindMany[model.Role](
			ctx,
			model.FilterEnabled(bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: roleIDs}}}}),
			options.Find().SetProjection(bson.D{{Key: "_id", Value: 1}}),
		); err != nil {
			log.Println(err)
			ProtoBufWithBadRequest(c, err)
			return
		} else {
			if len(roles) != len(roleIDs) {
				log.Println(err)
				ProtoBufWithBadRequest(c, errors.New("invalid role id."))
				return
			}
		}
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// NOTE: need to remove relative casbin policies, and reload policies.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeG},
				{Key: "v0", Value: id.Hex()},
				{Key: "v2", Value: domainID.Hex()},
			},
		); err != nil {
			return nil, err
		}
		if len(roleIDs) > 0 {
			newPolicies := make([]model.Casbin, 0, len(roleIDs))
			for _, v := range roleIDs {
				// reference to https://casbin.org/docs/rbac-with-domains
				newPolicies = append(newPolicies, model.Casbin{
					Model: &model.Model{
						ID:        model.NewObjectIDPtr(),
						CreatedBy: sessionID,
						CreatedAt: sessionDT,
					},
					PType: model.StringPtr(model.PTypeG),
					V0:    model.StringPtr(id.Hex()),
					V1:    model.StringPtr(v.Hex()),
					V2:    model.StringPtr(domainID.Hex()),
				})
			}
			if _, err = repo.InsertMany[model.Casbin](sessCtx, newPolicies); err != nil {
				return nil, err
			}
		}
		return nil, nil
	}); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	// NOTE: need to reload casbin policies.
	if err := casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// StaffDomains
// @description get domains of a staff.
// @id staff-domains
// @tags staff
// @summary get domains of a staff.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id/domains [GET]
func StaffDomains(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	domainIDs, err := model_service.GetDomainIDsOfStaff(ctx, id)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.StaffDomainsRet{DomainIds: model.HexsFromObjectIDPtrs(domainIDs)})
	return
}

// StaffRolesInDomain
// @description get roles of a staff in some domain.
// @id staff-roles
// @tags staff
// @summary get roles of a staff in some domain.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff."
// @param domainId path string true "id of some domain."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id/domains/:domainId/roles [GET]
func StaffRolesInDomain(c *gin.Context) {
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
	roleIDs, err := model_service.GetRoleIDsOfStaffInDomain(ctx, domainID, id)
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.StaffRolesInDomainRet{RoleIds: model.HexsFromObjectIDPtrs(roleIDs)})
	return
}

// EnableStaff
// @description enable a staff account.
// @id staff-enable
// @tags staff
// @summary enable a staff account.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff account."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id/enable [PATCH]
func EnableStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	if _, err = repo.EnableOneByID[model.Staff](ctx, id); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// DisableStaff
// @description disable a staff account.
// @id staff-disable
// @tags staff
// @summary disable a staff account.
// @accept protobuf
// @produce protobuf
// @param id path string true "id of the staff account."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id/disable [PATCH]
func DisableStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	if model_service.IsRoot(id) {
		ProtoBufWithForbidden(c, model_service.ErrForbidden)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		if _, err = repo.DisableOneByID[model.Staff](sessCtx, id); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies, and reload policies.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeG},
				{Key: "v0", Value: id.Hex()},
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
	if err := casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}

// RemoveStaff
// @description remove the account forever, not soft-deletion.
// @id staff-remove
// @tags staff
// @summary remove the account forever.
// @produce protobuf
// @param id path string true "id of the account to be removed."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 403 {error} error "forbidden."
// @failure 500 {error} error "internal server error."
// @router /staffs/:id [DELETE]
func RemoveStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	if model_service.IsRoot(id) {
		ProtoBufWithForbidden(c, model_service.ErrForbidden)
		return
	}
	session, err := repo.Client().StartSession()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	defer session.EndSession(ctx)
	if _, err = session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		if _, err = repo.DeleteByID[model.Staff](sessCtx, id); err != nil {
			return nil, err
		}
		// NOTE: need to remove relative casbin policies, and reload policies.
		if _, err = repo.DeleteMany[model.Casbin](
			sessCtx,
			bson.D{
				{Key: "pType", Value: model.PTypeG},
				{Key: "v0", Value: id.Hex()},
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
	if err := casbin.CasbinEnforcer().LoadPolicy(); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, nil)
	return
}
