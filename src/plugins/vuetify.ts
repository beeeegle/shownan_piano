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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: false,
        colors: {
          primary: '#D4AF37',   // 差し色のゴールド
          secondary: '#1A1A1B', // 墨色
          background: '#F8F9FA', // 背景の白
          surface: '#FFFFFF',
          info: '#94A3B8',
        },
      },
    },
  },
})
