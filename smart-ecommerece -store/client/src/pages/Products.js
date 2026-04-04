import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const sampleProducts = [
  { id: 1, name: 'iPhone 15 Pro', price: 999, image: 'https://images.unsplash.com/photo-1695906326190-33d577ac8f9b?w=400', rating: 4.9, category: 'Electronics' },
  { id: 2, name: 'MacBook Air M3', price: 1299, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400', rating: 4.8, category: 'Electronics' },
  { id: 3, name: 'AirPods Pro 2', price: 249, image: 'https://images.unsplash.com/photo-1585740994404-93e1f69b7261?w=400', rating: 4.7, category: 'Electronics' },
  { id: 4, name: 'Nike Air Max', price: 149, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', rating: 4.6, category: 'Fashion' },
  { id: 5, name: 'Levi's Jeans', price: 89, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', rating: 4.5, category: 'Fashion' },
  { id: 6, name: 'Coffee Maker', price: 79, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', rating: 4.4, category: 'Home' },
]

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(1000)
  const [loading, setLoading] = useState(false)

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || product.category === category
    const matchesPrice = product.price <= priceRange
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">All Products</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of products with smart filters and AI search
        </p>
      </div>

      {/* Filters & Search */}
      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Filters</h3>
            
            {/* Category */}
            <div>
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                {['all', 'Electronics', 'Fashion', 'Home'].map(cat => (
                  <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="category"
                      value={cat}
                      checked={category === cat}
                      onChange={e => setCategory(e.target.value)}
                      className="rounded"
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <input 
                type="range" 
                min="0" max="1000" 
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <span className="text-sm text-gray-600">${priceRange.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {/* Search Bar */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="🔍 Search products, categories..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              {filteredProducts.length} results found
            </p>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products

