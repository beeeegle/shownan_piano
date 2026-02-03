<template>
  <v-app-bar class="header-blur px-md-4" flat height="80">
    <v-app-bar-title>
      <router-link class="no-style-link brand-logo" to="/">
        <span class="text-h6 font-weight-bold letter-spacing-2">SHONAN</span>
        <span class="text-caption d-block mt-n1 opacity-70">International Music Competition</span>
      </router-link>
    </v-app-bar-title>

    <v-spacer />

    <div class="nav-wrapper d-none d-md-flex">
      <v-tabs
        v-model="activeTab"
        class="main-tabs"
        hide-slider
      >
        <v-tab class="nav-tab" to="/about">ABOUT</v-tab>
        <v-tab class="nav-tab" to="/jurors">JURORS</v-tab>
        <v-tab class="nav-tab" to="/history">HISTORY</v-tab>
        <v-tab class="nav-tab" to="/news">NEWS</v-tab>
        <!-- <v-tab class="nav-tab" to="/news">{{ RANKING_LABELS.new[langStore.lang] }}</v-tab> -->
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
        <v-icon start :icon="mdiTranslate" size="small"></v-icon>
        {{ langStore.lang === 'jp' ? 'EN' : 'JP' }}
      </v-btn>

      <v-btn
        color="primary"
        variant="flat"
        rounded="pill"
        class="font-weight-bold px-6 d-none d-sm-flex"
        to="/application"
      >
        APPLY
      </v-btn>

      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="drawer-glass"
    width="300"
  >
    <div class="pa-6">
      <div class="d-flex justify-space-between align-center mb-10">
        <span class="text-h6 font-weight-bold text-primary">MENU</span>
        <v-btn icon="mdi-close" variant="text" @click="drawer = false"></v-btn>
      </div>

      <v-list nav class="bg-transparent">
        <v-list-item to="/about" title="ABOUT" class="mb-2" />
        <v-list-item to="/jurors" title="JURORS" class="mb-2" />
        <v-list-item to="/history" title="HISTORY" class="mb-2" />
        <v-list-item to="/news" title="NEWS" class="mb-2" />
        <v-divider class="my-6 opacity-10" />
        <v-list-item to="/contact" title="CONTACT" />
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import {
    mdiTranslate,
    mdiHistory,
  } from '@mdi/js'
  import { ref } from 'vue'
  import { RANKING_LABELS } from '@/constants/labels'
  import { useLangStore } from '@/stores/lang'

  const drawer = ref(false)
  const activeTab = ref(null)
  const langStore = useLangStore()
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
</style>
