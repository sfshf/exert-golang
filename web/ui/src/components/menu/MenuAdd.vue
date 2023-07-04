<template lang="pug">
el-container
  h5(style="text-align: left;") Properties of a menu:
  el-main
    el-form(:model="addForm")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Name:")
            el-input(v-model="addForm.name" placeholder="Name")
        el-col(:span="6")
          el-form-item(label="Seq:")
            el-input(v-model.number="addForm.seq" placeholder="99")
        el-col(:span="6")
          el-form-item(label="Icon:")
            el-input(v-model="addForm.icon" placeholder="Icon")
        el-col(:span="6")
          el-form-item(label="Route:")
            el-input(v-model="addForm.route" placeholder="Route")
      el-row(:gutter="20")
        el-col(:span="6")
          el-form-item(label="Memo:")
            el-input(v-model="addForm.memo" placeholder="Memo")
        el-col(:span="6")
          el-form-item(label="ParentId:")
            el-cascader(
              v-model="addForm.parentId"
              :options="props.menuOpts"
              :props="{ disabled: 'isItem',  label: 'name', value: 'id', checkStrictly: true }"
              clearable
              placeholder="null"
            )
        el-col(:span="4")
          el-form-item(label="Show:")
            el-checkbox(v-model="addForm.show" label="true")
        el-col(:span="4")
          el-form-item(label="IsItem:")
            el-checkbox(v-model="addForm.isItem" label="true")
  el-footer
    el-button(@click="resetForm") Reset
    el-button(type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  h5(v-if="addForm.isItem && menuIdAdded" style="text-align: left;") Widgets of a menu:
  WidgetTable(v-if="addForm.isItem && menuIdAdded" v-model:menuId="menuIdAdded" :readOnly="false")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { addMenu, listMenuWidget } from '@/apis'
import WidgetTable from '@/components/menu/WidgetTable.vue'

const props = defineProps(['drawer', 'menuOpts'])
const emits = defineEmits(['update:drawer', 'refreshTable'])
const addForm = ref({
  name: '',
  seq: 0,
  icon: '',
  route: '',
  memo: '',
  parentId: null,
  show: false,
})
const menuIdAdded = ref('')
const resetForm = () => {
  ElMessageBox.confirm('resetForm')
    .then(() => {
      addForm.value = {
        name: '',
        seq: 0,
        icon: '',
        route: '',
        memo: '',
        parentId: null,
        show: false,
      }
      menuIdAdded.value = ''
    }).catch(() => {
      // catch error
    })
}
const submitForm = async () => {
  try {
    if (addForm.value.parentId) {
      addForm.value.parentId = addForm.value.parentId[(addForm.value.parentId as Array<string>).length-1]
    }
    const addMenuResp = await addMenu(addForm.value)
    if (addMenuResp.status === 201) {
      ElMessage({
        message: '新增成功！',
        type: 'success',
        duration: 3000
      })
      menuIdAdded.value = addMenuResp.data.result
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