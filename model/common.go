package model

import (
	"context"
	"errors"
	"reflect"
	"strings"
	"time"

	"github.com/jinzhu/copier"
	"github.com/sfshf/exert-golang/util/crypto/hash"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Model common inlined fields in db models.
type Model struct {
	ID        *primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	CreatedBy *primitive.ObjectID `bson:"createdBy,omitempty" json:"createdBy,omitempty"`
	CreatedAt *primitive.DateTime `bson:"createdAt,omitempty" json:"createdAt,omitempty"`
	UpdatedBy *primitive.ObjectID `bson:"updatedBy,omitempty" json:"updatedBy,omitempty"`
	UpdatedAt *primitive.DateTime `bson:"updatedAt,omitempty" json:"updatedAt,omitempty"`
	DeletedBy *primitive.ObjectID `bson:"deletedBy,omitempty" json:"deletedBy,omitempty"` // for soft deletion.
	DeletedAt *primitive.DateTime `bson:"deletedAt,omitempty" json:"deletedAt,omitempty"` // for soft deletion.
}

type CopyFor int

const (
	CopyForInsert CopyFor = iota
	CopyForUpdate
)

func CopyToModelWithSessionContext[M any](ctx context.Context, from interface{}, copyFor CopyFor) (m M, err error) {
	mT := reflect.TypeOf(m)
	if mT.Kind() != reflect.Struct {
		err = errors.New(`type of "M" is not struct`)
		return
	}
	if _, has := mT.FieldByName("Model"); !has {
		err = errors.New(`type of "M" without field named "Model"`)
		return
	}
	mf := reflect.ValueOf(&m).Elem().FieldByName("Model")
	if !mf.CanSet() {
		err = errors.New(`"Model" field of type "M" can not be set`)
		return
	}
	mfIsPtr := mf.Kind() == reflect.Pointer
	switch copyFor {
	case CopyForInsert:
		if mfIsPtr {
			mf.Set(reflect.ValueOf(&Model{
				CreatedBy: SessionID(ctx),
				CreatedAt: SessionDateTime(ctx),
			}))
		} else {
			mf.Set(reflect.ValueOf(Model{
				CreatedBy: SessionID(ctx),
				CreatedAt: SessionDateTime(ctx),
			}))
		}
	case CopyForUpdate:
		if mfIsPtr {
			mf.Set(reflect.ValueOf(&Model{
				UpdatedBy: SessionID(ctx),
				UpdatedAt: SessionDateTime(ctx),
			}))
		} else {
			mf.Set(reflect.ValueOf(Model{
				UpdatedBy: SessionID(ctx),
				UpdatedAt: SessionDateTime(ctx),
			}))
		}
	}
	err = copier.Copy(&m, from)
	return
}

func UpperStringPtr(s string) *string {
	u := strings.ToUpper(s)
	return &u
}

func StringPtr(s string) *string {
	return &s
}

func StringSlicePtr(ss []string) *[]string {
	return &ss
}

func IntPtr(i int) *int {
	return &i
}

func BoolPtr(b bool) *bool {
	return &b
}

func NewPasswdSaltPtr() *string {
	key := PasswdSalt + time.Now().String()
	salt := hash.MD5StringIgnorePrefixAndError(key)
	return &salt
}

func PasswdPtr(passwd string, salt string) *string {
	data := hash.MD5StringIgnorePrefixAndError(salt + passwd)
	return &data
}

// DatetimePtr get a pointer from a millisecond-unit timestamp.
func DatetimePtr(ts int64) *primitive.DateTime {
	dt := primitive.NewDateTimeFromTime(time.Unix(0, ts*1e6))
	return &dt
}

func NewDatetime(t time.Time) *primitive.DateTime {
	dt := primitive.NewDateTimeFromTime(t)
	return &dt
}

func NewObjectIDPtr() *primitive.ObjectID {
	one := primitive.NewObjectID()
	return &one
}

func ObjectIDPtrFromHex(id string) (*primitive.ObjectID, error) {
	if strings.TrimSpace(id) == "" {
		return &primitive.NilObjectID, nil
	}
	staffId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	return &staffId, nil
}

func ObjectIDPtrsFromHexs(ids []string) ([]*primitive.ObjectID, error) {
	var res []*primitive.ObjectID
	for _, v := range ids {
		if strings.TrimSpace(v) == "" {
			res = append(res, &primitive.NilObjectID)
			continue
		}
		ptr, err := ObjectIDPtrFromHex(v)
		if err != nil {
			return nil, err
		}
		res = append(res, ptr)
	}
	return res, nil
}

func HexsFromObjectIDPtrs(IDs []*primitive.ObjectID) (res []string) {
	for _, ID := range IDs {
		res = append(res, ID.Hex())
	}
	return
}

func FilterEnabled(filter interface{}) interface{} {
	switch filter.(type) {
	case bson.D:
		filter = append(filter.(bson.D), bson.E{Key: "deletedAt", Value: bson.D{{Key: "$exists", Value: false}}})
	case bson.M:
		filter.(bson.M)["deletedAt"] = bson.M{"$exists": false}
	}
	return filter
}

func Copy(toValue interface{}, fromValue interface{}) error {
	if err := copier.CopyWithOption(toValue, fromValue, copier.Option{
		IgnoreEmpty: true,
		DeepCopy:    true,
		Converters: []copier.TypeConverter{
			{
				SrcType: new(primitive.ObjectID),
				DstType: "",
				Fn: func(src interface{}) (interface{}, error) {
					if base, is := src.(*primitive.ObjectID); is {
						return base.Hex(), nil
					}
					return "", nil
				},
			},
			{
				SrcType: new(primitive.DateTime),
				DstType: "",
				Fn: func(src interface{}) (interface{}, error) {
					if base, is := src.(*primitive.DateTime); is {
						return base.Time().String(), nil
					}
					return "", nil
				},
			},
		},
	}); err != nil {
		return err
	}
	return nil
}

type ContextKey int

const (
	ContextKeySessionID ContextKey = iota
	ContextKeySessionDateTime
)

func WithSession(ctx context.Context, sessID *primitive.ObjectID, sessDateTime *primitive.DateTime) context.Context {
	return WithSessionDateTime(WithSessionID(ctx, sessID), sessDateTime)
}

func WithSessionID(ctx context.Context, sessID *primitive.ObjectID) context.Context {
	return context.WithValue(ctx, ContextKeySessionID, sessID)
}

func SessionID(ctx context.Context) *primitive.ObjectID {
	return ctx.Value(ContextKeySessionID).(*primitive.ObjectID)
}

func WithSessionDateTime(ctx context.Context, sessDateTime *primitive.DateTime) context.Context {
	return context.WithValue(ctx, ContextKeySessionDateTime, sessDateTime)
}

func SessionDateTime(ctx context.Context) *primitive.DateTime {
	return ctx.Value(ContextKeySessionDateTime).(*primitive.DateTime)
}
