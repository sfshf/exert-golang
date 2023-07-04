<template lang="pug">
el-container
  el-row
    el-col(:span="12")
      el-card
        template(#header)
          span Menus
        el-tree(
          ref="menuTree"
          :props="treeProps"
          :data="menuTreeData"
          node-key="id"
          show-checkbox
          @node-click="handleMenuNodeClick"
          @check-change="handleMenuCheckChange"
          default-expand-all
        )
    el-col(:span="12")
      el-card
        template(#header)
          span Widgets
        el-table(
          ref="widgetTableRef"
          row-key="id"
          :data="fullWidgetList"
          @row-dblclick="handleWidgetRowDblclick"
          @select="handleWidgetSelect"
          @select-all="handleWidgetSelectAll"
        )
          el-table-column(type="selection" reserve-selection="true" :selectable="selectableEstimate")
          el-table-column(prop="name" label="Name" width="200")
          el-table-column(prop="apiPath" label="ApiPath" width="200")
          el-table-column(prop="apiMethod" label="ApiMethod" width="200")
  el-main
  el-footer
    el-button(v-if="!props.readOnly" @click="resetForm") Reset
    el-button(v-if="!props.readOnly" type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { listMenu, listMenuWidget, authorizeRole, getAuthoritiesOfRole } from '@/apis'

const props = defineProps(['domainId', 'roleId', 'readOnly'])
const emits = defineEmits(['update:domainId', 'update:roleId'])
const treeProps = ref({
  label: 'name',
  children: 'children',
  disabled: 'disabled'
})
const menuTree = ref()
const menuTreeData = ref([])
const authorities = ref({
  menuIDs: [],
  widgetIDs: []
})
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
    widgetTableRef.value.clearSelection()
    const listMenuResp = await listMenu({ needTree: true })
    menuTreeData.value = listMenuResp.data.list
    if (props.readOnly) {
      disableMenuTree(menuTreeData.value)
    }
    if (domainId.value && roleId.value) {
      const getAuthoritiesOfRoleResp = await getAuthoritiesOfRole(roleId.value, domainId.value)
      authorities.value = getAuthoritiesOfRoleResp.data
      selectedMenuIds.value = new Set(authorities.value.menuIDs)
      selectedWidgetIds.value = new Set(authorities.value.widgetIDs)
      menuTree.value.setCheckedKeys(getMenuTreeDefaultCheckedKeys(authorities.value.menuIDs, menuTreeData.value), true)
    }
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
    widgetTableRef.value.clearSelection()
    const listMenuResp = await listMenu({ needTree: true })
    menuTreeData.value = listMenuResp.data.list
    if (props.readOnly) {
      disableMenuTree(menuTreeData.value)
    }
    if (domainId.value && roleId.value) {
      const getAuthoritiesOfRoleResp = await getAuthoritiesOfRole(roleId.value, domainId.value)
      authorities.value = getAuthoritiesOfRoleResp.data
      selectedMenuIds.value = new Set(authorities.value.menuIDs)
      selectedWidgetIds.value = new Set(authorities.value.widgetIDs)
      menuTree.value.setCheckedKeys(getMenuTreeDefaultCheckedKeys(authorities.value.menuIDs, menuTreeData.value), true)
    }
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
const disableMenuTree = (menuTree:any) => {
  for (let i=0; i < menuTree.length; i++) {
    menuTree[i].disabled = true
    if (menuTree[i].children) {
      disableMenuTree(menuTree[i].children)
    }
  }
}
const getMenuTreeDefaultCheckedKeys = (menuIds:any, menuTree:any):any => {
  menuIds = menuIds?menuIds:[]
  let keySet = new Set(null)
  fillMenuTreeDefaultCheckedKeysSet(keySet, menuIds, menuTree)
  return Array.from(keySet)
}
const fillMenuTreeDefaultCheckedKeysSet = (keySet:any, menuIds:any, menuTree:any) => {
  for (let i=0; i < menuIds.length; i++) {
    for (let j=0; j < menuTree.length; j++) {
      if (menuIds[i] === menuTree[j].id && menuTree[j].isItem) {
        keySet.add(menuIds[i])
      }
      if (menuTree[j].children) {
        fillMenuTreeDefaultCheckedKeysSet(keySet, menuIds, menuTree[j].children)
      }
    }
  }
}
onMounted(async () => {
  try {
    const listMenuResp = await listMenu({ needTree: true })
    menuTreeData.value = listMenuResp.data.list
    if (props.readOnly) {
      disableMenuTree(menuTreeData.value)
    }
    if (domainId.value && roleId.value) {
      const getAuthoritiesOfRoleResp = await getAuthoritiesOfRole(roleId.value, domainId.value)
      authorities.value = getAuthoritiesOfRoleResp.data
      selectedMenuIds.value = new Set(authorities.value.menuIDs)
      selectedWidgetIds.value = new Set(authorities.value.widgetIDs)
      menuTree.value.setCheckedKeys(getMenuTreeDefaultCheckedKeys(authorities.value.menuIDs, menuTreeData.value), true)
    }
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
const clickedMenuId = ref('')
const handleMenuNodeClick = async (node:any) => {
  try {
    if (node.isItem) {
      clickedMenuId.value = node.id
      const listMenuWidgetResp = await listMenuWidget(node.id)
      fullWidgetList.value = listMenuWidgetResp.data.list
      for (let row of fullWidgetList.value) {
        for (let selectedWidgetId of selectedWidgetIds.value) {
          if ((row as Widget).id === selectedWidgetId) {
            widgetTableRef.value.toggleRowSelection(row, true)
          }
        }
      }
    }
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '查询控件列表失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const selectedMenuIds = ref(new Set(null))
interface Node {
  id:never
  name:never
  parentID:never
}
const handleMenuCheckChange = async (data:Node, checked:boolean, indeterminate:boolean) => {
  try {
    if (checked || indeterminate) {
      selectedMenuIds.value.add(data.id)
    } else {
      selectedMenuIds.value.delete(data.id)
      const listMenuWidgetResp = await listMenuWidget(data.id)
      for (let i = 0; i < listMenuWidgetResp.data.list.length; i++) {
        if (selectedWidgetIds.value.has(listMenuWidgetResp.data.list[i].id)) {
          selectedWidgetIds.value.delete(listMenuWidgetResp.data.list[i].id)
        }
      }
    }
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '查询控件列表失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
interface Widget {
  id: string
}
const fullWidgetList = ref([])
const selectableEstimate = (row:any, index:any) => {
  if (props.readOnly) {
    return !props.readOnly
  }
  return selectedMenuIds.value.has(clickedMenuId.value)
}
const selectedWidgetIds = ref(new Set(null))
const widgetTableRef = ref()
const handleWidgetSelect = (selection:any, row:any) => {
  if (selectedWidgetIds.value.has(row.id)) {
    selectedWidgetIds.value.delete(row.id)
  } else {
    selectedWidgetIds.value.add(row.id)
  }
}
const handleWidgetSelectAll = (selection:any) => {
  for (let row of selection) {
    selectedWidgetIds.value.add(row.id)
  }
}
const handleWidgetRowDblclick = (row:any) => {
  if (selectedWidgetIds.value.has(row.id)) {
    widgetTableRef.value.toggleRowSelection(row, false)
    selectedWidgetIds.value.delete(row.id)
  } else {
    widgetTableRef.value.toggleRowSelection(row, true)
    selectedWidgetIds.value.add(row.id)
  }
}
const resetForm = async () => {
  try {
    widgetTableRef.value.clearSelection()
    const listMenuResp = await listMenu({ needTree: true })
    menuTreeData.value = listMenuResp.data.list
    if (props.readOnly) {
      disableMenuTree(menuTreeData.value)
    }
    if (domainId.value && roleId.value) {
      const getAuthoritiesOfRoleResp = await getAuthoritiesOfRole(roleId.value, domainId.value)
      authorities.value = getAuthoritiesOfRoleResp.data
      selectedMenuIds.value = new Set(authorities.value.menuIDs)
      selectedWidgetIds.value = new Set(authorities.value.widgetIDs)
      menuTree.value.setCheckedKeys(getMenuTreeDefaultCheckedKeys(authorities.value.menuIDs, menuTreeData.value), true)
    }
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
}
const submitForm = async () => {
  try {
    let menuIDs = Array.from(selectedMenuIds.value)
    let widgetIDs = Array.from(selectedWidgetIds.value)
    const authorizeRoleResp = await authorizeRole(roleId.value, domainId.value, {"menuIDs": menuIDs, "widgetIDs": widgetIDs})
    if (authorizeRoleResp.status === 200) {
      ElMessage({
        message: '设置权限成功！',
        type: 'success',
        duration: 3000
      })
    }
  } catch(err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '设置权限失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>