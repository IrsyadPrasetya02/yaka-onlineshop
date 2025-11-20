import api from '@/config/api'

export default {
  getCollections() {
    return api.get('/collections')
  },

  getCollection(id) {
    return api.get(`/collections/${id}`)
  }
}