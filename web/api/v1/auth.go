package api

import (
	"errors"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/captcha"
	"github.com/sfshf/exert-golang/service/casbin"
	"github.com/sfshf/exert-golang/service/model_service"
	"github.com/sfshf/exert-golang/util/jwt"
	"github.com/sfshf/exert-golang/util/structure"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// GetPicCaptchaRet return of get picture captcha.
type GetPicCaptchaRet struct {
	PicCaptchaId   string `json:"picCaptchaId"`
	PicCaptchaB64s string `json:"picCaptchaB64s"`
}

// GetPicCaptcha
// @description Get a new picture captcha id and base64 string of the picture, and delete the obsolete captcha of the `obsoleteId`, if has.
// @id get-pic-captcha
// @tags auth
// @summary Get a picture captcha.
// @produce json
// @param obsoleteId query string false "an obsolete captcha id."
// @success 200 {object} GetPicCaptchaRet "captcha id and picture."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /picCaptcha [GET]
func GetPicCaptcha(c *gin.Context) {
	if !captcha.PicCaptchaEnabled() {
		JSONWithOK(c, nil)
		return
	}
	_ = captcha.PicCaptcha().Store.Get(c.Query("obsoleteId"), true)
	id, b64s, err := captcha.PicCaptcha().Generate()
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &GetPicCaptchaRet{
		PicCaptchaId:   id,
		PicCaptchaB64s: b64s,
	})
	return
}

// GetPicCaptchaAnswerRet return of get picture captcha answer.
type GetPicCaptchaAnswerRet struct {
	Answer string `json:"answer"`
}

// GetPicCaptchaAnswer
// @description Get the answer code of a picture captcha with the captcha id.
// @id get-pic-captcha-answer
// @tags auth
// @summary Get the answer code of a picture captcha.
// @produce json
// @param id query string true "a captcha id."
// @security ApiKeyAuth
// @success 200 {string} string "captcha answer code"
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /picCaptchaAnswer [GET]
func GetPicCaptchaAnswer(c *gin.Context) {
	if !captcha.PicCaptchaEnabled() {
		JSONWithOK(c, nil)
		return
	}
	if model_service.IsRoot(SessionIdFromGinX(c)) {
		JSONWithUnauthorized(c, model_service.ErrUnauthorized)
		return
	}
	answer := captcha.PicCaptcha().Store.Get(c.Query("id"), false)
	if answer == "" {
		JSONWithBadRequest(c, model_service.ErrInvalidCaptcha)
		return
	}
	JSONWithOK(c, &GetPicCaptchaAnswerRet{Answer: answer})
	return
}

// SignInReq sign-in request arguments.
type SignInReq struct {
	Account          string `json:"account" binding:"gte=2,lte=32"`
	Password         string `json:"password" binding:"gte=8,lte=32"`
	PicCaptchaId     string `json:"picCaptchaId" binding:"required"`
	PicCaptchaAnswer string `json:"picCaptchaAnswer" binding:"required"`
}

// SignInRet return of sign-in.
type SignInRet struct {
	Id        string `json:"id"`
	Token     string `json:"token"`
	ExpiresAt int64  `json:"expiresAt"`
}

// SignIn
// @description Sign in with account and password, supporting picture captcha authentication.
// @id sign-in
// @tags auth
// @summary Sign in.
// @accept json
// @produce json
// @param body body SignInReq true "required attributes to sign in."
// @success 200 {object} SignInRet "sign in token and expiry time."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /signIn [POST]
func SignIn(conf Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx := c.Request.Context()
		var req SignInReq
		if err := c.ShouldBindBodyWith(&req, binding.JSON); err != nil {
			JSONWithBadRequest(c, err)
			return
		}
		if !captcha.VerifyPictureCaptcha(req.PicCaptchaId, req.PicCaptchaAnswer) {
			JSONWithBadRequest(c, model_service.ErrInvalidCaptcha)
			return
		}
		staff, err := model_service.VerifyAccountAndPassword(ctx, req.Account, req.Password)
		if err != nil {
			JSONWithUnauthorized(c, err)
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
				JSONWithUnauthorized(c, model_service.ErrUnauthorized)
				return
			}
		}
		if !conf.JWTAuth.Enable {
			JSONWithOK(c, nil)
			return
		}
		ctx = model.WithSession(ctx, staff.ID, model.NewDatetime(time.Now()))
		// TODO need cache staff's log-in status by Redis command `setbit` ...
		token, err := jwt.GenerateToken(
			jwt.DefaultSigningMethod,
			conf.JWTAuth.SigningKey,
			jwt.NewJwtClaims(
				staff.ID.Hex(),
				time.Duration(conf.JWTAuth.Expired),
			),
		)
		if err != nil {
			JSONWithImplicitError(c, err)
			return
		}
		if err = model_service.SignIn(ctx, clientIp, token); err != nil {
			JSONWithImplicitError(c, err)
			return
		}
		JSONWithOK(c, &SignInRet{
			Id:        staff.ID.Hex(),
			Token:     token,
			ExpiresAt: conf.JWTAuth.Expired,
		})
		return
	}
}

// GetOwnDomainsElem domain element.
type GetOwnDomainsElem struct {
	ID    *primitive.ObjectID `json:"id"`              // ID
	Name  string              `json:"name,omitempty"`  // 名称
	Alias *[]string           `json:"alias,omitempty"` // 别名
	Icon  string              `json:"icon,omitempty"`  // 图标
}

// GetOwnDomainsRet return of request to get own domains.
type GetOwnDomainsRet struct {
	PaginationRet
}

// GetOwnDomains
// @description Get own domains of the session account.
// @id get-own-domains
// @tags auth
// @summary Get own domains.
// @accept json
// @produce json
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /getOwnDomains [GET]
func GetOwnDomains(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	if model_service.IsRoot(sessionID) {
		JSONWithOK(c, nil)
		return
	}
	ctx := model.WithSession(c.Request.Context(), sessionID, model.NewDatetime(time.Now()))
	domainIds := casbin.GetDomainsBySubject(sessionID.Hex())
	if len(domainIds) == 0 {
		JSONWithBadRequest(c, errors.New("invalid account: not belong to any domain"))
		return
	}
	domainIDs, err := model.ObjectIDPtrsFromHexs(domainIds)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	filter := bson.D{{Key: "enable", Value: true}}
	if len(domainIDs) > 0 {
		filter = append(filter, bson.E{Key: "_id", Value: bson.D{{Key: "$in", Value: domainIDs}}})
	}
	domains, err := repo.FindMany[model.Domain](
		ctx,
		filter,
		options.Find().SetProjection(bson.D{
			{Key: "_id", Value: 1},
			{Key: "name", Value: 1},
			{Key: "alias", Value: 1},
			{Key: "icon", Value: 1},
		}),
	)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	domainsLen := len(domains)
	ret := make([]GetOwnDomainsElem, 0, domainsLen)
	if err = structure.Copy(&ret, &domains); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &GetOwnDomainsRet{
		PaginationRet{
			List:  ret,
			Total: int64(domainsLen),
		},
	})
	return
}

// GetOwnRolesReq request parameters.
type GetOwnRolesReq struct {
	DomainId string `form:"domainId" json:"domainId" binding:"required" label:"域Id"` // 域Id
}

// GetOwnRolesElem element to return.
type GetOwnRolesElem struct {
	ID    *primitive.ObjectID `json:"id"`              // ID
	Name  string              `json:"name,omitempty"`  // 名称
	Alias *[]string           `json:"alias,omitempty"` // 别名
	Icon  string              `json:"icon,omitempty"`  // 图标
}

// GetOwnRolesRet return of get own roles.
type GetOwnRolesRet struct {
	PaginationRet
}

// GetOwnRoles
// @description Get own roles of the session account.
// @id get-own-roles
// @tags auth
// @summary Get own roles.
// @accept json
// @produce json
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
		JSONWithOK(c, nil)
		return
	}
	ctx := model.WithSession(c.Request.Context(), sessionID, model.NewDatetime(time.Now()))
	var err error
	var req GetOwnRolesReq
	if err = c.ShouldBindQuery(&req); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	domainID, err := model.ObjectIDPtrFromHex(req.DomainId)
	if err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	roleIds := casbin.CasbinEnforcer().GetRolesForUserInDomain(sessionID.Hex(), domainID.Hex())
	if len(roleIds) == 0 {
		JSONWithBadRequest(c, errors.New("invalid account: has no roles"))
		return
	}
	roleIDs, err := model.ObjectIDPtrsFromHexs(roleIds)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	filter := bson.D{{Key: "enable", Value: true}}
	if len(roleIDs) > 0 {
		filter = append(filter, bson.E{Key: "_id", Value: bson.D{{Key: "$in", Value: roleIDs}}})
	}
	roles, err := repo.FindMany[model.Role](
		ctx,
		filter,
		options.Find().SetProjection(bson.D{
			{Key: "_id", Value: 1},
			{Key: "name", Value: 1},
			{Key: "alias", Value: 1},
			{Key: "icon", Value: 1},
		}),
	)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	rolesLen := len(roles)
	ret := make([]GetOwnRolesElem, 0, rolesLen)
	if err = structure.Copy(&ret, &roles); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &GetOwnRolesRet{
		PaginationRet{
			List:  ret,
			Total: int64(rolesLen),
		},
	})
	return
}

// GetOwnMenusReq request parameters.
type GetOwnMenusReq struct {
	RoleId string `form:"roleId" json:"roleId" binding:"" label:"角色Id"` // 角色Id
}

// GetOwnMenusElem element to return.
type GetOwnMenusElem struct {
	ID        *primitive.ObjectID `json:"id" yaml:"id"`                 // ID
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty" yaml:"-"` // 创建者
	CreatedAt primitive.DateTime  `json:"createdAt,omitempty" yaml:"-"` // 创建时间、注册时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty" yaml:"-"` // 更新者
	UpdatedAt primitive.DateTime  `json:"updatedAt,omitempty" yaml:"-"` // 更新时间
	Name      string              `json:"name,omitempty" yaml:"name,omitempty"`
	Seq       int                 `json:"seq,omitempty" yaml:"seq,omitempty"`
	Icon      string              `json:"icon,omitempty" yaml:"icon,omitempty"`
	Route     string              `json:"route,omitempty" yaml:"route,omitempty"`
	Memo      string              `json:"memo,omitempty" yaml:"memo,omitempty"`
	ParentID  *primitive.ObjectID `json:"parentID,omitempty" yaml:"parentID,omitempty"`
	Show      bool                `json:"show,omitempty" yaml:"show,omitempty"`     // true: show; false/nil: hide.
	Enable    bool                `json:"enable,omitempty" yaml:"enable,omitempty"` // true: enable; false/nil: disable.
	Widgets   []MenuWidgetElem    `json:"widgets,omitempty" yaml:"widgets,omitempty"`
}

// MenuWidgetElem menu-widget element.
type MenuWidgetElem struct {
	ID        *primitive.ObjectID `json:"id" yaml:"id"`                 // ID
	CreatedBy *primitive.ObjectID `json:"createdBy,omitempty" yaml:"-"` // 创建者
	CreatedAt primitive.DateTime  `json:"createdAt,omitempty" yaml:"-"` // 创建时间、注册时间
	UpdatedBy *primitive.ObjectID `json:"updatedBy,omitempty" yaml:"-"` // 更新者
	UpdatedAt primitive.DateTime  `json:"updatedAt,omitempty" yaml:"-"` // 更新时间
	Name      string              `json:"name,omitempty" yaml:"name,omitempty"`
	Seq       int                 `json:"seq,omitempty" yaml:"seq,omitempty"`
	Icon      string              `json:"icon,omitempty" yaml:"icon,omitempty"`
	ApiMethod string              `json:"apiMethod,omitempty" yaml:"apiMethod,omitempty"`
	ApiPath   string              `json:"apiPath,omitempty" yaml:"apiPath,omitempty"`
	Memo      string              `json:"memo,omitempty" yaml:"memo,omitempty"`
	Show      bool                `json:"show,omitempty" yaml:"show,omitempty"`     // true: show; false/nil: hide.
	Enable    bool                `json:"enable,omitempty" yaml:"enable,omitempty"` // true: enable; false/nil: disable.
}

// GetOwnMenusRet return of get own menus.
type GetOwnMenusRet struct {
	PaginationRet
}

// GetOwnMenus
// @description Get own menus of the session account.
// @id get-own-menus
// @tags auth
// @summary Get own menus.
// @accept json
// @produce json
// @param query query GetOwnMenusReq false "search criteria."
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /getOwnMenus [GET]
func GetOwnMenus(c *gin.Context) {
	sessionID := SessionIdFromGinX(c)
	ctx := model.WithSession(c.Request.Context(), sessionID, model.NewDatetime(time.Now()))
	var err error
	var req GetOwnMenusReq
	if err = c.ShouldBindQuery(&req); err != nil {
		JSONWithBadRequest(c, err)
		return
	}
	var roleID *primitive.ObjectID
	if req.RoleId != "" {
		roleID, err = model.ObjectIDPtrFromHex(req.RoleId)
		if err != nil {
			JSONWithBadRequest(c, err)
			return
		}
	}
	if roleID == nil {
		if !model_service.IsRoot(sessionID) {
			JSONWithBadRequest(c, errors.New("invalid account: without role"))
			return
		}
		// find all menus when session id is root.
		menuViews, err := model_service.GetFilteredMenuViews(ctx, bson.D{})
		if err != nil {
			JSONWithImplicitError(c, err)
			return
		}
		JSONWithOK(c, &GetOwnMenusRet{
			PaginationRet{
				Total: int64(len(menuViews)),
				List:  menuViews,
			}})
		return
	}
	menuViews, err := model_service.GetMenuAndFilteredWidgetViewsByRoleID(ctx, roleID)
	if err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, &GetOwnMenusRet{
		PaginationRet{
			Total: int64(len(menuViews)),
			List:  menuViews,
		},
	})
	return
}

// SignOut
// @description Sign out the session account.
// @id sign-out
// @tags auth
// @summary Sign out.
// @produce json
// @security ApiKeyAuth
// @success 200 {null} null "successful action."
// @failure 400 {error} error "bad request."
// @failure 401 {error} error "unauthorized."
// @failure 500 {error} error "internal server error."
// @router /signOut [POST]
func SignOut(c *gin.Context) {
	if err := model_service.SignOut(
		model.WithSession(
			c.Request.Context(),
			SessionIdFromGinX(c),
			model.NewDatetime(time.Now()),
		),
	); err != nil {
		JSONWithImplicitError(c, err)
		return
	}
	JSONWithOK(c, nil)
	return
}
