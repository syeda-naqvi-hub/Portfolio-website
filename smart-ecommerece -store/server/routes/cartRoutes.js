import express from 'express'
import { 
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem 
} from '../controllers/cartController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.use(protect)

router.route('/')
  .get(getCart)
  .post(addToCart)

router.route('/items/:itemId')
  .put(updateCartItem)
  .delete(removeCartItem)

export default router

