import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../components/mainpage.vue'

const routes = [
  {
    path: '/components/mainpage.vue',
    name: 'Mainpage',
    component: Mainpage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
