import classes from './CartButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const numberOfItems = useSelector((state) => state.cart.items.length)

  const cartToggleHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default CartButton
