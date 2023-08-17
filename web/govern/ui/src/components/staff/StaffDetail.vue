<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a staff:
  el-main
    el-form(:model="detailForm" disabled="true")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Account:")
            el-input(v-model="detailForm.account")
        el-col(:span="6")
          el-form-item(label="Avatar:")
            el-input(v-model="detailForm.avatar" placeholder="Avatar")
        el-col(:span="6")
          el-form-item(label="NickName:")
            el-input(v-model="detailForm.nickName" placeholder="NickName")
        el-col(:span="6")
          el-form-item(label="RealName:")
            el-input(v-model="detailForm.realName")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Email:")
            el-input(v-model="detailForm.email")
        el-col(:span="6")
          el-form-item(label="Phone:")
            el-input(v-model="detailForm.phone")
        el-col(:span="6")
          el-form-item(label="Gender:")
            el-input(v-model="detailForm.gender")
        el-col(:span="6")
          el-form-item(label="SignInIpWhitelist:")
            el-select(
              v-model="detailForm.signInIpWhitelist"
              multiple
              placeholder="SignInIpWhitelist"
            )
              el-option(
                v-for="item in detailForm.signInIpWhitelist"
                :key="item"
                :label="item"
                :value="item"
              )
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
  h5(style="text-align: left;") Roles of a staff:
  RBAC(v-model:staffId="staffId" :readOnly="true")
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { profileStaff } from '@/apis'
import RBAC from '@/components/staff/RBAC.vue'

const props = defineProps(['drawer', 'staffId'])
const emits = defineEmits(['update:drawer', 'update:staffId'])
const detailForm = ref({})
const staffId = computed({
  get: () => {
    return props.staffId
  },
  set: async (value) => {
    emits('update:staffId', value)
  }
})
watch(staffId, async (newId:string) => {
  try {
    if (newId == '') { return }
    const profileStaffResp = await profileStaff(newId)
    detailForm.value = profileStaffResp.data
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
    const profileStaffResp = await profileStaff(props.staffId)
    detailForm.value = profileStaffResp.data
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
