import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLogInStore = defineStore('logIn', () => {
  const isLogin = ref(false)
  const registUserInfo = ref({ name: '', password: '' })
  const clearUserInfo = () => {
    isLogin.value = false
    registUserInfo.value = { name: '', password: '' }
  }
  return { isLogin, registUserInfo, clearUserInfo }
})
