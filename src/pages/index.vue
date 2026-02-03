<template>
<section ref="heroRef" class="hero-section d-flex align-center justify-center">
    <div class="hero-content text-center">
      <div ref="countRef" class="text-overline gold-text mb-2">
        — 第{{ currentCompetition.count }}回 開催 —
      </div>

      <h1 ref="titleRef" class="text-h2 font-weight-bold mb-2">
        Shonan International
      </h1>
      <p ref="subtitleRef" class="text-h5 font-italic opacity-80 mb-10">
        Music Competition {{ currentCompetition.year }}
      </p>

      <div v-if="currentCompetition.active" ref="actionRef">
        <v-btn
          :to="`/competitions/${currentCompetition.id}`"
          color="primary"
          variant="outlined"
          size="x-large"
          rounded="pill"
          class="hero-action-btn px-10"
        >
          VIEW DETAILS
          <v-icon :icon="mdiArrowRight" end />
        </v-btn>
        <p class="text-caption mt-4 opacity-60">
          現在、本選へのエントリーを受け付けています
        </p>
      </div>
    </div>
  </section>

  <v-container class="py-12 main-container">
    <section class="section-spacer text-center">
      <v-row justify="center">
        <v-col cols="12" md="8" class="concept-text">
          <p>湘南国際音楽コンクールは、美しい日本・湘南地域を拠点に誕生した新しいクラシック音楽のコンクールです。</p>
          <p>若き才能を支え、芸術的な交流を促進し、世界中の音楽家たちをつなぐことを目指しています。</p>
          <p>音楽の力を共に分かち合いましょう。</p>
        </v-col>
      </v-row>
    </section>

    <section class="section-spacer">
      <h2 class="text-h4 font-weight-bold mb-8 text-center section-title">News</h2>
      <v-row ref="newsRef">
        <v-col cols="12" md="8">
          <v-card class="bento-card" height="400" hover image="https://picsum.photos/800/400?music=1">
            <v-card-title class="text-white">Latest News</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="bento-card mb-4" height="192" hover color="primary">
            <v-card-title>Important Notice</v-card-title>
            <v-card-text>応募要項を公開しました</v-card-text>
          </v-card>
          <v-card class="bento-card" height="192" hover color="secondary">
            <v-card-title>Media</v-card-title>
            <v-card-text>公式YouTubeチャンネル開設</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex justify-center mt-10">
        <v-btn
          to="/news"
          variant="outlined"
          color="primary"
          class="view-more-btn px-10"
          rounded="xl"
          size="large"
        >
          View more
          <v-icon :icon="mdiArrowRight" end />
        </v-btn>
      </div>
    </section>

    <section class="section-spacer" ref="scheduleRef">
      <h2 class="text-h4 font-weight-bold mb-8 text-center section-title">Schedule</h2>
      <v-card class="bento-card pa-6">
        <v-table class="bg-transparent text-white">
          <thead>
            <tr>
              <th class="text-left text-primary">DATE</th>
              <th class="text-left text-primary">EVENT</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in scheduleItems" :key="item.date">
              <td class="font-weight-bold">{{ item.date }}</td>
              <td>{{ item.event }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
      <div class="d-flex justify-center mt-10">
        <v-btn
          to="/news"
          variant="outlined"
          color="primary"
          class="view-more-btn px-10"
          rounded="xl"
          size="large"
        >
          View more
          <v-icon :icon="mdiArrowRight" end />
        </v-btn>
      </div>
    </section>

    <section class="section-spacer" ref="historyRef">
      <h2 class="text-h4 font-weight-bold mb-8 text-center section-title">History</h2>
      
      <v-row>
        <v-col v-for="h in historyCards" :key="h.year" cols="12" md="4">
          <v-card class="bento-card history-card" hover :to="`/history/${h.year}`">
            <v-img
              :src="h.image"
              height="200"
              cover
              class="align-end"
            >
              <v-card-title class="text-white bg-black-transition">{{ h.year }}</v-card-title>
            </v-img>
            
            <v-card-text class="pa-4">
              <div class="text-overline text-primary">第{{ h.count }}回大会</div>
              <div class="text-h6 font-weight-bold mb-2">{{ h.title }}</div>
              <div class="text-body-2 line-clamp">{{ h.desc }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex justify-center mt-10">
        <v-btn
          to="/history"
          variant="outlined"
          color="primary"
          class="view-more-btn px-10"
          rounded="xl"
          size="large"
        >
          View all history
          <v-icon :icon="mdiHistory" end />
        </v-btn>
      </div>
    </section>

    <section class="section-spacer" ref="contactRef">
      <h2 class="text-h4 font-weight-bold mb-8 text-center section-title">Contact</h2>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="bento-card pa-8">
            <v-form>
              <v-text-field label="Name" variant="outlined" color="primary"></v-text-field>
              <v-text-field label="Email" variant="outlined" color="primary"></v-text-field>
              <v-textarea label="Message" variant="outlined" color="primary"></v-textarea>
              <v-btn block color="primary" size="large" class="mt-4 font-weight-bold">Send Message</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script setup lang="ts">
  import {
    mdiArrowRight,
    mdiHistory,
  } from '@mdi/js'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMounted, ref } from 'vue'

  // GSAPプラグインの登録
  gsap.registerPlugin(ScrollTrigger)

  // --- 1. データ定義 (将来的にVPSのAPIから取得) ---
  const currentCompetition = ref({
    id: '2026-spring',
    count: '4',
    year: '2026',
    active: true,
  })

  const scheduleItems = [
    { date: '2026.11.01', event: 'Opening Ceremony & 1st Round' },
    { date: '2026.11.05', event: '2nd Round' },
    { date: '2026.11.10', event: 'Final Round' },
    { date: '2026.11.15', event: 'Winners Concert' },
  ]

  const historyCards = [
    {
      year: '2025', count: '3', title: '海風のセレナーデ',
      desc: '世界20カ国から才能が集結。湘南の空の下、新たな歴史が刻まれました。',
      image: 'https://picsum.photos/400/300?music=10',
    },
    {
      year: '2024', count: '2', title: '輝く才能の共演',
      desc: '若きピアニストたちの情熱がホールを包み込み、満員御礼の感動を呼びました。',
      image: 'https://picsum.photos/400/300?music=11',
    },
    {
      year: '2023', count: '1', title: '創設記念コンクール',
      desc: '湘南国際音楽コンクールの第一歩。ここから多くの音楽家が羽ばたいていきました。',
      image: 'https://picsum.photos/400/300?music=12',
    },
  ]

  // --- 2. Template Refs (DOM要素への参照) ---
  const heroRef = ref<HTMLElement | null>(null)
  const countRef = ref<HTMLElement | null>(null)
  const titleRef = ref<HTMLElement | null>(null)
  const subtitleRef = ref<HTMLElement | null>(null)
  const actionRef = ref<HTMLElement | null>(null)

  // --- 3. アニメーションロジック ---
  onMounted(() => {
    // A. Hero Section タイムライン
    const heroTl = gsap.timeline()

    heroTl.from([countRef.value, titleRef.value, subtitleRef.value], {
      y: 40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out',
    })
      .from(actionRef.value, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      }, '-=0.8')

    // B. ScrollTriggerによるセクション一括制御
    const sections = gsap.utils.toArray('.section-spacer')
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power2.out"
      })
    })
  })
</script>

<style scoped lang="sass">
// =============================================================================
// 1. 変数定義 (Constants)
// =============================================================================
$accent-gold: #D4AF37
$base-black: #0a0a0a
$ink-grey: rgba(255, 255, 255, 0.05)
$glass-border: rgba(255, 255, 255, 0.1)
$text-primary: #F8F9FA
$transition-smooth: all 0.6s cubic-bezier(0.23, 1, 0.32, 1)

// =============================================================================
// 2. ミックスイン (Reusable Logic)
// =============================================================================
@mixin glass-effect($blur: 16px, $saturate: 180%)
  background: $ink-grey !important
  backdrop-filter: blur($blur) saturate($saturate)
  border: 1px solid $glass-border !important
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4)

@mixin serif-font
  font-family: "Noto Serif JP", serif
  letter-spacing: 0.1em

// =============================================================================
// 3. 共通・ベーススタイル
// =============================================================================
.section-spacer
  margin-bottom: 120px

.section-title
  @include serif-font
  color: $accent-gold
  text-align: center

.gold-text
  color: $accent-gold
  letter-spacing: 0.3em !important

// =============================================================================
// 4. コンポーネント別スタイル
// =============================================================================

// --- Hero Section ---
.hero-section
  position: relative
  height: 90vh
  overflow: hidden
  background: radial-gradient(circle at center, rgba(20, 20, 20, 0) 0%, $base-black 100%)
  color: #FFFFFF
  
  // 高級感を出す微細なノイズ
  &::before
    content: ''
    position: absolute
    inset: 0
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E")
    pointer-events: none

  h1
    @include serif-font
    background: linear-gradient(180deg, $text-primary 0%, rgba($text-primary, 0.6) 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

// --- Bento & Cards ---
.bento-card
  @include glass-effect
  border-radius: 24px !important
  transition: $transition-smooth
  overflow: hidden
  position: relative

  // ホバー時の光彩演出
  &::before
    content: ''
    position: absolute
    inset: 0
    background: radial-gradient(circle at top left, rgba($accent-gold, 0.1), transparent)
    opacity: 0
    transition: opacity 0.4s ease

  &:hover
    transform: translateY(-10px) scale(1.01)
    border-color: rgba($accent-gold, 0.4) !important
    &::before
      opacity: 1
    :deep(.v-card-title)
      color: $accent-gold

  :deep(.v-card-title), :deep(.v-card-text)
    color: $text-primary !important
    transition: color 0.4s ease

// --- Buttons ---
.hero-action-btn, .view-more-btn
  border-width: 1px !important
  letter-spacing: 0.15em
  text-transform: none
  transition: $transition-smooth
  background: rgba($accent-gold, 0.05) !important
  backdrop-filter: blur(4px)
  
  &:hover
    background-color: rgba($accent-gold, 0.15) !important
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4)
    transform: translateY(-2px)

// --- Utils ---
.line-clamp
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  opacity: 0.8

.concept-text
  font-size: 1.1rem
  line-height: 2.2
  letter-spacing: 0.05em
  color: $text-primary
</style>
