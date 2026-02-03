/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
// 2. SVG用のアダプターとエイリアス設定をインポート
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: true, // ここを true にすると Vuetify が自動で文字色を白系に調整します
        colors: {
          primary: '#D4AF37',   // ゴールド
          secondary: '#1A1A1B', // 墨色
          background: '#111111', // 背景を深い黒へ
          surface: '#1E1E1E',   // カードなどの表面色
          error: '#FF5252',
          info: '#94A3B8',
          success: '#4CAF50',
          warning: '#FFC107',
          // テキスト色を明示的に指定する場合
          'on-background': '#F8F9FA',
          'on-surface': '#F8F9FA',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
