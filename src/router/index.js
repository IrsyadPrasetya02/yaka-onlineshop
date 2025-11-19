import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import AboutUs from '@/views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/login',
    name: 'LoginCust',
    component: () => import('@/views/LoginCust.vue')
  },
  {
  path: '/signup',
  name: 'SignUp',
  component: () => import('@/views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router