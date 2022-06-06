import React from "react";
import radioButton from "../images/radio_button_checked.svg";

const HomeNav = () => {
  return (
    <div className="homeNav">
      <div className="home-cart-verify">
        <p className="home">
          <a href="/">Home &gt;</a>
        </p>
        <p className="vendors">
          <a href="/">Cart &gt;</a>
        </p>
        <p className="active">
          <a href="/">Verification</a>
        </p>
      </div>
      <div className="title">
        <p>Verification</p>
        <p className="confirm">Confirm address &#38; Payment</p>
      </div>
      <div className="delivery-radio">
        <div>
          <p className="delivery-address">Delivery Address</p>
          <p className="delivery-note">
            Your order will be delivered to your address
          </p>
        </div>
        <div className="radio-button">
          <img src={radioButton} alt="radio button" />
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
