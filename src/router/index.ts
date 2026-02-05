// Composables
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/pages/index.vue'),
      },
      {
        path: 'competitions/:id/participants',
        name: 'competitions-participants',
        component: () => import('@/pages/participants/detail.vue'),
      },
    ],
  },
]

const router = createRouter({
  // SSR(ビルド時)なら MemoryHistory、ブラウザなら WebHistory を使う
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
