<script setup>
import { ref, onMounted, inject } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import NewArrivals from '@/components/NewArrivals.vue'
import Footer from '@/components/Footer.vue'

// axios dari provide (main.js)
const axios = inject('axios')

// State
const homeData = ref(null)
const products = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch semua data
onMounted(async () => {
  try {
    // Ambil data home
    const resHome = await axios.get('http://localhost:8000/api/home')
    homeData.value = resHome.data

    // Ambil produk
    const resProducts = await axios.get('http://localhost:8000/api/products')
    products.value = resProducts.data.data ?? resProducts.data
  } catch (err) {
    error.value = 'Failed to load home data'
    console.error('Home error:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>

    <main class="flex-grow">
      <HeroBanner/>

      <!-- Produk dari API -->
      <NewArrivals :products="products" />
    </main>

    <Footer/>
  </div>
</template>
