<template>
  <div class="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full" style="box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);">
    <!-- Image Container -->
    <div class="relative group">
      <img 
        :src="produk.gambar" 
        :alt="produk.nama" 
        class="w-full h-[254px] object-cover"
      />
      
      <!-- Cart Icon Button -->
      <button 
        @click="tambahKeKeranjang"
        class="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
        :disabled="produk.stok === 0"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>

      <!-- Stok Habis Badge -->
      <div v-if="produk.stok === 0" class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
        Stok Habis
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-3">
      <!-- Product Name -->
      <h3 class="text-gray-800 font-semibold text-sm mb-1 line-clamp-2">
        {{ produk.nama }}
      </h3>

      <!-- Product Price -->
      <p class="text-gray-900 font-normal text-base">
        Rp {{ formatHarga(produk.harga) }}
      </p>
    </div>

    <!-- Buy Button (Full Width) -->
    <div class="px-3 pb-3">
      <button 
        @click="beliSekarang"
        :disabled="produk.stok === 0"
        class="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {{ produk.stok === 0 ? 'Stok Habis' : 'Beli' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  produk: {
    type: Object,
    required: true
  }
})

// Format harga dengan titik pemisah ribuan
const formatHarga = (harga) => {
  return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// Fungsi tambah ke keranjang
const tambahKeKeranjang = () => {
  // TODO: Implementasi logika tambah ke keranjang
  // Untuk sementara hanya console.log
  console.log('Produk ditambahkan ke keranjang:', props.produk)
  
  // Nantinya bisa menggunakan Pinia/Vuex store atau localStorage
  // Contoh dengan localStorage (sementara tanpa login):
  // const keranjang = JSON.parse(localStorage.getItem('keranjang') || '[]')
  // keranjang.push(props.produk)
  // localStorage.setItem('keranjang', JSON.stringify(keranjang))
  
  alert(`${props.produk.nama} ditambahkan ke keranjang!`)
}

// Fungsi beli sekarang
const beliSekarang = () => {
  // TODO: Implementasi logika beli sekarang
  console.log('Beli sekarang:', props.produk)
  alert(`Membeli ${props.produk.nama}`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>