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

// AddStaff add a new staff account.
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
	ProtoBufWithCreated(c, &dto.AddStaffRet{Id: res.InsertedID.(primitive.ObjectID).Hex()})
	return
}

// ListStaff get a list of staff accounts.
func ListStaff(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	var req dto.ListStaffReq
	if err := c.ShouldBindQuery(&req); err != nil {
		ProtoBufWithBadRequest(c, err)
		return
	}
	var and bson.D
	if req.Account != "" {
		and = append(and, bson.E{Key: "account", Value: req.Account})
	}
	if req.SignIn {
		// TODO need to check
		and = append(and, bson.E{Key: "signInToken", Value: bson.E{Key: "$exists", Value: true}})
		and = append(and, bson.E{Key: "signInToken", Value: bson.E{Key: "$ne", Value: ""}})
	}
	if req.NickName != "" {
		and = append(and, bson.E{Key: "nickName", Value: req.NickName})
	}
	if req.RealName != "" {
		and = append(and, bson.E{Key: "realName", Value: req.RealName})
	}
	if req.Email != "" {
		and = append(and, bson.E{Key: "email", Value: req.Email})
	}
	if req.Phone != "" {
		and = append(and, bson.E{Key: "phone", Value: req.Phone})
	}
	if req.Gender != "" {
		and = append(and, bson.E{Key: "gender", Value: strings.ToUpper(req.Gender)})
	}
	if req.LastSignInIp != "" {
		and = append(and, bson.E{Key: "lastSignInIp", Value: req.LastSignInIp})
	}
	if req.LastSignInTimeBegin > 0 {
		and = append(and, bson.E{Key: "lastSignInTime", Value: bson.E{Key: "$gte", Value: primitive.DateTime(req.LastSignInTimeBegin)}})
	}
	if req.LastSignInTimeEnd > 0 {
		and = append(and, bson.E{Key: "lastSignInTime", Value: bson.E{Key: "$lt", Value: primitive.DateTime(req.LastSignInTimeEnd)}})
	}
	if req.Deleted {
		and = append(and, bson.E{Key: "deletedAt", Value: bson.E{Key: "$exists", Value: req.Deleted}})
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
		SetSkip(req.PerPage * (req.Page - 1)).
		SetLimit(req.PerPage)
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

// ProfileStaff get the profile of a staff account.
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
	ProtoBufWithOK(c, &ret)
	return
}

// EditStaff update a staff.
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
	ProtoBufWithOK(c, &dto.EditStaffRet{Id: id.Hex()})
	return
}

// PatchStaffPassword update the password of a staff account.
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
	ProtoBufWithOK(c, &dto.PatchPasswordRet{Id: id.Hex()})
	return
}

// AuthorizeStaffRolesInDomain update the roles of a staff account in some domain.
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
	ProtoBufWithOK(c, &dto.AuthorizeStaffRolesInDomainRet{Id: id.Hex()})
	return
}

// StaffDomains get domains of a staff.
func StaffDomains(c *gin.Context) {
	ctx := model.WithSession(c.Request.Context(), SessionIdFromGinX(c), model.NewDatetime(time.Now()))
	id, err := model.ObjectIDPtrFromHex(c.Param("id"))
	if err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	domainIDs, err := model_service.GetDomainIDsOfStaff(ctx, id)
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.StaffDomainsRet{DomainIds: model.HexsFromObjectIDPtrs(domainIDs)})
	return
}

// StaffRolesInDomain get roles of a staff in some domain.
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

// EnableStaff enable a staff account.
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
	ProtoBufWithOK(c, &dto.EnableStaffRet{Id: id.Hex()})
	return
}

// DisableStaff disable a staff account.
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
	ProtoBufWithOK(c, &dto.DisableStaffRet{Id: id.Hex()})
	return
}

// RemoveStaff remove the account forever, not soft-deletion.
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
	ProtoBufWithOK(c, &dto.RemoveStaffRet{Id: id.Hex()})
	return
}
