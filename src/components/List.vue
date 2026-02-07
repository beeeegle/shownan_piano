<template>
  <div class="common-card-section">
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card 
          class="bento-card hover-lift h-100 d-flex flex-column"
          @click="openDetail(item)"
        >
          <v-img
            :src="item.image || 'https://picsum.photos/400/250?piano'"
            height="200"
            cover
            class="align-end"
          >
            <div class="card-image-overlay pa-4">
              <div class="text-caption gold-text font-weight-bold">{{ item.date }}</div>
            </div>
          </v-img>

          <v-card-text class="pa-6 flex-grow-1">
            <h3 class="text-h6 font-weight-bold mb-3 leading-tight line-clamp-2">
              {{ item.title }}
            </h3>
            <p class="text-body-2 opacity-60 line-clamp-3 leading-relaxed">
              {{ item.content }}
            </p>
          </v-card-text>

          <v-card-actions class="px-6 pb-6">
            <span class="text-caption gold-text font-weight-bold tracking-widest">READ MORE</span>
            <v-spacer />
            <v-icon :icon="mdiArrowRight" size="small" color="primary" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog 
      v-model="dialog" 
      max-width="800" 
      transition="dialog-bottom-transition"
      class="glass-dialog"
    >
      <v-card class="glass-content pa-8 pa-md-12">
        <div class="d-flex justify-end">
          <v-btn :icon="mdiClose" variant="text" @click="dialog = false" />
        </div>

        <div class="text-overline gold-text mb-2">{{ selectedItem?.date }}</div>
        <h2 class="text-h3 font-weight-bold mb-6 serif-font">{{ selectedItem?.title }}</h2>
        
        <v-divider class="mb-8 white-divider" />

        <div class="text-body-1 leading-loose mb-10 text-white">
          <div style="white-space: pre-wrap;">{{ selectedItem?.content }}</div>
        </div>

        <div class="text-center">
          <v-btn
            color="primary"
            variant="flat"
            rounded="pill"
            class="px-12 py-6 font-weight-bold"
            @click="dialog = false"
          >
            CLOSE
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiArrowRight, mdiClose } from '@mdi/js'

defineProps<{
  items: {
    date: string
    title: string
    content: string
    image?: string
  }[]
}>()

const dialog = ref(false)
const selectedItem = ref<any>(null)

const openDetail = (item: any) => {
  selectedItem.value = item
  dialog.value = true
}
</script>

<style scoped lang="sass">
// ピネアル風：カードのホバーエフェクト
.hover-lift
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease
  &:hover
    transform: translateY(-10px)
    box-shadow: 0 20px 40px rgba(0,0,0,0.5) !important
    cursor: pointer

// 画像のグラデーションオーバーレイ
.card-image-overlay
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)
  width: 100%

// テキストの省略表示（3行以上は...にする）
.line-clamp-2
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden

.line-clamp-3
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical
  overflow: hidden

.modal-glass
  background: rgba(18, 18, 18, 0.95) !important
  backdrop-filter: blur(25px)
  border: 1px solid rgba(255, 255, 255, 0.05) !important

.leading-loose
  line-height: 2.0

// 1. モーダル自体の背景（オーバーレイ）をぼかす場合
// Vuetifyのグローバルなオーバーレイに干渉せず、このモーダル専用に設定
:deep(.v-overlay__scrim)
  backdrop-filter: blur(8px) // 背後のコンテンツをぼかす
  background: rgba(0, 0, 0, 0.4) !important // 暗さの調整

// 2. カード（モーダル本体）をガラス質感にする
.glass-content
  background: rgba(255, 255, 255, 0.05) !important // 極めて薄い白
  backdrop-filter: blur(20px) saturate(180%) // カード内側を通したボケ
  -webkit-backdrop-filter: blur(20px) saturate(180%)
  border: 1px solid rgba(255, 255, 255, 0.1) !important // ガラスの縁の反射
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8) !important
  border-radius: 24px !important
  color: #fff

// 装飾用
.white-divider
  border-color: rgba(255, 255, 255, 0.1) !important

.leading-loose
  line-height: 2.0
  letter-spacing: 0.05em

// 1. モーダルの背後（画面全体）をぼかす設定
// :deep() を使うことで、Vuetifyが動的に生成する外側の要素を強制的に装飾します
:deep(.v-overlay__scrim)
  backdrop-filter: blur(10px) !important // 背後のページをぼかす
  background: rgba(0, 0, 0, 0.5) !important // 暗さの調整（ボケを際立たせる）
  opacity: 1 !important // Vuetifyのデフォルト透過を上書き

// 2. モーダル本体（カード）のグラスモーフィズム
.modal-glass
  background: rgba(255, 255, 255, 0.03) !important // 非常に薄い白
  backdrop-filter: blur(25px) saturate(150%) // カード内側をさらに深くぼかす
  -webkit-backdrop-filter: blur(25px) saturate(150%)
  border: 1px solid rgba(255, 255, 255, 0.1) !important // ガラスの縁取り
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7) !important
  border-radius: 32px !important
  
// コンテンツの読みやすさを確保
.serif-font
  color: #FFFFFF
  text-shadow: 0 2px 10px rgba(0,0,0,0.3)

.gold-text
  color: #D4AF37
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))
</style>
