import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import Card from '../UI/Card'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const { title, price, description } = props

  const indexOfIteam = cartItems.items.findIndex((item) => item.title === title)
  const addHandler = () => {
    if (indexOfIteam >= 0) {
      dispatch(cartActions.incrementItem(indexOfIteam))
      return
    }
    dispatch(cartActions.addItem({ title, price, quantity: 1 }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
