import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, ShoppingCart, Star, Truck, Shield, Battery, Wifi } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedVariant, setSelectedVariant] = useState('default')
  const [quantity, setQuantity] = useState(1)
  const [relatedProducts] = useState([
    { id: 2, name: 'Similar Product 1', price: 899, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' },
    { id: 3, name: 'Similar Product 2', price: 999, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83addb?w=300' },
    { id: 4, name: 'Similar Product 3', price: 799, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300' },
  ])

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct({
        id,
        name: 'iPhone 15 Pro Max',
        price: 1199,
        image: 'https://images.unsplash.com/photo-1695906326190-33d577ac8f9b?w=600',
        description: 'Experience the power of Apple intelligence with iPhone 15 Pro. Featuring A17 Pro chip, 48MP camera system with next-generation portraits...',
        rating: 4.9,
        reviews: 1247,
        specs: {
          display: '6.7" Super Retina XDR',
          camera: '48MP Fusion',
          battery: 'Up to 29 hours video',
          storage: '256GB'
        },
        variants: ['256GB', '512GB', '1TB'],
        images: [
          'https://images.unsplash.com/photo-1695906326190-33d577ac8f9b?w=600',
          'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600',
          'https://images.unsplash.com/photo-1585740994404-93e1f69b7261?w=600'
        ]
      })
      setLoading(false)
    }, 1500)
  }, [id])

  if (loading) return <Loader />

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 lg:space-y-20">
      {/* Product Main */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Images */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent hover:border-blue-300 hover:scale-105 transition-all">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          {/* Title & Rating */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-6 w-6 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white ml-2">{product.rating}</span>
              <span className="text-gray-500 ml-1">({product.reviews.toLocaleString()})</span>
            </div>
          </div>

          {/* Price */}
          <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 rounded-2xl">
            <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400">${product.price}</div>
          </div>

          {/* Variants */}
          {product.variants && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Storage
              </label>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedVariant === variant
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-200 dark:shadow-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-900 px-6 py-3 rounded-xl border">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <ShoppingCart className="inline-block mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-2xl transition-colors">
              <Heart className="h-6 w-6 text-red-500 mx-auto" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Truck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Orders $50+</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h4 className="font-semibold">1 Year Warranty</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full protection</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <Battery className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-semibold">Fast Charging</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">0 to 50% in 30 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Specs */}
      <div className="lg:max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Description</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Specifications</h2>
            <div className="space-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">{key.replace('_', ' ')}:</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            You might also like
          </h2>
          <p className="text-xl text-gray-600">AI recommended products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetails

