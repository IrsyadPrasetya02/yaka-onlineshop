<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 class="text-center font-bold text-2xl mb-6">YAKA</h1>
        <form @submit.prevent="register" class="space-y-4">
          <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded"/>
          <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded"/>
          <input v-model="name" type="text" placeholder="Name" class="w-full p-2 border rounded"/>
          <button type="submit" class="w-full bg-black text-white py-2 rounded">Create Account</button>
        </form>
        <p class="text-center mt-4 text-sm text-gray-500">
          You already have account? 
          <router-link to="/login" class="text-red-600">Login</router-link>
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
const name = ref('');
const error = ref('');
const router = useRouter();

const register = async () => {
  try {
    await axios.post('http://localhost:8000/api/register', {
      email: email.value,
      password: password.value,
      name: name.value
    });
    router.push('/login');
  } catch (err) {
    error.value = err.response?.data?.message || 'Register gagal';
  }
};
</script>
