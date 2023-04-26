import React, { Component, useState } from "react";
import "./verification.css";
import Header from "../layout/header";
import Nav from "../layout/nav";
import RadioButtonChecked from "../../assets/image/radio_button_checked.svg";
import { Link } from "react-router-dom";

const Verification = () => {
  const [values, setValues] = useState({
    cvc: "",
    cardName: "",
    expiryDate: "",
    cardNumber: "",
    phoneNumber: "",
    paymentCard: "",
    paymentMethod: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Nav page="Verification" navList={["Home", "Cart", "Verification"]} />
      <div className="main-body">
        <form onSubmit={handleSubmit}>
          <div className="heading-section">
            <div className="heading-section-title-container">
              <h2 className="heading-section-title">Verification</h2>
            </div>
            <div className="heading-section-message-container">
              <p className="heading-section-message">
                Confirm address & Payment
              </p>
            </div>
          </div>
          <div className="delivery-section">
            <div className="delivery-section-text">
              <div className="delivery-heading-container">
                <h3 className="delivery-heading">Delivery Address</h3>
              </div>
              <div className="delivery-message-container">
                <p className="delivery-message">
                  Your order will be delivered to your address
                </p>
              </div>
            </div>
            <div className="delivery-section-marker">
              <img alt="radio" src={RadioButtonChecked} />
            </div>
          </div>
          <div className="contact-section">
            <div className="generic-input">
              <label className="generic-input-label">Phone Number</label>
              <input
                required={true}
                className="generic-input-value"
                name="phoneNumber"
                type="text"
                placeholder="+234"
                value={values.phoneNumber}
                onChange={handleChange}
                minLength={10}
                maxLength={20}
                pattern="[+0-9]+"
              />
            </div>
          </div>
          <div className="split-section"></div>
          <div className="payment-section">
            <div className="">
              <div className="generic-input">
                <label className="generic-input-label">Payment Card</label>
                <input
                  required={true}
                  className="generic-input-value"
                  name="paymentMethod"
                  type="text"
                  placeholder="Card"
                  value={values.paymentMethod}
                  onChange={handleChange}
                  minLength={5}
                  maxLength={20}
                />
                <div className="">
                  <select className="null-select"></select>
                </div>
              </div>
            </div>
            <div className="">
              <div className="generic-input">
                <label className="generic-input-label">Card Number</label>
                <input
                  required={true}
                  className="generic-input-value"
                  name="cardNumber"
                  type="text"
                  placeholder="2345 6543 7868 2343"
                  value={values.cardNumber}
                  onChange={handleChange}
                  minLength={19}
                  maxLength={19}
                  pattern="[0-9 _]+"
                />
              </div>
            </div>
            <div className="">
              <div className="generic-input">
                <label className="generic-input-label">Card Name</label>
                <input
                  required={true}
                  className="generic-input-value"
                  name="cardName"
                  type="text"
                  placeholder="TOLUWALASE KENNY OJO"
                  value={values.cardName}
                  onChange={handleChange}
                  minLength={5}
                  maxLength={20}
                />
              </div>
            </div>
            <div className="card-security">
              <div className="card-security-1">
                <div className="generic-input">
                  <label className="generic-input-label">Expiry Date</label>
                  <input
                    required={true}
                    className="generic-input-value"
                    name="expiryDate"
                    type="text"
                    placeholder="01/23"
                    value={values.expiryDate}
                    onChange={handleChange}
                    minLength={5}
                    maxLength={5}
                  />
                </div>
              </div>
              <div className="card-security-2">
                <div className="generic-input">
                  <label className="generic-input-label">CVC</label>
                  <input
                    required={true}
                    className="generic-input-value"
                    name="cvc"
                    type="text"
                    placeholder="012"
                    value={values.cvc}
                    onChange={handleChange}
                    maxLength={3}
                    minLength={3}
                    pattern="[0-9]+"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="submit-section">
            <Link to="/success" className="submit-section-button" type="submit">
              Pay
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Verification;
