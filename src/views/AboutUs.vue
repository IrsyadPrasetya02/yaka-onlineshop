<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8">About Us Page</h1>
        <p class="text-center text-gray-600">Halaman about us akan segera datang...</p>
        
        <!-- konten about us di sini -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>