import React from "react";
import Header from "./Header";
import image from "../images/success.png";

const Success = () => {
  return (
    <>
      <Header />
      <main className="success">
        <div className="successful__order">
          <img src={image} alt="img-success" />
          <div className="success-text">
            <p>Order successful</p>
            <p>We have started processing your order.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Success;
