// src/services/axios.js
import axios from "axios";

// Base URL dari file .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  timeout: 10000, // limit waktu request
});

// Request Interceptor (opsional untuk token nanti)
api.interceptors.request.use(
  (config) => {
    // Jika kamu punya token auth di localStorage, aktifkan ini:
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (opsional untuk error handling global)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API ERROR:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
