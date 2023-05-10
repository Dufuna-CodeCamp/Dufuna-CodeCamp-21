import React from "react";

import "./css/CartList.css";

import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";

export const CartList = ({ cartItem, addCart, onRemove, removeMenu }) => {
  return (
    <div>
      <div className="cart-item">
        <FaTimes onClick={() => removeMenu(cartItem)} className="fa-icons-x" />
        <img className="cart-img" src={cartItem.image} alt={cartItem.title} />

        <span className="cart-name">{cartItem.title}</span>

        <span className="price">#{cartItem.cost * cartItem.qty} </span>

        <div className="qty-btn">
          <button onClick={() => addCart(cartItem)}>
            <FaPlus />
          </button>
          <span className="qty">{cartItem.qty}</span>
          <button onClick={() => onRemove(cartItem)}>
            <FaMinus />
          </button>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default CartList;
