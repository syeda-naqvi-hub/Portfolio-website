import { body, validationResult, param, query } from 'express-validator'

export const validateUserSignup = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Name must be 2-50 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).withMessage('Password must contain uppercase, lowercase and number'),
  
  body('phone')
    .optional()
    .isMobilePhone('en-US').withMessage('Please provide a valid phone number')
]

export const validateUserLogin = [
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required')
]

export const validateProductId = [
  param('id').isMongoId().withMessage('Invalid product ID')
]

export const validateOrder = [
  body('orderItems').isArray({ min: 1 }).withMessage('Order items required'),
  body('orderItems.*.name').notEmpty().withMessage('Product name required'),
  body('orderItems.*.qty').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('shippingAddress.address').notEmpty().withMessage('Address required'),
  body('shippingAddress.city').notEmpty().withMessage('City required'),
  body('paymentMethod').isIn(['card', 'paypal']).withMessage('Invalid payment method')
]

export const validateResults = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    })
  }
  next()
}

