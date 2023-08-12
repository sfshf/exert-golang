<template lang="pug">
el-container
  el-main
    el-form(:inline="true" :model="queryForm")
      el-row(:gutter="20")
        el-col(:span="4")
          el-form-item(label="Account")
            el-input(v-model="queryForm.account" placeholder="Account")
        el-col(:span="4")
          el-form-item(label="SignIn")
            el-select(v-model="queryForm.signIn" placeholder="SignIn")
              el-option(
                v-for="item in [{label:'已登录', value:true}, {label:'未登录', value:false}, {label:'所有', value:null}]" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"
              )
        el-col(:span="4")
          el-form-item(label="Email")
            el-input(v-model="queryForm.email" placeholder="Email")
        el-col(:span="4")
          el-form-item(label="Phone")
            el-input(v-model="queryForm.phone" placeholder="Phone")
        el-col(:span="4")
          el-form-item(label="Gender")
            el-select(v-model="queryForm.gender" placeholder="Gender")
              el-option(
                v-for="item in [{label:'男', value:'Male'}, {label:'女', value:'Female'}, {label:'所有', value:null}]" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"
              )
        el-col(:span="4")
          el-form-item(label="Role")
            el-select(v-model="queryForm.role" placeholder="Role")
              el-option(
                v-for="item in roleOpts" 
                :key="item.id" 
                :label="item.name" 
                :value="item.id"
              )
      el-row(:gutter="20")
        el-col(:span="4")
          el-form-item(label="LastSignInIp")
            el-input(v-model="queryForm.lastSignInIp" placeholder="LastSignInIp")
        el-col(:span="8")
          el-form-item(label="LastSignInTime")
            el-date-picker(
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              v-model="queryForm.lastSignInTime"
              :shortcuts="datetimeShortcuts"
            )
        el-col(:span="4")
          el-form-item(label="Enable")
            el-select(v-model="queryForm.enable" placeholder="Enable")
              el-option(
                v-for="item in [{label:'启用', value:true}, {label:'禁用', value:false}, {label:'所有', value:null}]" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"
              )
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
        :data="staffTableData"
        style="width:100%"
        row-key="id"
        default-expand-all
      )
        el-table-column(fixed prop="id" label="Id" width="220")
        el-table-column(fixed prop="account" label="Account" width="150")
        el-table-column(prop="email" label="Email" width="200")
        el-table-column(prop="phone" label="Phone" width="150")
        el-table-column(label="Gender" width="150")
          template(#default="scope")
            el-tag(v-if="scope.row.gender" :type="scope.row.gender == 'Male' ? 'primary' : 'danger'") {{ scope.row.gender }}
            span(v-else)
        el-table-column(label="SignIn" width="80")
          template(#default="scope")
            el-tag(v-if="scope.row.signIn" :type="scope.row.signIn ? 'success' : 'info'") {{ scope.row.signIn }}
            span(v-else)
        el-table-column(label="Enable" width="80")
          template(#default="scope")
              el-tag(:type="scope.row.deletedAt ? 'danger' : 'success'") {{ scope.row.deletedAt ? false : true }}
        el-table-column(prop="lastSignInIp" label="LastSignInIp" width="150")
        el-table-column(prop="lastSignInTime" label="LastSignInTime" width="240")
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
  title="Add a Staff"
  :direction="rtl"
  :before-close="drawerAddHandleClose"
)
  StaffAdd(v-model:drawer="addDrawer" @refresh-table="refreshTableAfterWrite")
el-drawer(
  size="80%"
  v-model="detailDrawer"
  title="A Staff detail"
  :direction="rtl"
  :before-close="drawerDetailHandleClose"
)
  StaffDetail(v-model:staffId="staffIdForDetail" v-model:drawer="detailDrawer")
el-drawer(
  size="80%"
  v-model="editDrawer"
  title="Edit a Staff"
  :direction="rtl"
  :before-close="drawerEditHandleClose"
)
  StaffEdit(v-model:staffId="staffIdForEdit" v-model:drawer="editDrawer" @refresh-table="refreshTableAfterWrite")
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { listRole, listStaff, disableStaff, enableStaff, removeStaff } from '@/apis'
import { ElMessage, ElMessageBox } from 'element-plus'
import StaffAdd from '@/components/staff/StaffAdd.vue'
import StaffDetail from '@/components/staff/StaffDetail.vue'
import StaffEdit from '@/components/staff/StaffEdit.vue'

const queryForm = ref({
  account: null,
  signIn: null,
  email: null,
  phone: null,
  gender: null,
  role: null,
  lastSignInIp: null,
  lastSignInTime: null,
  lastSignInTimeBegin: null,
  lastSignInTimeEnd: null,
  enable: null,
  sortBy: null,
  noPaging: null,
  page: null,
  perPage: null,
})
const datetimeShortcuts = ref([
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  }
])
const roleOpts = ref([])
const staffTableData = ref([])
onMounted(async () => {
  try {
    const listStaffResp = await listStaff()
    staffTableData.value = listStaffResp.data.list
    const listRoleResp = await listRole()
    roleOpts.value = listRoleResp.data.list
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
    const listStaffResp = await listStaff({ needTree: true })
    staffTableData.value = listStaffResp.data.list
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
const staffIdForDetail = ref('')
const toDoDetail = (id:string) => {
  staffIdForDetail.value = id
  detailDrawer.value = true
}
const drawerDetailHandleClose = (done: () => void) => {
  staffIdForDetail.value = ''
  detailDrawer.value = false
  done()
}
const editDrawer = ref(false)
const staffIdForEdit = ref('')
const toDoEdit = (id:string) => {
  editDrawer.value = true
  staffIdForEdit.value = id
}
const drawerEditHandleClose = (done: () => void) => {
  staffIdForEdit.value = ''
  editDrawer.value = false
  done()
}
const doResetQuery = async () => {
  queryForm.value = {
    account: null,
    signIn: null,
    email: null,
    phone: null,
    gender: null,
    role: null,
    lastSignInIp: null,
    lastSignInTime: null,
    lastSignInTimeBegin: null,
    lastSignInTimeEnd: null,
    enable: null,
    sortBy: null,
    noPaging: null,
    page: null,
    perPage: null,
  }
  const listStaffResp = await listStaff(queryForm.value)
  staffTableData.value = listStaffResp.data.list
}
const doQuery = async () => {
  if (queryForm.value.lastSignInTime) {
    if ((queryForm.value.lastSignInTime as Array<Date>).length > 0) {
      queryForm.value.lastSignInTimeBegin = (queryForm.value.lastSignInTime[0] as Date).getTime() as any
    }
    console.log(queryForm.value)
    if ((queryForm.value.lastSignInTime as Array<Date>).length > 1) {
      queryForm.value.lastSignInTimeEnd = (queryForm.value.lastSignInTime[1] as Date).getTime() as any
    }
  }
  const listStaffResp = await listStaff(queryForm.value)
  staffTableData.value = listStaffResp.data.list
}
const doEnable = async (id:string) => {
  try {
    const enableStaffResp = await enableStaff(id)
    if (enableStaffResp.data.error) {
      throw enableStaffResp.data.error
    }
    const listStaffResp = await listStaff()
    staffTableData.value = listStaffResp.data.list
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
    const disableStaffResp = await disableStaff(id)
    if (disableStaffResp.data.error) {
      throw disableStaffResp.data.error
    }
    const listStaffResp = await listStaff()
    staffTableData.value = listStaffResp.data.list
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
    const removeStaffResp = await removeStaff(id)
    const listStaffResp = await listStaff()
    staffTableData.value = listStaffResp.data.list
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
