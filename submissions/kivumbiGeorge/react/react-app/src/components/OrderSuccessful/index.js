import React from "react";
import Header from "../layout/header";
import "./success.css";
import Illustration_success from "../../assets/image/Illustration_success.svg";

const OrderSuccessful = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="center-stage">
          <div className="image-container">
            <img alt="logo" src={Illustration_success} className="image" />
          </div>
          <div className="text-container">
            <p className="text-heading">Order successful</p>
            <p className="text-paragraph">
              We have started processing your order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessful;
