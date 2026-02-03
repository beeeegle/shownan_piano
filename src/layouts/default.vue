<template>
  <v-app v-scroll="onScroll" class="app-gradient-bg">
    <AppHeader />

    <v-main class="main-content">
      <v-container class="pa-0" fluid>
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>

    <v-fade-transition>
      <v-btn
        v-show="fab"
        class="back-to-top-btn"
        variant="flat"
        @click="toTop"
      >
        <v-icon :icon="mdiChevronUp" size="32" />
      </v-btn>
    </v-fade-transition>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
  import { mdiChevronUp } from '@mdi/js'
  import { ref } from 'vue'

  const fab = ref(false)

  function onScroll () {
    const top = window.scrollY || document.documentElement.scrollTop
    fab.value = top > 400 // 少し深めに設定して高級感を
  }

  function toTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<style scoped lang="sass">
$accent-gold: #D4AF37
$base-black: #0a0a0a

// 全体の背景に微細な質感を加える
.app-gradient-bg
  background: radial-gradient(circle at top right, #1a1a1b, #0a0a0a) !important
  color: #F8F9FA

.main-content
  min-height: 100vh
  // コンテンツ間のつながりを滑らかにする
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E")

/* Back to Top ボタンの装飾 */
.back-to-top-btn
  position: fixed !important
  bottom: 40px !important
  right: 40px !important
  z-index: 9999 !important

  // 2026年トレンド：グラスモーフィズムとネオン
  background: rgba($accent-gold, 0.1) !important
  backdrop-filter: blur(8px)
  border: 1px solid rgba($accent-gold, 0.3) !important
  color: $accent-gold !important
  width: 56px !important
  height: 56px !important
  border-radius: 16px !important // 完全な円より少し角丸が今っぽい

  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) !important

  &:hover
    background: rgba($accent-gold, 0.2) !important
    transform: translateY(-5px)
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba($accent-gold, 0.2) !important

  @media (max-width: 600px)
    bottom: 24px !important
    right: 24px !important
    width: 48px !important
    height: 48px !important

/* スクロールバーのカスタマイズ（ブラウザ全体） */
:global(::-webkit-scrollbar)
  width: 8px

:global(::-webkit-scrollbar-track)
  background: #0a0a0a

:global(::-webkit-scrollbar-thumb)
  background: #333
  border-radius: 10px
  &:hover
    background: $accent-gold

  // アイコン（svg）の色を強制的に明るくする
  :deep(.v-icon)
    color: #FFFFFF !important // または $accent-gold
    opacity: 1 !important

  &:hover
    :deep(.v-icon)
      color: #000000 !important // ホバー時は視認性のため反転
</style>
