import api from '@/config/api'

export default {
  // Get all categories
  getCategories() {
    return api.get('/categories')
  },

  // Get single category with products
  getCategory(id) {
    return api.get(`/categories/${id}`)
  }
}