import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Heart, User, Sun, Moon } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SmartStore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600 font-semibold' : ''}`}>
              Home
            </Link>
            <Link to="/products" className={`hover:text-blue-600 ${location.pathname === '/products' ? 'text-blue-600 font-semibold' : ''}`}>
              Products
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 hover:text-blue-600">
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Link>
            <Link to="/wishlist" className="flex items-center space-x-1 hover:text-blue-600">
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </Link>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

