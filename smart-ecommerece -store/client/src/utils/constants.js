export const CATEGORIES = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Sports',
  'Books',
  'Beauty',
]

export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'newest', label: 'Newest Arrivals' },
]

export const PRICE_RANGES = [
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 - $50', min: 25, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200+', min: 200, max: Infinity },
]

export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  AUTH: '/api/auth',
  CART: '/api/cart',
  PAYMENT: '/api/payment',
}

export const THEME_CONFIG = {
  light: 'light',
  dark: 'dark',
}

