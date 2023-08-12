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
	"github.com/sfshf/exert-golang/service/captcha"
	"github.com/sfshf/exert-golang/service/model_service"
	"github.com/sfshf/exert-golang/util/jwt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// GetPicCaptcha
// @description Get a new picture captcha id and base64 string of the picture, and delete the obsolete captcha of the `obsoleteId`, if has.
// @id get-pic-captcha
// @tags auth
// @summary Get a picture captcha.
// @produce protobuf
// @param obsoleteId query string false "an obsolete captcha id."
// @success 200 {object} GetPicCaptchaRet "captcha id and picture."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /picCaptcha [GET]
func GetPicCaptcha(c *gin.Context) {
	if !captcha.PicCaptchaEnabled() {
		ProtoBufWithOK(c, &dto.GetPicCaptchaRet{})
		return
	}
	_ = captcha.PicCaptcha().Store.Get(c.Query("obsoleteId"), true)
	id, b64s, err := captcha.PicCaptcha().Generate()
	if err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.GetPicCaptchaRet{
		PicCaptchaId:   id,
		PicCaptchaB64S: b64s,
	})
	return
}

// GetPicCaptchaAnswer
// @description Get the answer code of a picture captcha with the captcha id.
// @id get-pic-captcha-answer
// @tags auth
// @summary Get the answer code of a picture captcha.
// @produce protobuf
// @param id query string true "a captcha id."
// @security ApiKeyAuth
// @success 200 {string} string "captcha answer code"
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /picCaptchaAnswer [GET]
func GetPicCaptchaAnswer(c *gin.Context) {
	if !captcha.PicCaptchaEnabled() {
		ProtoBufWithOK(c, &dto.GetPicCaptchaAnswerRet{})
		return
	}
	if model_service.IsRoot(SessionIdFromGinX(c)) {
		ProtoBufWithUnauthorized(c, model_service.ErrUnauthorized)
		return
	}
	answer := captcha.PicCaptcha().Store.Get(c.Query("id"), false)
	if answer == "" {
		ProtoBufWithBadRequest(c, model_service.ErrInvalidCaptcha)
		return
	}
	ProtoBufWithOK(c, &dto.GetPicCaptchaAnswerRet{Answer: answer})
	return
}

// SignIn
// @description Sign in with account and password, supporting picture captcha authentication.
// @id sign-in
// @tags auth
// @summary Sign in.
// @accept protobuf
// @produce protobuf
// @param body body SignInReq true "required attributes to sign in."
// @success 200 {object} SignInRet "sign in token and expiry time."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /signIn [POST]
func SignIn(conf Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx := c.Request.Context()
		var req dto.SignInReq
		if err := c.ShouldBindBodyWith(&req, binding.ProtoBuf); err != nil {
			log.Println(err)
			ProtoBufWithBadRequest(c, err)
			return
		}
		if !captcha.VerifyPictureCaptcha(req.PicCaptchaId, req.PicCaptchaAnswer) {
			log.Println(model_service.ErrInvalidCaptcha)
			ProtoBufWithBadRequest(c, model_service.ErrInvalidCaptcha)
			return
		}
		staff, err := model_service.VerifyAccountAndPassword(ctx, req.Account, req.Password)
		if err != nil {
			log.Println(err)
			ProtoBufWithUnauthorized(c, err)
			return
		}
		clientIp := c.ClientIP()
		if staff.SignInIpWhitelist != nil {
			var validIp bool
			for _, ip := range *staff.SignInIpWhitelist {
				if ip == clientIp {
					validIp = true
					break
				}
			}
			if !validIp {
				log.Println(model_service.ErrUnauthorized)
				ProtoBufWithUnauthorized(c, model_service.ErrUnauthorized)
				return
			}
		}
		if !conf.JWTAuth.Enable {
			ProtoBufWithOK(c, &dto.SignInRet{})
			return
		}
		ctx = model.WithSession(ctx, staff.ID, model.NewDatetime(time.Now()))
		// TODO need cache staff's log-in status by Redis command `setbit` ...
		token, err := jwt.GenerateToken(
			jwt.DefaultSigningMethod,
			conf.JWTAuth.SigningKey,
			jwt.NewJwtClaims(
				staff.ID.Hex(),
				"",
				"",
				time.Duration(conf.JWTAuth.Expired),
			),
		)
		if err != nil {
			log.Println(err)
			ProtoBufWithImplicitError(c, err)
			return
		}
		if err = model_service.SignIn(ctx, clientIp, token); err != nil {
			log.Println(err)
			ProtoBufWithImplicitError(c, err)
			return
		}
		ProtoBufWithOK(c, &dto.SignInRet{
			Token:     token,
			ExpiresAt: int64(conf.JWTAuth.Expired),
		})
		return
	}
}

// GetOwnDomains
// @description Get own domains of the session account.
// @id get-own-domains
// @tags auth
// @summary Get own domains.
// @accept protobuf
// @produce protobuf
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /getOwnDomains [GET]
func GetOwnDomains(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	if model_service.IsRoot(sessionID) {
		ProtoBufWithOK(c, &dto.GetOwnDomainsRet{})
		return
	}
	ctx := model.WithSession(c.Request.Context(), sessionID, model.NewDatetime(time.Now()))
	domainIDs, err := model_service.GetDomainIDsOfStaff(ctx, sessionID)
	if err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	domains, err := repo.FindMany[model.Domain](
		ctx,
		bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: domainIDs}}}},
		options.Find().SetProjection(bson.D{
			{Key: "_id", Value: 1},
			{Key: "name", Value: 1},
			{Key: "alias", Value: 1},
			{Key: "icon", Value: 1},
		}),
	)
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	domainsLen := len(domains)
	ret := make([]*dto.GetOwnDomainsElem, 0, domainsLen)
	if err = model.Copy(&ret, domains); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.GetOwnDomainsRet{List: ret, Total: int64(domainsLen)})
	return
}

// GetOwnRoles
// @description Get own roles of the session account.
// @id get-own-roles
// @tags auth
// @summary Get own roles.
// @accept protobuf
// @produce protobuf
// @param body body GetOwnRolesReq true "required attributes to get own roles."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /getOwnRoles [GET]
func GetOwnRoles(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	if model_service.IsRoot(sessionID) {
		ProtoBufWithOK(c, &dto.GetOwnRolesRet{})
		return
	}
	ctx := model.WithSession(c.Request.Context(), sessionID, model.NewDatetime(time.Now()))
	var err error
	var req dto.GetOwnRolesReq
	if err = c.ShouldBindQuery(&req); err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(req.DomainId)
	if err != nil {
		log.Println(err)
		ProtoBufWithBadRequest(c, err)
		return
	}
	roleIDs, err := model_service.GetRoleIDsOfStaffInDomain(ctx, domainID, sessionID)
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	if len(roleIDs) == 0 {
		ProtoBufWithBadRequest(c, errors.New("invalid account: has no roles in the domain"))
		return
	}
	roles, err := repo.FindMany[model.Role](
		ctx,
		bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: roleIDs}}}},
		options.Find().SetProjection(bson.D{
			{Key: "_id", Value: 1},
			{Key: "name", Value: 1},
			{Key: "alias", Value: 1},
			{Key: "icon", Value: 1},
		}),
	)
	if err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	rolesLen := len(roles)
	ret := make([]*dto.GetOwnRolesElem, 0, rolesLen)
	if err = model.Copy(&ret, roles); err != nil {
		log.Println(err)
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.GetOwnRolesRet{List: ret, Total: int64(rolesLen)})
	return
}

// GetOwnMenus
// @description Get own menus of the session account.
// @id get-own-menus
// @tags auth
// @summary Get own menus.
// @accept protobuf
// @produce protobuf
// @param query query GetOwnMenusReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /getOwnMenus [GET]
func GetOwnMenus(conf Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		sessionID := SessionIdFromGinX(c)
		ctx := model.WithSession(c.Request.Context(), sessionID, model.NewDatetime(time.Now()))
		var err error
		var req dto.GetOwnMenusReq
		if err = c.ShouldBindQuery(&req); err != nil {
			ProtoBufWithBadRequest(c, err)
			return
		}
		if req.DomainId == "" || req.RoleId == "" {
			if !model_service.IsRoot(sessionID) {
				ProtoBufWithBadRequest(c, errors.New("invalid account: without domain and role"))
				return
			}
			// find all menus when session id is root.
			menuViews, err := model_service.GetFilteredMenuViews(ctx, bson.D{})
			if err != nil {
				ProtoBufWithImplicitError(c, err)
				return
			}
			ProtoBufWithOK(c, &dto.GetOwnMenusRet{Total: int64(len(menuViews)), List: menuViews})
			return
		}
		domainID, err := model.ObjectIDPtrFromHex(req.DomainId)
		if err != nil {
			log.Println(err)
			ProtoBufWithBadRequest(c, err)
			return
		}
		roleID, err := model.ObjectIDPtrFromHex(req.RoleId)
		if err != nil {
			log.Println(err)
			ProtoBufWithBadRequest(c, err)
			return
		}
		menuViews, err := model_service.GetMenuAndFilteredWidgetViewsByDomainIDAndRoleID(ctx, domainID, roleID)
		if err != nil {
			ProtoBufWithImplicitError(c, err)
			return
		}
		// NOTE: need to regenerate jwt token, and notify the frontend
		token, err := jwt.GenerateToken(
			jwt.DefaultSigningMethod,
			conf.JWTAuth.SigningKey,
			jwt.NewJwtClaims(
				sessionID.Hex(),
				domainID.Hex(),
				roleID.Hex(),
				time.Duration(conf.JWTAuth.Expired),
			),
		)
		if err != nil {
			log.Println(err)
			ProtoBufWithImplicitError(c, err)
			return
		}
		token = "Bearer " + token
		// NOTE: resign in
		if err = model_service.SignIn(ctx, c.ClientIP(), token); err != nil {
			log.Println(err)
			ProtoBufWithImplicitError(c, err)
			return
		}
		c.Header("Access-Control-Expose-Headers", "Authorization")
		c.Header("Authorization", token)
		ProtoBufWithOK(c, &dto.GetOwnMenusRet{Total: int64(len(menuViews)), List: menuViews})
		return
	}
}

// SignOut
// @description Sign out the session account.
// @id sign-out
// @tags auth
// @summary Sign out.
// @produce protobuf
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /signOut [POST]
func SignOut(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	if err := model_service.SignOut(
		model.WithSession(
			c.Request.Context(),
			sessionID,
			model.NewDatetime(time.Now()),
		),
	); err != nil {
		ProtoBufWithImplicitError(c, err)
		return
	}
	ProtoBufWithOK(c, &dto.SignOutRet{Id: sessionID.Hex()})
	return
}
