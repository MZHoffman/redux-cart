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
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})
export const cartActions = cartSlice.actions

export default store
