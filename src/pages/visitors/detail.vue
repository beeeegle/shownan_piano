<template>
  <div class="page-root">
    <div class="competition-detail-container">
      <section class="detail-hero d-flex align-center justify-center">
        <v-container>
          <div class="text-center hero-glass-box pa-8">
            <div class="text-overline gold-text mb-2 tracking-widest">
              {{ isEventFinished ? '— EVENT ARCHIVE —' : '— NOW ON SALE —' }}
            </div>
            <h1 class="text-h2 font-weight-bold mb-4 serif-font">
              第{{ competition.count }}回 {{ competition.title }} <br>
              <span class="text-h4 mt-2 d-block">Final Concert</span>
            </h1>
            <v-divider class="mx-auto mb-6 opacity-100" color="primary" :thickness="2" width="60" />
            <p class="text-h5 font-weight-light opacity-80 letter-spacing-1">
              {{ competition.date }} @ {{ competition.venue }}
            </p>
          </div>
        </v-container>
      </section>

      <v-container class="py-16 mt-n12 relative-top">
        
        <v-card class="ticket-card pa-10 mb-16 border-gold-gradient overflow-hidden">
          <v-row align="center">
            <v-col cols="12" md="7">
              <h2 class="text-h4 font-weight-bold mb-4 serif-font">Tickets</h2>
              <div class="mb-6">
                <div class="d-flex justify-space-between mb-2">
                  <span class="opacity-70">全席指定（一般）</span>
                  <span class="font-weight-bold">¥3,000</span>
                </div>
                <div class="d-flex justify-space-between">
                  <span class="opacity-70">学生席（要学生証）</span>
                  <span class="font-weight-bold">¥1,500</span>
                </div>
              </div>
              <p class="text-body-2 opacity-60">※ 未就学児の入場はご遠慮いただいております。</p>
            </v-col>
            <v-col cols="12" md="5" class="text-center">
              <v-btn
                v-if="!isEventFinished"
                block
                size="x-large"
                color="primary"
                rounded="pill"
                class="elevation-8 py-8 mb-4"
              >
                <v-icon :icon="mdiTicketIcon" class="mr-2" />
                チケットを購入する
              </v-btn>
              <v-btn
                v-else
                block
                disabled
                size="x-large"
                variant="outlined"
                rounded="pill"
              >
                販売終了いたしました
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <section class="section-spacer mb-16">
          <div class="d-flex align-center mb-10">
            <h2 class="text-h4 font-weight-bold serif-font mr-4">Access</h2>
            <v-divider class="opacity-20" />
          </div>
          <v-row>
            <v-col cols="12" md="8">
              <v-card class="bento-card overflow-hidden" height="450">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.653457193214!2d139.4850395761917!3d35.33824334888252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184ed5d532942d%3A0x82bd847775c8252d!2z6Jek5rKi6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="bento-card pa-8 h-100">
                <h3 class="text-h5 font-weight-bold mb-4">藤沢市民会館（仮）</h3>
                <p class="text-body-1 opacity-80 mb-6">
                  〒251-0052 <br>
                  神奈川県藤沢市藤沢付近
                </p>
                <v-list bg-transparent density="compact" class="pa-0">
                  <v-list-item class="px-0">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiTrain" color="primary" class="mr-3" />
                    </template>
                    <v-list-item-subtitle>JR・小田急・江ノ電「藤沢駅」より徒歩圏内</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
                <v-btn
                  variant="outlined"
                  color="primary"
                  block
                  rounded="pill"
                  class="mt-8"
                  :href="competition.mapUrl"
                  target="_blank"
                >
                  Google Mapで見る
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <section class="section-spacer text-center py-10 mb-16">
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

        <section class="sns-share-section text-center py-12 border-top-thin">
          <h3 class="text-h6 mb-6 opacity-60 font-weight-light letter-spacing-2">SHARE THIS EVENT</h3>
          <div class="d-flex justify-center ga-4">
            <v-btn icon color="white" variant="outlined" class="hover-primary">
              <v-icon :icon="mdiTwitter" />
            </v-btn>
            <v-btn icon color="white" variant="outlined" class="hover-primary">
              <v-icon :icon="mdiFacebook" />
            </v-btn>
            <v-btn icon color="white" variant="outlined" class="hover-primary">
              <v-icon :icon="mdiShareVariant" />
            </v-btn>
          </div>
        </section>

      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  mdiTicketOutline,
  mdiMapMarker,
  mdiTrain,
  mdiTwitter,
  mdiFacebook,
  mdiShareVariant
} from '@mdi/js'
import { computed } from 'vue'

const isEventFinished = false // 終了フラグ

const competition = {
  count: '24',
  title: '湘南国際ピアノコンクール',
  date: '2026.04.15 (Wed)',
  venue: '湘南文化芸術ホール 大ホール'
}
</script>

<style scoped lang="sass">
/* 参加者用Detailの共通スタイルに加え、以下を追加 */

.border-top-thin
  border-top: 1px solid rgba(255, 255, 255, 0.1)

.map-placeholder
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/800/450?map')
  background-size: cover

.hover-primary:hover
  color: #D4AF37 !important
  border-color: #D4AF37 !important
  transform: translateY(-3px)
  transition: all 0.3s ease
</style>
