<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a staff:
  el-main
    el-form(:model="addForm")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="Account:")
            el-input(v-model="addForm.account" placeholder="Account")
        el-col(:span="12")
          el-form-item(label="Avatar:")
            el-input(v-model="addForm.avatar" placeholder="Avatar")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="Password:")
            el-input(type="password" show-password v-model="addForm.password" placeholder="Password")
        el-col(:span="12")
          el-form-item(label="NickName:")
            el-input(v-model="addForm.nickName" placeholder="NickName")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="RealName:")
            el-input(v-model="addForm.realName" placeholder="RealName")
        el-col(:span="12")
          el-form-item(label="Email:")
            el-input(type="email" v-model.number="addForm.email" placeholder="Email")
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="Phone:")
            el-input(type="tel" v-model="addForm.phone" placeholder="Phone")
        el-col(:span="12")
          el-form-item(label="Gender:")
            el-select(v-model="addForm.gender" placeholder="Gender")
              el-option(
                v-for="item in [{label:'男', value:'Male'}, {label:'女', value:'Female'}, {label:'所有', value:null}]" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"
              )
      el-row(:gutter="20")
        el-col(:span="12")
          el-form-item(label="SignInIpWhitelist:")
            el-select(
              v-model="addForm.signInIpWhitelist"
              multiple
              clearable
              filterable
              allow-create
              collapse-tags
              placeholder="SignInIpWhitelist"
            )
              el-option(
                v-for="item in addForm.signInIpWhitelist"
                :key="item"
                :label="item"
                :value="item"
              )
  el-footer
    el-button(@click="resetForm") Reset
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  h5(v-if="staffIdAdded" style="text-align: left;") Roles of a staff:
  RBAC(v-if="staffIdAdded" v-model:staffId="staffIdAdded" :readOnly="false")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { addStaff } from '@/apis'
import RBAC from '@/components/staff/RBAC.vue'

const props = defineProps(['drawer'])
const emits = defineEmits(['update:drawer', 'refreshTable'])
const addForm = ref({})
const resetForm = () => {
  ElMessageBox.confirm('resetForm')
    .then(() => {
      addForm.value = {}
    }).catch(() => {
      // catch error
    })
}
const staffIdAdded = ref('')
const submitForm = async () => {
  try {
    const addStaffResp = await addStaff(addForm.value)
    if (addStaffResp.status === 201) {
      ElMessage({
        message: '新增成功！',
        type: 'success',
        duration: 3000
      })
      staffIdAdded.value = addStaffResp.data.result
    }
    emits('refreshTable')
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '新增失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
