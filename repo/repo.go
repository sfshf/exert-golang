package repo

import (
	"context"
	"errors"
	"log"
	"net/url"
	"reflect"
	"strings"
	"unicode"

	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/util/json"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func InitRepo(ctx context.Context, srvUri, dbName string) (func(), error) {
	uri, err := url.Parse(srvUri)
	if err != nil {
		return func() {}, err
	}
	cliOpt := options.Client().SetHosts([]string{uri.Host})
	if direct := uri.Query().Get("directConnection"); direct != "" && strings.ToUpper(direct) == "TRUE" {
		cliOpt.SetDirect(true)
	}
	if dbn := uri.Path[1:]; dbName == "" && dbn != "" {
		dbName = dbn
	}
	// init mongo client
	mgoCli, err := mongo.NewClient(cliOpt)
	if err != nil {
		return func() {}, err
	}
	if err = mgoCli.Connect(ctx); err != nil {
		return func() {}, err
	}
	// init database
	db := mgoCli.Database(dbName)
	// init repo object
	repo = &Repo{db: db}
	// register collections
	repo.RegisterCollection(
		ctx,
		model.ChangeLog{},
		model.Domain{},
		model.Menu{},
		model.MenuWidget{},
		model.Role{},
		model.RelationRoleMenu{},
		model.RelationRoleMenuWidget{},
		model.Staff{},
		model.Casbin{},
		model.AccessLog{},
	)
	return func() { repo.Close(ctx) }, nil
}

func Client() *mongo.Client {
	return repo.Client()
}

func DB() *mongo.Database {
	return repo.DB()
}

func Collection(m any) *mongo.Collection {
	return repo.Collection(m)
}

func EstimateColl[M any]() (coll *mongo.Collection, err error) {
	_, coll, err = estimateColl[M]()
	return
}

func estimateColl[M any]() (string, *mongo.Collection, error) {
	var m M
	mT := reflect.TypeOf(m)
	if mT.Kind() == reflect.Pointer {
		mT = mT.Elem()
	}
	if mT.Kind() != reflect.Struct {
		return "", nil, errors.New("invalid kind of model type")
	}
	cn := acronymToLower(mT.Name())
	return cn, repo.colls[cn], nil
}

func changeLog[M any](ctx context.Context, rid primitive.ObjectID, oldM, newM M) (*model.ChangeLog, error) {
	mT := reflect.TypeOf(newM)
	oldMV := reflect.ValueOf(oldM)
	newMV := reflect.ValueOf(newM)
	if mT.Kind() == reflect.Pointer {
		mT = mT.Elem()
		oldMV = oldMV.Elem()
		newMV = newMV.Elem()
	}
	if mT.Kind() != reflect.Struct {
		return nil, errors.New("invalid kind of model type")
	}
	cn := acronymToLower(mT.Name())
	if rid.IsZero() {
		if f := newMV.FieldByName("ID"); !f.IsNil() {
			rid = f.Elem().Interface().(primitive.ObjectID)
		}
		if rid.IsZero() {
			if f := oldMV.FieldByName("ID"); !f.IsNil() {
				rid = f.Elem().Interface().(primitive.ObjectID)
			}
			if rid.IsZero() {
				return nil, errors.New("record id is zero")
			}
		}
	}
	diff, err := json.FieldDiff(ctx, oldM, newM)
	if err != nil {
		return nil, err
	}
	return &model.ChangeLog{
		Model: &model.Model{
			ID:        model.NewObjectIDPtr(),
			CreatedBy: model.SessionID(ctx),
			CreatedAt: model.SessionDateTime(ctx),
		},
		CollName:  &cn,
		RecordId:  &rid,
		FieldDiff: diff,
	}, nil
}

func InsertOne[M any](ctx context.Context, newM M, opts ...*options.InsertOneOptions) (res *mongo.InsertOneResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return
	}
	res, err = coll.InsertOne(ctx, newM, opts...)
	if err != nil {
		return
	}
	// insert a change log
	var oldM M
	log, er := changeLog(ctx, res.InsertedID.(primitive.ObjectID), oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func InsertMany[M any](ctx context.Context, newMs []M, opts ...*options.InsertManyOptions) (res *mongo.InsertManyResult, err error) {
	docs := make([]interface{}, 0, len(newMs))
	for _, v := range newMs {
		docs = append(docs, v)
	}
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	res, err = coll.InsertMany(ctx, docs, opts...)
	if err != nil {
		return
	}
	// insert many change logs
	var oldM M
	var logs []interface{}
	for _, newM := range newMs {
		log, er := changeLog(ctx, primitive.NilObjectID, oldM, newM)
		if er != nil {
			return
		}
		logs = append(logs, log)
	}
	Collection(model.ChangeLog{}).InsertMany(ctx, logs)
	return
}

func estimateRecordID(id interface{}) primitive.ObjectID {
	switch id.(type) {
	case *primitive.ObjectID:
		return *id.(*primitive.ObjectID)
	case primitive.ObjectID:
		return id.(primitive.ObjectID)
	}
	return primitive.NilObjectID
}

func UpdateOneModelByID[M any](ctx context.Context, id interface{}, newM M, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return
	}
	oldM, err := findByID[M](ctx, coll, id)
	if err != nil {
		return
	}
	res, err = coll.UpdateOne(
		ctx,
		model.FilterEnabled(bson.D{{Key: "_id", Value: id}}),
		bson.D{{Key: "$set", Value: newM}},
		opts...,
	)
	if err != nil {
		return
	}
	// insert a change log
	log, er := changeLog(ctx, estimateRecordID(id), oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func UpdateOneByID[M any](ctx context.Context, id, update interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return
	}
	oldM, err := findByID[M](ctx, coll, id)
	if err != nil {
		return
	}
	res, err = coll.UpdateOne(
		ctx,
		model.FilterEnabled(bson.D{{Key: "_id", Value: id}}),
		update,
		opts...,
	)
	if err != nil {
		return
	}
	newM, err := findByID[M](ctx, coll, id)
	if err != nil {
		return
	}
	// insert a change log
	log, er := changeLog(ctx, estimateRecordID(id), oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func UpdateOne[M any](ctx context.Context, filter, update interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return
	}
	var oldM M
	if err = coll.FindOne(ctx, filter).Decode(&oldM); err != nil {
		return
	}
	res, err = coll.UpdateOne(
		ctx,
		model.FilterEnabled(filter),
		update,
		opts...,
	)
	if err != nil {
		return
	}
	var newM M
	if err = coll.FindOne(ctx, filter).Decode(&newM); err != nil {
		return
	}
	// insert a change log
	log, er := changeLog(ctx, primitive.NilObjectID, oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func UpdateManyModel[M any](ctx context.Context, filter interface{}, newM M, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return
	}
	filter = model.FilterEnabled(filter)
	rids, err := projectMany(
		ctx,
		coll,
		func(m M) primitive.ObjectID {
			mT := reflect.TypeOf(m)
			mV := reflect.ValueOf(m)
			if mT.Kind() == reflect.Pointer {
				mT = mT.Elem()
				mV = mV.Elem()
			}
			if mT.Kind() != reflect.Struct {
				return primitive.NilObjectID
			}
			if f := mV.FieldByName("ID"); !f.IsNil() {
				return f.Elem().Interface().(primitive.ObjectID)
			}
			return primitive.NilObjectID
		},
		filter,
	)
	if err != nil {
		return
	}
	oldMs := make(map[primitive.ObjectID]M, len(rids))
	for _, rid := range rids {
		oldM, er := findByID[M](ctx, coll, rid)
		if er != nil {
			return res, er
		}
		oldMs[rid] = oldM
	}
	res, err = coll.UpdateMany(ctx, filter, bson.D{{Key: "$set", Value: newM}}, opts...)
	if err != nil {
		return
	}
	// insert many change logs
	var logs []interface{}
	for rid, oldM := range oldMs {
		log, er := changeLog(ctx, rid, oldM, newM)
		if er != nil {
			return
		}
		logs = append(logs, log)
	}
	Collection(model.ChangeLog{}).InsertMany(ctx, logs)
	return
}

func UpdateMany[M any](ctx context.Context, filter, update interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return
	}
	filter = model.FilterEnabled(filter)
	rids, err := projectMany(
		ctx,
		coll,
		func(m M) primitive.ObjectID {
			mT := reflect.TypeOf(m)
			mV := reflect.ValueOf(m)
			if mT.Kind() == reflect.Pointer {
				mT = mT.Elem()
				mV = mV.Elem()
			}
			if mT.Kind() != reflect.Struct {
				return primitive.NilObjectID
			}
			if f := mV.FieldByName("ID"); !f.IsNil() {
				return f.Elem().Interface().(primitive.ObjectID)
			}
			return primitive.NilObjectID
		},
		filter,
	)
	if err != nil {
		return
	}
	oldMs := make(map[primitive.ObjectID]M, len(rids))
	for _, rid := range rids {
		oldM, er := findByID[M](ctx, coll, rid)
		if er != nil {
			return res, er
		}
		oldMs[rid] = oldM
	}
	res, err = coll.UpdateMany(ctx, filter, update, opts...)
	if err != nil {
		return
	}
	newMs := make(map[primitive.ObjectID]M, len(rids))
	for _, rid := range rids {
		newM, er := findByID[M](ctx, coll, rid)
		if er != nil {
			return res, er
		}
		newMs[rid] = newM
	}
	// insert many change logs
	var logs []interface{}
	for rid, oldM := range oldMs {
		for rid2, newM := range newMs {
			if rid.Hex() == rid2.Hex() {
				log, er := changeLog(ctx, rid, oldM, newM)
				if er != nil {
					return
				}
				logs = append(logs, log)
				break
			}
		}
	}
	Collection(model.ChangeLog{}).InsertMany(ctx, logs)
	return
}

func PushArraryByID[M any](ctx context.Context, id interface{}, newM M, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	oldM, err := findByID[M](ctx, coll, id)
	if err != nil {
		return
	}
	res, err = coll.UpdateByID(ctx, id, bson.D{{Key: "$push", Value: newM}}, opts...)
	if err != nil {
		return
	}
	// insert a change log
	log, er := changeLog(ctx, estimateRecordID(id), oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func PullArrayByID[M any](ctx context.Context, id interface{}, newM M, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	oldM, err := findByID[M](ctx, coll, id)
	if err != nil {
		return
	}
	res, err = coll.UpdateByID(ctx, id, bson.D{{Key: "$pull", Value: newM}}, opts...)
	if err != nil {
		return
	}
	// insert a change log
	log, er := changeLog(ctx, estimateRecordID(id), oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func DisableOneByID[M any](ctx context.Context, id interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	var m M
	mT := reflect.TypeOf(m)
	if mT.Kind() == reflect.Pointer {
		mT = mT.Elem()
	}
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
	if mfIsPtr {
		mf.Set(reflect.ValueOf(&model.Model{
			DeletedBy: model.SessionID(ctx),
			DeletedAt: model.SessionDateTime(ctx),
		}))
	} else {
		mf.Set(reflect.ValueOf(model.Model{
			DeletedBy: model.SessionID(ctx),
			DeletedAt: model.SessionDateTime(ctx),
		}))
	}
	return UpdateOneModelByID(ctx, id, m, opts...)
}

func DisableOne[M any](ctx context.Context, filter interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	var m M
	mT := reflect.TypeOf(m)
	if mT.Kind() == reflect.Pointer {
		mT = mT.Elem()
	}
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
	if mfIsPtr {
		mf.Set(reflect.ValueOf(&model.Model{
			DeletedBy: model.SessionID(ctx),
			DeletedAt: model.SessionDateTime(ctx),
		}))
	} else {
		mf.Set(reflect.ValueOf(model.Model{
			DeletedBy: model.SessionID(ctx),
			DeletedAt: model.SessionDateTime(ctx),
		}))
	}
	return UpdateOne[M](ctx, filter, m, opts...)
}

func DisableMany[M any](ctx context.Context, filter interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	return UpdateMany[M](
		ctx,
		filter,
		bson.D{
			{
				Key: "$set",
				Value: bson.D{
					{Key: "deletedBy", Value: model.SessionID(ctx)},
					{Key: "deletedAt", Value: model.SessionDateTime(ctx)},
				},
			},
		},
		opts...,
	)
}

func EnableOneByID[M any](ctx context.Context, id interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	return UpdateOneByID[M](ctx, id, bson.D{{Key: "$unset", Value: []string{"deletedBy", "deletedAt"}}}, opts...)
}

func EnableOne[M any](ctx context.Context, filter interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	return UpdateOne[M](ctx, filter, bson.D{{Key: "$unset", Value: []string{"deletedBy", "deletedAt"}}}, opts...)
}

func EnableMany[M any](ctx context.Context, filter interface{}, opts ...*options.UpdateOptions) (res *mongo.UpdateResult, err error) {
	return UpdateMany[M](ctx, filter, bson.D{{Key: "$unset", Value: []string{"deletedBy", "deletedAt"}}}, opts...)
}

func DeleteByID[M any](ctx context.Context, id interface{}, opts ...*options.DeleteOptions) (res *mongo.DeleteResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	oldM, err := findByID[M](ctx, coll, id)
	if err != nil {
		return
	}
	res, err = coll.DeleteOne(ctx, bson.D{{Key: "_id", Value: id}}, opts...)
	// insert a change log
	var newM M
	log, er := changeLog(ctx, estimateRecordID(id), oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func DeleteOne[M any](ctx context.Context, filter interface{}, opts ...*options.DeleteOptions) (res *mongo.DeleteResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	var oldM M
	if err = coll.FindOne(ctx, filter).Decode(&oldM); err != nil {
		return
	}
	res, err = coll.DeleteOne(ctx, filter, opts...)
	// insert a change log
	var newM M
	log, er := changeLog(ctx, primitive.NilObjectID, oldM, newM)
	if er != nil {
		return
	}
	Collection(model.ChangeLog{}).InsertOne(ctx, log)
	return
}

func DeleteMany[M any](ctx context.Context, filter interface{}, opts ...*options.DeleteOptions) (res *mongo.DeleteResult, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	rids, err := projectMany(
		ctx,
		coll,
		func(m M) primitive.ObjectID {
			mT := reflect.TypeOf(m)
			mV := reflect.ValueOf(m)
			if mT.Kind() == reflect.Pointer {
				mT = mT.Elem()
				mV = mV.Elem()
			}
			if mT.Kind() != reflect.Struct {
				return primitive.NilObjectID
			}
			if f := mV.FieldByName("ID"); !f.IsNil() {
				return f.Elem().Interface().(primitive.ObjectID)
			}
			return primitive.NilObjectID
		},
		filter,
	)
	if err != nil {
		return
	}
	oldMs := make(map[primitive.ObjectID]M, len(rids))
	for _, rid := range rids {
		oldM, er := findByID[M](ctx, coll, rid)
		if er != nil {
			return res, er
		}
		oldMs[rid] = oldM
	}
	res, err = coll.DeleteMany(ctx, filter, opts...)
	// insert many change logs
	var logs []interface{}
	var newM M
	for rid, oldM := range oldMs {
		log, er := changeLog(ctx, rid, oldM, newM)
		if er != nil {
			return
		}
		logs = append(logs, log)
	}
	Collection(model.ChangeLog{}).InsertMany(ctx, logs)
	return
}

func findByID[M any](ctx context.Context, coll *mongo.Collection, id interface{}, opts ...*options.FindOneOptions) (m M, err error) {
	err = coll.FindOne(ctx, bson.D{{Key: "_id", Value: id}}, opts...).Decode(&m)
	return
}

func FindByID[M any](ctx context.Context, id interface{}, opts ...*options.FindOneOptions) (m M, err error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return m, err
	}
	return findByID[M](ctx, coll, id, opts...)
}

func FindOne[M any](ctx context.Context, filter interface{}, opts ...*options.FindOneOptions) (M, error) {
	var m M
	_, coll, err := estimateColl[M]()
	if err != nil {
		return m, err
	}
	log.Println(filter)
	err = coll.FindOne(ctx, filter, opts...).Decode(&m)
	return m, err
}

func FindMany[M any](ctx context.Context, filter interface{}, opts ...*options.FindOptions) ([]M, error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	res := make([]M, 0)
	cursor, err := coll.Find(ctx, filter, opts...)
	if err != nil {
		return nil, err
	}
	for cursor.Next(ctx) {
		var one M
		if err := cursor.Decode(&one); err != nil {
			return nil, err
		}
		res = append(res, one)
	}
	if err := cursor.Err(); err != nil {
		return nil, err
	}
	return res, nil
}

func projectMany[M, P any](ctx context.Context, coll *mongo.Collection, handler func(M) P, filter interface{}, opts ...*options.FindOptions) ([]P, error) {
	res := make([]P, 0)
	cursor, err := coll.Find(ctx, filter, opts...)
	if err != nil {
		return nil, err
	}
	for cursor.Next(ctx) {
		var one M
		if err = cursor.Decode(&one); err != nil {
			return nil, err
		}
		res = append(res, handler(one))
	}
	if err = cursor.Err(); err != nil {
		return nil, err
	}
	return res, nil
}

func ProjectMany[M, P any](ctx context.Context, handler func(M) P, filter interface{}, opts ...*options.FindOptions) ([]P, error) {
	_, coll, err := estimateColl[M]()
	if err != nil {
		return nil, err
	}
	return projectMany(ctx, coll, handler, filter, opts...)
}

func ProjectDescendantIDs[M any](ctx context.Context, parentID *primitive.ObjectID) ([]*primitive.ObjectID, error) {
	var res []*primitive.ObjectID
	descendantIDs, err := ProjectMany(
		ctx,
		func(m M) *primitive.ObjectID {
			mV := reflect.ValueOf(m)
			if mV.Kind() == reflect.Pointer {
				return mV.Interface().(*primitive.ObjectID)
			} else {
				return mV.Addr().Interface().(*primitive.ObjectID)
			}
		},
		bson.D{{Key: "parentID", Value: parentID}},
		options.Find().SetProjection(bson.D{{Key: "_id", Value: 1}}),
	)
	if err != nil {
		return nil, err
	}
	for k, v := range descendantIDs {
		res = append(res, descendantIDs[k])
		childrenIDs, err := ProjectDescendantIDs[M](ctx, v)
		if err != nil {
			return nil, err
		}
		res = append(res, childrenIDs...)
	}
	return res, nil
}

var (
	repo *Repo
)

type Repo struct {
	db    *mongo.Database
	colls map[string]*mongo.Collection
}

func (a *Repo) DB() *mongo.Database {
	if a == nil || a.db == nil {
		return nil
	}
	return a.db
}

func (a *Repo) Client() *mongo.Client {
	if a == nil || a.db == nil {
		return nil
	}
	return a.db.Client()
}

func (a *Repo) Collection(m any) *mongo.Collection {
	if a == nil || a.db == nil || a.colls == nil {
		return nil
	}
	mT := reflect.TypeOf(m)
	if mT.Kind() == reflect.Pointer {
		mT = mT.Elem()
	}
	return repo.colls[acronymToLower(mT.Name())]
}

func (a Repo) ChangeLogEnabled() bool {
	return a.colls["changeLog"] != nil
}

func (a *Repo) EnableChangeLog(ctx context.Context) error {
	if a == nil {
		return nil
	}
	return a.RegisterCollection(ctx, model.ChangeLog{})
}

func (a *Repo) DisableChangeLog(ctx context.Context) {
	if a == nil || a.colls == nil {
		return
	}
	a.colls["changeLog"] = nil
}

func (a *Repo) RegisterCollection(ctx context.Context, models ...interface{}) error {
	if a == nil || a.db == nil {
		return nil
	}
	if a.colls == nil {
		a.colls = make(map[string]*mongo.Collection)
	}
	for _, m := range models {
		mT := reflect.TypeOf(m)
		if mT.Kind() == reflect.Pointer {
			mT = mT.Elem()
		}
		if mT.Kind() != reflect.Struct {
			return errors.New("invalid kind of model type")
		}
		// create unique indexes
		uqIdxes := make(map[string]bson.D)
		for i := 0; i < mT.NumField(); i++ {
			tags := strings.Split(mT.Field(i).Tag.Get("repo"), ";")
			for _, tag := range tags {
				kvs := strings.Split(tag, ":")
				for j, korv := range kvs {
					if korv == "index" {
						idxVals := strings.Split(kvs[j+1], ",")
						if len(idxVals) != 2 || idxVals[1] != "unique" {
							return errors.New("tag error: invalid unique index contraint")
						}
						_, has := uqIdxes[idxVals[0]]
						if !has {
							uqIdxes[idxVals[0]] = bson.D{{Key: acronymToLower(mT.Field(i).Name), Value: 1}}
						} else {
							uqIdxes[idxVals[0]] = append(uqIdxes[idxVals[0]], bson.E{Key: acronymToLower(mT.Field(i).Name), Value: 1})
						}
					}
				}
			}
		}
		var idxMs []mongo.IndexModel
		for k, v := range uqIdxes {
			idxMs = append(idxMs, mongo.IndexModel{
				Keys:    v,
				Options: options.Index().SetName(k).SetUnique(true),
			})
		}
		coll := a.db.Collection(acronymToLower(mT.Name()))
		coll.Indexes().CreateMany(ctx, idxMs)
		a.colls[acronymToLower(mT.Name())] = coll
	}
	return nil
}

func acronymToLower(name string) string {
	nrs := []rune(name)
	nrs[0] = unicode.ToLower(nrs[0])
	return string(nrs)
}

func (a *Repo) Close(ctx context.Context) error {
	return a.db.Client().Disconnect(ctx)
}
