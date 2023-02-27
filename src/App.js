import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { uiActions } from './store/ui-slice'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.ui.isVisable)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending..',
          message: 'Sending cart data!!!',
        })
      )
      const response = await fetch(
        'https://redux-cart-438b2-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      )
      if (!response.ok) {
        throw new Error('Saending cart failed!')
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!!!',
          message: 'Sent cart data successfully!',
        })
      )
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!!!',
          message: 'Sent cart data failed!',
        })
      )
    })
  }, [cart, dispatch])

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
