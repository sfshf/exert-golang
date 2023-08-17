import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSignInStore = defineStore('signIn', () => {
  const isLogin = ref(false)
  const registUserInfo = ref({ name: '', password: '' })
  const clearUserInfo = () => {
    isLogin.value = false
    registUserInfo.value = { name: '', password: '' }
  }
  return { isLogin, registUserInfo, clearUserInfo }
})