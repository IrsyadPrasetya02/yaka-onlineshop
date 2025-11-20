<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <HeroBanner />
      <!-- Kirim data produk dari API Laravel -->
      <NewArrivals :products="products" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import NewArrivals from '@/components/NewArrivals.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

// State untuk menyimpan data produk dari Laravel
const products = ref([])

// Fetch data dari API Laravel saat komponen di-mount
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/products') // URL API Laravel
    products.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data produk:', error)
  }
})
</script>
