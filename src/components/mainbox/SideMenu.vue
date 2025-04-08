<script setup>
import { Avatar, HomeFilled, MessageBox, UserFilled } from '@element-plus/icons-vue'
import { useIndexStore } from '@/stores/index.js'
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
  <el-aside width="useIndexStore().isCollapsed?'64px':'200px'">
    <el-menu :collapse="useIndexStore().isCollapsed"
             :router="true"
    :default-active="route.fullPath">
      <el-menu-item index="/home">
        <el-icon>
          <home-filled />
        </el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-menu-item index="/center">
        <el-icon>
          <avatar />
        </el-icon>
        <span>个人中心</span>
      </el-menu-item>

      <el-sub-menu index="/user-manage">
        <template #title>
          <el-icon>
            <user-filled/>
          </el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user-manage/adduser">添加用户</el-menu-item>
        <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/news-manage">
        <template #title>
          <el-icon>
            <message-box />
          </el-icon>
          <span>新闻管理</span>
        </template>
        <el-menu-item index="/news-manage/addnews">创建新闻</el-menu-item>
        <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>
      </el-sub-menu>


    </el-menu>
  </el-aside>

</template>

<style scoped>
.el-aside {
  height: 100vh;

  .el-menu{
    height: 100vh;
  }
}
</style>
