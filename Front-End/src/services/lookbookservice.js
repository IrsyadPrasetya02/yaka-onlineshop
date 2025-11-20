import api from '@/config/api'

export default {
  getLookbooks() {
    return api.get('/lookbook')
  },

  getLookbook(id) {
    return api.get(`/lookbook/${id}`)
  }
}