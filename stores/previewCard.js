import { defineStore } from 'pinia'

export const usePreviewStore = defineStore("preview", {
  state: () => {
    return {
      name: '',
      price: 0,
      isPreview: false
    }
  },
  actions: {
    togglePreview(title = '') {
      this.name = title
      this.isPreview = !this.isPreview
    },
  }
})