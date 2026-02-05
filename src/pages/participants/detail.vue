<template>
  <div v-if="loading" class="d-flex align-center justify-center" style="height: 80vh;">
    <v-progress-circular indeterminate color="primary" size="64" />
  </div>
  <div v-else-if="competition" class="competition-detail">
    <section class="detail-hero d-flex align-center justify-center">
      <div class="text-center">
        <div class="text-overline gold-text mb-2">
          {{ isEntry ? 'APPLICATION OPEN' : 'ARCHIVE' }}
        </div>
          <h1 class="text-h2 font-weight-bold mb-4">
            第{{ competition.count }}回 {{ competition.title }}
          </h1>
        </div>
    </section>

    <v-container class="py-12">
      <v-card class="bento-card mb-8 pa-6 d-flex align-center justify-space-between">
        <div>
          <h2 class="text-h5 font-weight-bold mb-2">応募要項</h2>
          <p class="text-body-2 opacity-70">参加資格、演奏曲目、審査方法などの詳細</p>
        </div>
        <v-btn v-if="isEntry" class="hero-action-btn" to="/apply">
          申し込みフォームへ
        </v-btn>
      </v-card>

      <v-card class="bento-card mb-8 pa-6 d-flex align-center justify-space-between">
        <div>
          <h2 class="text-h5 font-weight-bold mb-2">コンクール規約</h2>
          <p class="text-body-2 opacity-70">著作権、個人情報の取り扱い、注意事項</p>
        </div>
        <v-btn
          v-if="isEntry"
          class="hero-action-btn px-8"
          color="primary"
          rounded="pill"
        >
          申し込み
        </v-btn>
      </v-card>

      <section class="section-spacer">
        <h2 class="section-title mb-8">審査委員会メンバー紹介</h2>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-card class="bento-card text-center pa-6">
              <v-avatar size="120" class="mb-4">
                <v-img src="https://picsum.photos/200/200?people"></v-img>
              </v-avatar>
              <div class="text-h6 gold-text">審査員氏名</div>
              <div class="text-caption opacity-60">肩書き / プロフィール</div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-card class="bento-card mb-8 pa-8 d-flex align-center justify-space-between border-gold">
        <div>
          <h2 class="text-h5 font-weight-bold mb-2">ご来場の方へ</h2>
          <p class="text-body-2 opacity-70">入場料金：全席指定 3,000円 / 開場 13:00</p>
        </div>
        <v-btn
          variant="outlined"
          class="view-more-btn px-8"
          rounded="pill"
        >
          詳細ボタン
        </v-btn>
      </v-card>

      <section class="section-spacer text-center">
        <h2 class="section-title mb-8">スポンサー & 協賛</h2>
        <div class="d-flex flex-wrap justify-center ga-6">
          <v-img
            v-for="n in 4"
            :key="n"
            src="https://picsum.photos/150/60?grayscale"
            width="150"
            contain
            class="opacity-50 hover-opacity-100 transition-smooth"
          />
        </div>
      </section>

      <div v-if="isEntry" class="text-center mt-12">
        <v-btn
          size="x-large"
          color="primary"
          class="hero-action-btn px-16"
          rounded="pill"
        >
          申し込み
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mdiArrowRight } from '@mdi/js'

const route = useRoute()
const competitionId = route.params.id // URLからIDを取得

// コンクール詳細データの初期状態
interface Competition {
  id: string
  count: string
  title: string
  year: string
  status: 'entry' | 'archived' | 'ongoing' // ステータスを定義
  description?: string
}

const competition = ref<Competition | null>(null)
const loading = ref(true)

// APIからデータを取得する関数 (VPS上のエンドポイントを想定)
async function fetchCompetitionDetail() {
  loading.value = true
  try {
    // 実際には axios.get(`/api/competitions/${competitionId}`) など
    // ここではシミュレーション
    await new Promise(resolve => setTimeout(resolve, 800))
    
    competition.value = {
      id: String(competitionId),
      count: '24',
      title: '湘南国際ピアノコンクール',
      year: '2026',
      status: 'entry' // APIから受け取った値
    }
  } catch (error) {
    console.error('データの取得に失敗しました', error)
  } finally {
    loading.value = false
  }
}

// 申込中かどうかを判定する算出プロパティ
const isEntry = computed(() => competition.value?.status === 'entry')

onMounted(() => {
  fetchCompetitionDetail()
})
</script>

<style scoped lang="sass">
.detail-hero
  height: 50vh
  background: linear-gradient(rgba(0,0,0,0.6), #0a0a0a), url('https://picsum.photos/1200/600?music')
  background-size: cover
  background-position: center

.border-gold
  border: 1px solid rgba(212, 175, 55, 0.3) !important

.hover-opacity-100:hover
  opacity: 1 !important
</style>
