import React, { useEffect } from 'react';
import Run from './images/run.png';
import './cartPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCartQty,
  getTotal,
  increaseCartQty,
} from '../features/cart/cartSlice';
import { MdOutlineNavigateNext } from 'react-icons/md';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems, cartTotalAmount, deliveryFee } = cart;

  const handleIncreaseQuantity = (CartItem) => {
    dispatch(increaseCartQty(CartItem));
  };
  const handleDecreaseQuantity = (CartItem) => {
    dispatch(decreaseCartQty(CartItem));
  };
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="cart">
      <div className="head_link">
        <p>Home</p> <MdOutlineNavigateNext className="head_link_next" />{' '}
        <h4>Cart</h4>
      </div>

      <h1>Cart</h1>
      <div className="table_cart">
        <p>{cartItems?.length} Items</p>
        <p>Remove all</p>
      </div>
      <div className="cart_details">
        {cartItems.map((cart) => (
          <div className="cart_detail">
            <div className="left_details">
              <img src={cart.img} alt="" />
              <div className="name_quantity">
                <h2>{cart.name}</h2>
                <div className="quantity_button">
                  <button onClick={() => handleIncreaseQuantity(cart)}>
                    +
                  </button>
                  <p>{cart.qty}</p>
                  <button onClick={() => handleDecreaseQuantity(cart)}>
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="right_details">
              <p>
                {(cart.price * cart.qty).toLocaleString('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                })}
              </p>
            </div>
          </div>
        ))}
        <div className="cart_detail">
          <div className="left_details">
            <img src={Run} alt="" />
            <div className="name_quantity">
              <h2>Delivery fee</h2>
            </div>
          </div>
          <div className="right_details">
            <p>
              {deliveryFee.toLocaleString('en-NG', {
                style: 'currency',
                currency: 'NGN',
              })}
            </p>
          </div>
        </div>

        <div className="total_cart">
          <p>Total</p>
          <p>
            {cartTotalAmount.toLocaleString('en-NG', {
              style: 'currency',
              currency: 'NGN',
            })}
          </p>
        </div>
      </div>
      <button className="checkout">Checkout</button>
    </div>
  );
}

export default CartPage;
