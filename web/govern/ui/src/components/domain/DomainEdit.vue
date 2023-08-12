<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a domain:
  el-main
    el-form(:model="editForm")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="editForm.name" placeholder="Name")
        el-col(:span="6")
          el-form-item(label="Alias:")
            el-select(
              v-model="editForm.alias"
              multiple
              clearable
              filterable
              allow-create
              collapse-tags
              placeholder="Alias"
            )
              el-option(
                v-for="item in editForm.alias"
                :key="item"
                :label="item"
                :value="item"
              )
        el-col(:span="6")
          el-form-item(label="Seq:")
            el-input(v-model.number="editForm.seq" placeholder="99")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="editForm.icon" placeholder="Icon")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="editForm.memo" placeholder="Memo")
        el-col(:span="6")
          el-form-item(label="ParentId:")
            el-cascader(
              v-model="editForm.parentId"
              @change="handleParentIdCascaderChange"
              :options="curDomainOpts"
              :props="{ label: 'name', value: 'id', checkStrictly: true }"
              clearable
              placeholder="null"
            )
  el-footer
    el-button(@click="cancelForm") Cancel
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
</template>

<script lang="ts" setup>
import { Ref, ref, defineProps, defineEmits, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { profileDomain, editDomain } from '@/apis'

const props = defineProps(['dialog', 'domainOpts', 'domainId'])
const emits = defineEmits(['update:dialog', 'update:domainId', 'refreshTable'])
const editForm = ref({
  name: null,
  alias: null,
  seq: null,
  icon: null,
  memo: null,
  parentId: null
})
let detailForm:any = {}
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
    curDomainOpts.value = excludeSelf(JSON.parse(JSON.stringify(props.domainOpts)))
    const profileDomainResp = await profileDomain(newId)
    detailForm = profileDomainResp.data
      // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.alias = detailForm.alias
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.memo = detailForm.memo
    editForm.value.parentId = detailForm.parentId
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
const excludeSelf = (arr:any[]):any[] => {
  let res:any[] = []
  for (let i=0; i< arr.length; i++) {
    if (arr[i].id != props.domainId) {
      let children:any[] = []
      if (arr[i].children) {
        arr[i].children = excludeSelf(arr[i].children)
      }
      res.push(arr[i])
    }
  }
  return res
}
const curDomainOpts:Ref<any[]> = ref([])
onMounted(async () => {
  try {
    curDomainOpts.value = excludeSelf(JSON.parse(JSON.stringify(props.domainOpts)))
    const profileDomainResp = await profileDomain(props.domainId)
    detailForm = profileDomainResp.data
    // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.alias = detailForm.alias
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.memo = detailForm.memo
    editForm.value.parentId = detailForm.parentId
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
      // TODO need to optimize
      editForm.value.name = detailForm.name
      editForm.value.alias = detailForm.alias
      editForm.value.seq = detailForm.seq
      editForm.value.icon = detailForm.icon
      editForm.value.memo = detailForm.memo
      editForm.value.parentId = detailForm.parentId
      emits('update:dialog', false)
    }).catch(() => {
      // catch error
    })
}
const handleParentIdCascaderChange = (value:any) => {
  editForm.value.parentId = value[value.length-1]
}
const submitForm = async () => {
  try {
    const editDomainResp = await editDomain(props.domainId, editForm.value)
    if (editDomainResp.status == 200) {
      ElMessage({
        message: '编辑成功！',
        type: 'success',
        duration: 3000
      })
    }
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
      message: '编辑失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
