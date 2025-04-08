import { defineStore } from 'pinia'

export const useIndexStore = defineStore('indexStore', {
  state: () => ({
    isGetterRouter: false,
    isCollapsed: false,
  }),
  getters: {

  },
  actions: {
    changeGetterRouter(value){
      this.isGetterRouter = value
    },
    changeCollapsed() {
      this.isCollapsed = !this.isCollapsed
    }
  },
  persist: {
    pick:['isCollapsed'],
  },
})
