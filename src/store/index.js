import { createSlice, configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slice'

const cartItemsSlice = createSlice({
  name: 'cartItems',
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
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cartItem: cartItemsSlice.reducer,
  },
})
export const cartItemsActions = cartItemsSlice.actions

export default store
