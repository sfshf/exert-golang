#/usr/bin/env bash

# first
protoc -I=./proto --go_out=. ./proto/govern_web.proto && \
protoc-go-inject-tag -input=./dto/govern_web.pb.go && \
go fmt ./...

# second
cd web/govern/ui && \
npx pbjs -t static-module -w commonjs -o ./src/dto/govern_web.js ../../../proto/govern_web.proto && \
npx pbts -o ./src/dto/govern_web.d.ts ./src/dto/govern_web.js


