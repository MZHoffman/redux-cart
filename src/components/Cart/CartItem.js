import classes from './CartItem.module.css'

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item

  const addHandler = () => {
    console.log({ title, price })
  }
  const removeHandler = () => {
    console.log({ title, price })
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
          <button onClick={addHandler}>-</button>
          <button onClick={removeHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
