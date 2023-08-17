<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a menu:
  el-main
    el-form(:model="editForm")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="editForm.name" placeholder="Name")
        el-col(:span="6")
          el-form-item(label="Seq:")
            el-input(v-model.number="editForm.seq" placeholder="99")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="editForm.icon" placeholder="Icon")
        el-col(:span="6")
          el-form-item(label="Route:")
            el-input(v-model="editForm.route" placeholder="Route")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="editForm.memo" placeholder="Memo")
        el-col(:span="6")
          el-form-item(label="ParentId:")
            el-cascader(
              v-model="editForm.parentId"
              :options="props.menuOpts"
              :props="{ disabled: 'isItem', label: 'name', value: 'id', checkStrictly: true }"
              clearable
              placeholder="null"
            )
        el-col(:span="4")
          el-form-item(label="Show:")
            el-checkbox(v-model="editForm.show" label="true")
        el-col(:span="4")
          el-form-item(label="IsItem:")
            el-checkbox(v-model="editForm.isItem" label="true")
  el-footer
    el-button(@click="cancelForm") Cancel
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  h5(v-if="editForm.isItem" style="text-align: left;") Widgets of a menu:
  WidgetTable(v-if="editForm.isItem" v-model:menuId="menuId" :readOnly="false")
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { profileMenu, editMenu } from '@/apis'
import WidgetTable from '@/components/menu/WidgetTable.vue'

const props = defineProps(['drawer', 'menuOpts', 'menuId'])
const emits = defineEmits(['update:drawer', 'update:menuId', 'refreshTable'])
const editForm = ref({
  name: null,
  seq: null,
  icon: null,
  route: null,
  memo: null,
  show: null,
  isItem: null,
  parentId: null,
})
let detailForm:any = {}
const menuId = computed({
  get: () => {
    return props.menuId
  },
  set: async (value) => {
    emits('update:menuId', value)
  }
})
watch(menuId, async (newId:string) => {
  try {
    if (newId == '') { return }
    const profileMenuResp = await profileMenu(newId)
    detailForm = profileMenuResp.data
     // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.route = detailForm.route
    editForm.value.memo = detailForm.memo
    editForm.value.show = detailForm.show
    editForm.value.isItem = detailForm.isItem
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
onMounted(async () => {
  try {
    const profileMenuResp = await profileMenu(props.menuId)
    detailForm = profileMenuResp.data
    // TODO need to optimize
    editForm.value.name = detailForm.name
    editForm.value.seq = detailForm.seq
    editForm.value.icon = detailForm.icon
    editForm.value.route = detailForm.route
    editForm.value.memo = detailForm.memo
    editForm.value.show = detailForm.show
    editForm.value.isItem = detailForm.isItem
    editForm.value.parentId = detailForm.parentId
  } catch (err) {
    ElMessage({
      message: '查询详情失败：' + err,
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
      editForm.value.seq = detailForm.seq
      editForm.value.icon = detailForm.icon
      editForm.value.route = detailForm.route
      editForm.value.memo = detailForm.memo
      editForm.value.show = detailForm.show
      editForm.value.parentId = detailForm.parentId
      emits('update:drawer', false)
    }).catch(() => {
      // catch error
    })
}
const submitForm = async () => {
  try {
    const editMenuResp = await editMenu(props.menuId, editForm.value)
    if (editMenuResp.status == 200) {
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
