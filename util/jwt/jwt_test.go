package jwt_test

import (
	"testing"
	"time"

	"github.com/sfshf/exert-golang/util/jwt"
	"github.com/stretchr/testify/assert"
)

func TestJwt(t *testing.T) {
	subject := "test_subject"
	domain := "test_domain"
	role := "test_role"
	token, err := jwt.GenerateToken(jwt.DefaultSigningMethod, "", jwt.NewJwtClaims(subject, domain, role, 60))
	if err != nil {
		assert.Fail(t, err.Error())
	}
	claims, err := jwt.ParseToken(jwt.DefaultSigningMethod, "", token)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, subject, claims.Subject, "the two subject string should be same")
	assert.Equal(t, claims.ExpiresAt.Sub(claims.IssuedAt.Time), 60*time.Second, "the two time duration should be same")
}
