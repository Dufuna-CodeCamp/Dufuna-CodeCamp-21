import React from "react";

const ProductCheckout = ({
  image,
  price,
  counter,
  increaseNumber,
  decrementNumber,
  name,
}) => {
  return (
    <div className="cartItem">
      <span className="deleteItem">X</span>
      <img src={image} alt="item" className="itemImage" />
      <div className="item-details">
        <p>{name}</p>
        <div className="item-cta">
          <button className="addItem" onClick={increaseNumber}>
            +
          </button>
          <span className="itemCount">{counter}</span>
          <button className="removeItem" onClick={decrementNumber}>
            -
          </button>
        </div>
      </div>
      <p className="itemPrice">#{price}</p>
    </div>
  );
};

export default ProductCheckout;
