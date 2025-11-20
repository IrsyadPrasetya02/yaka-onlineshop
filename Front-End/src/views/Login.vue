<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 class="text-center font-bold text-2xl mb-6">Login</h1>
        <form @submit.prevent="login" class="space-y-4">
          <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded"/>
          <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded"/>
          <button type="submit" class="w-full bg-black text-white py-2 rounded">Login</button>
        </form>
        <p class="text-center mt-4 text-sm text-gray-500">
          Don't have an account? 
          <router-link to="/register" class="text-red-600">Register</router-link>
        </p>
        <p v-if="error" class="text-red-600 text-sm mt-2 text-center">{{ error }}</p>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      password: password.value
    });

    // Simpan token atau data user sesuai backend Laravel
    localStorage.setItem('token', response.data.token);
    router.push('/'); // Redirect ke Home setelah login
  } catch (err) {
    error.value = err.response?.data?.message || 'Login gagal';
  }
};
</script>
