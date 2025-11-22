<template>
  <div>
    <!-- Top Banner -->
    <div class="bg-black text-white text-center py-1 text-xs fixed top-0 left-0 w-full z-50">
      Elevate Your Style with Us
    </div>

    <!-- Navbar -->
    <nav class="bg-white shadow-sm border-b border-gray-200 fixed top-[22px] left-0 w-full z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="@/assets/Images/YAKA.png" alt="YAKA Logo" class="h-10 w-auto" />
        </router-link>

        <!-- Left Menu -->
        <ul class="hidden md:flex space-x-12 text-gray-800 font-medium ml-16">
          <li><router-link to="/" class="hover:text-gray-600">Home</router-link></li>
          <li><router-link to="/shop" class="hover:text-gray-600">Shop</router-link></li>
          <li><router-link to="/riwayat-pesanan" class="hover:text-gray-600">History Order</router-link></li>
          <li><router-link to="/about" class="hover:text-gray-600">About us</router-link></li>
        </ul>

        <!-- Right Section -->
        <div class="hidden md:flex items-center space-x-6 ml-auto">

          <!-- Search bar -->
          <div class="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search for product..." 
              class="w-full px-4 py-2 pl-10 bg-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <svg 
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <!-- Cart Icon -->
          <button class="hover:text-gray-600 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

          <!-- User Icon with Dropdown -->
          <div class="relative">
            <button @click="toggleUserMenu" class="hover:text-gray-600 transition mt-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div v-if="isUserMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <!-- Jika SUDAH LOGIN -->
              <template v-if="isLoggedIn">
                <router-link to="/profile" @click="closeUserMenu" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </router-link>
                
                <router-link to="/orders" @click="closeUserMenu" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Pesanan
                </router-link>
                
                <router-link to="/faq" @click="closeUserMenu" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Faq
                </router-link>
                
                <button @click="logout" class="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </template>

              <!-- Jika BELUM LOGIN -->
              <template v-else>
                <router-link to="/login" @click="closeUserMenu" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Masuk / daftar
                </router-link>
                
                <router-link to="/orders" @click="closeUserMenu" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Pesanan
                </router-link>
                
                <router-link to="/faq" @click="closeUserMenu" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Faq
                </router-link>
              </template>
            </div>
          </div>

        </div>

        <!-- Mobile button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden bg-white border-t shadow-md">
        <div class="px-6 mt-3">
          <div class="relative w-full">
            <input 
              type="text" 
              placeholder="Search for product..." 
              class="w-full px-4 py-2 pl-10 bg-gray-200 rounded-full text-sm focus:outline-none"
            />
            <svg 
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <ul class="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/shop" @click="closeMenu">Shop</router-link></li>
          <li><router-link to="/riwayat-pesanan" @click="closeMenu">History Order</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About us</router-link></li>

          <li class="flex space-x-4 pt-2">
            <!-- Cart -->
            <button class="hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            <!-- User -->
            <router-link :to="isLoggedIn ? '/profile-cust' : '/login'" class="hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Spacer -->
    <div class="h-[100px] md:h-[86px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const isLoggedIn = ref(false)
const isUserMenuOpen = ref(false)
const router = useRouter()

// Cek status login saat komponen dimuat
onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('isLoggedIn')
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const closeUserMenu = () => {
  isUserMenuOpen.value = false
}

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user')
  isLoggedIn.value = false
  isUserMenuOpen.value = false
  router.push('/')
}
</script>

<style scoped>
nav {
  transition: all 0.3s ease;
}
</style>