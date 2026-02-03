// src/stores/lang.ts
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    lang: 'jp' as 'jp' | 'en',
  }),
  actions: {
    toggle () {
      this.lang = this.lang === 'jp' ? 'en' : 'jp'
    },
    set (lang: 'jp' | 'en') {
      this.lang = lang
    },
  },
})
