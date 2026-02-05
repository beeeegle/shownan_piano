<template>
  <v-app-bar class="header-blur px-md-4" flat height="80">
    <v-app-bar-title style="min-width: 200px">
      <router-link class="no-style-link brand-logo" to="/" @click.native="scrollToSection('app')">
        <span class="text-h6 font-weight-bold letter-spacing-2">SHONAN</span>
        <span class="text-caption d-block mt-n1 opacity-70">International Music Competition</span>
      </router-link>
    </v-app-bar-title>
    <v-spacer />

    <div class="nav-wrapper d-none d-md-flex">
      <v-tabs v-model="activeTab" class="main-tabs" hide-slider>
        <v-tab class="nav-tab" @click="handleNavClick('concept')">ABOUT</v-tab>
        <v-tab class="nav-tab" @click="handleNavClick('news')">NEWS</v-tab>
        <v-tab class="nav-tab" @click="handleNavClick('history')">HISTORY</v-tab>
        <v-tab class="nav-tab" @click="handleNavClick('contact')">CONTACT</v-tab>
      </v-tabs>
    </div>
    <v-spacer />
    <div class="d-flex align-center ga-3">
      <v-btn
        class="lang-toggle-btn"
        size="small"
        variant="text"
        @click="langStore.toggle()"
      >
        <v-icon :icon="mdiTranslate" size="small" start />
        {{ langStore.lang === 'jp' ? 'EN' : 'JP' }}
      </v-btn>

      <v-btn
        class="font-weight-bold px-6 d-none d-sm-flex"
        color="primary"
        rounded="pill"
        to="#"
        variant="flat"
      >
        APPLY
      </v-btn>

      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    class="drawer-glass"
    :class="{ 'is-hidden': !drawer }"
    location="right"
    temporary
    touchless
    width="300"
  >
    <div class="pa-6">
      <v-list class="bg-transparent" nav>
        <v-list-item title="ABOUT" @click="handleNavClick('concept')" />
        <v-list-item title="NEWS" @click="handleNavClick('news')" />
        <v-list-item title="HISTORY" @click="handleNavClick('history')" />
        <v-list-item title="CONTACT" @click="handleNavClick('contact')" />
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import {
    mdiClose,
    mdiTranslate,
  } from '@mdi/js'
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { RANKING_LABELS } from '@/constants/labels'
  import { useLangStore } from '@/stores/lang'

  const drawer = ref(false)
  const route = useRoute()
  const router = useRouter()
  const langStore = useLangStore()
  const activeTab = ref(null)

  async function handleNavClick (id: string) {
    drawer.value = false // スマホ用ドロワーを閉じる

    if (route.path !== '/') {
      // トップページ以外にいる場合は、まずトップへ移動
      await router.push('/')
      // 遷移後のDOMレンダリングを待つために少し遅延
      setTimeout(() => scrollToSection(id), 100)
    } else {
      // トップページにいる場合はそのままスクロール
      scrollToSection(id)
    }
  }

  function scrollToSection (id: string) {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80 // ヘッダーの高さ分を考慮
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }
</script>

<style scoped lang="sass">
$accent-gold: #D4AF37
$glass-bg: rgba(17, 17, 17, 0.8)

.header-blur
  background: $glass-bg !important
  backdrop-filter: blur(12px)
  border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important

.brand-logo
  font-family: "Noto Serif JP", serif
  color: #fff
  .letter-spacing-2
    letter-spacing: 2px

/* ナビゲーションカプセル */
.main-tabs
  background: rgba(255, 255, 255, 0.03)
  border-radius: 50px
  padding: 4px
  height: 52px !important
  border: 1px solid rgba(255, 255, 255, 0.08)

.nav-tab
  height: 44px !important
  min-width: 100px
  font-weight: 500
  font-size: 0.85rem
  letter-spacing: 1px
  border-radius: 40px !important
  color: rgba(255, 255, 255, 0.5) !important
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1)
  text-transform: uppercase

  &:hover
    color: $accent-gold !important
    background: rgba($accent-gold, 0.05)

  &.v-tab--selected
    background: rgba($accent-gold, 0.15) !important
    color: $accent-gold !important
    font-weight: 700

/* 言語切替ボタン */
.lang-toggle-btn
  color: rgba(255, 255, 255, 0.7) !important
  font-size: 0.75rem
  letter-spacing: 1px
  &:hover
    color: $accent-gold !important

/* モバイルドロワー */
.drawer-glass
  background: rgba(17, 17, 17, 0.95) !important
  backdrop-filter: blur(20px)
  border-left: 1px solid rgba(255, 255, 255, 0.1) !important

.no-style-link
  text-decoration: none
  &:hover
    opacity: 1

/* ドロワーが閉じている時は、物理的に画面から消し去る */
.v-navigation-drawer.is-hidden
  visibility: hidden !important
  pointer-events: none !important
.brand-logo
  letter-spacing: -1px
  font-family: 'Inter', sans-serif

/* モバイルドロワーの修正 */
.drawer-glass
  background: rgba(17, 17, 17, 0.95) !important
  backdrop-filter: blur(20px)
  border-left: 1px solid rgba(255, 255, 255, 0.1) !important

  /* 閉じている時の挙動を強化 */
  &.is-hidden
    transform: translateX(100%) !important // 確実に右側へ飛ばす
    visibility: hidden !important
    pointer-events: none !important
    display: none !important // 最終手段として表示から消す

/* 万が一他の要素がはみ出している場合を考慮したグローバルガード */
:global(html), :global(body)
  overflow-x: hidden !important
  position: relative
  width: 100%

/* ロゴが長すぎて画面を圧迫しないよう調整 */
.brand-logo
  display: inline-block
  max-width: 80vw // 画面幅の80%以上は取らせない
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
</style>
