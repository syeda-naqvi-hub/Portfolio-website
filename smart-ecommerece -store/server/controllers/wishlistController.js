import asyncHandler from '../utils/asyncHandler.js'
import Wishlist from '../models/Wishlist.js'

const addToWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body

  let wishlist = await Wishlist.findOne({ user: req.user._id })

  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user._id, products: [productId] })
  } else if (!wishlist.products.includes(productId)) {
    wishlist.products.push(productId)
  }

  const updatedWishlist = await wishlist.save()
  res.json({
    success: true,
    wishlist: updatedWishlist
  })
})

const removeFromWishlist = asyncHandler(async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id })

  if (wishlist) {
    wishlist.products = wishlist.products.filter(id => id.toString() !== req.params.productId)
    await wishlist.save()
  }

  res.json({ success: true })
})

const getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products')
  res.json(wishlist || { products: [] })
})

export {
  addToWishlist,
  removeFromWishlist,
  getWishlist
}

