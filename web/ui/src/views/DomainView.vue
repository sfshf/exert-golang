<template lang="pug">
el-container
  el-main
    el-form(:inline="true" :model="queryForm")
      el-row
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
        :data="domainTableData"
        style="width:100%"
        row-key="id"
        default-expand-all
      )
        el-table-column(fixed prop="id" label="ID" width="250")
        el-table-column(fixed prop="name" label="Name" width="150")
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
  title="Add a domain"
  v-model="addDialog"
  width="90%"
  :before-close="dialogAddHandleClose"
)
  DomainAdd(:domainOpts="domainOpts" v-model:dialog="addDialog" @refresh-table="refreshTableAfterWrite")
el-dialog(
  title="A domain detail"
  v-model="detailDialog"
  width="90%"
  :before-close="dialogDetailHandleClose"
)
  DomainDetail(:domainOpts="domainOpts" v-model:dialog="detailDialog" v-model:domainId="domainIdForDetail")
el-dialog(
  title="Edit a domain"
  v-model="editDialog"
  width="90%"
  :before-close="dialogEditHandleClose"
)
  DomainEdit(:domainOpts="domainOpts" v-model:dialog="editDialog" v-model:domainId="domainIdForEdit" @refresh-table="refreshTableAfterWrite")
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { listDomain, enableDomain, disableDomain, removeDomain } from '@/apis'
import { ElMessage } from 'element-plus'
import DomainAdd from '@/components/domain/DomainAdd.vue'
import DomainDetail from '@/components/domain/DomainDetail.vue'
import DomainEdit from '@/components/domain/DomainEdit.vue'

const queryForm = ref({})
const domainTableData = ref([])
const domainOpts = ref([])
onMounted(async () => {
  try {
    const listDomainResp = await listDomain({ needTree: true })
    domainTableData.value = listDomainResp.data.list
    domainOpts.value = listDomainResp.data.list
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
    const listDomainResp = await listDomain({ needTree: true })
    domainTableData.value = listDomainResp.data.list
    domainOpts.value = listDomainResp.data.list
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
const domainIdForDetail = ref('')
const toDoDetail = (id:string) => {
  detailDialog.value = true
  domainIdForDetail.value = id
}
const dialogDetailHandleClose = (done: () => void) => {
  domainIdForDetail.value = ''
  detailDialog.value = false
  done()
}
const editDialog = ref(false)
const domainIdForEdit = ref('')
const toDoEdit = (id:string) => {
  editDialog.value = true
  domainIdForEdit.value = id
}
const dialogEditHandleClose = (done: () => void) => {
  domainIdForEdit.value = ''
  editDialog.value = false
  done()
}
const doResetQuery = async () => {
  queryForm.value = {}
  const listDomainResp = await listDomain({ needTree: true })
  domainTableData.value = listDomainResp.data.list
}
const doQuery = async () => {
  const listDomainResp = await listDomain({ needTree: true })
  domainTableData.value = listDomainResp.data.list
}
const doEnable = async (id:string) => {
  try {
    const enableDomainResp = await enableDomain(id)
    if (enableDomainResp.data.error) {
      throw enableDomainResp.data.error
    }
    const listDomainResp = await listDomain({ needTree: true })
    domainTableData.value = listDomainResp.data.list
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
    const disableDomainResp = await disableDomain(id)
    if (disableDomainResp.data.error) {
      throw disableDomainResp.data.error
    }
    const listMenuResp = await listDomain({ needTree: true })
    domainTableData.value = listMenuResp.data.list
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
    const removeDomainResp = await removeDomain(id)
    const listDomainResp = await listDomain({ needTree: true })
    domainTableData.value = listDomainResp.data.list
    domainOpts.value = listDomainResp.data.list
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
