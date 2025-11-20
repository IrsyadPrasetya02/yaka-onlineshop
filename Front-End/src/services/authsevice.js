import api from '@/config/api'

export default {
  // Register
  register(data) {
    return api.post('/register', data)
  },

  // Login
  login(credentials) {
    return api.post('/login', credentials)
  },

  // Logout
  logout() {
    return api.post('/logout')
  },

  // Get current user
  getUser() {
    return api.get('/user')
  }
}