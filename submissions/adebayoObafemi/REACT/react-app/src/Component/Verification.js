import React from "react";
import { useState } from "react";
import "./verification.css";
import Navigation from "./Navigation";
import radioButton from "../FoodBag-Task-Assets/radio_button_checked.svg";
import { Link } from "react-router-dom";

export default function Verification() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    paymentMethod: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
  });

  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <header>
        <h1 className="logo">
          <Navigation text="Food" />
          <Navigation text="Bag" className="bag" />
        </h1>

        <nav>
          <ul>
            <li>
              <a href="#blank" className="cart">
                <Navigation text="Cart" />
              </a>
            </li>
            <li>
              <a href="#blank" className="login">
                <Navigation text="Login" />
              </a>
            </li>
            <li>
              <a href="#blank" className="signup">
                <Navigation text="Sign Up" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="firstLevelNav">
        <Navigation text="Home" className="Home" />
        <Navigation text=" > " className="navArrow" />
        <Navigation text="Cart" className="firstLevelCart" />
        <Navigation text=" > " className="navArrow" />
        <Navigation text="Verification" className="firstLevelVerification" />
      </div>

      <div className="secondLevelNav">
        <Navigation text="Verification" className="secondLevelCart" />
        <h6>Confirm address and payment</h6>
      </div>

      <main className="container">
        <section className="address">
          <div>
            <h4>Delivery Address</h4>
            <h6>Your order will be delivered to your address</h6>
          </div>
          <div>
            <img src={radioButton} alt="locationChecked" />
          </div>
        </section>

        <form action="#blank">
          <label htmlFor="phoneNumber">Phone number</label>
          <br />
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="+234"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          <hr />
          <label htmlFor="paymentMethod">Payment method</label>
          <br />
          <input
            type="text"
            name="paymentMethod"
            id="paymentMethod"
            placeholder="Card"
            onChange={handleChange}
            value={formData.paymentMethod}
          />
          <br />
          <label htmlFor="cardNumber">Card Number</label>
          <br />
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            placeholder="2345 2345 2345 2345"
            onChange={handleChange}
            value={formData.cardNumber}
          />
          <br />
          <label htmlFor="cardName">Card name</label>
          <br />
          <input
            type="text"
            name="cardName"
            id="cardName"
            placeholder="OBAFEMI ADEBAYO EBENEZER"
            onChange={handleChange}
            value={formData.cardName}
          />
          <br />
          <div className="cardinfo">
            <div className="expiry">
              <label htmlFor="expiryDate">Expiry date</label>
              <br />
              <input
                type=""
                name="expiryDate"
                id="expiryDate"
                placeholder="10/25"
                onChange={handleChange}
                value={formData.expiryDate}
              />
            </div>
            <div className="cvc">
              <label htmlFor="cvc">CVC</label>
              <br />
              <input
                type="number"
                name="cvc"
                id="cvc"
                placeholder="012"
                onChange={handleChange}
                value={formData.cvc}
              />
            </div>
          </div>
          <Link to="./ordersuccess">
            <button className="payment-button">Pay</button>
          </Link>
        </form>
      </main>
    </div>
  );
}
