import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity++
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.items = state.items.filter((i) => i.id !== item.id)
      }
    },
  },
})
export const cartActions = cartSlice.actions

export default cartSlice
