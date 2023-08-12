<template lang="pug">
el-row(v-if="!props.readOnly")
  el-button(type="primary" @click="toDoAdd") Add
el-table(
  :data="widgetTableData"
  style="width:100%"
  row-key="id"
  default-expand-all
)
  el-table-column(fixed prop="id" label="Id" width="210")
  el-table-column(fixed prop="name" label="Name" width="80")
  el-table-column(prop="seq" label="Seq" width="50")
  el-table-column(prop="icon" label="Icon" width="150")
  el-table-column(prop="apiMethod" label="ApiMethod" width="80")
  el-table-column(prop="apiPath" label="ApiPath" width="240")
  el-table-column(label="Show" width="80")
    template(#default="scope")
      el-tag(:type="scope.row.show ? 'success' : 'danger'") {{ scope.row.show }}
  el-table-column(label="Enable" width="80")
      template(#default="scope")
          el-tag(:type="scope.row.deletedAt ? 'danger' : 'success'") {{ scope.row.deletedAt ? false : true }}
  el-table-column(prop="createdBy" label="CreatedBy" width="220")
  el-table-column(prop="createdAt" label="CreatedAt" width="240")
  el-table-column(prop="updatedBy" label="UpdatedBy" width="220")
  el-table-column(prop="updatedAt" label="UpdatedAt" width="240")
  el-table-column(v-if="props.readOnly" fixed="right" label="Operations" width="240")
    template(#default="scope")
        el-button(link type="info" size="small" @click="toDoDetail(scope.row.id)") Detail
  el-table-column(v-else fixed="right" label="Operations" width="240")
    template(#default="scope")
      el-button(link type="info" size="small" @click="toDoDetail(scope.row.id)") Detail
      el-button(link type="primary" size="small" @click="toDoEdit(scope.row.id)") Edit
      el-button(v-if="scope.row.deletedAt" link type="success" size="small" @click="doEnable(scope.row.id)") Enable
      el-button(v-else link type="warning" size="small" @click="doDisable(scope.row.id)") Disable
      el-button(link type="danger" size="small" @click="doRemove(scope.row.id)") Remove
el-drawer(
  v-if="!props.readOnly"
  title="Add a widget"
  :append-to-body="true"
  :before-close="handleAddWidgetClose"
  v-model="addWidgetDrawer"
)
  WidgetAdd(v-model:drawer="addWidgetDrawer" v-model:menuId="props.menuId" @refresh-table="refreshTableAfterWrite")
el-drawer(
  title="Detail a widget"
  :append-to-body="true"
  :before-close="handleDetailWidgetClose"
  v-model="detailWidgetDrawer"
)
  WidgetDetail(v-model:drawer="detailWidgetDrawer" v-model:menuId="props.menuId" v-model:widgetId="widgetIdForDetail")
el-drawer(
  v-if="!props.readOnly"
  title="Edit a widget"
  :append-to-body="true"
  :before-close="handleEditWidgetClose"
  v-model="editWidgetDrawer"
)
  WidgetEdit(v-model:drawer="editWidgetDrawer" v-model:menuId="props.menuId" v-model:widgetId="widgetIdForEdit" @refresh-table="refreshTableAfterWrite")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { listMenuWidget, disableMenuWidget, enableMenuWidget, removeMenuWidget } from '@/apis'
import WidgetDetail from '@/components/menu/WidgetDetail.vue'
import WidgetAdd from '@/components/menu/WidgetAdd.vue'
import WidgetEdit from '@/components/menu/WidgetEdit.vue'

const props = defineProps(['menuId', 'readOnly'])
const emits = defineEmits(['update:menuId'])
const widgetTableData = ref([])
const menuId = computed({
  get: () => {
    return props.menuId
  },
  set: async (value) => {
    emits('update:menuId', value)
  }
})
watch(menuId, async (newId) => {
  try {
    const listMenuWidgetResp = await listMenuWidget(props.menuId)
    widgetTableData.value = listMenuWidgetResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '查询失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
})
onMounted(async () => {
  try {
    const listMenuWidgetResp = await listMenuWidget(props.menuId)
    widgetTableData.value = listMenuWidgetResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '查询控件列表失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
})
const addWidgetDrawer = ref(false)
const toDoAdd = () => {
  addWidgetDrawer.value = true
}
const detailWidgetDrawer = ref(false)
const widgetIdForDetail = ref('')
const handleDetailWidgetClose = (done: () => void) => {
  done()
}
const toDoDetail = (id:string) => {
  widgetIdForDetail.value = id
  detailWidgetDrawer.value = true
}
const editWidgetDrawer = ref(false)
const widgetIdForEdit = ref('')
const toDoEdit = (id:string) => {
  widgetIdForEdit.value = id
  editWidgetDrawer.value = true
}
const doEnable = async (id:string) => {
  try {
    const enableMenuWidgetResp = await enableMenuWidget(props.menuId, id)
    if (enableMenuWidgetResp.data.error) {
      throw enableMenuWidgetResp.data.error
    }
    const listMenuWidgetResp = await listMenuWidget(props.menuId)
    widgetTableData.value = listMenuWidgetResp.data.list
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
    const disableMenuWidgetResp = await disableMenuWidget(props.menuId, id)
    if (disableMenuWidgetResp.data.error) {
      throw disableMenuWidgetResp.data.error
    }
    const listMenuWidgetResp = await listMenuWidget(props.menuId)
    widgetTableData.value = listMenuWidgetResp.data.list
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
    const removeMenuWidgetResp = await removeMenuWidget(props.menuId, id)
    const listMenuWidgetResp = await listMenuWidget(props.menuId)
    widgetTableData.value = listMenuWidgetResp.data.list
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
const handleAddWidgetClose = (done: () => void) => {
  done()
}
const cancelAddWidgetForm = () => {
  ElMessageBox.confirm('cancelAddWidgetForm')
    .then(() => {
      addWidgetDrawer.value = false
    }).catch(() => {
      // catch error
    })
}
const handleEditWidgetClose = (done: () => void) => {
  done()
}
const cancelEditWidgetForm = () => {
  ElMessageBox.confirm('cancelEditWidgetForm')
    .then(() => {
      editWidgetDrawer.value = false
    }).catch(() => {
      // catch error
    })
}
const refreshTableAfterWrite = async () => {
  try {
    const listWidgetResp = await listMenuWidget(props.menuId)
    widgetTableData.value = listWidgetResp.data.list
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '刷新控件列表失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>