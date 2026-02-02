<template>
  <v-footer class="bg-surface border-t py-12">
    <v-container>
      <v-row align="center" class="mb-10">
        <v-col class="text-center text-md-left" cols="12" md="4">
          <div class="d-flex align-center justify-center justify-md-start mb-2">
            <v-avatar class="mr-2" color="primary" size="24">
              <span class="text-white text-caption font-weight-black">VR</span>
            </v-avatar>
            <span class="text-h6 font-weight-black">VRChat<span class="text-primary">Ranks</span></span>
          </div>
          <p class="text-caption text-medium-emphasis">
            VRChatの「今」を記録する、<br class="d-md-none" />ワールドランキング＆アバター紹介。
          </p>
        </v-col>

        <v-col cols="12" md="8">
          <div class="d-flex flex-wrap justify-center justify-md-end footer-nav-group ga-2 ga-md-0">
            <a class="footer-link item-world" href="/about">
              <!-- <span class="dot" />{{ RANKING_LABELS.abouts[langStore.lang] }} -->
            </a>
            <span class="divider d-none d-md-block" />

            <a class="footer-link" href="https://x.com/O_najimi_nasa" target="_blank">
              <v-icon :icon="mdiTwitter" size="18" start />X
            </a>
            <span class="divider d-none d-md-block" />

            <a class="footer-link" href="https://beeeegle.booth.pm/" target="_blank">
              <!-- <v-icon :icon="mdiStore" size="18" start />{{ RANKING_LABELS.shop[langStore.lang] }} -->
            </a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="mb-6 opacity-10" />

      <v-row align="center" class="flex-column flex-md-row text-center" no-gutters>
        <div class="text-caption text-medium-emphasis mb-2 mb-md-0">
          &copy; {{ new Date().getFullYear() }} <span class="text-white font-weight-bold">なじみ</span>
        </div>
        <v-spacer />
        <div class="text-caption text-disabled">
          Powered by VRChat API. This site is a fan-made project.
        </div>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  import { mdiStore, mdiTwitter } from '@mdi/js'
  // import { RANKING_LABELS } from '@/constants/labels'
  // import { useLangStore } from '@/stores/lang'

  // const langStore = useLangStore()
</script>

<style scoped lang="sass">
.bg-surface
  background-color: #0a0a0a !important // より深い黒で高級感を

/* フッターナビゲーション */
.footer-link
  color: #a0a0a0
  text-decoration: none
  font-size: 0.85rem
  font-weight: 600
  padding: 10px 20px
  transition: all 0.3s ease
  display: flex
  align-items: center
  cursor: pointer
  border-radius: 12px

  /* SP用のボタン風デザイン */
  @media (max-width: 600px)
    background: rgba(255, 255, 255, 0.05)
    width: calc(50% - 8px) // 2列並び
    justify-content: center
    font-size: 0.75rem
    padding: 12px 8px

  &:hover
    color: #fff
    background: rgba(255, 255, 255, 0.1)
    transform: translateY(-2px)

/* ドット装飾（カテゴリカラーと連動） */
.dot
  width: 6px
  height: 6px
  border-radius: 50%
  margin-right: 10px
  display: inline-block

.item-world .dot
  background-color: #4caf50 // 緑
.item-avatar .dot
  background-color: #e91e63 // ピンク

/* 区切り線（PCのみ） */
.divider
  width: 1px
  height: 16px
  background-color: rgba(255, 255, 255, 0.1)
  align-self: center
  margin: 0 4px

.opacity-10
  opacity: 0.1
</style>
