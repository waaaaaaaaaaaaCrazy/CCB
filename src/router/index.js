import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import MainBox from '@/views/MainBox.vue'
import routesConfig from '@/router/config.js'
import { useIndexStore } from '@/stores/index.js'
import Home from "@/views/home/Home.vue";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/mainBox',
    name: 'mainBox',
    component: MainBox
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useIndexStore();

  if(to.name === 'login') {
    next()
  }else{
    if(!localStorage.getItem('token')) {
      next({
        path: '/login',
      })
    }else{
      if(!store.isGetterRouter){
        ConfigRouter()
        next({
          path: to.fullPath
        })
      }else{
        next()
      }
    }
  }
})

const ConfigRouter = ()=>{
  const store = useIndexStore();

  routesConfig.forEach(item => {
    router.addRoute("mainBox",item);
  })

  store.changeGetterRouter(true);
}

export default router
