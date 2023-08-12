<template lang="pug">
el-container
  el-main
    el-form(:inline="true" :model="queryForm")
      el-row
        el-col(:span="4")
          el-form-item(label="Name")
            el-input(v-model="queryForm.name" placeholder="Name")
        el-col(:span="4")
          el-form-item(label="Route")
            el-input(v-model="queryForm.route" placeholder="Route")
        el-col(:span="2")
          el-form-item
            el-button(type="primary" @click="doResetQuery") Reset
        el-col(:span="2")
          el-form-item
            el-button(type="primary" @click="doQuery") Query
        el-col(:span="1")
          el-button(type="primary" @click="toDoAdd") Add
    el-container
      el-table(
        :data="menuTableData"
        style="width:100%"
        row-key="id"
        default-expand-all
      )
        el-table-column(fixed prop="id" label="Id" width="250")
        el-table-column(fixed prop="name" label="Name" width="80")
        el-table-column(prop="seq" label="Seq" width="80")
        el-table-column(prop="icon" label="Icon" width="150")
        el-table-column(prop="route" label="Route" width="150")
        el-table-column(prop="memo" label="Memo" width="240")
        el-table-column(label="Show" width="80")
          template(#default="scope")
            el-tag(:type="scope.row.show ? 'success' : 'danger'") {{ scope.row.show }}
        el-table-column(label="Enable" width="80")
          template(#default="scope")
              el-tag(:type="scope.row.deletedAt ? 'danger' : 'success'") {{ scope.row.deletedAt ? false : true }}
        el-table-column(prop="createdBy" label="CreatedBy" width="240")
        el-table-column(prop="createdAt" label="CreatedAt" width="240")
        el-table-column(prop="updatedBy" label="UpdatedBy" width="240")
        el-table-column(prop="updatedAt" label="UpdatedAt" width="240")
        el-table-column(fixed="right" label="Operations" width="240")
          template(#default="scope")
            el-button(link type="info" size="small" @click="toDoDetail(scope.row.id)") Detail
            el-button(link type="primary" size="small" @click="toDoEdit(scope.row.id)") Edit
            el-button(v-if="scope.row.deletedAt" link type="success" size="small" @click="doEnable(scope.row.id)") Enable
            el-button(v-else link type="warning" size="small" @click="doDisable(scope.row.id)") Disable
            el-button(link type="danger" size="small" @click="doRemove(scope.row.id)") Remove
  el-footer
el-drawer(
  size="80%"
  v-model="addDrawer"
  title="Add a menu"
  :direction="rtl"
  :before-close="drawerAddHandleClose"
)
  MenuAdd(:menuOpts="menuOpts" v-model:drawer="addDrawer" @refresh-table="refreshTableAfterWrite")
el-drawer(
  size="80%"
  v-model="detailDrawer"
  title="A menu detail"
  :direction="rtl"
  :before-close="drawerDetailHandleClose"
)
  MenuDetail(:menuOpts="menuOpts" v-model:menuId="menuIdForDetail" v-model:drawer="detailDrawer")
el-drawer(
  size="80%"
  v-model="editDrawer"
  title="Edit a menu"
  :direction="rtl"
  :before-close="drawerEditHandleClose"
)
  MenuEdit(:menuOpts="menuOpts" v-model:menuId="menuIdForEdit" v-model:drawer="editDrawer" @refresh-table="refreshTableAfterWrite")
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { listMenu, disableMenu, enableMenu, removeMenu } from '@/apis'
import { ElMessage, ElMessageBox } from 'element-plus'
import MenuAdd from '@/components/menu/MenuAdd.vue'
import MenuDetail from '@/components/menu/MenuDetail.vue'
import MenuEdit from '@/components/menu/MenuEdit.vue'

const queryForm = ref({ needTree: true })
const menuTableData = ref([])
const menuOpts = ref([])
onMounted(async () => {
  try {
    const listMenuResp = await listMenu({ needTree: true })
    menuTableData.value = listMenuResp.data.list
    menuOpts.value = listMenuResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '列表失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
})
const addDrawer = ref(false)
const toDoAdd = () => {
  addDrawer.value = true
}
const drawerAddHandleClose = (done: () => void) => {
  addDrawer.value = false
  done()
}
const refreshTableAfterWrite = async () => {
  try {
    const listMenuResp = await listMenu({ needTree: true })
    menuTableData.value = listMenuResp.data.list
    menuOpts.value = listMenuResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '刷新列表失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const detailDrawer = ref(false)
const menuIdForDetail = ref('')
const toDoDetail = (id:string) => {
  menuIdForDetail.value = id
  detailDrawer.value = true
}
const drawerDetailHandleClose = (done: () => void) => {
  menuIdForDetail.value = ''
  detailDrawer.value = false
  done()
}
const editDrawer = ref(false)
const menuIdForEdit = ref('')
const toDoEdit = (id:string) => {
  editDrawer.value = true
  menuIdForEdit.value = id
}
const drawerEditHandleClose = (done: () => void) => {
  menuIdForEdit.value = ''
  editDrawer.value = false
  done()
}
const doResetQuery = async () => {
  queryForm.value = { needTree: true }
  const listMenuResp = await listMenu(queryForm.value)
  menuTableData.value = listMenuResp.data.list
}
const doQuery = async () => {
  const listMenuResp = await listMenu({ needTree: true })
  menuTableData.value = listMenuResp.data.list
}
const doEnable = async (id:string) => {
  try {
    const enableMenuResp = await enableMenu(id)
    if (enableMenuResp.data.error) {
      throw enableMenuResp.data.error
    }
    const listMenuResp = await listMenu({ needTree: true })
    menuTableData.value = listMenuResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '启用失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const doDisable = async (id:string) => {
  try {
    const disableMenuResp = await disableMenu(id)
    if (disableMenuResp.data.error) {
      throw disableMenuResp.data.error
    }
    const listMenuResp = await listMenu({ needTree: true })
    menuTableData.value = listMenuResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '禁用失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const doRemove = async (id:string) => {
  try {
    const removeMenuResp = await removeMenu(id)
    const listMenuResp = await listMenu({ needTree: true })
    menuTableData.value = listMenuResp.data.list
    menuOpts.value = listMenuResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '删除失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}

</script>

<style lang="scss" scoped>

</style>
