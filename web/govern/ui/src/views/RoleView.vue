<template lang="pug">
el-container
  el-main
    el-form(:inline="true" :model="queryForm")
      el-row
        el-col(:span="4")
          el-form-item(label="Group:")
            el-input(v-model="queryForm.group" placeholder="Group")
        el-col(:span="4")
          el-form-item(label="Name:")
            el-input(v-model="queryForm.name" placeholder="Name")
        el-col(:span="4")
          el-form-item(label="Alias:")
            el-input(v-model="queryForm.alias" placeholder="Alias")
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
        :data="roleTableData"
        style="width:100%"
        row-key="id"
        default-expand-all
      )
        el-table-column(fixed prop="id" label="Id" width="210")
        el-table-column(fixed prop="name" label="Name" width="150")
        el-table-column(prop="domainNames" label="DomainNames" width="150")
        el-table-column(show-overflow-tooltip prop="alias" label="Alias" width="200")
        el-table-column(prop="seq" label="Seq" width="50")
        el-table-column(prop="icon" label="Icon" width="150")
        el-table-column(prop="memo" label="Memo" width="240")
        el-table-column(label="Enable" width="80")
          template(#default="scope")
              el-tag(:type="scope.row.deletedAt ? 'danger' : 'success'") {{ scope.row.deletedAt ? false : true }}
        el-table-column(prop="createdBy" label="CreatedBy" width="230")
        el-table-column(prop="createdAt" label="CreatedAt" width="230")
        el-table-column(prop="updatedBy" label="UpdatedBy" width="230")
        el-table-column(prop="updatedAt" label="UpdatedAt" width="230")
        el-table-column(fixed="right" label="Operations" width="240")
          template(#default="scope")
            el-button(link type="info" size="small" @click="toDoDetail(scope.row.id)") Detail
            el-button(link type="primary" size="small" @click="toDoEdit(scope.row.id)") Edit
            el-button(v-if="scope.row.deletedAt" link type="success" size="small" @click="doEnable(scope.row.id)") Enable
            el-button(v-else link type="warning" size="small" @click="doDisable(scope.row.id)") Disable
            el-button(link type="danger" size="small" @click="doRemove(scope.row.id)") Remove
el-dialog(
  title="Add a role"
  v-model="addDialog"
  width="90%"
  :before-close="dialogAddHandleClose"
)
  RoleAdd(v-model:dialog="addDialog" @refresh-table="refreshTableAfterWrite")
el-dialog(
  title="A role detail"
  v-model="detailDialog"
  width="90%"
  :before-close="dialogDetailHandleClose"
)
  RoleDetail(v-model:dialog="detailDialog" v-model:roleId="roleIdForDetail")
el-dialog(
  title="Edit a role"
  v-model="editDialog"
  width="90%"
  :before-close="dialogEditHandleClose"
)
  RoleEdit(v-model:dialog="editDialog" v-model:roleId="roleIdForEdit" @refresh-table="refreshTableAfterWrite")
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { listRole, enableRole, disableRole, removeRole } from '@/apis'
import { ElMessage } from 'element-plus'
import RoleAdd from '@/components/role/RoleAdd.vue'
import RoleDetail from '@/components/role/RoleDetail.vue'
import RoleEdit from '@/components/role/RoleEdit.vue'

const queryForm = ref({})
const roleTableData = ref([])
onMounted(async () => {
  try {
    const listRoleResp = await listRole()
    roleTableData.value = listRoleResp.data.list
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
const addDialog = ref(false)
const toDoAdd = () => {
  addDialog.value = true
}
const dialogAddHandleClose = (done: () => void) => {
  addDialog.value = false
  done()
}
const refreshTableAfterWrite = async () => {
  try {
    const listRoleResp = await listRole()
    roleTableData.value = listRoleResp.data.list
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
const detailDialog = ref(false)
const roleIdForDetail = ref('')
const toDoDetail = (id:string) => {
  detailDialog.value = true
  roleIdForDetail.value = id
}
const dialogDetailHandleClose = (done: () => void) => {
  detailDialog.value = false
  roleIdForDetail.value = ''
  done()
}
const editDialog = ref(false)
const roleIdForEdit = ref('')
const toDoEdit = (id:string) => {
  editDialog.value = true
  roleIdForEdit.value = id
}
const dialogEditHandleClose = (done: () => void) => {
  editDialog.value = false
  roleIdForEdit.value = ''
  done()
}
const doResetQuery = async () => {
  queryForm.value = {}
  const listRoleResp = await listRole()
  roleTableData.value = listRoleResp.data.list
}
const doQuery = async () => {
  const listRoleResp = await listRole()
  roleTableData.value = listRoleResp.data.list
}
const doEnable = async (id:string) => {
  try {
    const enableRoleResp = await enableRole(id)
    if (enableRoleResp.data.error) {
      throw enableRoleResp.data.error
    }
    const listRoleResp = await listRole({ needTree: true })
    roleTableData.value = listRoleResp.data.list
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
    const disableRoleResp = await disableRole(id)
    if (disableRoleResp.data.error) {
      throw disableRoleResp.data.error
    }
    const listMenuResp = await listRole({ needTree: true })
    roleTableData.value = listMenuResp.data.list
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
    const removeRoleResp = await removeRole(id)
    const listRoleResp = await listRole({ needTree: true })
    roleTableData.value = listRoleResp.data.list
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
