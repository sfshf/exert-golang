<script lang="ts" setup>
import router from '@/router'
import { ref, onMounted } from 'vue'
import DynMenu from '@/components/auth/DynMenu.vue'
import { ElMessage } from 'element-plus'
import { signOut, getOwnDomains, getOwnRoles, getOwnMenus } from '@/apis'

const dialogTableVisible = ref(false)
const ownDomains = ref(null)
const ownRoles = ref(null)
const curDomainId = ref('')
const curRoleId = ref('')
const handleDomainRoleDialogClose = () => {
  curDomainId.value = ''
  curRoleId.value = ''
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
      message: '切换失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const loadMenus = async () => {
  try {
    if (!curDomainId.value || !curRoleId.value) {
      ElMessage({
        message: '切换失败！ 请选择域及角色！',
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
        message: '切换成功！',
        type: 'success',
        duration: 3000
      })
      setTimeout(() => {
        router.push({ name: 'home' })
      })
    } else {
      ElMessage({
        message: '切换失败：系统菜单列表为空',
        type: 'error',
        duration: 3000
      })
    }
    dialogTableVisible.value = false
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '切换失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const doSwitchRole = async () => {
  try {
    const getOwnDomainsResp = await getOwnDomains()
    ownDomains.value = getOwnDomainsResp.data.list
    if (ownDomains.value && (ownDomains.value as Array<any>).length > 0) {
      dialogTableVisible.value = true
      return
    }
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '切换失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const doChat = async () => {
  console.log('todo chat')
}
const logout = async () => {
  try {
    const signOutResp = await signOut()
    ElMessage({
      message: '登出成功！',
      type: 'success',
      duration: 3000
    })
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '登出失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  } finally {
    localStorage.clear()
    router.push({ name: 'signIn' })
  }
}
const ownMenus = ref([])
onMounted(() => {
  ownMenus.value = JSON.parse('' + localStorage.getItem('menus'))
})
const getImageUrl = (name:string) => {
    return new URL(`@/assets/${name}`, import.meta.url).href
}
</script>

<template lang="pug">
el-container
  el-header 基于RBAC模型的后台权限管理系统
    el-container.layout-container-demo(style="height:900px;")
      el-aside(width="200px") 菜单侧边栏标题
        el-scrollbar
          DynMenu(:menus="ownMenus")
      el-container
        el-main
          el-header(style="margin:0;padding:0;" height="80px")
            el-container(style="background-color:blanchedalmond;margin:0;padding:0;height:80px;")
              div(style="margin:auto;margin-left:100px")
                h1 欢迎您登录后台管理系统，管理员用户！
              div(style="margin:auto;margin-right:50px")
                el-space(:size="10" spacer="|")
                  el-badge(:value="12")
                    el-icon
                      ChatDotRound
                  el-dropdown
                    span
                      el-avatar(:size="small" :src="getImageUrl('@/assets/avatar_circle.jpg')")
                      el-icon
                        arrow-down
                    template(#dropdown)
                      el-dropdown-item
                        el-button(type="primary" @click="doSwitchRole" link) 切换角色
                      el-dropdown-item
                        el-button(type="primary" @click="doChat" link) 进入聊天界面
                      el-dropdown-item
                        el-button(type="primary" @click="logout" link) 登出
          router-view
        el-footer 页脚
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

<style lang="scss" scoped>

</style>
