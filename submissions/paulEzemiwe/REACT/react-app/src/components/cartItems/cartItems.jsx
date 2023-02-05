import "./cartItems.scss";
import * as React from "react";
import CloseIcon from "../../assets/svgs/close.svg";
import Plus from "../../assets/svgs/plus.svg";
import Minus from "../../assets/svgs/minus.svg";
import Scooter from "../../assets/svgs/scooter.svg";
import ScooterMobile from "../../assets/svgs/scooter-mobile.svg";

export const CartItems = ({
  props,
  HandleDecrement,
  HandleIncrement,
  HandleRemove,
}) => {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      {props.map((item, index) => (
        <div className="cart__item" key={index}>
          <img
            src={CloseIcon}
            alt="remove"
            className="cart__icon--remove"
            onClick={() => {
              HandleRemove(item);
            }}
          />
          <div className="cart__counter">
            <div className="counter">
              <img
                src={isMobile ? item.mobile : item.image}
                alt="counter-img"
                className="counter__image"
              />
              <div className="counter__details">
                <p className="counter__details--name">{item.name}</p>
                <div className="counter__btns">
                  <img
                    src={Plus}
                    alt="plus"
                    className="counter__btns--plus"
                    onClick={() => {
                      HandleIncrement(item);
                    }}
                  />
                  <span className="counter__btns--count">
                    {Number(item.quantity)}
                  </span>
                  <img
                    src={Minus}
                    alt="minus"
                    className="counter__btns--minus"
                    onClick={() => {
                      HandleDecrement(item);
                    }}
                  />
                </div>
              </div>
            </div>
            <span className="counter__price">
              ₦{item.price * item.quantity}
            </span>
          </div>
        </div>
      ))}
      <div className="cart__item">
        <div className="delivery">
          <div className="delivery__details">
            <div className="delivery__image">
              <img src={isMobile ? ScooterMobile : Scooter} alt="scooter" />
            </div>
            <p className="delivery__details--name">Delivery fee</p>
          </div>
          <span className="delivery__price">₦1200</span>
        </div>
      </div>
    </>
  );
};

export default CartItems;
