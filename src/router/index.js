import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../components/mainpage.vue'
import visit from '../components/visit.vue'
import Patner from '../components/partner.vue'
import flagman from '../components/flagman.vue'
import catalogue from '../components/catalogue.vue'
import cart from '../components/cart.vue'
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
  {
    path: '/components/flagman.vue',
    name: 'flagman',
    component: flagman
  },
  {
    path: '/components/catalogue.vue',
    name: 'catalogue',
    component: catalogue
  },
  {
    path: '/components/cart.vue',
    name: 'cart',
    component: cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
