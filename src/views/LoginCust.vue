<template>
  <div class="login-wrapper">
    <Navbar />
    <div class="login-container">
      <div class="login-card">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img
            src="@/assets/Images/YAKA.png"
            alt="YAKA Logo"
            class="logo-img"
          />
        </div>

        <h2 class="title">Sign in</h2>
        <p class="subtitle">
          Enter your email and we’ll send you a verification code
        </p>

        <input
          type="email"
          placeholder="Alamat Email"
          class="input"
          v-model="email"
        />

        <!-- Password + Mata -->
        <div class="password-wrapper">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="input"
            v-model="password"
          />

          <!-- IKON MATA -->
          <span class="eye-icon" @click="togglePassword">
            <!-- Eye OFF -->
            <svg
              v-if="!showPassword"
              xmlns="http://www.w3.org/2000/svg"
              class="eye"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.522 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
              />
            </svg>

            <!-- Eye ON (slash) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="eye"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.543-7a9.97 9.97 0 012.24-3.95M9.88 9.88a3 3 0 104.24 4.24"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3l18 18"
              />
            </svg>
          </span>
        </div>

        <button class="continue-btn" @click="goHome">Continue</button>

        <div class="links">
          <div class="signup-area">
            <span>You don't have account?</span>
            <router-link to="/signup" class="signup">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "LoginPage",
  components: { Navbar },
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login-wrapper {
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

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.login-card {
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
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Password eye icon */
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
  background: #2b0d0c;
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
  background: #4e1715;
  transform: scale(1.02);
}

.admin-login {
  font-size: 13px;
  color: #a10000;
  cursor: pointer;
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
  .login-card {
    padding: 25px;
  }
}
</style>
