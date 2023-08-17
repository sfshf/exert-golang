<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a role:
  el-main
    el-form(:model="detailForm" disabled="true")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="detailForm.name" placeholder="Name")
        el-col(:span="6")
          el-form-item(label="Alias:")
            el-select(
              v-model="detailForm.alias"
              multiple
              clearable
              filterable
              allow-create
              collapse-tags
              placeholder="Alias"
            )
              el-option(
                v-for="item in detailForm.alias"
                :key="item"
                :label="item"
                :value="item"
              )
        el-col(:span="6")
          el-form-item(label="Seq:")
            el-input(v-model.number="detailForm.seq" placeholder="99")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="detailForm.icon" placeholder="Icon")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="detailForm.memo" placeholder="Memo")
        el-col(:span="6")
          el-form-item(label="CreatedBy:")
            el-input(v-model="detailForm.createdBy")
      el-row(:gutter="20")
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
  h5(style="text-align: left;") Authority tree of a role:
  AuthorizeRole(v-model:roleId="roleId" :readOnly="true")
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { profileRole } from '@/apis'
import AuthorizeRole from '@/components/role/AuthorizeRole.vue'

const props = defineProps(['dialog', 'roleId'])
const emits = defineEmits(['update:dialog', 'update:roleId'])
const detailForm = ref({})
const roleId = computed({
  get: () => {
    return props.roleId
  },
  set: async (value) => {
    emits('update:roleId', value)
  }
})
watch(roleId, async (newId:string) => {
  try {
    if (newId == '') { return }
    const profileRoleResp = await profileRole(newId)
    detailForm.value = profileRoleResp.data
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
    const profileRoleResp = await profileRole(props.roleId)
    detailForm.value = profileRoleResp.data
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
const handleClose = (done: () => void) => {
  done()
}
const detailWidgetdialog = ref(false)
const widgetIdForDetail = ref('')
const handleDetailWidgetClose = (done: () => void) => {
  done()
}
const toDoDetailWidget = (id:string) => {
  widgetIdForDetail.value = id
  detailWidgetdialog.value = true
}
const cancelForm = () => {
  emits('update:dialog', false)
  console.log('cancelForm')
}
const submitForm = () => {
  emits('update:dialog', false)
  console.log('confirmForm')
}

</script>

<style lang="scss" scoped>

</style>
