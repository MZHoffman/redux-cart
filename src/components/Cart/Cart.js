import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItem)
  console.log(cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.items.map((item) => (
          <CartItem
            key={item.name}
            item={{
              title: item.title,
              quantity: item.quantity,
              total: 18,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
