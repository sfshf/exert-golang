<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a role:
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
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="editForm.icon" placeholder="Icon")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="editForm.memo" placeholder="Memo")
  el-footer
    el-button(@click="cancelForm") Cancel
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  h5(style="text-align: left;") Authority tree of a role:
  AuthorizeRole(v-model:roleId="roleId" :readOnly="false")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { profileRole, editRole } from '@/apis'
import AuthorizeRole from '@/components/role/AuthorizeRole.vue'

const props = defineProps(['dialog', 'roleId'])
const emits = defineEmits(['update:dialog', 'update:roleId', 'refreshTable'])
const editForm = ref({
  name: null,
  alias: null,
  seq: null,
  icon: null,
  memo: null,
})
let detailForm:any = {}
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
    detailForm = profileRoleResp.data
     // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.alias = detailForm.alias
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.memo = detailForm.memo
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
    detailForm = profileRoleResp.data
    // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.alias = detailForm.alias
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.memo = detailForm.memo
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
      emits('update:dialog', false)
    }).catch(() => {
      // catch error
    })
}
const submitForm = async () => {
  try {
    const editRoleResp = await editRole(props.roleId, editForm.value)
    if (editRoleResp.status == 200) {
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
