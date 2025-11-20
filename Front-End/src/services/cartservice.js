import api from '@/config/api'

export default {
  // Get cart items
  getCart() {
    return api.get('/cart')
  },

  // Add to cart
  addToCart(data) {
    return api.post('/cart', data)
  },

  // Update cart item
  updateCart(id, data) {
    return api.put(`/cart/${id}`, data)
  },

  // Remove from cart
  removeFromCart(id) {
    return api.delete(`/cart/${id}`)
  },

  // Clear cart
  clearCart() {
    return api.delete('/cart')
  }
}