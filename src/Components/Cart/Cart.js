import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import {useContext} from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {};

  const addCartItemHandler = (item) => {};

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
        name={item.name}
        key={item.id}
        amount={item.amount}
        price={item.price}
        onAdd={addCartItemHandler.bind(null, item)}
        onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseModal={props.onCloseModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Sum</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        {hasItems && <button className={styles.button}>Close</button>}
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;