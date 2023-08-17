FROM golang:1.21.0-alpine3.17 AS websrv-base
LABEL name="govern-websrv-base" version="latest"
MAINTAINER sfshf
WORKDIR /app
ENV CGO_ENABLED=0
COPY go.* .
RUN go env -w GOPROXY="https://goproxy.cn,http://0.0.0.0:8888" \
  && go env -w GOPATH="/go" GOBIN="/go/bin" \
  && go mod download 

FROM websrv-base AS websrv-builder
LABEL name="govern-websrv-builder" version="latest"
COPY ./util ./util
COPY ./model ./model
COPY ./repo ./repo
COPY ./service ./service
COPY ./dto ./dto
COPY ./config ./config
COPY ./web/govern/web.go ./web/govern/web.go
COPY ./web/govern/api/v1 ./web/govern/api/v1
COPY ./cmd/govern ./cmd/govern
RUN export PATH=$GOBIN:$PATH \
  && go generate ./... \
  && go build -o govern ./cmd/govern

FROM alpine:3.17 AS websrv-binary
LABEL name="govern-websrv-binary" version="latest"
MAINTAINER sfshf
WORKDIR /app
EXPOSE 8000/tcp
ARG MONGO_HOST="exert-golang-mongo"
ARG MONGO_PORT=27017
ARG MONGO_DATABASE="govern"
ARG REDIS_HOST="exert-golang-redis"
ARG REDIS_PORT=6379
ENV GOVERN_MONGO_URI="mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?directConnection=true"
ENV GOVERN_MONGO_DATABASE="${MONGO_DATABASE}"
ENV GOVERN_REDIS_ADDRESS="${REDIS_HOST}:${REDIS_PORT}"
ENV HTTP_HOST="govern"
ENV GOVERN_HTTP_CERT_FILE=""
ENV GOVERN_HTTP_CERT_KEY_FILE=""
#RUN echo "http://dl-4.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories && apk --update add --no-cache ca-certificates
COPY --from=websrv-builder /app/govern /app/config/casbin_rbac.model /app/config/menu.yaml ./
CMD ./govern websrv \
  --global.srv-host="0.0.0.0" \
  --global.origin-menu="./menu.yaml" \
  --casbin.model="./casbin_rbac.model" \
  --mongodb.server-uri="${GOVERN_MONGO_URI}" \
  --mongodb.database="${GOVERN_MONGO_DATABASE}"
  # --redis.enable
  # --redis.addr="${GOVERN_REDIS_ADDRESS}"

FROM node:20.5.0-alpine3.17 AS webui-base
LABEL name="govern-webui-base" version="latest"
MAINTAINER sfshf
WORKDIR /app
COPY ./web/govern/ui/package.json ./web/govern/ui/package-lock.json ./
RUN npm config set registry https://registry.npmmirror.com/ && npm install

FROM webui-base AS webui-builder
LABEL name="govern-webui-builder" version="latest"
COPY ./web/govern/ui ./
RUN npm run build

FROM nginx:latest AS webui-deploy
LABEL name="govern-webui-deploy" version="latest"
MAINTAINER sfshf
WORKDIR /app
COPY --from=webui-builder /app/dist /app
COPY --from=webui-builder /app/nginx.conf /etc/nginx/nginx.conf

