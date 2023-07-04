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
                      el-avatar(:size="small" :src="require('@/assets/avatar_circle.png')")
                      el-icon
                        arrow-down
                    template(#dropdown)
                      el-dropdown-item
                        el-button(type="primary" @click="doChat" link) 进入聊天界面
                      el-dropdown-item
                        el-button(type="primary" @click="logout" link) 注销
          router-view
        el-footer 页脚
</template>

<script lang="ts" setup>
import { useLogInStore } from '@/store'
import router from '@/router'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import DynMenu from '@/components/auth/DynMenu.vue'
import { ElMessage } from 'element-plus'
import { signOut } from '@/apis'

const route = useRoute()
const logInStore = useLogInStore()
const selectItem = (index: string) => {
  router.push({ path: index })
}
const logout = async () => {
  try {
    const signOutResp = await signOut()
    ElMessage({
      message: '注销成功！',
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
      message: '注销失败：' + errMsg,
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

</script>

<style lang="scss" scoped>

</style>
