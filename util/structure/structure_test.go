package structure_test

import (
	"testing"

	"github.com/sfshf/exert-golang/util/structure"
)

// Shallow tests:

func TestCopy(t *testing.T) {
	type UserSchema struct {
		Name    string
		Age     uint
		Address string
	}
	type UserModel struct {
		ID       uint
		Name     string
		Age      uint
		WhereNow string
	}
	from := UserModel{
		ID:       1,
		Name:     "Gavin",
		Age:      28,
		WhereNow: "at home",
	}
	to := &UserSchema{}
	if err := structure.Copy(to, from); err != nil {
		t.Error(err)
	} else {
		t.Log(to)
	}

}

func TestCopyPointers(t *testing.T) {
	type UserSchema struct {
		Name    *string
		Age     *int
		Address *string
	}
	type UserModel struct {
		ID       *int
		Name     *string
		Age      *uint
		WhereNow *string
	}
	id := 2
	name := "Gavin"
	var age uint = 28
	whereNow := "at home"
	from := &UserModel{
		ID:       &id,
		Name:     &name,
		Age:      &age,
		WhereNow: &whereNow,
	}
	to := &UserSchema{}
	if err := structure.Copy(to, from); err != nil {
		t.Error(err)
	} else {
		if to.Name != nil {
			t.Log(*to.Name)
		}
		if to.Age != nil {
			t.Log(*to.Age)
		}
		if to.Address != nil {
			t.Log(*to.Address)
		}
	}
}
