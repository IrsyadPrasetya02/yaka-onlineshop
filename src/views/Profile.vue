<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar />

    <!-- Page Content -->
    <div class="max-w-7xl mx-auto px-6 py-8">
      <h1 class="text-xl font-bold text-gray-800 mb-6">Informasi Pribadi</h1>

      <div class="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <!-- Header -->
        <div class="flex items-center mb-4">
          <svg class="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h2 class="font-semibold text-gray-800">Informasi Pribadi</h2>
        </div>

        <!-- Form Editable -->
        <form @submit.prevent="saveProfile">
          <!-- Email -->
          <div class="mb-6 pb-4 border-b border-gray-200">
            <label class="block text-sm font-medium text-gray-600 mb-1">Alamat Email</label>
            <input
              type="email"
              v-model="profile.email"
              class="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Email Anda"
            />
          </div>

          <!-- Nama -->
          <div class="mb-6 pb-4 border-b border-gray-200">
            <label class="block text-sm font-medium text-gray-600 mb-1">Nama</label>
            <input
              type="text"
              v-model="profile.name"
              class="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Nama Lengkap"
            />
          </div>

          <!-- No HP -->
          <div class="mb-6 pb-4 border-b border-gray-200">
            <label class="block text-sm font-medium text-gray-600 mb-1">No HP</label>
            <input
              type="text"
              v-model="profile.phone"
              class="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="081234567890"
            />
          </div>

          <!-- Alamat -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-600 mb-1">Alamat</label>
            <textarea
              v-model="profile.address"
              class="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Masukkan alamat lengkap Anda"
              rows="3"
            ></textarea>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-between mt-6">
            <button
              type="button"
              @click="goToHome"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              class="px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

const router = useRouter()
const profile = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
})

// Ambil data user dari localStorage & API
onMounted(async () => {
  const userData = localStorage.getItem('user')
  if (userData) {
    const parsed = JSON.parse(userData)
    profile.value.name = parsed.name || ''
    profile.value.email = parsed.email || ''
    // Ambil data tambahan (phone, address) dari API jika ada
    try {
      const response = await axios.get('/api/profile')
      if (response.data.success) {
        profile.value.phone = response.data.user.phone || ''
        profile.value.address = response.data.user.address || ''
      }
    } catch (error) {
      console.log('Belum ada data tambahan')
    }
  }
})

const saveProfile = async () => {
  try {
    const response = await axios.put('/api/profile', profile.value)
    if (response.data.success) {
      // Update localStorage
      const updatedUser = { ...JSON.parse(localStorage.getItem('user')), ...profile.value }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      alert('Profil berhasil diperbarui!')
    }
  } catch (error) {
    console.error(error)
    alert('Gagal menyimpan perubahan.')
  }
}

const goToHome = () => {
  router.push('/')
}
</script>