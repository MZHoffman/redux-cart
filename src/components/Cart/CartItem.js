import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import classes from './CartItem.module.css'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const { title, quantity, price } = props.item

  const addHandler = () => {
    dispatch(cartActions.addItem(props.item))
  }
  const removeHandler = () => {
    dispatch(cartActions.removeItem(props.item))
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
