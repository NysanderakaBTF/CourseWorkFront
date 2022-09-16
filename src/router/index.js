import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../components/mainpage.vue'
import visit from '../components/visit.vue'
import App from '../App.vue'
import Patner from '../components/partner.vue'
const routes = [
  {
    path: '/components/mainpage.vue',
    name: 'Mainpage',
    component: Mainpage,
    alias: '/'
  },
  {
      path: '/components/visit.vue',
      name: 'visit',
      component: visit
  },
  {
    path: '/components/partner.vue',
    name: 'Patner',
    component: Patner
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
