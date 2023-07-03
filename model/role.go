package model

type Role struct {
	*Model `bson:"inline"`
	Name   *string   `bson:"name,omitempty" json:"name,omitempty" repo:"index:name,unique"`
	Alias  *[]string `bson:"alias,omitempty" json:"alias,omitempty"`
	Seq    *int      `bson:"seq,omitempty" json:"seq,omitempty"`
	Icon   *string   `bson:"icon,omitempty" json:"icon,omitempty"`
	Memo   *string   `bson:"memo,omitempty" json:"memo,omitempty"`
}
