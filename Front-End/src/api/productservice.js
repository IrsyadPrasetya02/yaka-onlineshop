import api from "./axios";

export const productService = {
  // GET semua produk
  async getAll() {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // GET produk by ID
  async getById(id) {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },

  // POST - Tambah produk baru
  async create(data) {
    try {
      const response = await api.post("/products", data);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  // PUT - Update produk
  async update(id, data) {
    try {
      const response = await api.put(`/products/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  // DELETE - Hapus produk
  async delete(id) {
    try {
      const response = await api.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }
};