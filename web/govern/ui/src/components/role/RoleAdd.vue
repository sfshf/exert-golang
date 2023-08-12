<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a role:
  el-main
    el-form(:model="addForm")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="addForm.name" placeholder="Name")
        el-col(:span="6")
          el-form-item(label="Alias:")
            el-select(
              v-model="addForm.alias"
              multiple
              clearable
              filterable
              allow-create
              collapse-tags
              placeholder="Alias"
            )
              el-option(
                v-for="item in addForm.alias"
                :key="item"
                :label="item"
                :value="item"
              )
        el-col(:span="6")
          el-form-item(label="Seq:")
            el-input(v-model.number="addForm.seq" placeholder="99")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="addForm.icon" placeholder="Icon")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="addForm.memo" placeholder="Memo")
  el-footer
    el-button(@click="resetForm") Reset
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  h5(v-if="roleIdAdded" style="text-align: left;") Authority tree of a role:
  AuthorizeRole(v-if="roleIdAdded" v-model:roleId="roleIdAdded" :readOnly="false")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { addRole } from '@/apis'
import AuthorizeRole from '@/components/role/AuthorizeRole.vue'

const props = defineProps(['dialog'])
const emits = defineEmits(['update:dialog', 'refreshTable'])
const addForm = ref({})
const roleIdAdded = ref('')
const resetForm = () => {
  ElMessageBox.confirm('resetForm')
    .then(() => {
      addForm.value = {}
    }).catch(() => {
      // catch error
    })
}
const submitForm = async () => {
  try {
    const addRoleResp = await addRole(addForm.value)
    if (addRoleResp.status === 201) {
      ElMessage({
        message: '新增成功！',
        type: 'success',
        duration: 3000
      })
    }
    roleIdAdded.value = addRoleResp.data.result
    emits('update:dialog', false)
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
