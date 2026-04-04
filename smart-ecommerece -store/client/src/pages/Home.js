import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const featuredProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: 4.8 },
  { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: 4.5 },
  { id: 3, name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83addb?w=400', rating: 4.7 },
]

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 mb-16 rounded-3xl overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart Shopping 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Made Simple
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover amazing products with AI-powered recommendations. 
            Your perfect match awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <button className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              AI Recommendations
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 opacity-80"></div>
      </section>

      {/* Featured Products */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI recommended just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16 mb-20 rounded-3xl">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-lg opacity-90">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-lg opacity-90">Products Sold</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.9</div>
            <div className="text-lg opacity-90">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg opacity-90">Support</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

