import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/user/AuthView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/profile',
      name: 'home',
      component: ProfileView,
    },
    {
      path: '/user/authentication',
      name: 'authentication',
      component: AuthView,
    },
  ],
})

export default router
