<template lang="pug">
el-container
  h5(style="text-align: left") Properties of a domain:
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
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="addForm.icon" placeholder="Icon")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="addForm.memo" placeholder="Memo")
        el-col(:span="6")
          el-form-item(label="ParentId:")
            el-cascader(
              v-model="addForm.parentId"
              @change="handleParentIdCascaderChange"
              :options="props.domainOpts"
              :props="{ label: 'name', value: 'id', checkStrictly: true }"
              clearable
              placeholder="null"
            )
  el-footer
    el-button(@click="resetForm") Reset
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { addDomain } from '@/apis'
import { EncodeToBuffer } from '@/dto/util'
import { dto } from '@/dto/govern_web'

const props = defineProps(['dialog', 'domainOpts'])
const emits = defineEmits(['update:dialog', 'refreshTable'])
const addForm = ref({
  name: '',
  alias: [],
  seq: 0,
  icon: '',
  memo: '',
  parentId: ''
})
const resetForm = () => {
  ElMessageBox.confirm('resetForm')
    .then(() => {
      addForm.value = {
        name: '',
        alias: [],
        seq: 0,
        icon: '',
        memo: '',
        parentId: ''
      }
      domainIdAdded.value = ''
    }).catch(() => {
      // catch error
    })
}
const handleParentIdCascaderChange = (value:any) => {
  addForm.value.parentId = value[value.length-1]
}
const domainIdAdded = ref('')
const submitForm = async () => {
  try {
    const addDomainResp = await addDomain(addForm.value)
    if (addDomainResp.status === 201) {
      ElMessage({
        message: '新增成功！',
        type: 'success',
        duration: 3000
      })
      domainIdAdded.value = addDomainResp.data.id
      addForm.value = {
        name: '',
        alias: [],
        seq: 0,
        icon: '',
        memo: '',
        parentId: ''
      }
      emits('update:dialog', false)
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
