package jwt

import (
	"time"

	"github.com/dgrijalva/jwt-go/v4"
)

func NewJwtClaims(subject string, expired time.Duration) *jwt.StandardClaims {
	now := time.Now()
	expiresAt := now.Add(expired * time.Second)
	return &jwt.StandardClaims{
		IssuedAt:  jwt.At(now),
		ExpiresAt: jwt.At(expiresAt),
		NotBefore: jwt.At(now),
		Subject:   subject,
	}
}

var (
	DefaultSigningMethod = jwt.SigningMethodHS512
)

func GenerateToken(signingMethod jwt.SigningMethod, signingKey string, claims *jwt.StandardClaims) (string, error) {
	return jwt.NewWithClaims(signingMethod, claims).SignedString([]byte(signingKey))
}

func ParseToken(signingMethod jwt.SigningMethod, signingKey string, tokenString string) (*jwt.StandardClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(signingKey), nil
	})
	if err != nil {
		return nil, err
	}
	if !token.Valid {
		return nil, &jwt.TokenNotValidYetError{}
	}
	return token.Claims.(*jwt.StandardClaims), nil
}
