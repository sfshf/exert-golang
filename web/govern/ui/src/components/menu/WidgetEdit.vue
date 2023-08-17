<template lang="pug">
el-container
  el-main
    el-form(:model="editForm")
      el-row
        el-form-item(label="Name:")
          el-input(v-model="editForm.name" placeholder="Name")
      el-row
        el-form-item(label="Seq:")
          el-input(v-model.number="editForm.seq" placeholder="99")
      el-row
        el-form-item(label="Icon:")
          el-input(v-model="editForm.icon" placeholder="Icon")
      el-row
        el-form-item(label="ApiMethod:")
          el-input(v-model="editForm.apiMethod" placeholder="ApiMethod")
      el-row
        el-form-item(label="ApiPath:")
          el-input(v-model="editForm.apiPath" placeholder="ApiPath")
      el-row
        el-form-item(label="Memo:")
          el-input(v-model="editForm.memo" placeholder="Memo")
      el-row
        el-form-item(label="Show:")
          el-checkbox(v-model="editForm.show" label="true")
  el-footer
    el-button(@click="cancelForm") Cancel
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { profileMenuWidget, editMenuWidget } from '@/apis'

const props = defineProps(['drawer', 'menuId', 'widgetId'])
const emits = defineEmits(['update:drawer', 'update:menuId', 'update:widgetId', 'refreshTable'])
const editForm = ref({
  name: null,
  seq: null,
  icon: null,
  apiMethod: null,
  apiPath: null,
  memo: null,
  show: null
})
let detailForm:any = {}
const widgetId = computed({
  get: () => {
    return props.widgetId
  },
  set: async (value) => {
    emits('update:widgetId', value)
  }
})
watch(widgetId, async (newId:string) => {
  try {
    if (newId == '') { return }
    const profileMenuWidgetResp = await profileMenuWidget(props.menuId, newId)
    detailForm = profileMenuWidgetResp.data
    // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.apiMethod = detailForm.apiMethod
    editForm.value.apiPath = detailForm.apiPath
    editForm.value.memo = detailForm.memo
    editForm.value.show = detailForm.show
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
    const profileMenuWidgetResp = await profileMenuWidget(props.menuId, props.widgetId)
    detailForm = profileMenuWidgetResp.data
    // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.apiMethod = detailForm.apiMethod
    editForm.value.apiPath = detailForm.apiPath
    editForm.value.memo = detailForm.memo
    editForm.value.show = detailForm.show
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
const cancelForm = () => {
  ElMessageBox.confirm('cancelForm')
    .then(() => {
      // TODO need to optimize
      editForm.value.name = detailForm.name
      editForm.value.seq = detailForm.seq
      editForm.value.icon = detailForm.icon
      editForm.value.apiMethod = detailForm.apiMethod
      editForm.value.apiPath = detailForm.apiPath
      editForm.value.memo = detailForm.memo
      editForm.value.show = detailForm.show
      emits('update:drawer', false)
    }).catch(() => {
      // catch error
    })
}
const submitForm = async () => {
  try {
    const editMenuWidgetResp = await editMenuWidget(props.menuId, props.widgetId, editForm.value)
    if (editMenuWidgetResp.status === 201) {
      ElMessage({
        message: '編輯控件成功！',
        type: 'success',
        duration: 3000
      })
    }
    emits('update:drawer', false)
    emits('refreshTable')
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '編輯控件失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>