<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const axios = inject('axios')
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const error = ref('')
const loading = ref(false)

const handleRegister = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await axios.post('/register', form.value)
    
    // Auto login setelah register
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    
    // Redirect ke home
    router.push('/')
    
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed. Please try again.'
    console.error('Register error:', err)
  } finally {
    loading.value = false
  }
}
</script>


<template>
  <div class="signup-wrapper">
    <Navbar />
    <div class="signup-container">
      <div class="signup-card">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="@/assets/Images/YAKA.png" alt="YAKA Logo" class="logo-img" />
        </div>

        <h2 class="title">Sign Up</h2>
        <p class="subtitle">
          Create your account to get started
        </p>

        <!-- Form -->
        <div>
          <!-- Name Input -->
          <div class="input-group">
            <input
              type="text"
              placeholder="Username"
              class="input"
              :class="{ 'input-error': errors.name }"
              v-model="name"
            />
            <span v-if="errors.name" class="error-text">Name wajib diisi</span>
          </div>

          <!-- Email Input -->
          <div class="input-group">
            <input
              type="email"
              placeholder="Email"
              class="input"
              :class="{ 'input-error': errors.email }"
              v-model="email"
            />
            <span v-if="errors.email" class="error-text">Email tidak valid</span>
          </div>

          <!-- Password Input + Eye -->
          <div class="input-group password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              class="input"
              :class="{ 'input-error': errors.password }"
              v-model="password"
            />
            <span class="eye-icon" @click="togglePassword">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="eye" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="eye" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.543-7a9.97 9.97 0 012.24-3.95M9.88 9.88a3 3 0 104.24 4.24" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
              </svg>
            </span>
            <span v-if="errors.password" class="error-text">Password harus 8 karakter gabungan huruf dan angka</span>
          </div>

          <!-- Confirm Password -->
          <div class="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              class="input"
              :class="{ 'input-error': errors.confirm }"
              v-model="confirmPassword"
            />
            <span v-if="errors.confirm" class="error-text">Password tidak cocok</span>
          </div>

          <!-- Create Account Button -->
          <button class="continue-btn" @click="handleSignUp">Create Account</button>
        </div>

        <!-- Login Link -->
        <div class="signup-area">
          <span>Already have an account?</span>
          <router-link to="/login" class="signup">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "SignUpPage",
  components: { Navbar },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      errors: {
        name: false,
        email: false,
        password: false,
        confirm: false,
      },
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validateEmail(email) {
      // Format dasar: harus ada @ dan domain
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validatePassword(password) {
      // Minimal 8 karakter, huruf + angka
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    },
    handleSignUp() {
      // Reset error
      this.errors.name = !this.name;
      this.errors.email = !this.email || !this.validateEmail(this.email);
      this.errors.password = !this.password || !this.validatePassword(this.password);
      this.errors.confirm = this.confirmPassword !== this.password || !this.confirmPassword;
      // Jika semua valid
      if (!this.errors.name && !this.errors.email && !this.errors.password && !this.errors.confirm) {
        console.log("Sign Up Data:", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        // Direct ke page login
        this.$router.push('/home');
      }
    },
  },
};
</script>

<style scoped>
.signup-wrapper {
  background: #e5e5e5;
  min-height: 100vh;
}
.logo-img {
  max-width: 150px;
  width: 30vw;
  min-width: 70px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}
.signup-card {
  width: 100%;
  max-width: 480px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}
.title {
  font-size: 22px;
  font-weight: bold;
}
.subtitle {
  font-size: 13px;
  color: #555;
  margin-bottom: 20px;
}
.input {
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.input-error {
  border-color: red;
}
.error-text {
  font-size: 11px;
  color: red;
  display: block;
  margin-bottom: 10px;
}
.password-wrapper {
  position: relative;
}
.eye-icon {
  position: absolute;
  right: 12px;
  top: 9px;
  cursor: pointer;
}
.eye {
  width: 22px;
  height: 22px;
}
.continue-btn {
  width: 100%;
  background: #190202;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: 0.2s;
}
.continue-btn:hover {
  background: #2b0d0c;
  transform: scale(1.02);
}
.signup-area {
  margin-top: 5px;
  font-size: 13px;
}
.signup {
  color: #a10000;
  margin-left: 5px;
  cursor: pointer;
}
@media (max-width: 480px) {
  .signup-card {
    padding: 25px;
  }
}
</style>