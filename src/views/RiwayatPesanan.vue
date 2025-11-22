<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <Navbar />

    <!-- Content Container -->
    <div class="max-w-6xl mx-auto px-6 pt-10 pb-20">

      <!-- Title -->
      <h1 class="text-center text-lg font-semibold mb-8">Pesanan</h1>

      <!-- Top Section -->
      <div class="flex items-center justify-between mb-3">
        <p class="font-medium text-gray-700">Order Saya</p>

        <select
          v-model="selectedStatus"
          class="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none"
        >
          <option value="Semua">Semua Status</option>
          <option value="Dibayar">Dibayar</option>
          <option value="Belum Dibayar">Belum Dibayar</option>
        </select>
      </div>

      <!-- Order List -->
      <div 
        v-for="order in filteredOrders"
        :key="order.id"
        class="border-2 border-blue-400 rounded-lg p-5 mb-6"
      >

        <div class="flex items-start gap-4">
          <!-- Product Image -->
          <img 
            :src="order.image" 
            class="w-24 h-28 object-cover rounded"
          />

          <!-- Product Info -->
          <div class="flex-1">
            <p class="font-bold">{{ order.brand }}</p>
            <p class="text-gray-700 text-sm">{{ order.name }}</p>

            <p class="text-xs text-gray-500 mt-1">Ukuran : {{ order.ukuran }}</p>

            <p class="text-xs text-gray-500">Jumlah : {{ order.qty }}</p>
          </div>

          <!-- Status + Price + Button -->
          <div class="text-right w-40">
            <p class="text-sm font-semibold mb-1">{{ order.status }}</p>

            <p class="text-red-600 font-bold mb-3">
              Rp {{ formatNumber(order.price) }},-
            </p>

            <button
              class="bg-black text-white text-sm py-1.5 px-4 rounded hover:bg-gray-800"
            >
              {{ order.status === 'Belum Dibayar' ? 'Membayar' : 'Invoice' }}
            </button>
          </div>
        </div>

      </div>

    </div>

    <!-- Footer -->
    <footer class="bg-black text-white text-center py-8">
      <img src="@/assets/Images/YAKAputih.png" class="mx-auto w-28 mb-3" />
      <p class="text-sm">© 2025 YAKA Online Shop All rights reserved</p>
    </footer>
    
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { ref, computed } from "vue"

// Dummy data (nanti bisa ambil dari API)
const orders = ref([
  {
    id: 1,
    brand: "YAKA",
    name: "Yaka T-Shirt Rombongan Nyeni",
    ukuran: "M",
    qty: 1,
    price: 120000,
    status: "Belum Dibayar",
    image: "/produk1.jpg"
  },
  {
    id: 2,
    brand: "YAKA",
    name: "Yaka T-Shirt Rombongan Nyeni",
    ukuran: "L",
    qty: 1,
    price: 120000,
    status: "Dalam Pengiriman",
    image: "/produk2.jpg"
  },
  {
    id: 3,
    brand: "YAKA",
    name: "Yaka T-Shirt Rombongan Nyeni",
    ukuran: "XL",
    qty: 1,
    price: 120000,
    status: "Dibayar",
    image: "/produk3.jpg"
  }
])

const selectedStatus = ref("Semua")

// Filter berdasarkan dropdown
const filteredOrders = computed(() => {
  if (selectedStatus.value === "Semua") return orders.value
  return orders.value.filter(o =>
    o.status === selectedStatus.value
  )
})

// Format angka harga
const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
</script>

<style scoped>
</style>
