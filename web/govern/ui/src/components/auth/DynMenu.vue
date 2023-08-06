<template lang="pug">
el-menu(
  v-for="menu in menus"
  @select="menuSelect"
  :default-active="activeIndex"
)
  el-sub-menu(:index="menu.route" v-if="menu.children && menu.children.length > 0")
    template(#title)
      span {{ menu.name }}
    DynMenu(
      :menus="menu.children"
    )
  el-menu-item(:index="menu.route" v-else) {{ menu.name }}
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['menus'])
const emits = defineEmits(['menuSelect'])
const router = useRouter()
const activeIndex = ref('')
const menuSelect = (index:any) => {
  activeIndex.value = index
  router.push({ path: index })
}

</script>

<style lang="scss" scoped>

</style>
