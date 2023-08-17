<template lang="pug">
#container
  #title
    h1 基于RBAC模型的后台权限管理系统
  .input
    el-input(
      v-model="signInForm.account"
      prefix-icon="User"
      placeholder="请输入用户名"
      @keyup.enter="handleEnterKey"
    )
  .input
    el-input(
      v-model="signInForm.password"
      prefix-icon="Lock"
      placeholder="请输入密码"
      show-password
      @keyup.enter="handleEnterKey"
    )
  .input
    el-button(
      @click="doSignIn"
      style="width: 500px"
      type="primary"
      :disabled="disabled"
    ) 登录
el-dialog(
  v-model="dialogTableVisible"
  title="选择域和角色"
  destroy-on-close
  @close="handleDomainRoleDialogClose"
)
  el-row
    el-col(:span="12")
      el-card
        template(#header)
          span Domains
        el-radio-group(
          v-model="curDomainId"
          @change="handleDomainRadioGroupChange"
        )
          el-radio(v-for="item in ownDomains" :label="item.id") {{ item.name }}
    el-col(:span="12")
      el-card
        template(#header)
          span Roles
        el-radio-group(v-model="curRoleId")
          el-radio(v-for="item in ownRoles" :label="item.id") {{ item.name }}
  template(#footer)
    span.dialog-footer
      el-button(type="primary" @click="loadMenus") 确定
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { signIn, getOwnRoles, getOwnMenus, getOwnDomains } from '@/apis/index'

const router = useRouter()
const signInForm = reactive({
  account: '',
  password: '',
  picCaptchaId: 'mock',
  picCaptchaAnswer: 'mock'
})
const disabled = computed(() => {
  return signInForm.account.length === 0 || signInForm.password.length === 0
})
const dialogTableVisible = ref(false)
const ownDomains = ref(null)
const ownRoles = ref(null)
const ownMenus = ref(null)
const curDomainId = ref('')
const curRoleId = ref('')
const doSignIn = async () => {
  try {
    const signInResp = await signIn(signInForm)
    localStorage.setItem('Authorization', signInResp.data.token)
    const getOwnDomainsResp = await getOwnDomains()
    ownDomains.value = getOwnDomainsResp.data.list
    if (ownDomains.value && (ownDomains.value as Array<any>).length > 0) {
      dialogTableVisible.value = true
      return
    }
    const getOwnMenusResp = await getOwnMenus({})
    ownMenus.value = getOwnMenusResp.data.list
    if (ownMenus.value && (ownMenus.value as Array<any>).length > 0) {
      localStorage.setItem('menus', JSON.stringify(ownMenus.value))
      ElMessage({
        message: '登录成功！',
        type: 'success',
        duration: 3000
      })
      setTimeout(() => {
        router.push({ name: 'home' })
      })
    } else {
      ElMessage({
        message: '登录失败：系统菜单列表为空',
        type: 'error',
        duration: 3000
      })
      localStorage.removeItem('Authorization')
    }
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '登录失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
    localStorage.removeItem('Authorization')
  }
}
const handleDomainRadioGroupChange = async (id:string) => {
  try {
    const getOwnRolesResp = await getOwnRoles({domainId: id})
    ownRoles.value = getOwnRolesResp.data.list
    curRoleId.value = ''
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '登录失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const handleDomainRoleDialogClose = () => {
  localStorage.removeItem('Authorization')
}
const loadMenus = async () => {
  try {
    if (!curDomainId.value || !curRoleId.value) {
      ElMessage({
        message: '登录失败！ 请选择域及角色！',
        type: 'error',
        duration: 3000
      })
      return
    }
    const getOwnMenusResp = await getOwnMenus({ domainId: curDomainId.value, roleId: curRoleId.value })
    ownMenus.value = getOwnMenusResp.data.list
    if (ownMenus.value && (ownMenus.value as Array<any>).length > 0) {
      localStorage.setItem('menus', JSON.stringify(ownMenus.value))
      ElMessage({
        message: '登录成功！',
        type: 'success',
        duration: 3000
      })
      setTimeout(() => {
        router.push({ name: 'home' })
      })
    } else {
      ElMessage({
        message: '登录失败：系统菜单列表为空',
        type: 'error',
        duration: 3000
      })
      localStorage.removeItem('Authorization')
    }
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '登录失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
    localStorage.removeItem('Authorization')
  }
}
const handleEnterKey = (event:any) => {
  if (!disabled.value) {
    doSignIn()
  }
}
</script>

<style lang="scss" scoped>
#container {
  background: #595959;
  background-image: url("@/assets/sign_in_bg.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
}
#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}
.input {
  margin: 20px auto;
  width: 500px;
}
</style>
