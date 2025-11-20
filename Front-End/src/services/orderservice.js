import api from '@/config/api'

export default {
  // Get user orders
  getOrders() {
    return api.get('/orders')
  },

  // Get single order
  getOrder(id) {
    return api.get(`/orders/${id}`)
  },

  // Create order (checkout)
  createOrder(data) {
    return api.post('/orders', data)
  },

  // Cancel order
  cancelOrder(id) {
    return api.post(`/orders/${id}/cancel`)
  }
}