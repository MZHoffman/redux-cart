import classes from './CartButton.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  )
}

export default CartButton
