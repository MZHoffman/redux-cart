import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui-slice'

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'Sending cart data!!!',
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://redux-cart-438b2-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      )
      if (!response.ok) {
        throw new Error('Saending cart failed!')
      }
    }
    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!!!',
          message: 'Sent cart data successfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!!!',
          message: 'Sent cart data failed!',
        })
      )
    }
  }
}

export const cartActions = cartSlice.actions

export default cartSlice
