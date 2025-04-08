<script setup>

import SideMenu from '@/components/mainbox/SideMenu.vue'
import TopHeader from '@/components/mainbox/TopHeader.vue'
</script>

<template>
  <div>
    <el-container >
      <SideMenu />
      <el-container direction="vertical">
        <TopHeader />

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<style scoped>

</style>
