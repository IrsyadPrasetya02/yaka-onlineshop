import api from "./axios";

export const orderService = {
  // GET semua order
  async getAll() {
    try {
      const response = await api.get("/orders");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },

  // GET order by ID
  async getById(id) {
    try {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching order:", error);
      throw error;
    }
  },

  // POST - Buat order baru
  async create(data) {
    try {
      const response = await api.post("/orders", data);
      return response.data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  },

  // PUT - Update status order
  async updateStatus(id, status) {
    try {
      const response = await api.put(`/orders/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error("Error updating order:", error);
      throw error;
    }
  },

  // DELETE - Hapus order
  async delete(id) {
    try {
      const response = await api.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting order:", error);
      throw error;
    }
  }
};


// ===== CONTOH PENGGUNAAN DI COMPONENT =====

/*
<template>
  <div class="products-container">
    <h1>Daftar Produk</h1>
    
    <!-- Loading State -->
    <div v-if="loading" class="loading">Loading...</div>
    
    <!-- Error State -->
    <div v-if="error" class="error">{{ error }}</div>
    
    <!-- Products Grid -->
    <div v-if="!loading && products.length" class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.name }}</h3>
        <p class="price">Rp {{ formatPrice(product.price) }}</p>
        <p class="stock">Stock: {{ product.stock }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    
    <p v-if="!loading && products.length === 0">Tidak ada produk</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { productService } from "@/services/productService";

const products = ref([]);
const loading = ref(false);
const error = ref(null);

// Fetch semua produk
const fetchProducts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await productService.getAll();
    products.value = response.data; // Sesuaikan dengan struktur response Laravel
  } catch (err) {
    error.value = "Gagal memuat produk";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

// Format harga
const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

// Add to cart (bisa nanti integrate dengan Pinia)
const addToCart = (product) => {
  console.log("Added to cart:", product);
  // emit ke parent atau update store
};

// Load data saat component mount
onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.products-container {
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin: 10px 0;
}

.stock {
  color: #7f8c8d;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

.loading,
.error {
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  text-align: center;
}

.loading {
  background-color: #e3f2fd;
  color: #1976d2;
}

.error {
  background-color: #ffebee;
  color: #c62828;
}
</style>
*/