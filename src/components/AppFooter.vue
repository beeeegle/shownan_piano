<template>
  <v-footer class="footer-root py-16">
    <v-container>
      <v-row class="mb-12">
        <v-col class="text-center text-md-left" cols="12" md="5">
          <div class="brand-footer mb-6">
            <h2 class="text-h5 font-weight-bold letter-spacing-2">SHONAN</h2>
            <p class="text-caption gold-text">International Music Competition</p>
          </div>
          <div class="contact-info text-body-2 opacity-70">
            <p class="mb-1">湘南国際音楽コンクール 事務局</p>
            <p class="mb-4">〒251-XXXX 神奈川県藤沢市湘南台 X-X-X</p>
            <div class="d-flex justify-center justify-md-start ga-4">
              <a class="social-icon" href="https://x.com/O_najimi_nasa" target="_blank">
                <v-icon :icon="mdiTwitter" size="20" />
              </a>
              <a class="social-icon" href="#">
                <v-icon icon="mdi-facebook" size="20" />
              </a>
              <a class="social-icon" href="#">
                <v-icon icon="mdi-instagram" size="20" />
              </a>
            </div>
          </div>
        </v-col>

        <v-spacer />

        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6" sm="4">
              <div class="footer-nav-title">ABOUT</div>
              <ul class="footer-nav-list">
                <li><router-link to="/about">開催趣旨</router-link></li>
                <li><router-link to="/jurors">審査員紹介</router-link></li>
                <li><router-link to="/history">過去の記録</router-link></li>
              </ul>
            </v-col>
            <v-col cols="6" sm="4">
              <div class="footer-nav-title">COMPETITION</div>
              <ul class="footer-nav-list">
                <li><router-link to="/news">新着情報</router-link></li>
                <li><router-link to="/application">応募要項</router-link></li>
                <li><router-link to="/schedule">日程・会場</router-link></li>
              </ul>
            </v-col>
            <v-col class="mt-6 mt-sm-0" cols="12" sm="4">
              <div class="footer-nav-title">SUPPORT</div>
              <ul class="footer-nav-list">
                <li><router-link to="/contact">お問い合わせ</router-link></li>
                <li><router-link to="/sponsors">協賛・寄付</router-link></li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="footer-divider mb-8" />

      <v-row align="center" class="text-caption opacity-50 flex-column flex-md-row no-gutters">
        <div class="mb-2 mb-md-0">
          &copy; {{ new Date().getFullYear() }} Shonan International Music Competition.
        </div>
        <v-spacer />
        <div class="d-flex ga-4">
          <a class="hover-white" href="/privacy">プライバシーポリシー</a>
          <a class="hover-white" href="/terms">利用規約</a>
        </div>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  import { mdiTwitter } from '@mdi/js'
</script>

<style scoped lang="sass">
// 変数（vuetify.tsと同期させるのがベスト）
$accent-gold: #D4AF37
$base-black: #111111
$transition-smooth: all 0.6s cubic-bezier(0.23, 1, 0.32, 1)
$ink-grey: rgba(255, 255, 255, 0.05)
$glass-border: rgba(255, 255, 255, 0.1)
$text-primary: #F8F9FA
$transition-smooth: all 0.6s cubic-bezier(0.23, 1, 0.32, 1)

.footer-root
  background-color: $base-black !important
  border-top: 1px solid rgba(255, 255, 255, 0.05)
  color: #fff !important

.brand-footer
  font-family: "Noto Serif JP", serif
  h2
    letter-spacing: 0.2em
  .gold-text
    color: $accent-gold
    letter-spacing: 0.1em

.footer-nav-title
  font-size: 0.75rem
  font-weight: 700
  letter-spacing: 0.1em
  color: $accent-gold
  margin-bottom: 20px

.footer-nav-list
  list-style: none
  padding: 0
  li
    margin-bottom: 12px
    a
      color: rgba(255, 255, 255, 0.6)
      text-decoration: none
      font-size: 0.85rem
      transition: color 0.3s ease
      &:hover
        color: #fff

.social-icon
  color: rgba(255, 255, 255, 0.5)
  transition: $transition-smooth
  &:hover
    color: $accent-gold
    transform: translateY(-3px)

.footer-divider
  border-color: rgba(255, 255, 255, 0.05) !important

.hover-white
  color: inherit
  text-decoration: none
  &:hover
    color: #fff
    text-decoration: underline

.opacity-70
  opacity: 0.7
.opacity-50
  opacity: 0.5
</style>
