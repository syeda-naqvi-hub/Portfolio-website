import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'iPhone 15 Pro', price: 999, quantity: 1, image: 'https://images.unsplash.com/photo-1695906326190-33d577ac8f9b?w=400' },
    { id: 2, name: 'MacBook Air M3', price: 1299, quantity: 1, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400' },
  ])

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Shopping Cart
        </h1>
        <p className="text-xl text-gray-600">
          {cartItems.length === 0 ? 'Your cart is empty' : `${cartItems.length} item${cartItems.length > 1 ? 's' : ''}`}
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-24">
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-8">
            🛒
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Your cart is empty
          </h3>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <a 
            href="/products" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex space-x-6 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${item.price}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          -
                        </button>
                        <span className="font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg sticky top-8">
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal:</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Shipping:</span>
                    <span className="font-semibold">$9.99</span>
                  </div>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 my-4" />
                  <div className="flex justify-between text-2xl font-bold text-gray-900 dark:text-white">
                    <span>Total:</span>
                    <span>${(total + 9.99).toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]">
                  Proceed to Checkout
                </button>
                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    🚀 Free shipping on orders over $50!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart

