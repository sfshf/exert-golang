<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a menu:
  el-main
    el-form(:model="detailForm" disabled="true")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="detailForm.name")
        el-col(:span="6")
          el-form-item(label="Seq:")
            el-input(v-model="detailForm.seq")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="detailForm.icon")
        el-col(:span="6")
          el-form-item(label="Route:")
            el-input(v-model="detailForm.route")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="detailForm.memo")
        el-col(:span="6")
          el-form-item(label="ParentId:")
            el-cascader(
              v-model="detailForm.parentId"
              :options="menuOpts"
              :props="{ label: 'name', value: 'id', checkStrictly: true }"
              placeholder="null"
            )
        el-col(:span="4")
          el-form-item(label="Show:")
            el-checkbox(v-model="detailForm.show" label="true")
        el-col(:span="4")
          el-form-item(label="IsItem:")
            el-checkbox(v-model="detailForm.isItem" label="true")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="CreatedBy:")
            el-input(v-model="detailForm.createdBy")
        el-col(:span="6")
          el-form-item(label="CreatedAt:")
            el-input(v-model="detailForm.createdAt")
        el-col(:span="6")
          el-form-item(label="UpdatedBy:")
            el-input(v-model="detailForm.updatedBy")
        el-col(:span="6")
          el-form-item(label="UpdatedAt:")
            el-input(v-model="detailForm.updatedAt")
  el-footer
  h5(v-if="detailForm.isItem" style="text-align: left;") Widgets of a menu:
  WidgetTable(v-if="detailForm.isItem" v-model:menuId="menuId" :readOnly="true")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { profileMenu, listMenuWidget } from '@/apis'
import WidgetTable from '@/components/menu/WidgetTable.vue'

const props = defineProps(['drawer', 'menuId', 'menuOpts'])
const emits = defineEmits(['update:drawer', 'update:menuId'])
const detailForm = ref({})
const menuId = computed({
  get: () => {
    return props.menuId
  },
  set: async (value) => {
    emits('update:menuId', value)
  }
})
watch(menuId, async (newId:string) => {
  try {
    if (newId == '') { return }
    const profileMenuResp = await profileMenu(newId)
    detailForm.value = profileMenuResp.data
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
    const profileMenuResp = await profileMenu(props.menuId)
    detailForm.value = profileMenuResp.data
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
const detailWidgetDrawer = ref(false)
const widgetIdForDetail = ref('')
const handleDetailWidgetClose = (done: () => void) => {
  done()
}
const toDoDetailWidget = (id:string) => {
  widgetIdForDetail.value = id
  detailWidgetDrawer.value = true
}
const cancelForm = () => {
  emits('update:drawer', false)
  console.log('cancelForm')
}
const submitForm = () => {
  emits('update:drawer', false)
  console.log('confirmForm')
}

</script>

<style lang="scss" scoped>

</style>
