<template lang="pug">
el-container(class="change-log-main-container")
  el-main
    el-form(:inline="true" :model="queryForm")
      el-row(:gutter="20")
        el-col(:span="4")
          el-form-item(label="CollName")
            el-input(v-model="queryForm.collName" placeholder="CollName")
        el-col(:span="4")
          el-form-item(label="RecordId")
            el-input(v-model="queryForm.recordId" placeholder="RecordId")
        el-col(:span="8")
          el-form-item(label="OpTime")
            el-date-picker(
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              v-model="queryForm.opTime"
              :shortcuts="datetimeShortcuts"
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
        :data="changeLogTableData"
        style="width:100%"
        row-key="id"
        default-expand-all
      )
        el-table-column(fixed prop="id" label="ID" width="220")
        el-table-column(fixed prop="collName" label="CollName" width="100")
        el-table-column(fixed prop="recordId" label="RecordId" width="220")
        el-table-column(show-overflow-tooltip prop="fieldDiff" label="FieldDiff" width="240")
        el-table-column(prop="createdBy" label="CreatedBy" width="240")
        el-table-column(prop="createdAt" label="CreatedAt" width="240")
        el-table-column(prop="updatedBy" label="UpdatedBy" width="240")
        el-table-column(prop="updatedAt" label="UpdatedAt" width="240")
        el-table-column(fixed="right" label="Operations" width="240")
          template(#default="scope")
            el-button(link type="info" size="small" @click="toDoDetail(scope.row.id)") Detail
            el-button(link type="primary" size="small" @click="toDoEdit(scope.row.id)") Edit
            el-button(v-if="scope.row.enable" link type="warning" size="small" @click="doDisable(scope.row.id)") Disable
            el-button(v-else link type="success" size="small" @click="doEnable(scope.row.id)") Enable
            el-button(link type="danger" size="small" @click="doRemove(scope.row.id)") Remove
  el-footer
    el-pagination(
      v-model:current-page="queryForm.page"
      v-model:page-size="queryForm.perPage"
      :page-sizes="[20, 50, 100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    )
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { listChangeLog } from '@/apis'
import { ElMessage } from 'element-plus'

const queryForm = ref({
  collName: null,
  recordId: null,
  opTime: null,
  opTimeBegin: null,
  opTimeEnd: null,
  sortBy: null,
  noPaging: false,
  page: 1,
  perPage: 20,
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
interface ChangeLog {
  fieldDiff:any
}
const changeLogTableData = ref(new Array<ChangeLog>())
onMounted(async () => {
  try {
    const listChangeLogResp = await listChangeLog(queryForm.value)
    changeLogTableData.value = listChangeLogResp.data.list
    for (let i = 0; i < changeLogTableData.value.length; i++) {
      changeLogTableData.value[i].fieldDiff = JSON.stringify(changeLogTableData.value[i].fieldDiff)
    }
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
  done()
}
const refreshTableAfterWrite = async () => {
  try {
    const listChangeLogResp = await listChangeLog()
    changeLogTableData.value = listChangeLogResp.data.list
    for (let i = 0; i < changeLogTableData.value.length; i++) {
      changeLogTableData.value[i].fieldDiff = JSON.stringify(changeLogTableData.value[i].fieldDiff)
    }
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
const doResetQuery = async () => {
  queryForm.value = {
    collName: null,
    recordId: null,
    opTime: null,
    opTimeBegin: null,
    opTimeEnd: null,
    sortBy: null,
    noPaging: false,
    page: 1,
    perPage: 20,
  }
  const listChangeLogResp = await listChangeLog(queryForm.value)
  changeLogTableData.value = listChangeLogResp.data.list
  for (let i = 0; i < changeLogTableData.value.length; i++) {
      changeLogTableData.value[i].fieldDiff = JSON.stringify(changeLogTableData.value[i].fieldDiff)
    }
}
const doQuery = async () => {
  if (queryForm.value.opTime) {
    if ((queryForm.value.opTime as Array<Date>).length > 0) {
      queryForm.value.opTimeBegin = (queryForm.value.opTime[0] as Date).getTime() as any
    }
    console.log(queryForm.value)
    if ((queryForm.value.opTime as Array<Date>).length > 1) {
      queryForm.value.opTimeEnd = (queryForm.value.opTime[1] as Date).getTime() as any
    }
  }
  const listChangeLogResp = await listChangeLog(queryForm.value)
  changeLogTableData.value = listChangeLogResp.data.list
  for (let i = 0; i < changeLogTableData.value.length; i++) {
      changeLogTableData.value[i].fieldDiff = JSON.stringify(changeLogTableData.value[i].fieldDiff)
    }
}
const handleSizeChange = async (val: number) => {
  queryForm.value.perPage = val
  doQuery()
}
const handleCurrentChange = async(val: number) => {
  queryForm.value.page = val
  doQuery()
}
</script>

<style lang="scss" scoped>

</style>
