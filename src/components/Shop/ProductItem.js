import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cartItemsActions } from '../../store'

import Card from '../UI/Card'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItem)

  const { title, price, description } = props

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
    dispatch(cartItemsActions.addItem({ title, price, quantity: 1, total: 18 }))
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
