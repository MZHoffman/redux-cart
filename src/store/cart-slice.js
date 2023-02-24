import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
    incrementItem(state, action) {
      state.items[action.payload].quantity++
    },
    removeItem(state, action) {
      state.items.splice(action.payload, 1)
    },
    decrementItem(state, action) {
      state.items[action.payload].quantity--
    },
  },
})
export const cartActions = cartSlice.actions

export default cartSlice
