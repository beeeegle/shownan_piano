<template>
  <v-app-bar flat class="header-blur">
    <v-app-bar-title class="font-weight-bold">湘南国際音楽コンクール</v-app-bar-title>
    <v-spacer />
    <v-btn variant="text" to="/about">ABOUT</v-btn>
    <v-btn variant="text" to="/jurors">JURORS</v-btn>
    <v-btn variant="flat" color="primary" class="ml-2">APPLICATION</v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    app
    :class="{ 'is-hidden': !drawer }"
    location="right"
    temporary
    touchless
  >
    <div class="text-h6 font-weight-bold mb-6">Menu</div>

    <!-- <v-list nav>
      <v-list-item
        color="primary"
        :prepend-icon="mdiEarth"
        rounded="lg"
        :title="RANKING_LABELS.world[langStore.lang]"
        to="/worlds"
      />
      <v-list-item
        color="primary"
        :prepend-icon="mdiHanger"
        rounded="lg"
        :title="RANKING_LABELS.avatar[langStore.lang]"
        to="/avatars"
      />
      <v-divider class="my-4" />
      <v-list-item
        :prepend-icon="mdiInformationOutline"
        rounded="lg"
        :title="RANKING_LABELS.abouts[langStore.lang]"
        to="/about"
      /> -->
      <!-- <v-list-item
        :prepend-icon="mdiEmailOutline"
        rounded="lg"
        :title="RANKING_LABELS.postingReq[langStore.lang]"
        to="/request"
      /> -->
    <!-- </v-list> -->
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { mdiEarth, mdiHanger, mdiInformationOutline } from '@mdi/js'
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  // import { RANKING_LABELS } from '@/constants/labels'
  // import { useLangStore } from '@/stores/lang'

  const route = useRoute()
  const drawer = ref(false)
  const activeTab = ref(route.path.includes('avatars') ? 'avatars' : 'worlds')
  // const langStore = useLangStore()

  watch(() => route.path, (newPath: string) => {
    activeTab.value = newPath.includes('avatars') ? 'avatars' : 'worlds'
    drawer.value = false
  })
</script>

<style scoped lang="sass">
/* ドロワーが閉じている時は、物理的に画面から消し去る */
.v-navigation-drawer.is-hidden
  visibility: hidden !important
  pointer-events: none !important
.brand-logo
  letter-spacing: -1px
  font-family: 'Inter', sans-serif

/* ナビゲーションを包むカプセルの背景 */
.nav-wrapper
  display: flex
  align-items: center

.main-tabs
  background: rgba(255, 255, 255, 0.05) // 非常に薄い白
  border-radius: 50px
  padding: 4px
  height: 48px !important
  border: 1px solid rgba(255, 255, 255, 0.1) // 薄い枠線で形を出す

.nav-tab
  height: 40px !important
  min-width: 110px
  font-weight: 700
  letter-spacing: 0
  border-radius: 40px !important // カプセルの中身も丸く
  color: rgba(255, 255, 255, 0.6) !important // 通常時は薄い白文字
  transition: all 0.2s ease
  text-transform: none

  /* 選択されていない時のホバー */
  &:hover
    color: #fff !important
    background: rgba(255, 255, 255, 0.05)

  /* 【重要】アクティブ（選択中）のスタイル */
  &.v-tab--selected
    background: rgba(255, 255, 255, 0.15) !important // ここが真っ白にならないよう調整
    color: #fff !important // 文字ははっきり白
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)

// サイト全体の a タグ（router-link）のデフォルトをリセット
a
  text-decoration: none
  color: inherit
  transition: opacity 0.2s ease

  &:hover
    opacity: 0.8

  &:visited, &:active, &:focus
    color: inherit
    outline: none

// ロゴなど、ホバー時の透明度変化も無効化したい場合
.no-style-link
  opacity: 1 !important
  &:hover
    opacity: 1 !important
</style>
