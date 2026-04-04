// Smart search with auto-suggest and filters
export const searchProducts = (products, query, filters = {}) => {
  return products.filter(product => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) ||
                         product.description.toLowerCase().includes(query.toLowerCase()) ||
                         product.category.toLowerCase().includes(query.toLowerCase())
    
    const matchesCategory = !filters.category || product.category === filters.category
    const matchesPrice = !filters.priceMax || product.price <= filters.priceMax
    const matchesRating = !filters.minRating || product.rating >= filters.minRating

    return matchesQuery && matchesCategory && matchesPrice && matchesRating
  }).sort((a, b) => {
    switch (filters.sort) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })
}

export const getAutoSuggest = (products, query) => {
  const terms = query.toLowerCase().split(' ')
  return products
    .filter(p => terms.some(term => p.name.toLowerCase().includes(term)))
    .slice(0, 5)
    .map(p => p.name)
}

