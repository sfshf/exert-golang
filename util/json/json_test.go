package json_test

import (
	"testing"

	jsoniter "github.com/json-iterator/go"
	"github.com/sfshf/exert-golang/util/json"
)

func TestIterateOneObject(t *testing.T) {
	var (
		oldJson = []byte(`{
        "id": "c34sd2dj8g1g00cn96cg",
        "abbr": "12312312",
        "code": "1231",
        "name": "1231",
        "type": "factory",
        "roles": [
            {
                "id": "c2jnr4vuh2o2l9udsjh0",
                "name": "超级管理员",
                "users": null,
                "extend": null,
                "permses": null,
                "createdAt": "2021-05-21 09:29:55",
                "updatedAt": "2021-05-23 02:35:14",
                "description": "超级管理员，拥有所有权限"
            },
            {
                "id": "c2jnr4vuh2o2l9udsjhg",
                "name": "默认角色",
                "users": null,
                "extend": null,
                "permses": null,
                "createdAt": "2021-05-21 09:29:55",
                "updatedAt": "2021-05-26 07:25:43",
                "description": "默认角色，无任何权限"
            },
            {
                "id": "c2jnr4vuh2o219udsjh9",
                "name": "蛙",
                "users": null,
                "extend": null,
                "permses": null,
                "createdAt": "2021-06-15 11:04:09",
                "updatedAt": "2021-06-15 11:04:11",
                "description": "池塘边的榕树下"
            }
        ],
        "users": [],
        "extend": null,
        "company": {
            "id": "c34sd2dj8g1g00cn96d0",
            "fax": "",
            "tel": "123123123",
            "area": "上海市,徐汇区",
            "extend": null,
            "nature": "fabric_factory",
            "address": "123123",
            "contact": "123123",
            "createdAt": "2021-06-16 09:38:17",
            "updatedAt": "2021-06-16 09:38:17",
            "dataGroupId": "c34sd2dj8g1g00cn96cg",
            "productionLines": [
                {
                    "id": "c34sd2dj8g1g00cn96dg",
                    "name": "123123",
                    "extend": null,
                    "director": "123213",
                    "companyId": "c34sd2dj8g1g00cn96d0",
                    "createdAt": "2021-06-16 09:38:17",
                    "updatedAt": "2021-06-16 09:38:17"
                }
            ]
        },
        "children": [],
        "parentId": "c34psg47mam00092e4g0",
        "createdAt": "2021-06-16 09:38:17",
        "updatedAt": "2021-06-16 09:38:17",
        "description": ""
    }`)
		newJson = []byte(`{
        "id": "c34sd2dj8g1g00cn96cg",
        "abbr": "1234",
        "code": "1231",
        "name": "12341234",
        "type": "factory",
        "roles": [
            {
                "id": "c2jnr4vuh2o2l9udsjh0",
                "name": "超级管理员2",
                "users": null,
                "extend": null,
                "permses": null,
                "createdAt": "2021-05-21 09:29:55",
                "updatedAt": "2021-05-23 02:35:14",
                "description": "超级管理员，拥有所有权限"
            },
            {
                "id": "c2jnr4vuh2o2l9udsjhg",
                "name": "默认角色",
                "users": null,
                "extend": null,
                "permses": null,
                "createdAt": "2021-05-21 09:29:55",
                "updatedAt": "2021-05-26 07:25:43",
                "description": "默认角色，无任何权限"
            },
            {
                "id": "c2jnr4vuh2o219udsjh9",
                "name": "蛙",
                "users": null,
                "extend": null,
                "permses": null,
                "createdAt": "2021-06-15 11:04:09",
                "updatedAt": "2021-06-15 11:04:11",
                "description": "池塘边的榕树下"
            }
        ],
        "users": [],
        "extend": null,
        "company": {
            "id": "c34sd2dj8g1g00cn96d0",
            "fax": "",
            "tel": "123123123",
            "area": "上海市,徐汇区",
            "extend": null,
            "nature": "fabric_factory",
            "address": "123123",
            "contact": "123123",
            "createdAt": "2021-06-16 09:38:17",
            "updatedAt": "2021-06-16 09:38:17",
            "dataGroupId": "c34sd2dj8g1g00cn96cg",
            "productionLines": [
                {
                    "id": "c34sd2dj8g1g00cn96dg",
                    "name": "12341234",
                    "extend": null,
                    "director": "123213",
                    "companyId": "c34sd2dj8g1g00cn96d0",
                    "createdAt": "2021-06-16 09:38:17",
                    "updatedAt": "2021-06-16 09:38:17"
                }
            ]
        },
        "children": [],
        "parentId": "c34psg47mam00092e4g0",
        "createdAt": "2021-06-16 09:38:17",
        "updatedAt": "2021-06-16 09:38:17",
        "description": ""
    }`)
	)
	newIter := jsoniter.ParseBytes(jsoniter.ConfigCompatibleWithStandardLibrary, newJson)
	if err := newIter.Error; err != nil {
		t.Error(err)
	}
	oldIter := jsoniter.ParseBytes(jsoniter.ConfigCompatibleWithStandardLibrary, oldJson)
	if err := oldIter.Error; err != nil {
		t.Error(err)
	}
	res := make(map[string][]interface{})
	newTop := newIter.ReadAny()
	if newTop.ValueType() != jsoniter.ObjectValue {
		t.Error("new top level is not an object")
	}
	oldTop := oldIter.ReadAny()
	if oldTop.ValueType() != jsoniter.ObjectValue {
		t.Error("old top level is not an object")
	}
	if err := json.IterateOneObject(res, oldTop, newTop, make([]interface{}, 0)); err != nil {
		t.Error(err)
	}
	t.Log(res)
}
