import api from '@/config/api'

export default {
  // Get all products with filters
  getProducts(params = {}) {
    return api.get('/products', { params })
  },

  // Get single product
  getProduct(id) {
    return api.get(`/products/${id}`)
  },

  // Get featured products
  getFeatured() {
    return api.get('/products', { 
      params: { featured: true } 
    })
  },

  // Get new arrivals
  getNewArrivals() {
    return api.get('/products', { 
      params: { new_arrival: true } 
    })
  },

  // Search products
  searchProducts(query) {
    return api.get('/products', { 
      params: { search: query } 
    })
  }
}