import asyncHandler from 'express-async-handler'
import Product from '../models/Product.js'

const getProducts = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 12
  const keyword = req.query.keyword ? {
    $or: [
      { name: { $regex: req.query.keyword, $options: 'i' } },
      { description: { $regex: req.query.keyword, $options: 'i' } },
      { category: { $regex: req.query.keyword, $options: 'i' } }
    ]
  } : {}

  const category = req.query.category ? { category: req.query.category } : {}

  const price = req.query.price ? { price: { $gte: req.query.price[0], $lte: req.query.price[1] } } : {}

  const ratings = req.query.rating ? { rating: { $gte: Number(req.query.rating) } } : {}

  const skip = (page - 1) * limit

  const products = await Product.find({ ...keyword, ...category, ...price, ...ratings })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip)

  const count = await Product.countDocuments({ ...keyword, ...category, ...price, ...ratings })

  res.json({
    success: true,
    products,
    page,
    pages: Math.ceil(count / limit),
    count
  })
})

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('reviews.user', 'name')

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  res.json(product)
})

const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ isFeatured: true }).limit(8).sort({ rating: -1 })
  res.json(products)
})

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    ...req.body,
    user: req.user._id
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.json(updatedProduct)
})

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  await product.remove()
  res.json({ message: 'Product deleted' })
})

export {
  getProducts,
  getProduct,
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct
}

