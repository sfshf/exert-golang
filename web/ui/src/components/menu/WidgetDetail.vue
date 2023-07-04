<template lang="pug">
el-container
  el-main
    el-form(:model="detailForm" disabled="true")
      el-row
        el-form-item(label="Name:")
          el-input(v-model="detailForm.name" placeholder="Name")
      el-row
        el-form-item(label="Seq:")
          el-input(v-model.number="detailForm.seq" placeholder="99")
      el-row
        el-form-item(label="Icon:")
          el-input(v-model="detailForm.icon" placeholder="Icon")
      el-row
        el-form-item(label="ApiMethod:")
          el-input(v-model="detailForm.apiMethod" placeholder="ApiMethod")
      el-row
        el-form-item(label="ApiPath:")
          el-input(v-model="detailForm.apiPath" placeholder="ApiPath")
      el-row
        el-form-item(label="Memo:")
          el-input(v-model="detailForm.memo" placeholder="Memo")
      el-row
        el-form-item(label="Show:")
          el-checkbox(v-model="detailForm.show" label="true")
      el-row
        el-form-item(label="CreatedBy:")
          el-input(v-model="detailForm.createdBy")
      el-row
        el-form-item(label="CreatedAt:")
          el-input(v-model="detailForm.createdAt")
      el-row
        el-form-item(label="UpdatedBy:")
          el-input(v-model="detailForm.updatedBy")
      el-row
        el-form-item(label="UpdatedAt:")
          el-input(v-model="detailForm.updatedAt")
  el-footer
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { profileMenuWidget } from '@/apis'

const props = defineProps(['drawer', 'menuId', 'widgetId'])
const emits = defineEmits(['update:drawer', 'update:menuId', 'update:widgetId'])
const detailForm = ref({})
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
    detailForm.value = profileMenuWidgetResp.data
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
    detailForm.value = profileMenuWidgetResp.data
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

</script>

<style lang="scss" scoped>

</style>