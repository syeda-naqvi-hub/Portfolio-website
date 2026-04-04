import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from '../server/config/db.js'
import Product from '../server/models/Product.js'
import User from '../server/models/User.js'

dotenv.config()

const importData = async () => {
  try {
    await connectDB()

    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data deleted')

    const sampleProducts = [
      {
        name: 'iPhone 15 Pro Max',
        slug: 'iphone-15-pro-max',
        description: 'Experience the power of Apple intelligence...',
        price: 1199,
        category: 'Electronics',
        brand: 'Apple',
        stock: 25,
        rating: 4.9,
        numReviews: 1247,
        images: [{ url: 'https://images.unsplash.com/photo-1695906326190-33d577ac8f9b?w=600' }],
        isFeatured: true
      },
      {
        name: 'Sony WH-1000XM5 Headphones',
        slug: 'sony-wh-1000xm5',
        description: 'Industry-leading noise cancellation...',
        price: 399,
        category: 'Electronics',
        brand: 'Sony',
        stock: 50,
        rating: 4.8,
        numReviews: 856
      }
    ]

    await Product.insertMany(sampleProducts)
    console.log('Sample products imported')

    process.exit()
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

importData()

