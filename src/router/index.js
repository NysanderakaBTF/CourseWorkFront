import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../components/mainpage.vue'
import visit from '../components/visit.vue'
import App from '../App.vue'
const routes = [
  {
    path: '/components/mainpage.vue',
    name: 'Mainpage',
    component: Mainpage
  },
  {
      path: '/components/visit.vue',
      name: 'visit',
      component: visit
  },
  {
      path: '/',
      name: 'App',
      component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
