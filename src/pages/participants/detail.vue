<template>
  <div class="page-root">
    <div class="competition-detail-container">
      <section class="detail-hero d-flex align-center justify-center">
        <v-container>
          <div class="text-center hero-glass-box pa-8">
            <div class="text-overline gold-text mb-2 tracking-widest">
              {{ isEntry ? '— APPLICATIONS NOW OPEN —' : '— EVENT ARCHIVE —' }}
            </div>
            <h1 class="text-h2 font-weight-bold mb-4 serif-font">
              第{{ competition.count }}回 {{ competition.title }}
            </h1>
            <v-divider
              class="mx-auto mb-6 opacity-100"
              color="primary"
              :thickness="2"
              width="60"
            />
            <p class="text-h5 font-weight-light opacity-80 letter-spacing-1">
              {{ competition.year }} Season
            </p>
          </div>
        </v-container>
      </section>

      <v-container class="py-16 mt-n12 relative-top">

        <section v-if="!isEntry" class="section-spacer mb-16">
          <div class="d-flex align-center mb-10">
            <h2 class="text-h4 font-weight-bold serif-font mr-4">Winners Selection</h2>
            <v-divider class="opacity-20" />
          </div>

          <v-row justify="center">
            <v-col cols="12" md="8" lg="6" class="mb-8">
              <v-card class="winner-card bento-card text-center pa-10 border-gold-glow">
                <div class="winner-rank gold-text text-h6 tracking-widest mb-4">GRAND PRIZE (1ST)</div>
                <v-avatar size="200" class="mb-6 elevation-15 juror-avatar-wrapper">
                  <v-img src="https://picsum.photos/500/500?person=1" />
                </v-avatar>
                <h3 class="text-h3 serif-font mb-2">山田 太郎</h3>
                <p class="text-body-1 opacity-60 mb-6">Taro Yamada / Japan</p>
                <v-divider class="mx-auto mb-6" width="40" color="primary" />
                <v-btn variant="tonal" color="primary" rounded="pill" class="px-8">
                  PERFORMANCE VIDEO
                </v-btn>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="winner in otherWinners" :key="winner.rank" cols="12" md="6">
              <v-card class="winner-card bento-card pa-8 d-flex align-center">
                <v-avatar size="120" class="mr-6">
                  <v-img :src="winner.image" />
                </v-avatar>
                <div>
                  <div class="gold-text text-caption font-weight-bold">{{ winner.rankLabel }}</div>
                  <h4 class="text-h5 serif-font">{{ winner.name }}</h4>
                  <p class="text-caption opacity-60 mb-2">{{ winner.subName }}</p>
                  <v-btn variant="text" color="primary" density="compact" class="pa-0">View Profile</v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <v-row class="mb-12">
          <v-col cols="12" md="6">
            <v-card class="bento-card hover-lift pa-8 h-100 d-flex flex-column justify-center">
              <v-icon class="mb-4" color="primary" :icon="mdiFileDocumentOutline" size="40" />
              <h2 class="text-h5 font-weight-bold mb-3">応募要項</h2>
              <p class="text-body-1 opacity-70 mb-6">参加資格、演奏曲目、審査方法などの詳細をご確認いただけます。</p>
              <v-btn
                v-if="isEntry"
                class="action-btn"
                color="primary"
                rounded="pill"
                size="large"
                to="#"
                variant="outlined"
              >
                VIEW GUIDELINES
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="bento-card hover-lift pa-8 h-100 d-flex flex-column justify-center">
              <v-icon class="mb-4" color="primary" :icon="mdiGavel" size="40" />
              <h2 class="text-h5 font-weight-bold mb-3">コンクール規約</h2>
              <p class="text-body-1 opacity-70 mb-6">著作権、個人情報の取り扱い、注意事項等の法的情報です。</p>
              <v-btn
                v-if="isEntry"
                class="action-btn"
                color="primary"
                rounded="pill"
                size="large"
                variant="outlined"
              >
                TERMS & CONDITIONS
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <section class="section-spacer mb-16">
          <div class="d-flex align-center mb-10">
            <h2 class="text-h4 font-weight-bold serif-font mr-4">Jurors</h2>
            <v-divider class="opacity-20" />
          </div>
          <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
              sm="6"
            >
              <v-card class="juror-card text-center pa-8 bg-transparent" flat>
                <div class="juror-avatar-wrapper mb-6">
                  <v-avatar class="elevation-10" size="160">
                    <v-img src="https://picsum.photos/400/400?people" />
                  </v-avatar>
                </div>
                <div class="text-h6 gold-text mb-1 font-weight-bold">審査員氏名</div>
                <div class="text-caption opacity-50 uppercase tracking-widest">Pianist / Professor</div>
                <v-btn class="mt-4" color="primary" density="compact" variant="text">Read Bio</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <v-card class="ticket-card pa-10 mb-16 text-center border-gold-gradient">
          <v-row align="center">
            <v-col class="text-md-left" cols="12" md="8">
              <h2 class="text-h4 font-weight-bold mb-3 serif-font">Tickets & Venue</h2>
              <p class="text-h6 font-weight-light opacity-80">
                入場料金：全席指定 3,000円 <span class="mx-2">|</span> 開場 13:00 / 開演 14:00
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                block
                class="elevation-4"
                color="primary"
                rounded="pill"
                size="x-large"
              >
                BUY TICKETS
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <section class="section-spacer text-center py-10">
          <p class="text-overline opacity-50 mb-8 tracking-widest">OFFICIAL SPONSORS</p>
          <div class="sponsor-grid ga-10">
            <v-img
              v-for="n in 5"
              :key="n"
              class="sponsor-logo"
              src="https://picsum.photos/200/80?grayscale"
              width="140"
            />
          </div>
        </section>

        <div v-if="isEntry" class="text-center mt-16 pt-10">
          <v-btn
            class="entry-final-btn px-16 py-8"
            color="primary"
            elevation="12"
            rounded="pill"
            size="x-large"
          >
            APPLY NOW
          </v-btn>
          <p class="text-caption mt-6 opacity-40">締切：2026年3月31日まで</p>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    mdiFileDocumentOutline,
    mdiGavel,
  } from '@mdi/js'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const isEntry = computed(() => route.query.stts === 'entry')

  const competition = {
    count: '24',
    title: '湘南国際ピアノコンクール',
    year: '2026',
  }

  const otherWinners = [
    {
      rank: 2,
      rankLabel: '2ND PRIZE',
      name: 'Sarah Jenkins',
      subName: 'United Kingdom',
      image: 'https://picsum.photos/400/400?person=2',
    },
    {
      rank: 3,
      rankLabel: '3RD PRIZE',
      name: 'Michael Chen',
      subName: 'USA',
      image: 'https://picsum.photos/400/400?person=3',
    },
  ]
</script>

<style scoped lang="sass">
.serif-font
  font-family: 'Playfair Display', 'Noto Serif JP', serif

.detail-hero
  height: 65vh
  background: linear-gradient(rgba(0,0,0,0.5), #0a0a0a), url('https://picsum.photos/1600/900?piano')
  background-size: cover
  background-position: center
  background-attachment: fixed

.hero-glass-box
  background: rgba(255, 255, 255, 0.03)
  backdrop-filter: blur(8px)
  border: 1px solid rgba(255, 255, 255, 0.05)
  border-radius: 20px

.hero-divider
  width: 60px
  height: 2px
  background: #D4AF37

.relative-top
  position: relative
  z-index: 2

.hover-lift
  transition: transform 0.3s ease, box-shadow 0.3s ease
  &:hover
    transform: translateY(-8px)
    box-shadow: 0 15px 30px rgba(0,0,0,0.4) !important

.border-gold-gradient
  border: 1px solid transparent
  background: linear-gradient(#111, #111) padding-box, linear-gradient(45deg, #D4AF37, #8A6E2F) border-box
  border-radius: 24px

.juror-avatar-wrapper
  position: relative
  display: inline-block
  &::after
    content: ''
    position: absolute
    inset: -5px
    border: 1px solid rgba(212, 175, 55, 0.3)
    border-radius: 50%
    transition: transform 0.5s ease

.juror-card:hover .juror-avatar-wrapper::after
  transform: scale(1.1)

.sponsor-grid
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center

.sponsor-logo
  filter: grayscale(1) brightness(2)
  opacity: 0.4
  transition: all 0.4s ease
  &:hover
    opacity: 1
    filter: grayscale(0) brightness(1)

.entry-final-btn
  letter-spacing: 3px
  font-weight: 700
  background: linear-gradient(45deg, #D4AF37, #f1d57a) !important
  color: #000 !important

.gold-gradient-line
  border-image: linear-gradient(to right, transparent, #D4AF37, transparent) 1
  opacity: 1
</style>
