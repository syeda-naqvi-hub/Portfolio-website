import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export const paymentService = {
  createPaymentIntent: async (amount) => {
    const response = await fetch('/api/payment/create-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
    const { clientSecret } = await response.json()
    return clientSecret
  },

  confirmPayment: async (clientSecret) => {
    const stripe = await getStripe()
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret)
    return { error, paymentIntent }
  },
}

