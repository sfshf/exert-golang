<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a domain:
  el-main
    el-form(:model="detailForm" disabled="true")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="detailForm.name")
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
            el-input(v-model="detailForm.seq")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="detailForm.icon")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="detailForm.memo")
        el-col(:span="6")
          el-form-item(label="ParentID:")
            el-cascader(
              v-model="detailForm.parentID"
              :options="domainOpts"
              :props="{ label: 'name', value: 'id', checkStrictly: true }"
              placeholder="null"
            )
        el-col(:span="6")
          el-form-item(label="CreatedBy:")
            el-input(v-model="detailForm.createdBy")
        el-col(:span="6")
          el-form-item(label="CreatedAt:")
            el-input(v-model="detailForm.createdAt")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="UpdatedBy:")
            el-input(v-model="detailForm.updatedBy")
        el-col(:span="6")
          el-form-item(label="UpdatedAt:")
            el-input(v-model="detailForm.updatedAt")
  el-footer
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { profileDomain } from '@/apis'

const props = defineProps(['drawer', 'domainId', 'domainOpts'])
const emits = defineEmits(['update:drawer', 'update:domainId'])
const detailForm = ref({})
const domainId = computed({
  get: () => {
    return props.domainId
  },
  set: async (value) => {
    emits('update:domainId', value)
  }
})
watch(domainId, async (newId:string) => {
  try {
    if (newId == '') { return }
    const profileDomainResp = await profileDomain(newId)
    detailForm.value = profileDomainResp.data
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
    const profileDomainResp = await profileDomain(props.domainId)
    detailForm.value = profileDomainResp.data
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
const detailDrawer = ref(false)
const IdForDetail = ref('')
const handleDetailClose = (done: () => void) => {
  done()
}
const toDoDetail = (id:string) => {
  IdForDetail.value = id
  detailDrawer.value = true
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
