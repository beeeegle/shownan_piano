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
        name: 'ParticipantsDetail',
        component: () => import('@/pages/participants/detail.vue'),
      },
      {
        path: 'competitions/:id/visitors',
        name: 'VisitorsDetail',
        component: () => import('@/pages/visitors/detail.vue'),
      },
      {
        path: 'histories',
        name: 'histories',
        component: () => import('@/pages/list/history.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/list/news.vue'),
      },
      {
        path: 'schedules',
        name: 'schedules',
        component: () => import('@/pages/list/schedule.vue'),
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
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
})

export default router
