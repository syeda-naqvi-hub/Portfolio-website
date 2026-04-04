import asyncHandler from '../utils/asyncHandler.js'
import Stripe from 'stripe'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount } = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Stripe expects cents
    currency: 'usd',
    metadata: {
      userId: req.user._id.toString()
    }
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

export {
  createPaymentIntent
}

