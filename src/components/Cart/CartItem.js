import { useDispatch } from 'react-redux'
import { cartItemsActions } from '../../store'
import { useSelector } from 'react-redux'

import classes from './CartItem.module.css'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItem)

  const { title, quantity, total, price } = props.item

  const indexOfIteam = cartItems.items.findIndex((item) => item.title === title)
  const addHandler = () => {
    // console.log(indexOfIteam >= 0)
    if (indexOfIteam >= 0) {
      // console.log(cartItems.items[indexOfIteam].quantity + 1)
      // console.log(cartItems.items)
      console.log(cartItems)
      dispatch(cartItemsActions.incrementItem(indexOfIteam))
      return
    }
    dispatch(cartItemsActions.addItem(props.item))
  }
  const removeHandler = () => {
    //console.log(cartItems.items[indexOfIteam].quantity)
    if (cartItems.items[indexOfIteam].quantity <= 1) {
      dispatch(cartItemsActions.removeItem(indexOfIteam))
      return
    }

    if (indexOfIteam >= 0) {
      // console.log(cartItems.items[indexOfIteam].quantity + 1)
      // console.log(cartItems.items)
      console.log(cartItems)
      dispatch(cartItemsActions.decrementItem(indexOfIteam))
      return
    }
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
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
