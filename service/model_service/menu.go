package model_service

import (
	"context"
	"errors"
	"os"
	"sort"
	"time"

	"github.com/sfshf/exert-golang/model"
	"github.com/sfshf/exert-golang/repo"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gopkg.in/yaml.v3"
)

type MenuView struct {
	Id       string            `yaml:"-" json:"-"`
	Name     string            `yaml:"name,omitempty" json:"name,omitempty"`
	Seq      int               `yaml:"seq,omitempty" json:"seq,omitempty"`
	Icon     string            `yaml:"icon,omitempty" json:"icon,omitempty"`
	Route    string            `yaml:"route,omitempty" json:"route,omitempty"`
	Memo     string            `yaml:"memo,omitempty" json:"memo,omitempty"`
	Show     bool              `yaml:"show,omitempty" json:"show,omitempty"`
	Enable   bool              `yaml:"enable,omitempty" json:"enable,omitempty"`
	IsItem   bool              `yaml:"isItem,omitempty" json:"isItem,omitempty"`
	Widgets  []*MenuWidgetView `yaml:"widgets,omitempty" json:"widgets,omitempty"`
	Children []*MenuView       `yaml:"children,omitempty" json:"children,omitempty"`
}

type MenuWidgetView struct {
	Id        string `yaml:"-" json:"-"`
	Name      string `yaml:"name,omitempty" json:"name,omitempty"`
	Seq       int    `yaml:"seq,omitempty" json:"seq,omitempty"`
	Icon      string `yaml:"icon,omitempty" json:"icon,omitempty"`
	ApiMethod string `yaml:"apiMethod,omitempty" json:"apiMethod,omitempty"`
	ApiPath   string `yaml:"apiPath,omitempty" json:"apiPath,omitempty"`
	Memo      string `yaml:"memo,omitempty" json:"memo,omitempty"`
	Show      bool   `yaml:"show,omitempty" json:"show,omitempty"`
	Enable    bool   `yaml:"enable,omitempty" json:"enable,omitempty"`
}

func ImportMenuWidgetsFromYaml(ctx context.Context, path string, sessionID *primitive.ObjectID) error {
	if path == "" {
		return errors.New("invalid file path")
	}
	// unmarshal menu config file.
	f, err := os.Open(path)
	if err != nil {
		return err
	}
	var originMenus []*MenuView
	if err := yaml.NewDecoder(f).Decode(&originMenus); err != nil {
		return err
	}
	modelMenus, modelMenuWidgets, err := ConvertToMenuModels(sessionID, originMenus, nil)
	if err != nil {
		return err
	}
	ctx = model.WithSession(ctx, sessionID, model.NewDatetime(time.Now()))
	session, err := repo.Client().StartSession()
	if err != nil {
		return err
	}
	defer session.EndSession(ctx)
	if _, err := session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		if _, err = repo.InsertMany(sessCtx, modelMenus); err != nil {
			return nil, err
		}
		if _, err = repo.InsertMany(sessCtx, modelMenuWidgets); err != nil {
			return nil, err
		}
		return nil, nil
	}); err != nil {
		return err
	}
	return nil
}

func ConvertToMenuModels(sessionID *primitive.ObjectID, menuViews []*MenuView, parentID *primitive.ObjectID) ([]*model.Menu, []*model.MenuWidget, error) {
	menuModels := make([]*model.Menu, 0)
	menuWidgets := make([]*model.MenuWidget, 0)
	for i := 0; i < len(menuViews); i++ {
		menu := &model.Menu{
			Model: &model.Model{
				ID:        model.NewObjectIDPtr(),
				CreatedAt: model.NewDatetime(time.Now()),
				CreatedBy: sessionID,
			},
			Name:     &menuViews[i].Name,
			Seq:      &menuViews[i].Seq,
			Icon:     &menuViews[i].Icon,
			Route:    &menuViews[i].Route,
			Memo:     &menuViews[i].Memo,
			Show:     &menuViews[i].Show,
			IsItem:   &menuViews[i].IsItem,
			ParentID: parentID,
		}
		if len(menuViews[i].Widgets) > 0 {
			for j := 0; j < len(menuViews[i].Widgets); j++ {
				widget := &model.MenuWidget{
					Model: &model.Model{
						ID:        model.NewObjectIDPtr(),
						CreatedAt: model.NewDatetime(time.Now()),
						CreatedBy: sessionID,
					},
					MenuID:    menu.ID,
					Name:      &menuViews[i].Widgets[j].Name,
					Seq:       &menuViews[i].Widgets[j].Seq,
					Icon:      &menuViews[i].Widgets[j].Icon,
					ApiMethod: &menuViews[i].Widgets[j].ApiMethod,
					ApiPath:   &menuViews[i].Widgets[j].ApiPath,
					Memo:      &menuViews[i].Widgets[j].Memo,
					Show:      &menuViews[i].Widgets[j].Show,
				}
				menuWidgets = append(menuWidgets, widget)
			}
		}
		if len(menuViews[i].Children) > 0 {
			children, childrenWidgets, err := ConvertToMenuModels(sessionID, menuViews[i].Children, menu.ID)
			if err != nil {
				return nil, nil, err
			}
			menuModels = append(menuModels, children...)
			menuWidgets = append(menuWidgets, childrenWidgets...)
		}
		menuModels = append(menuModels, menu)
	}
	return menuModels, menuWidgets, nil
}

func GetMenuAndFilteredWidgetViewsByRoleID(ctx context.Context, roleID *primitive.ObjectID) ([]*MenuView, error) {
	menuIDs, err := repo.ProjectMany(
		ctx,
		func(m model.RelationRoleMenu) primitive.ObjectID {
			return *m.MenuID
		},
		bson.D{{Key: "roleID", Value: roleID}},
		options.Find().SetProjection(bson.D{
			{Key: "menuID", Value: 1},
			{Key: "_id", Value: 0},
		}),
	)
	if err != nil {
		return nil, err
	}
	widgetIDs, err := repo.ProjectMany(
		ctx,
		func(m model.RelationRoleMenuWidget) primitive.ObjectID {
			return *m.WidgetID
		},
		bson.D{{Key: "roleID", Value: roleID}},
		options.Find().SetProjection(bson.D{
			{Key: "widgetID", Value: 1},
			{Key: "_id", Value: 0},
		}),
	)
	if err != nil {
		return nil, err
	}
	menuViews, err := GetFilteredMenuViews(ctx, bson.D{{Key: "_id", Value: bson.D{{Key: "$in", Value: menuIDs}}}})
	if err != nil {
		return nil, err
	}
	for _, menuView := range menuViews {
		var filteredWidgetViews []*MenuWidgetView
		for _, widgetView := range menuView.Widgets {
			for _, widgetID := range widgetIDs {
				if widgetID.Hex() == widgetView.Id {
					filteredWidgetViews = append(filteredWidgetViews, widgetView)
					break
				}
			}
		}
		menuView.Widgets = filteredWidgetViews
	}
	return menuViews, nil
}

func GetFilteredMenuViews(ctx context.Context, filter interface{}, opts ...*options.FindOptions) ([]*MenuView, error) {
	menus, err := repo.FindMany[model.Menu](ctx, filter)
	if err != nil {
		return nil, err
	}
	return convertToMenuViews(ctx, menus, "")
}

func convertToMenuViews(ctx context.Context, menuModels []model.Menu, parentId string) ([]*MenuView, error) {
	siblingViews := make([]*MenuView, 0)
	remainModels := make([]model.Menu, 0)
	for i := 0; i < len(menuModels); i++ {
		if (menuModels[i].ParentID == nil && parentId == "") || (menuModels[i].ParentID != nil && menuModels[i].ParentID.Hex() == parentId) {
			menu := &MenuView{
				Id:    menuModels[i].ID.Hex(),
				Name:  *menuModels[i].Name,
				Seq:   *menuModels[i].Seq,
				Icon:  *menuModels[i].Icon,
				Route: *menuModels[i].Route,
				Memo:  *menuModels[i].Memo,
				Show:  *menuModels[i].Show,
			}
			modelWidgets, err := repo.FindMany[model.MenuWidget](ctx, bson.D{{Key: "$in", Value: bson.D{{Key: "menuID", Value: menuModels[i].ID}}}})
			if err != nil {
				return nil, err
			}
			if len(modelWidgets) > 0 {
				var widgets []*MenuWidgetView
				for j := 0; j < len(modelWidgets); j++ {
					widgets = append(widgets, &MenuWidgetView{
						Id:        modelWidgets[j].ID.Hex(),
						Name:      *modelWidgets[j].Name,
						Seq:       *modelWidgets[j].Seq,
						Icon:      *modelWidgets[j].Icon,
						ApiMethod: *modelWidgets[j].ApiMethod,
						ApiPath:   *modelWidgets[j].ApiPath,
						Memo:      *modelWidgets[j].Memo,
						Show:      *modelWidgets[j].Show,
					})
				}
				menu.Widgets = widgets
			}
			siblingViews = append(siblingViews, menu)
		} else {
			remainModels = append(remainModels, menuModels[i])
		}
	}
	sort.Slice(siblingViews, func(i, j int) bool { return siblingViews[i].Seq < siblingViews[j].Seq })
	if len(remainModels) > 0 {
		for i := 0; i < len(siblingViews); i++ {
			children, err := convertToMenuViews(ctx, remainModels, siblingViews[i].Id)
			if err != nil {
				return nil, err
			}
			sort.Slice(children, func(i, j int) bool { return children[i].Seq < children[j].Seq })
			siblingViews[i].Children = children
		}
	}
	return siblingViews, nil
}
