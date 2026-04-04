import api from './api'

export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password })
    const { token, user } = response.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  },

  signup: async (userData) => {
    const response = await api.post('/auth/signup', userData)
    const { token, user } = response.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // Clear Redux cart if needed
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me')
    return response.data
  },

  // Mock implementations for demo
  mockLogin: async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    const mockUser = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
      role: 'user'
    }
    localStorage.setItem('token', 'mock-jwt-token')
    localStorage.setItem('user', JSON.stringify(mockUser))
    return mockUser
  },
}

