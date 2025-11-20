import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // kalau ada
import axios from './plugins/axios'
import './style.css' 

const app = createApp(App)

// Biar bisa pakai this.$axios atau inject
app.config.globalProperties.$axios = axios
app.provide('axios', axios)

app.use(router)
app.mount('#app')