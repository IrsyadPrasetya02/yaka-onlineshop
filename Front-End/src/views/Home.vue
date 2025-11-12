<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <HeroBanner />
      <NewArrivals />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import NewArrivals from '@/components/NewArrivals.vue'
import Footer from '@/components/Footer.vue'
</script>