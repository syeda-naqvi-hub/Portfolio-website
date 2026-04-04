import express from 'express'
import { createPaymentIntent } from '../controllers/paymentController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.use(protect)

router.post('/create-intent', createPaymentIntent)

export default router

