import { createSlice } from '@reduxjs/toolkit'

export const addToCart = (item) => ({
  type: 'cart/addToCart',
  payload: item,
})

export const updateQuantity = (id, quantity) => ({
  type: 'cart/updateQuantity',
  payload: { id, quantity },
})

export const removeFromCart = (id) => ({
  type: 'cart/removeFromCart',
  payload: id,
})

export const clearCart = () => ({
  type: 'cart/clearCart',
})

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
      state.totalAmount = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
        state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
        state.totalAmount = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
      state.totalAmount = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalAmount = 0
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
