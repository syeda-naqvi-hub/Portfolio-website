import express from 'express'
import { 
  registerUser, 
  authUser, 
  getUserProfile, 
  updateUserProfile 
} from '../controllers/authController.js'
import { protect } from '../middleware/authMiddleware.js'
import { validateUserSignup, validateUserLogin, validateResults } from '../utils/validators.js'

const router = express.Router()

router.post('/register', validateUserSignup, validateResults, registerUser)
router.post('/login', validateUserLogin, validateResults, authUser)
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router

