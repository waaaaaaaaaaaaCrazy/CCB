import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'
import Particles from "@tsparticles/vue3";
import { loadFull } from 'tsparticles'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
  .use(router)
  .use(ElementPlus)
  .use(Particles, {
    init: async (engine) => {
      await loadFull(engine) // you can load the full tsParticles library from "tsparticles" if you need it
      // loadSlim 轻量级的
    }})

app.mount('#app')
