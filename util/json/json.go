package json

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"reflect"
	"strings"

	jsoniter "github.com/json-iterator/go"
)

// Temporary:
var (
	Marshal       = jsoniter.Marshal
	Unmarshal     = jsoniter.Unmarshal
	MarshalIndent = jsoniter.MarshalIndent
	NewDecoder    = jsoniter.NewDecoder
	NewEncoder    = jsoniter.NewEncoder
)

func Marshal2String(v interface{}) string {
	s, err := jsoniter.MarshalToString(v)
	if err != nil {
		return "ERROR: " + err.Error()
	}
	return s
}

func MarshalIndent2String(v interface{}) string {
	bs, err := jsoniter.MarshalIndent(v, "", "    ")
	if err != nil {
		return "ERROR: " + err.Error()
	}
	return string(bs)
}

func IterateOneObject(res map[string][]interface{}, oldTop jsoniter.Any, newObj jsoniter.Any, embedPath []interface{}) error {
	if embedPath == nil {
		return errors.New("invalid embed path slice")
	}
	newObjKeys := newObj.Keys()
	for _, key := range newObjKeys {
		newOneField := newObj.Get(key)
		switch newOneField.ValueType() {
		case jsoniter.InvalidValue:
			return errors.New("invalid value exists")
		case jsoniter.StringValue,
			jsoniter.NumberValue,
			jsoniter.NilValue,
			jsoniter.BoolValue:
			newVal := newOneField.GetInterface()
			newEmbedPath := append(embedPath, key)
			oldVal := oldTop.Get(newEmbedPath...).GetInterface()
			if !reflect.DeepEqual(newVal, oldVal) {
				path := make([]string, 0)
				for _, onePath := range newEmbedPath {
					path = append(path, fmt.Sprintf("%v", onePath))
				}
				res[strings.Join(path, ".")] = []interface{}{
					oldVal,
					newVal,
				}
			}
		case jsoniter.ArrayValue:
			len := newOneField.Size()
			for i := 0; i < len; i++ {
				newEmbedPath := append(embedPath, key, i)
				oneNewObj := newOneField.Get(i)
				if err := IterateOneObject(res, oldTop, oneNewObj, newEmbedPath); err != nil {
					return err
				}
			}
		case jsoniter.ObjectValue:
			newEmbedPath := append(embedPath, key)
			if err := IterateOneObject(res, oldTop, newOneField, newEmbedPath); err != nil {
				return err
			}
		}
	}
	return nil
}

func FieldDiff(ctx context.Context, oldM, newM any) (map[string][]interface{}, error) {
	oldJson, err := json.Marshal(oldM)
	if err != nil {
		return nil, err
	}
	oldIter := jsoniter.ParseBytes(jsoniter.ConfigCompatibleWithStandardLibrary, oldJson)
	if err := oldIter.Error; err != nil {
		return nil, err
	}
	newJson, err := json.Marshal(newM)
	newIter := jsoniter.ParseBytes(jsoniter.ConfigCompatibleWithStandardLibrary, newJson)
	if err := newIter.Error; err != nil {
		return nil, err
	}

	oldTop := oldIter.ReadAny()
	// if oldTop.ValueType() != jsoniter.ObjectValue {
	// 	return nil, errors.New("old top level is not an object")
	// }
	newTop := newIter.ReadAny()
	// if newTop.ValueType() != jsoniter.ObjectValue {
	// 	return nil, errors.New("new top level is not an object")
	// }
	res := make(map[string][]interface{})
	if err := IterateOneObject(res, oldTop, newTop, make([]interface{}, 0)); err != nil {
		return nil, err
	}
	return res, nil
}
