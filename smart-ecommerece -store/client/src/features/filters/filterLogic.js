export const applyFilters = (products, filters) => {
  return products.filter(product => {
    // Category filter
    if (filters.category && filters.category !== 'all' && product.category !== filters.category) {
      return false
    }

    // Price range
    if (filters.priceMin && product.price < filters.priceMin) return false
    if (filters.priceMax && product.price > filters.priceMax) return false

    // Rating filter
    if (filters.minRating && product.rating < filters.minRating) return false

    // Stock filter
    if (filters.inStockOnly && product.stock === 0) return false

    // Brand filter
    if (filters.brand && product.brand !== filters.brand) return false

    return true
  })
}

export const getAvailableFilters = (products) => {
  const categories = {}
  const brands = {}
  const priceRange = { min: Infinity, max: 0 }

  products.forEach(product => {
    categories[product.category] = (categories[product.category] || 0) + 1
    brands[product.brand] = (brands[product.brand] || 0) + 1
    priceRange.min = Math.min(priceRange.min, product.price)
    priceRange.max = Math.max(priceRange.max, product.price)
  })

  return {
    categories,
    brands,
    priceRange
  }
}

