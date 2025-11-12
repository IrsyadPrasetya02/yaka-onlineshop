<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="pt-5">
      <!-- Page Header -->
      <div class="bg-white pt-8 pb-6">
        <div class="max-w-[1400px] mx-auto px-4">
          <h1 class="text-center text-3xl md:text-4xl font-bold tracking-wider krona-one">
            SHOP
          </h1>
        </div>
      </div>

      <div class="max-w-[1400px] mx-auto px-4 pb-8">
        <div class="flex gap-6">
          <!-- Sidebar Filter -->
          <div class="w-[280px] flex-shrink-0">
            <div class="bg-white rounded-lg p-6 sticky top-24" style="box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);">
              <!-- Filter Header -->
              <div class="mb-6">
                <h2 class="text-lg font-semibold text-gray-900">Filter Pencarian</h2>
              </div>

              <!-- Kategori Filter -->
              <div class="mb-6">
                <h3 class="font-medium text-gray-900 mb-3">Kategori</h3>
                <div class="border-b border-gray-200 mb-4"></div>
                <div class="space-y-3">
                  <label 
                    v-for="kategori in semuaKategori" 
                    :key="kategori"
                    class="flex items-center cursor-pointer"
                  >
                    <input 
                      type="checkbox" 
                      :value="kategori"
                      v-model="tempFilterKategori"
                      class="rounded border-gray-300 text-black focus:ring-black accent-black"
                    >
                    <span class="ml-3 text-sm text-gray-700">{{ kategori }}</span>
                  </label>
                </div>
              </div>

              <!-- Harga Filter -->
              <div class="mb-6">
                <h3 class="font-medium text-gray-900 mb-3">Harga</h3>
                <div class="border-b border-gray-200 mb-4"></div>
                <div class="space-y-3">
                  <div class="flex gap-2 items-center">
                    <input 
                      type="number" 
                      v-model.number="tempHargaMin"
                      placeholder="Min"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-black focus:border-black"
                    >
                    <span class="text-gray-500">-</span>
                    <input 
                      type="number" 
                      v-model.number="tempHargaMax"
                      placeholder="Max"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-black focus:border-black"
                    >
                  </div>
                </div>
              </div>

              <!-- Stok Filter -->
              <div class="mb-6">
                <h3 class="font-medium text-gray-900 mb-3">Stok</h3>
                <div class="border-b border-gray-200 mb-4"></div>
                <label class="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    v-model="tempHanyaTersedia"
                    class="rounded border-gray-300 text-black focus:ring-black accent-black"
                  >
                  <span class="ml-3 text-sm text-gray-700">Tersedia Stok</span>
                </label>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3 pt-4 border-t border-gray-200">
                <!-- Tombol Reset Filter -->
                <button 
                  @click="resetFilters" 
                  class="w-full px-4 py-2.5 bg-white text-black border border-black rounded-md hover:bg-gray-100 text-sm font-semibold transition-colors"
                >
                  Reset Filter
                </button>

                <!-- Tombol Terapkan Filter -->
                <button 
                  @click="applyFilters" 
                  class="w-full px-4 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 text-sm font-semibold transition-colors"
                >
                  Terapkan Filter
                </button>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="flex-1">
            <!-- Toolbar -->
            <div class="flex justify-between items-center mb-6">
              <!-- Results Count -->
              <p class="text-gray-600 text-sm">
                Menampilkan {{ produkTersaring.length }} dari {{ produkData.length }} produk
              </p>

              <!-- Sort Dropdown KUSTOM BARU -->
              <div class="relative w-full max-w-[240px]" ref="dropdownRef">
                <button 
                  @click="isDropdownOpen = !isDropdownOpen"
                  type="button"
                  class="relative w-full appearance-none bg-white border border-gray-300 rounded-lg px-5 py-2.5 pr-12 text-sm font-medium text-left focus:outline-none focus:ring-2 focus:ring-black focus:border-black cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span class="block truncate">{{ selectedSortLabel }}</span>
                  <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-800">
                    <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <!-- Dropdown Menu -->
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div 
                    v-if="isDropdownOpen"
                    class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden origin-top"
                  >
                    <ul class="py-1">
                      <li 
                        v-for="option in sortOptions" 
                        :key="option.value"
                        @click="selectSort(option.value)"
                        class="px-5 py-2.5 text-sm text-gray-900 cursor-pointer hover:bg-black hover:text-white transition-colors duration-150"
                        :class="{ 'font-semibold': sortBy === option.value }"
                      >
                        {{ option.label }}
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
              <!-- AKHIR Sort Dropdown KUSTOM BARU -->

            </div>

            <!-- Products Grid -->
            <div v-if="produkTersaring.length > 0" class="grid grid-cols-4 gap-4">
              <CardProduk 
                v-for="produk in produkTersaring" 
                :key="produk.id" 
                :produk="produk" 
              />
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
              <div class="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Produk tidak ditemukan</h3>
              <p class="text-gray-600 mb-4">Coba ubah filter pencarian Anda</p>
              <button 
                @click="resetFilters"
                class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CardProduk from '@/components/CardProduk.vue'
import produkData from '@/data/Produk.js'

// Filter states - Temporary (before apply)
const tempFilterKategori = ref([])
const tempHargaMin = ref(null)
const tempHargaMax = ref(null)
const tempHanyaTersedia = ref(false)

// Filter states - Applied
const filterKategori = ref([])
const hargaMin = ref(null)
const hargaMax = ref(null)
const hanyaTersedia = ref(false)

// --- Logika Dropdown Urutkan ---
const sortBy = ref('terbaru')
const isDropdownOpen = ref(false)
const dropdownRef = ref(null) // Referensi ke elemen dropdown

// Opsi untuk dropdown
const sortOptions = ref([
  { value: 'terbaru', label: 'Urutkan: Terbaru' },
  { value: 'termurah', label: 'Urutkan: Termurah' },
  { value: 'termahal', label: 'Urutkan: Termahal' },
  { value: 'terlaris', label: 'Urutkan: Terlaris' },
  { value: 'rating', label: 'Urutkan: Rating Tertinggi' },
])

// Label yang ditampilkan di tombol dropdown
const selectedSortLabel = computed(() => {
  return sortOptions.value.find(option => option.value === sortBy.value)?.label || 'Urutkan'
})

// Fungsi untuk memilih opsi sort
const selectSort = (value) => {
  sortBy.value = value
  isDropdownOpen.value = false // Tutup dropdown setelah memilih
}

// Fungsi untuk menutup dropdown jika klik di luar
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}
// --- Akhir Logika Dropdown ---


// Get all unique categories
const semuaKategori = computed(() => {
  const categories = [...new Set(produkData.map(produk => produk.kategori))]
  return categories.sort()
})

// Filtered products
const produkTersaring = computed(() => {
  let filtered = [...produkData]

  // Filter by kategori
  if (filterKategori.value.length > 0) {
    filtered = filtered.filter(produk => 
      filterKategori.value.includes(produk.kategori)
    )
  }

  // Filter by harga range
  if (hargaMin.value !== null && hargaMin.value !== '') {
    filtered = filtered.filter(produk => produk.harga >= hargaMin.value)
  }
  if (hargaMax.value !== null && hargaMax.value !== '') {
    filtered = filtered.filter(produk => produk.harga <= hargaMax.value)
  }

  // Filter by stok
  if (hanyaTersedia.value) {
    filtered = filtered.filter(produk => produk.stok > 0)
  }

  // Sort products
  switch (sortBy.value) {
    case 'termurah':
      filtered.sort((a, b) => a.harga - b.harga)
      break
    case 'termahal':
      filtered.sort((a, b) => b.harga - a.harga)
      break
    case 'terlaris':
      filtered.sort((a, b) => b.terjual - a.terjual)
      break
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case 'terbaru':
    default:
      filtered.sort((a, b) => b.id - a.id)
      break
  }

  return filtered
})

// Reset all filters
const resetFilters = () => {
  // Reset temporary filters
  tempFilterKategori.value = []
  tempHargaMin.value = null
  tempHargaMax.value = null
  tempHanyaTersedia.value = false
  
  // Reset applied filters
  filterKategori.value = []
  hargaMin.value = null
  hargaMax.value = null
  hanyaTersedia.value = false
  sortBy.value = 'terbaru'
}

// Apply filters
const applyFilters = () => {
  // Copy temporary filters to applied filters
  filterKategori.value = [...tempFilterKategori.value]
  hargaMin.value = tempHargaMin.value
  hargaMax.value = tempHargaMax.value
  hanyaTersedia.value = tempHanyaTersedia.value
  
  console.log('Filter diterapkan')
}

// Initialize
onMounted(() => {
  // Tambahkan event listener untuk klik di luar dropdown
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  // Hapus event listener saat komponen dihancurkan
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Import Krona One font if not already imported globally */
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.krona-one {
  font-family: 'Krona One', sans-serif;
}

/* Custom checkbox styling for black accent */
input[type="checkbox"]:checked {
  background-color: black;
  border-color: black;
}

input[type="checkbox"]:focus {
  ring-color: black;
  border-color: black;
}

/* Hapus styling select option yang lama, karena sudah tidak dipakai */

/* Kelas untuk rotasi chevron */
.rotate-180 {
  transform: rotate(180deg);
}
</style>