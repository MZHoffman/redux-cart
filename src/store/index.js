import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { isVisable: true }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.isVisable = !state.isVisable
    },
  },
})

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
    cart: cartSlice.reducer,
    cartItem: cartItemsSlice.reducer,
  },
})
export const cartActions = cartSlice.actions
export const cartItemsActions = cartItemsSlice.actions

export default store
