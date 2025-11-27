<template>
  <div class="fixed inset-0 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6">
      <!-- Header -->
      <div class="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-.426 1.002-.426 1.428 0l1.58 1.58c1.495 1.495 3.688 1.495 5.183 0a3.5 3.5 0 00-4.95-4.95c-1.495 1.495-3.688 1.495-5.183 0L7.325 7.317z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11.5a3.5 3.5 0 01-5 0m5 0a3.5 3.5 0 015 0v6.5a3.5 3.5 0 01-5 0V11.5zm-10 0a3.5 3.5 0 015 0v6.5a3.5 3.5 0 01-5 0V11.5z" />
        </svg>
        <h2 class="text-lg font-semibold text-gray-800">Varian Produk - Dimsum Mental</h2>
      </div>

      <!-- Daftar Varian -->
      <div class="mb-6">
        <h3 class="flex items-center text-sm font-medium text-gray-700 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          Daftar Varian ({{ variants.length }})
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(variant, index) in variants" :key="index" class="bg-gray-100 rounded-lg p-4 flex justify-between items-start">
            <div>
              <div class="font-medium text-gray-800">{{ variant.name }}</div>
              <div class="flex items-center mt-2 text-orange-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rp. {{ formatCurrency(variant.price) }}
              </div>
              <div class="flex items-center mt-1 text-orange-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v14l-8 4V7l8 4z" />
                </svg>
                Stok : {{ variant.stock }}
              </div>
            </div>
            <div class="flex space-x-2">
              <button @click="editVariant(index)" class="text-gray-500 hover:text-blue-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button @click="deleteVariant(index)" class="text-red-500 hover:text-red-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A1 1 0 0117.133 21H6.867A1 1 0 016 19.858L5.133 7.714A1 1 0 016 7h12a1 1 0 011 1.142z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tambah Varian Baru -->
      <div class="border-t pt-6">
        <h3 class="flex items-center text-sm font-medium text-gray-700 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tambah Varian Baru
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Varian *</label>
            <input v-model="newVariant.name" type="text" placeholder="Contoh : Ukuran L, Merah, dll" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Harga</label>
            <input v-model="newVariant.price" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Stok</label>
            <input v-model="newVariant.stock" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
          </div>
        </div>

        <div class="flex justify-between">
          <button @click="addVariant" class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Tambah Varian</button>
          <button @click="$emit('close')" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">Tutup</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props untuk menerima data dari parent jika perlu
defineProps({
  // bisa ditambahkan jika perlu menerima data dari luar
});

// Emit untuk menutup popup
const emit = defineEmits(['close']);

// Data varian contoh
const variants = ref([
  { name: 'Mini (3pcs)', price: 13000, stock: 5 },
  { name: 'Medium (6pcs)', price: 25000, stock: 4 },
  { name: 'Party (16pcs)', price: 70000, stock: 3 }
]);

// Data untuk input varian baru
const newVariant = ref({
  name: '',
  price: 0,
  stock: 0
});

// Fungsi format currency
const formatCurrency = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Fungsi tambah varian
const addVariant = () => {
  if (!newVariant.value.name.trim()) {
    alert("Nama varian wajib diisi!");
    return;
  }
  variants.value.push({ ...newVariant.value });
  // Reset form
  newVariant.value = { name: '', price: 0, stock: 0 };
};

// Fungsi edit varian (contoh: buka modal edit)
const editVariant = (index) => {
  const variant = variants.value[index];
  alert(`Edit varian: ${variant.name}\nHarga: Rp. ${formatCurrency(variant.price)}\nStok: ${variant.stock}`);
  // Di sini bisa dibuka modal edit atau redirect ke form edit
};

// Fungsi hapus varian
const deleteVariant = (index) => {
  if (confirm("Apakah Anda yakin ingin menghapus varian ini?")) {
    variants.value.splice(index, 1);
  }
};
</script>