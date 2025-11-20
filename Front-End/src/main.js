import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router dari index.js
import axios from './api/axios' // import axios instance
import './style.css'

const app = createApp(App)

// Global properties untuk axios
app.config.globalProperties.$axios = axios

app.use(router).mount('#app')


