import express from 'express'
import { 
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders 
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'
import { admin } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.use(protect)

router.route('/')
  .post(createOrder)
  .get(admin, getOrders)

router.route('/myorders')
  .get(getMyOrders)

router.route('/:id')
  .get(getOrderById)
  .put(updateOrderToPaid, updateOrderToDelivered)

export default router

