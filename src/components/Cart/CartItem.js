import { useDispatch, useSelector } from 'react-redux'
import { cartItemsActions } from '../../store'

import classes from './CartItem.module.css'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItem)

  const { title, quantity, price } = props.item

  const indexOfIteam = cartItems.items.findIndex((item) => item.title === title)
  const addHandler = () => {
    if (indexOfIteam >= 0) {
      dispatch(cartItemsActions.incrementItem(indexOfIteam))
      return
    }
    dispatch(cartItemsActions.addItem(props.item))
  }
  const removeHandler = () => {
    if (cartItems.items[indexOfIteam].quantity <= 1) {
      dispatch(cartItemsActions.removeItem(indexOfIteam))
      return
    }

    if (indexOfIteam >= 0) {
      dispatch(cartItemsActions.decrementItem(indexOfIteam))
      return
    }
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
