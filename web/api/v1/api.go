package api

import (
	"bytes"
	"context"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
	"text/template"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"github.com/sfshf/exert-golang/service/casbin"
	service_log "github.com/sfshf/exert-golang/service/log"
	"github.com/sfshf/exert-golang/service/model_service"
	"github.com/sfshf/exert-golang/util/json"
	"github.com/sfshf/exert-golang/util/jwt"
	logWrapper "github.com/sfshf/exert-golang/util/log"
	"github.com/sfshf/exert-golang/util/uuid"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Config struct {
	Swagger bool
	CORS    struct {
		Enable           bool
		AllowOrigins     []string
		AllowMethods     []string
		AllowHeaders     []string
		AllowCredentials bool
		MaxAge           time.Duration
	}
	GZIP struct {
		Enable bool
	}
	JWTAuth struct {
		Enable     bool
		SigningKey string
		Expired    int64
		Stored     bool
	}
}

// RegisterAPIs register all api functions.
func RegisterAPIs(ctx context.Context, router *gin.Engine, conf Config) {
	if service_log.LoggerEnabled() {
		router.Use(Logger(service_log.Logger()))
	} else {
		router.Use(gin.Logger())
	}
	router.Use(gin.Recovery()) // TODO Custom recovery logger
	if conf.CORS.Enable {
		router.Use(CORS(cors.Config{
			AllowAllOrigins: true,
			//AllowOrigins:    conf.CORS.AllowOrigins,
			//AllowOriginFunc:        nil,
			AllowMethods:     conf.CORS.AllowMethods,
			AllowHeaders:     conf.CORS.AllowHeaders,
			AllowCredentials: conf.CORS.AllowCredentials,
			//ExposeHeaders:          nil,
			MaxAge: conf.CORS.MaxAge,
			//AllowWildcard:          false,
			//AllowBrowserExtensions: false,
			//AllowWebSockets:        false,
			//AllowFiles:             false,
		}))
	}
	router.NoMethod(NoMethod())
	router.NoRoute(NoRoute())
	router.Use(TraceId())
	router.Use(GZIP())
	if conf.Swagger {
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	}
	// https://www.restapitutorial.com/lessons/restquicktips.html
	v1 := router.Group("/api/v1")
	{
		v1.GET("/picCaptcha", GetPicCaptcha)
		v1.POST("/signIn", SignIn(conf))
		if conf.JWTAuth.Enable {
			v1.Use(JWT(ctx, conf.JWTAuth.SigningKey, conf.JWTAuth.Expired))
		}
		{
			v1.GET("/picCaptchaAnswer", GetPicCaptchaAnswer)
			v1.GET("/getOwnDomains", GetOwnDomains)
			v1.GET("/getOwnRoles", GetOwnRoles)
			v1.GET("/getOwnMenus", GetOwnMenus(conf))
			v1.POST("/signOut", SignOut)
		}
		v1.Use(Casbin(ctx))
		staff := v1.Group("/staffs")
		{
			staff.POST("", AddStaff)
			staff.GET("", ListStaff)
			staff.GET("/:id", ProfileStaff)
			staff.PUT("/:id", EditStaff)
			staff.PATCH("/:id/password", PatchStaffPassword)
			staff.GET("/:id/domains", StaffDomains)
			staff.POST("/:id/domains/:domainId/roles", AuthorizeStaffRolesInDomain)
			staff.GET("/:id/domains/:domainId/roles", StaffRolesInDomain)
			staff.PATCH("/:id/enable", EnableStaff)
			staff.PATCH("/:id/disable", DisableStaff)
			mustRoot := staff.Group("", MustRoot())
			{
				mustRoot.DELETE("/:id", RemoveStaff)
			}
		}
		domain := v1.Group("/domains")
		{
			domain.POST("", AddDomain)
			domain.GET("", ListDomain)
			domain.GET("/:id", ProfileDomain)
			domain.PUT("/:id", EditDomain)
			domain.PATCH("/:id/enable", EnableDomain)
			domain.PATCH("/:id/disable", DisableDomain)
			mustRoot := domain.Group("", MustRoot())
			{
				mustRoot.DELETE("/:id", RemoveDomain)
			}
		}
		role := v1.Group("/roles")
		{
			role.POST("", AddRole)
			role.GET("", ListRole)
			role.GET("/:id", ProfileRole)
			role.PUT("/:id", EditRole)
			role.GET("/:id/domains", RoleDomains)
			role.GET("/:id/authorities/:domainId", RoleAuthorities)
			role.POST("/:id/authorize/:domainId", AuthorizeRole)
			role.PATCH("/:id/enable", EnableRole)
			role.PATCH("/:id/disable", DisableRole)
			mustRoot := role.Group("", MustRoot())
			{
				mustRoot.DELETE("/:id", RemoveRole)
			}
		}
		menu := v1.Group("/menus")
		{
			menu.POST("", AddMenu)
			menu.GET("", ListMenu)
			menu.GET("/:id", ProfileMenu)
			menu.PUT("/:id", EditMenu)
			menu.PATCH("/:id/enable", EnableMenu)
			menu.PATCH("/:id/disable", DisableMenu)
			mustRoot := menu.Group("", MustRoot())
			{
				mustRoot.DELETE("/:id", RemoveMenu)
			}
			widget := menu.Group("/:id/widgets")
			{
				widget.POST("", AddMenuWidget)
				widget.GET("", ListMenuWidget)
				widget.GET("/:widgetId", ProfileMenuWidget)
				widget.PUT("/:widgetId", EditMenuWidget)
				widget.PATCH("/:widgetId/enable", EnableMenuWidget)
				widget.PATCH("/:widgetId/disable", DisableMenuWidget)
				mustRoot = widget.Group("", MustRoot())
				{
					mustRoot.DELETE("/:widgetId", RemoveMenuWidget)
				}
			}
		}
		casbin := v1.Group("/casbin", MustRoot())
		{
			priority := casbin.Group("/priority")
			{
				priority.GET("", nil)
			}
			object := casbin.Group("/apis")
			{
				object.GET("", nil)
			}
			policy := casbin.Group("/policy")
			{
				policy.GET("/:role", nil)
			}
			role := casbin.Group("/role")
			{
				role.POST("", nil)
			}
			staff := casbin.Group("/staff")
			{
				staff.GET("/:role", nil)
			}
		}
		changeLog := v1.Group("/changeLogs")
		{
			changeLog.GET("", ListChangeLog)
		}
		accessLog := v1.Group("/accessLogs")
		{
			accessLog.GET("", ListAccessLog)
		}
	}
}

const (
	ResponseBodyKey = "_gin-gonic/gin/response/bodykey"
)

// REFERENCE: https://www.restapitutorial.com/lessons/restquicktips.html

// JSONWithOK 200 OK: common success response.
// General success status code. This is the most common code. Used to indicate success.
func JSONWithOK(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusOK)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusOK, resp)
}

// JSONWithCreated 201 CREATED: created successfully.
// Successful creation occurred (via either POST or PUT).
// Set the Location header to contain a link to the newly-created resource (on POST).
// Response body content may or may not be present.
func JSONWithCreated(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusCreated)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusCreated, resp)
}

// JSONWithNoContent 204 NO CONTENT: delete or put successfully.
// Indicates success but nothing is in the response body,
// often used for DELETE and PUT operations.
func JSONWithNoContent(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusNoContent)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusNoContent, resp)
}

// JSONWithBadRequest 400 BAD REQUEST: domain validation errors, or missing data.
// General error for when fulfilling the request would cause an invalid state.
// Domain validation errors, missing data, etc. are some examples.
func JSONWithBadRequest(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusBadRequest)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusBadRequest, resp)
	c.Abort()
}

// JSONWithUnauthorized 401 UNAUTHORIZED: missing or invalid authentication token.
// Error code response for missing or invalid authentication token.
func JSONWithUnauthorized(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusUnauthorized)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusUnauthorized, resp)
	c.Abort()
}

// JSONWithForbidden 403 FORBIDDEN: the response is unavailable for some reason.
// Error code for when the user is not authorized to perform the operation
// or the resource is unavailable for some reason (e.g. time constraints, etc.).
func JSONWithForbidden(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusForbidden)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusForbidden, resp)
	c.Abort()
}

// JSONWithNotFound 404 NOT FOUND: common failure response.
// Used when the requested resource is not found, whether it doesn't exist
// or if there was a 401 or 403 that, for security reasons, the service wants to mask.
func JSONWithNotFound(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusNotFound)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusNotFound, resp)
	c.Abort()
}

// JSONWithMethodNotAllowed 405 METHOD NOT ALLOWED: indicate that the requested URL exists, but the requested HTTP method is not applicable.
// Used to indicate that the requested URL exists, but the requested HTTP method is not applicable.
// For example, POST /users/12345 where the API doesn't support creation of resources this way (with a provided ID).
// The Allow HTTP header must be set when returning a 405 to indicate the HTTP methods that are supported.
// In the previous case, the header would look like "Allow: GET, PUT, DELETE".
func JSONWithMethodNotAllowed(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusMethodNotAllowed)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusMethodNotAllowed, resp)
	c.Abort()
}

// JSONWithConflict 409 CONFLICT: duplicate entries.
// Whenever a resource conflict would be caused by fulfilling the request.
// Duplicate entries, such as trying to create two customers with the same information,
// and deleting root objects when cascade-delete is not supported are a couple of examples.
func JSONWithConflict(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusConflict)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusConflict, resp)
	c.Abort()
}

// JSONWithInternalServerError 500 INTERNAL SERVER ERROR: use this only for errors that the consumer cannot address from their end.
// Never return this intentionally.
// The general catch-all error when the server-side throws an exception.
// Use this only for errors that the consumer cannot address from their end.
func JSONWithInternalServerError(c *gin.Context, any interface{}, msgs ...string) {
	var msg string
	if msg = strings.Join(msgs, "--"); msg == "" {
		msg = http.StatusText(http.StatusInternalServerError)
	}
	resp := &Resp{Msg: msg, Any: any}
	if service_log.LoggerEnabled() {
		c.Set(ResponseBodyKey, json.Marshal2String(resp))
	}
	c.JSON(http.StatusInternalServerError, resp)
	c.Abort()
}

// JSONWithImplicitError respond with an unpredictable error.
func JSONWithImplicitError(c *gin.Context, err error) {
	// implicit Error interface.
	e, is := err.(interface {
		error
		IsClient() bool
		IsServer() bool
	})
	if !is || e.IsServer() {
		JSONWithInternalServerError(c, err)
		return
	}
	if e.IsClient() {
		JSONWithBadRequest(c, err)
		return
	}
}

const (
	LoggerEventKey = "logger"
)

func LogWithGinX(c *gin.Context, key string, val interface{}) {
	e := LogEventFromGinX(c)
	e = e.Interface(key, val)
	c.Set(LoggerEventKey, e)
}

func LogEventFromGinX(c *gin.Context) *zerolog.Event {
	if e, has := c.Get(LoggerEventKey); has {
		return e.(*zerolog.Event)
	}
	return nil
}

func Logger(logger *logWrapper.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx := c.Request.Context()
		path := c.FullPath()
		// TODO filtered paths.
		if strings.Contains(path, "/accessLog") {
			c.Next()
			return
		}
		start := time.Now()
		e := logger.Info(ctx).
			Str("clientIp", c.ClientIP()).
			Str("proto", c.Request.Proto).
			Str("method", c.Request.Method).
			Str("path", path).
			Str("queries", c.Request.URL.RawQuery).
			Str("requestHeaders", json.Marshal2String(c.Request.Header))
		c.Set(LoggerEventKey, e)
		c.Next()
		var reqBody string
		if byts, has := c.Get(gin.BodyBytesKey); has {
			reqBody = fmt.Sprintf("%s", byts.([]byte))
		}
		var respBody string
		if body, has := c.Get(ResponseBodyKey); has {
			respBody = body.(string)
		}
		e.Str("requestBody", reqBody).
			Str("statusCode", strconv.Itoa(c.Writer.Status())).
			Str("responseHeaders", json.Marshal2String(c.Writer.Header())).
			Str("responseBody", respBody).
			Str("latency", time.Now().Sub(start).String()).
			Msg("")
		return
	}
}

func NoMethod() gin.HandlerFunc {
	return func(c *gin.Context) {
		JSONWithMethodNotAllowed(c, nil)
		return
	}
}

func NoRoute() gin.HandlerFunc {
	return func(c *gin.Context) {
		JSONWithNotFound(c, nil)
		return
	}
}

const (
	TraceIdKey = "traceId"
)

func TraceId() gin.HandlerFunc {
	return func(c *gin.Context) {
		traceId := c.GetHeader(TraceIdKey)
		if traceId == "" {
			uuid, _ := uuid.NewUUID()
			traceId = fmt.Sprintf("%s", uuid)
		}
		LogWithGinX(c, TraceIdKey, traceId)
		c.Writer.Header().Add(TraceIdKey, traceId)
		c.Next()
	}
}

// TODO:
func GZIP() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()
	}
}

// TODO:
func CORS(conf cors.Config) gin.HandlerFunc {
	return cors.New(conf)
}

const (
	SessionIdKey = "sessionId"
	DomainIDKey  = "domainID"
	RoleIDKey    = "roleID"
)

func SessionIdFromGinX(c *gin.Context) *primitive.ObjectID {
	if sessionId, exists := c.Get(SessionIdKey); exists {
		return sessionId.(*primitive.ObjectID)
	} else {
		return nil
	}
}

func DomainIDFromGinX(c *gin.Context) *primitive.ObjectID {
	if domainID, exists := c.Get(DomainIDKey); exists {
		return domainID.(*primitive.ObjectID)
	} else {
		return nil
	}
}

func RoleIDFromGinX(c *gin.Context) *primitive.ObjectID {
	if roleID, exists := c.Get(RoleIDKey); exists {
		return roleID.(*primitive.ObjectID)
	} else {
		return nil
	}
}

func JWT(ctx context.Context, signingKey string, expired int64) gin.HandlerFunc {
	return func(c *gin.Context) {
		if jwtString := c.GetHeader("Authorization"); jwtString != "" {
			claims, err := jwt.ParseToken(jwt.DefaultSigningMethod, signingKey, jwtString)
			if err != nil {
				log.Println(err)
				JSONWithUnauthorized(c, err)
				return
			}
			sessionID, err := model.ObjectIDPtrFromHex(claims.Subject)
			if err != nil {
				log.Println(err)
				JSONWithUnauthorized(c, err)
				return
			}
			domainID, err := model.ObjectIDPtrFromHex(claims.Domain)
			if err != nil {
				log.Println(err)
				JSONWithUnauthorized(c, err)
				return
			}
			roleID, err := model.ObjectIDPtrFromHex(claims.Role)
			if err != nil {
				log.Println(err)
				JSONWithUnauthorized(c, err)
				return
			}
			// Verify whether the token is in use, to guarantee an account signed in by only one person.
			staff, err := repo.FindOne[model.Staff](
				ctx,
				bson.M{"_id": sessionID},
				options.FindOne().SetProjection(bson.D{
					{Key: "_id", Value: 1},
					{Key: "signInToken", Value: 1},
					{Key: "deletedAt", Value: 1},
				}))
			if err != nil {
				log.Println(err)
				JSONWithUnauthorized(c, err)
				return
			}
			if staff.DeletedAt != nil || staff.SignInToken == nil || *staff.SignInToken != jwtString {
				JSONWithUnauthorized(c, model_service.ErrInvalidToken)
				return
			}
			LogWithGinX(c, SessionIdKey, sessionID)
			c.Set(SessionIdKey, sessionID)
			c.Set(DomainIDKey, domainID)
			c.Set(RoleIDKey, roleID)
			c.Next()
			// NOTE: need to verify token's expiration, and refresh the token if is expired.
			if claims.ExpiresAt.Add(-24 * time.Hour).Before(time.Now()) {
				token, err := jwt.GenerateToken(
					jwt.DefaultSigningMethod,
					signingKey,
					jwt.NewJwtClaims(
						sessionID.Hex(),
						domainID.Hex(),
						roleID.Hex(),
						time.Duration(expired),
					),
				)
				if err != nil {
					JSONWithImplicitError(c, err)
					return
				}
				token = "Bearer " + token
				if err = model_service.SignIn(ctx, c.ClientIP(), token); err != nil {
					log.Println(err)
					JSONWithImplicitError(c, err)
					return
				}
				c.Header("Access-Control-Expose-Headers", "Authorization")
				c.Header("Authorization", token)
			}
			return
		} else {
			JSONWithUnauthorized(c, model_service.ErrInvalidToken)
			return
		}
	}
}

func MustRoot() gin.HandlerFunc {
	return func(c *gin.Context) {
		if !model_service.IsRoot(SessionIdFromGinX(c)) {
			JSONWithUnauthorized(c, model_service.ErrUnauthorized)
			return
		}
		c.Next()
		return
	}
}

func MustRootOrSelf() gin.HandlerFunc {
	return func(c *gin.Context) {
		sessionId := SessionIdFromGinX(c)
		var id string
		if id = c.Param("id"); id == "" {
			if id = c.Query("id"); id == "" {
				JSONWithBadRequest(c, model_service.ErrInvalidArguments)
				return
			}
		}
		if model_service.IsRoot(id) && !model_service.IsRoot(sessionId) {
			JSONWithForbidden(c, model_service.ErrForbidden)
			return
		}
		if !model_service.IsRoot(id) && !model_service.IsRoot(sessionId) && sessionId.Hex() != id {
			JSONWithUnauthorized(c, model_service.ErrUnauthorized)
			return
		}
		c.Next()
		return
	}
}

// Casbin return a PERM access control ginx middleware.
func Casbin(ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		if !casbin.CasbinEnforcerEnabled() {
			c.Next()
			return
		}
		sessionId := SessionIdFromGinX(c)
		if sessionId == nil {
			JSONWithUnauthorized(c, model_service.ErrUnauthorized)
			return
		}
		if model_service.IsRoot(sessionId) {
			c.Next()
			return
		}
		domainID := DomainIDFromGinX(c)
		if domainID == nil {
			JSONWithUnauthorized(c, model_service.ErrUnauthorized)
			return
		}
		// roleID := RoleIDFromGinX(c)
		// if roleID == nil {
		// 	JSONWithUnauthorized(c, model_service.ErrUnauthorized)
		// 	return
		// }
		// https://casbin.org/docs/en/how-it-works#request
		// A basic request is a tuple object, at least including
		// subject (accessed entity), object (accessed resource) and action (access method).
		authorized, err := casbin.CasbinEnforcerWithContext(ctx).
			Enforce(sessionId.Hex(), domainID.Hex(), c.FullPath(), c.Request.Method)
		if err != nil {
			JSONWithUnauthorized(c, err)
			return
		}
		if !authorized {
			JSONWithUnauthorized(c, model_service.ErrUnauthorized)
			return
		}
		c.Next()
		return
	}
}

type PaginationArg struct {
	NoPaging bool  `form:"noPaging" json:"noPaging" binging:"" label:"是否不分页"` // 是否不分页
	Page     int64 `form:"page" json:"page" binding:"" label:"当前页码"`          // 当前页码
	PerPage  int64 `form:"perPage" json:"perPage" binding:"" label:"每页数据量"`   // 每页数据量
}

type PaginationRet struct {
	List  interface{} `form:"list" json:"list"`
	Total int64       `form:"total" json:"total"`
}

// SortDirection 排序方向
type SortDirection int

const (
	Asc  SortDirection = 1
	Desc SortDirection = -1
)

type SortBy map[string]SortDirection

func OrderByToBsonD(a SortBy) bson.D {
	sort := make(bson.D, 0)
	for k, v := range a {
		sort = append(sort, bson.E{Key: k, Value: v})
	}
	return sort
}

type Resp struct {
	Msg string
	Any interface{}
}

func (resp *Resp) MarshalJSON() ([]byte, error) {
	var buf bytes.Buffer
	replacer := strings.NewReplacer(`\'`, `'`)
	_, err := buf.WriteString(strings.Join([]string{`{"msg":"`, replacer.Replace(strings.Trim(resp.Msg, `"`)) + `"`}, ""))
	if err != nil {
		return nil, err
	}
	if resp.Any != nil {
		if _, err = buf.WriteString(`,`); err != nil {
			return nil, err
		}
		if e, is := resp.Any.(error); is {
			if _, err = buf.WriteString(strings.Join([]string{`"error":"`, replacer.Replace(template.JSEscapeString(strings.Trim(e.Error(), `"`))) + `"}`}, "")); err != nil {
				return nil, err
			}
		} else {
			// TODO check space characters.
			ret, err := json.Marshal(resp.Any)
			if err != nil {
				return nil, err
			}
			if !bytes.HasPrefix(ret, []byte("{")) {
				if _, err = buf.WriteString(strings.Join([]string{`"result":"`, replacer.Replace(string(bytes.Trim(ret, `"`))) + `"}`}, "")); err != nil {
					return nil, err
				}
			} else {
				if _, err = buf.Write(bytes.TrimLeft(ret, "{")); err != nil {
					return nil, err
				}
			}
		}
	} else {
		if _, err = buf.WriteString(`}`); err != nil {
			return nil, err
		}
	}
	res := buf.Bytes()
	return res, nil
}
