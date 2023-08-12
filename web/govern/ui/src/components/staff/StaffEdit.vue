<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a staff:
  el-main
    el-form(:model="editForm")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="Account:")
            el-input(v-model="editForm.account" placeholder="Account")
        el-col(:span="12")
          el-form-item(label="Avatar:")
            el-input(v-model="editForm.avatar" placeholder="Avatar")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="NickName:")
            el-input(v-model="editForm.nickName" placeholder="NickName")
        el-col(:span="12")
          el-form-item(label="RealName:")
            el-input(v-model="editForm.realName" placeholder="RealName")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="Email:")
            el-input(type="email" v-model.number="editForm.email" placeholder="Email")
        el-col(:span="12")
          el-form-item(label="Phone:")
            el-input(type="tel" v-model="editForm.phone" placeholder="Phone")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="Gender:")
            el-select(v-model="editForm.gender" placeholder="Gender")
              el-option(
                v-for="item in [{label:'男', value:'Male'}, {label:'女', value:'Female'}, {label:'所有', value:null}]" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"
              )
        el-col(:span="12")
          el-form-item(label="SignInIpWhitelist:")
            el-select(
              v-model="editForm.signInIpWhitelist"
              multiple
              clearable
              filterable
              allow-create
              collapse-tags
              placeholder="SignInIpWhitelist"
            )
              el-option(
                v-for="item in editForm.signInIpWhitelist"
                :key="item"
                :label="item"
                :value="item"
              )
  el-footer
    el-button(@click="resetForm") Reset
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  h5(style="text-align: left;") Roles of a staff:
  RBAC(v-model:staffId="staffId" :readOnly="false")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { profileStaff, editStaff } from '@/apis'
import RBAC from '@/components/staff/RBAC.vue'

const props = defineProps(['drawer', 'staffId'])
const emits = defineEmits(['update:drawer', 'update:staffId', 'refreshTable'])
const editForm = ref({})
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
    editForm.value = profileStaffResp.data
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
    editForm.value = profileStaffResp.data
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '查询详情失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
})
const cancelForm = () => {
  ElMessageBox.confirm('cancelForm')
    .then(() => {
      editForm.value = {}
      emits('update:drawer', false)
    }).catch((err:any) => {
      let errMsg = ''
      if (err.response) {
        errMsg = err.response.data.error
      } else {
        errMsg = err
      }
      ElMessage({
        message: '取消失败：' + errMsg,
        type: 'error',
        duration: 3000
      })
    })
}
const submitForm = async () => {
  try {
    const editStaffResp = await editStaff(props.staffId, editForm.value)
    if (editStaffResp.status == 200) {
      ElMessage({
        message: '编辑成功！',
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
      message: '编辑失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}

</script>

<style lang="scss" scoped>

</style>
