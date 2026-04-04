import asyncHandler from '../utils/asyncHandler.js'
import Cart from '../models/Cart.js'
import Product from '../models/Product.js'

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1 } = req.body

  const product = await Product.findById(productId)
  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  let cart = await Cart.findOne({ user: req.user._id })

  if (!cart) {
    cart = new Cart({
      user: req.user._id,
      items: [{
        product: productId,
        quantity,
        price: product.price
      }]
    })
  } else {
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId)
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity
    } else {
      cart.items.push({
        product: productId,
        quantity,
        price: product.price
      })
    }
  }

  await cart.save()

  res.json({
    success: true,
    message: 'Item added to cart',
    cart
  })
})

const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product')

  res.json(cart || { items: [], totalItems: 0, totalAmount: 0 })
})

const updateCartItem = asyncHandler(async (req, res) => {
  const { quantity } = req.body
  const cart = await Cart.findOne({ user: req.user._id })

  if (!cart) {
    res.status(404)
    throw new Error('Cart not found')
  }

  const itemIndex = cart.items.findIndex(item => item._id.toString() === req.params.itemId)
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity = quantity
    cart.items = cart.items.filter(item => item.quantity > 0)
  }

  await cart.save()
  const populatedCart = await Cart.findById(cart._id).populate('items.product')

  res.json(populatedCart)
})

const removeCartItem = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id })

  if (!cart) {
    res.status(404)
    throw new Error('Cart not found')
  }

  cart.items = cart.items.filter(item => item._id.toString() !== req.params.itemId)
  await cart.save()

  res.json({
    success: true,
    message: 'Item removed from cart',
    cart
  })
})

export {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem
}

