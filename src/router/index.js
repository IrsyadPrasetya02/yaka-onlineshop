import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import AboutUs from '@/views/AboutUs.vue'
import LoginCust from '@/views/LoginCust.vue'
import SignUp from '@/views/SignUp.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import DetailProduk from '@/views/DetailProduk.vue'

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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/Checkout.vue')
  },
  {
    path: '/detail-produk',
    name: 'DetailProduk',
    component: () => import('@/views/DetailProduk.vue')
  },
  {
    path: '/riwayat-pesanan',
    name: 'RiwayatPesanan',
    component: () => import('@/views/RiwayatPesanan.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router