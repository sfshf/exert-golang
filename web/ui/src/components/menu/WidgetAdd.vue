<template lang="pug">
el-container
  el-main
    el-form(:model="addForm")
      el-row
        el-form-item(label="Name:")
          el-input(v-model="addForm.name" placeholder="Name")
      el-row
        el-form-item(label="Seq:")
          el-input(v-model.number="addForm.seq" placeholder="99")
      el-row
        el-form-item(label="Icon:")
          el-input(v-model="addForm.icon" placeholder="Icon")
      el-row
        el-form-item(label="ApiMethod:")
          el-input(v-model="addForm.apiMethod" placeholder="ApiMethod")
      el-row
        el-form-item(label="ApiPath:")
          el-input(v-model="addForm.apiPath" placeholder="ApiPath")
      el-row
        el-form-item(label="Memo:")
          el-input(v-model="addForm.memo" placeholder="Memo")
      el-row
        el-form-item(label="Show:")
          el-checkbox(v-model="addForm.show" label="true")
  el-footer
    el-button(@click="resetForm") Reset
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { addMenuWidget } from '@/apis'

const props = defineProps(['drawer', 'menuId'])
const emits = defineEmits(['update:drawer', 'update:menuId', 'refreshTable'])
const addForm = ref({})
const resetForm = () => {
  ElMessageBox.confirm('resetForm')
    .then(() => {
      addForm.value = {}
      emits('update:drawer', false)
    }).catch(() => {
      // catch error
    })
}
const submitForm = async () => {
  try {
    const addMenuResp = await addMenuWidget(props.menuId, addForm.value)
    if (addMenuResp.status === 201) {
      ElMessage({
        message: '新增控件成功！',
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
      message: '新增控件失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>