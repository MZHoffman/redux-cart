import { cartActions } from './cart-slice'
import { uiActions } from './ui-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://redux-cart-438b2-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      )
      if (!response.ok) {
        throw new Error('Could not fetch cart data')
      }
      const data = await response.json()

      return data
    }
    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart({ items: cartData.items || [] }))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!!!',
          message: 'Fetching cart data failed!',
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  console.log(JSON.stringify(cart))
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
        { method: 'PUT', body: JSON.stringify({ items: cart.items }) }
      )
      if (!response.ok) {
        throw new Error('Sending cart failed!')
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
