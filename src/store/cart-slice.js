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
    // incrementItem(state, action) {
    //   console.log(action.payload, 'inc')
    //   state.items[action.payload].quantity++
    // },
    removeItem(state, action) {
      console.log(action.payload, 'rem')
      state.items.splice(action.payload, 1)
    },
    decrementItem(state, action) {
      console.log(action.payload, 'dec')
      state.items[action.payload].quantity--
    },
  },
})
export const cartActions = cartSlice.actions

export default cartSlice
