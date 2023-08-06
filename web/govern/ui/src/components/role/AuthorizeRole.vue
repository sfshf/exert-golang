<template lang="pug">
el-container
  el-aside(width="20%")
    el-card
      template(#header)
        span Domains
      el-tree(
        :props="treeProps"
        :data="domainTreeData"
        node-key="id"
        :render-content="domainTreeRenderContent"
        @node-click="handleDomainNodeClick"
        default-expand-all
        :expand-on-click-node="false"
      )
  MenuWidget(v-model:domainId="clickedDomainId" v-model:roleId="roleId" :readOnly="readOnly")
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { listDomain, getDomainsOfRole } from '@/apis'
import MenuWidget from '@/components/menu/MenuWidget.vue'

const props = defineProps(['roleId', 'readOnly'])
const emits = defineEmits(['update:roleId'])
const treeProps = ref({
  label: 'name',
  children: 'children',
  disabled: 'disabled'
})
const domainTreeData = ref([])
const menuTree = ref()
const menuTreeData = ref([])
const authorities = ref({
  menuIDs: [],
  widgetIDs: []
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
    const listDomainResp = await listDomain({ needTree: true })
    domainTreeData.value = listDomainResp.data.list
    if (props.readOnly) {
      disableDomainTree(domainTreeData.value)
    }
    if (roleId.value) {
      const getDomainsOfRoleResp = await getDomainsOfRole(roleId.value)
      let domainIDsArr = getDomainsOfRoleResp.data.domainIDs
      selectedDomainIds.value = new Set(domainIDsArr)
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
const disableDomainTree = (domainTree:any) => {
  for (let i=0; i < domainTree.length; i++) {
    domainTree[i].disabled = true
    if (domainTree[i].children) {
      disableDomainTree(domainTree[i].children)
    }
  }
}
onMounted(async () => {
  try {
    const listDomainResp = await listDomain({ needTree: true })
    domainTreeData.value = listDomainResp.data.list
    if (props.readOnly) {
      disableDomainTree(domainTreeData.value)
    }
    if (roleId.value) {
      const getDomainsOfRoleResp = await getDomainsOfRole(roleId.value)
      let domainIDsArr = getDomainsOfRoleResp.data.domainIDs
      selectedDomainIds.value = new Set(domainIDsArr)
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
const clickedDomainId = ref('')
const handleDomainNodeClick = async (node:any) => {
  clickedDomainId.value = node.id
}
const selectedDomainIds = ref(new Set(null))
const domainTreeRenderContent = (h:any, { node, data, store }:any) => {
  if (selectedDomainIds.value.has(data.id)) {
    return h('span', { style: 'color:#409EFF' }, data.name)
  }
  return h('span', { style: 'color:#606266' }, data.name)
}
</script>

<style lang="scss" scoped>

</style>