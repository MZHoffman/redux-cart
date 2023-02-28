import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items
    },
    addItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id)
      state.changed = true
      if (item) {
        item.quantity++
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id)
      state.changed = true
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
