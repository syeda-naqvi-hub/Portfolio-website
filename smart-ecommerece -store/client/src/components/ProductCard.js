import { Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50">
            <Heart size={20} className="text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 right-3 bg-black/50 text-white p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
          <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-colors">
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/products/${product.id}`} className="block hover:text-blue-600 transition-colors">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {product.rating?.toFixed(1)} ★
          </span>
        </div>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  product: {
    id: 1,
    name: 'Sample Product',
    price: 29.99,
    image: '',
    description: 'Sample description for product card',
    rating: 4.5
  }
}

export default ProductCard

