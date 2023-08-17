<template lang="pug">
el-row
  el-col(:span="8")
    el-row
      el-col(:span="12")
        el-card
          template(#header)
            span Domains
          el-tree(
            :props="treeProps"
            :data="domainTreeData"
            node-key="id"
            :render-content="domainTreeRenderContent"
            @node-click="handleDomainTreeNodeClick"
            default-expand-all
            :expand-on-click-node="false"
          )
      el-col(:span="12")
        el-card
          template(#header)
            span Roles
          el-tree(
            ref="roleTree"
            :props="treeProps"
            :data="roleTreeData"
            node-key="id"
            show-checkbox
            @node-click="handleRoleTreeNodeClick"
            @check-change="handleRoleTreeCheckChange"
            default-expand-all
          )
    el-main
    el-footer
      el-button(v-if="!props.readOnly" @click="resetForm") Reset
      el-button(v-if="!props.readOnly" type="primary" :loading="loading" @click="submitForm") {{ loading ? 'Submitting ...' : 'Submit' }}
  el-col(:span="16")
    MenuWidget(v-model:domainId="clickedDomainId" v-model:roleId="clickedRoleId" :readOnly="true")
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { listRole, authorizeStaffRolesInDomain, getDomainsOfStaff, getStaffRolesInDomain, getAuthoritiesOfRole, listDomain, getDomainsOfRole, listMenu, listMenuWidget } from '@/apis'
import MenuWidget from '@/components/menu/MenuWidget.vue'

const props = defineProps(['staffId', 'readOnly'])
const emits = defineEmits(['update:staffId'])
const staffId = computed({
  get: () => {
    return props.staffId
  },
  set: async (value) => {
    emits('update:staffId', value)
  }
})
watch(staffId, async (newId) => {
  try {
    if (!staffId.value) { return }
    const listDomainResp = await listDomain({ needTree: true })
    domainTreeData.value = listDomainResp.data.list
    const getStaffDomainsResp = await getDomainsOfStaff(staffId.value)
    selectedDomainIds.value = new Set(getStaffDomainsResp.data.domainIds)
    const listRoleResp = await listRole()
    roleTreeData.value = listRoleResp.data.list
    if (props.readOnly || !clickedDomainId.value) {
      disableRoleTree(roleTreeData.value)
    }
    selectedRoleIds.value = new Set(null)
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
const domainTreeData = ref([])
const clickedDomainId = ref('')
const handleDomainTreeNodeClick = async (node:any) => {
  try {
    clickedDomainId.value = node.id
    const listRoleResp = await listRole({domainId: clickedDomainId.value})
    roleTreeData.value = listRoleResp.data.list
    if (props.readOnly) {
      disableRoleTree(roleTreeData.value)
    }
    const getStaffRolesInDomainResp = await getStaffRolesInDomain(clickedDomainId.value, staffId.value)
    selectedRoleIds.value = new Set(getStaffRolesInDomainResp.data.roleIds)
    roleTree.value.setCheckedKeys(getRoleTreeDefaultCheckedKeys(Array.from(selectedRoleIds.value), roleTreeData.value), true)
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
const getRoleTreeDefaultCheckedKeys = (roleIds:any, roleTree:any):any => {
  roleIds = roleIds?roleIds:[]
  let keySet = new Set(null)
  fillRoleTreeDefaultCheckedKeysSet(keySet, roleIds, roleTree)
  return Array.from(keySet)
}
const fillRoleTreeDefaultCheckedKeysSet = (keySet:any, roleIds:any, roleTree:any) => {
  for (let i=0; i < roleIds.length; i++) {
    for (let j=0; j < roleTree.length; j++) {
      if (roleIds[i] === roleTree[j].id) {
        keySet.add(roleIds[i])
      }
    }
  }
}
const selectedDomainIds = ref(new Set(null))
const domainTreeRenderContent = (h:any, { node, data, store }:any) => {
  selectedDomainIds.value = selectedDomainIds.value?selectedDomainIds.value:new Set(null)
  if (selectedDomainIds.value.has(data.id)) {
    return h('span', { style: 'color:#409EFF' }, data.name)
  }
  return h('span', { style: 'color:#606266' }, data.name)
}
const roleTree = ref()
const treeProps = ref({
  label: 'name',
  children: 'children',
  disabled: 'disabled'
})
const roleTreeData = ref<Role[]>([])
interface Role {
  id: string
  name: string
}
const disableRoleTree = (roleTree:any) => {
  for (let i=0; i < roleTree.length; i++) {
    roleTree[i].disabled = true
    if (roleTree[i].children) {
      disableRoleTree(roleTree[i].children)
    }
  }
}
onMounted(async () => {
  try {
    const listDomainResp = await listDomain({ needTree: true })
    domainTreeData.value = listDomainResp.data.list
    const getStaffDomainsResp = await getDomainsOfStaff(staffId.value)
    selectedDomainIds.value = new Set(getStaffDomainsResp.data.domainIds)
    const listRoleResp = await listRole()
    roleTreeData.value = listRoleResp.data.list
    if (props.readOnly || !clickedDomainId.value) {
      disableRoleTree(roleTreeData.value)
    }
    selectedRoleIds.value = new Set(null)
  } catch(err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '组件加载失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
})
const clickedRoleId = ref('')
const handleRoleTreeNodeClick = async (node:any) => {
  try {
    if (!clickedDomainId.value) { return }
    clickedRoleId.value = node.id
    const getAuthoritiesOfRoleResp = await getAuthoritiesOfRole(clickedRoleId.value, clickedDomainId.value)
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
const selectedRoleIds = ref(new Set(null))
interface Node {
  id:never
}
const handleRoleTreeCheckChange = (data:Node, checked:boolean, indeterminate:boolean) => {
  if (checked || indeterminate) {
    selectedRoleIds.value.add(data.id)
  } else {
    selectedRoleIds.value.delete(data.id)
  }
}
const resetForm = async () => {
  try {
    const listDomainResp = await listDomain({ needTree: true })
    domainTreeData.value = listDomainResp.data.list
    const getStaffDomainsResp = await getDomainsOfStaff(staffId.value)
    selectedDomainIds.value = getStaffDomainsResp.data.domainIds
    const listRoleResp = await listRole()
    roleTreeData.value = listRoleResp.data.list
    if (props.readOnly || !clickedDomainId.value) {
      disableRoleTree(roleTreeData.value)
    }
    selectedRoleIds.value = new Set(null)
  } catch(err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '组件加载失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
const submitForm = async () => {
  try {
    const authorizeStaffRolesInDomainResp = await authorizeStaffRolesInDomain(clickedDomainId.value, staffId.value, {roleIds: Array.from(selectedRoleIds.value)})
    if (authorizeStaffRolesInDomainResp.status === 200) {
      ElMessage({
        message: '设置成功！',
        type: 'success',
        duration: 3000
      })
      const getStaffDomainsResp = await getDomainsOfStaff(staffId.value)
      selectedDomainIds.value = new Set(getStaffDomainsResp.data.domainIds)
    }
  } catch (err:any) {
    let errMsg = ''
    if (err.response) {
      errMsg = err.response.data.error
    } else {
      errMsg = err
    }
    ElMessage({
      message: '设置失败：' + errMsg,
      type: 'error',
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>