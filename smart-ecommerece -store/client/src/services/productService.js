import api from './api'

export const productService = {
  getProducts: async (filters = {}) => {
    const params = new URLSearchParams()
    if (filters.category) params.append('category', filters.category)
    if (filters.search) params.append('search', filters.search)
    if (filters.priceMax) params.append('priceMax', filters.priceMax.toString())
    if (filters.sort) params.append('sort', filters.sort)

    const response = await api.get(`/products?${params.toString()}`)
    return response.data
  },

  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`)
    return response.data
  },

  getCategories: async () => {
    const response = await api.get('/products/categories')
    return response.data
  },

  getFeaturedProducts: async () => {
    const response = await api.get('/products/featured')
    return response.data
  },

  getRecommendedProducts: async (userId) => {
    const response = await api.get(`/products/recommendations/${userId}`)
    return response.data
  },
}

