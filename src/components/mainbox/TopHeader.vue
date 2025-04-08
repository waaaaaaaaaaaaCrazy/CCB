<script setup>
import { useIndexStore } from '@/stores/index.js'
const store = useIndexStore()

const handleCollapsed = ()=>{
  store.changeCollapsed()
}
</script>

<template>
  <el-header>
    <button @click="handleCollapsed">click</button>
    Header
  </el-header>

</template>

<style scoped>

</style>
