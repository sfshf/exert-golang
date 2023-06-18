package cipher_test

import (
	"testing"

	"github.com/sfshf/exert-golang/util/crypto/cipher"
	"github.com/stretchr/testify/assert"
)

func TestAESCBC(t *testing.T) {
	secByts := []byte("one secret key")
	plainByts := []byte("one plain text")
	cipherByts, err := cipher.AESCBCEncrypt(plainByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainByts2, err := cipher.AESCBCDecrypt(cipherByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainByts, plainByts2, "the two plain byte slices should be same.")
}

func TestAESCBCString(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText, err := cipher.AESCBCEncryptString(plainText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainText2, err := cipher.AESCBCDecryptString(cipherText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESCBCStringIgnoreError(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText := cipher.AESCBCEncryptStringIgnoreError(plainText, secText)
	plainText2 := cipher.AESCBCDecryptStringIgnoreError(cipherText, secText)
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESCFB(t *testing.T) {
	secByts := []byte("one secret key")
	plainByts := []byte("one plain text")
	cipherByts, err := cipher.AESCFBEncrypt(plainByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainByts2, err := cipher.AESCFBDecrypt(cipherByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainByts, plainByts2, "the two plain byte slices should be same.")
}

func TestAESCFBString(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText, err := cipher.AESCFBEncryptString(plainText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainText2, err := cipher.AESCFBDecryptString(cipherText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESCFBStringIgnoreError(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText := cipher.AESCFBEncryptStringIgnoreError(plainText, secText)
	plainText2 := cipher.AESCFBDecryptStringIgnoreError(cipherText, secText)
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESCTR(t *testing.T) {
	secByts := []byte("one secret key")
	plainByts := []byte("one plain text")
	cipherByts, err := cipher.AESCTREncrypt(plainByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainByts2, err := cipher.AESCTRDecrypt(cipherByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainByts, plainByts2, "the two plain byte slices should be same.")
}

func TestAESCTRString(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText, err := cipher.AESCTREncryptString(plainText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainText2, err := cipher.AESCTRDecryptString(cipherText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESCTRStringIgnoreError(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText := cipher.AESCTREncryptStringIgnoreError(plainText, secText)
	plainText2 := cipher.AESCTRDecryptStringIgnoreError(cipherText, secText)
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESOFB(t *testing.T) {
	secByts := []byte("one secret key")
	plainByts := []byte("one plain text")
	cipherByts, err := cipher.AESOFBEncrypt(plainByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainByts2, err := cipher.AESOFBDecrypt(cipherByts, secByts)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainByts, plainByts2, "the two plain byte slices should be same.")
}

func TestAESOFBString(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText, err := cipher.AESOFBEncryptString(plainText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	plainText2, err := cipher.AESOFBDecryptString(cipherText, secText)
	if err != nil {
		assert.Fail(t, err.Error())
	}
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}

func TestAESOFBStringIgnoreError(t *testing.T) {
	secText := "one secret key"
	plainText := "one plain text"
	cipherText := cipher.AESOFBEncryptStringIgnoreError(plainText, secText)
	plainText2 := cipher.AESOFBDecryptStringIgnoreError(cipherText, secText)
	assert.Equal(t, plainText, plainText2, "the two plain strings should be same.")
}
