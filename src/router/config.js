import Home from '@/views/home/Home.vue'
import Center from '@/views/center/Center.vue'
import NotFound from '@/views/notfound/NotFound.vue'

const routesConfig = [
  {
    path: '/index',
    component: Home,
  },
  {
    path: '/center',
    component: Center,
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFound
  }

]

export default routesConfig
