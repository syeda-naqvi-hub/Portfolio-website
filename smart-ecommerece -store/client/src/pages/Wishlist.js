import { useState } from 'react'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'iPhone 15 Pro', price: 999, image: 'https://images.unsplash.com/photo-1695906326190-33d577ac8f9b?w=400', rating: 4.9 },
    { id: 2, name: 'Sony WH-1000XM5', price: 399, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: 4.8 },
    { id: 3, name: 'MacBook Pro M3', price: 1999, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400', rating: 4.9 },
  ])

  const moveToCart = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
    // TODO: Add to cart
    console.log('Moved to cart:', id)
  }

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          <Heart className="h-12 w-12 text-red-500 fill-red-100" />
          Wishlist
        </h1>
        <p className="text-xl text-gray-600">
          {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved for later
        </p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-24">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center mb-8 p-6">
            <Heart className="h-12 w-12 text-rose-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Your wishlist is empty
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Save products you like by clicking the heart icon. They'll appear here.
          </p>
          <a 
            href="/products" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Start Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {wishlistItems.map(item => (
            <div key={item.id} className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Heart className="h-10 w-10 text-red-500 fill-current p-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-all" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white ml-1">{item.rating}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      onClick={() => moveToCart(item.id)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Move to Cart
                    </button>
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl transition-all group-hover:scale-110"
                    >
                      <Trash2 className="h-6 w-6 text-gray-500 group-hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist

