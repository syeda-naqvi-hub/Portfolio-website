import { createSlice } from '@reduxjs/toolkit'

export const addToWishlist = (item) => ({
  type: 'wishlist/addToWishlist',
  payload: item,
})

export const removeFromWishlist = (id) => ({
  type: 'wishlist/removeFromWishlist',
  payload: id,
})

export const clearWishlist = () => ({
  type: 'wishlist/clearWishlist',
})

const initialState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.items.some(item => item.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearWishlist: (state) => {
      state.items = []
    },
  },
})

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice.reducer
