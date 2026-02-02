<template>
  <v-app v-scroll="onScroll">
    <AppHeader />

    <v-main>
      <router-view />
    </v-main>

    <v-fade-transition>
      <v-btn
        v-if="fab"
        class="back-to-top-btn"
        color="primary"
        elevation="12"
        :icon="mdiChevronUp"
        size="large"
        @click="toTop"
      />
    </v-fade-transition>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
  import { mdiChevronUp } from '@mdi/js'
  import { ref } from 'vue'

  const fab = ref(false)

  // スクロール検知
  function onScroll () {
    // windowオブジェクトが存在することを確認
    const top = window.scrollY || document.documentElement.scrollTop
    fab.value = top > 300
  }

  function toTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<style scoped lang="sass">
/* html, body 全体で横方向のはみ出しをカットする */
html, body
  overflow-x: hidden !important
  width: 100%
  position: relative

/* Vuetifyのメインコンテナも念のためガード */
.v-application
  overflow-x: hidden !important

.responsive-container
  max-width: 1200px
  margin: 0 auto

/* ボタンのスタイルを完全に固定 */
.back-to-top-btn
  position: fixed !important
  bottom: 20px !important
  right: 20px !important
  z-index: 9999 !important /* 他のコンポーネントより確実に上にする */

  /* スマホでのタップ領域を確保しつつ、邪魔にならないサイズ */
  @media (max-width: 600px)
    bottom: 16px !important
    right: 16px !important
    width: 48px !important
    height: 48px !important
</style>
