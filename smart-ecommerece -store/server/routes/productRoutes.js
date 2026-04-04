import express from 'express'
import { 
  getProducts,
  getProduct,
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct 
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'
import { admin } from '../middleware/adminMiddleware.js'
import { validateProductId } from '../utils/validators.js'
import { validateResults } from '../utils/validators.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/featured', getFeaturedProducts)
router.get('/:id', validateProductId, validateResults, getProduct)

router.use(protect)
router.post('/', admin, createProduct)
router.put('/:id', admin, validateProductId, validateResults, updateProduct)
router.delete('/:id', admin, validateProductId, validateResults, deleteProduct)

export default router

