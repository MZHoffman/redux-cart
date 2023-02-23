import classes from './CartButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const numberOfItems = useSelector((state) => state.cartItem.items.length)
  console.log(numberOfItems)

  const cartToggleHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default CartButton
