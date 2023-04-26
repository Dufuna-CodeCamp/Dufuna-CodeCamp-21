import React from "react";
import Header from "./header";
import "./orderSuccess.css";
// import failed from "../images/Illustration_failed.svg";
import success from "../images/Illustration_success.svg";


const SuccessfulOrder = (props) => {

  return (
    <div>
      <Header />
      <div className="content-div">
        <div className="content">
          <img className="success-img" src={success} alt="Successful Order" ></img>
          <div>
            <h2 className="success">Order successful</h2>
            <p className="order-text">We have started processing </p>
            <p className="order-text">your order.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessfulOrder;