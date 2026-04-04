// AI Recommendation Engine (client-side mock)
class RecommendationEngine {
  constructor() {
    this.userHistory = JSON.parse(localStorage.getItem('userHistory') || '[]')
  }

  // Simple collaborative filtering mock
  getRecommendations(userId, limit = 5) {
    // Mock user-product interactions
    const interactions = this.getUserInteractions(userId)
    const similarUsers = this.findSimilarUsers(userId, interactions)
    
    const recommendations = this.generateRecommendations(similarUsers, interactions)
    return recommendations.slice(0, limit)
  }

  getUserInteractions(userId) {
    // Mock data
    return {
      viewed: [1, 2, 5],
      purchased: [1],
      rated: [{ productId: 1, rating: 5 }, { productId: 2, rating: 4 }]
    }
  }

  findSimilarUsers(userId, interactions) {
    // Mock similarity calculation
    return [userId, 'user2', 'user3']
  }

  generateRecommendations(similarUsers, interactions) {
    // Mock recommendations based on similar users
    return [
      { id: 3, name: 'Recommended Product 1', score: 0.95, reason: 'Users like you bought this' },
      { id: 4, name: 'Recommended Product 2', score: 0.88, reason: 'Frequently bought together' },
      { id: 6, name: 'Recommended Product 3', score: 0.82, reason: 'Trending in your category' },
    ]
  }

  trackInteraction(userId, type, productId, data = {}) {
    const interaction = { userId, type, productId, data, timestamp: Date.now() }
    this.userHistory.push(interaction)
    localStorage.setItem('userHistory', JSON.stringify(this.userHistory.slice(-1000)))
  }
}

export const recommendationEngine = new RecommendationEngine()

