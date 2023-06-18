package hash_test

import (
	"fmt"
	"testing"

	"github.com/sfshf/exert-golang/util/crypto/hash"
	"github.com/stretchr/testify/assert"
)

func TestMD5(t *testing.T) {
	plain := "testing MD5"
	digest1, err := hash.MD5([]byte(plain), nil)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	digest2 := hash.MD5StringIgnorePrefixAndError(plain)
	assert.Equal(t, fmt.Sprintf("%x", digest1), digest2, "the two strings should be same.")
}

func TestSHA256(t *testing.T) {
	plain := "testing SHA256"
	digest1, err := hash.SHA256([]byte(plain), nil)
	if err != nil {
		t.Error(err)
	}
	digest2 := hash.SHA256StringIgnorePrefixAndError(plain)
	assert.Equal(t, fmt.Sprintf("%x", digest1), digest2, "the two strings should be same.")
}
