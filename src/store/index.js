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
    numberOfItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      console.log(action)
    },
    removeItem(state, action) {
      console.log(action)
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

export default store
