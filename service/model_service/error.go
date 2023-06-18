package model_service

import "errors"

type Error interface {
	error
	IsClient() bool
	IsServer() bool
}

type errorImpl struct {
	error
	isClient bool
	isServer bool
}

func (a *errorImpl) IsClient() bool {
	if a == nil {
		return false
	}
	return a.isClient
}

func (a *errorImpl) IsServer() bool {
	if a == nil {
		return false
	}
	return a.isServer
}

func ClientError(err error) Error {
	return &errorImpl{
		error:    err,
		isClient: true,
	}
}

func ServerError(err error) Error {
	return &errorImpl{
		error:    err,
		isServer: true,
	}
}

var (
	ErrFailure = ServerError(errors.New("failure"))
)

var (
	ErrInvalidToken             = ClientError(errors.New("invalid token"))
	ErrInvalidCaptcha           = ClientError(errors.New("invalid captcha"))
	ErrInvalidAccountOrPassword = ClientError(errors.New("invalid account or password"))
	ErrForbidden                = ClientError(errors.New("forbidden"))
	ErrUnauthorized             = ClientError(errors.New("unauthorized"))
	ErrInvalidArguments         = ClientError(errors.New("invalid arguments"))
)
