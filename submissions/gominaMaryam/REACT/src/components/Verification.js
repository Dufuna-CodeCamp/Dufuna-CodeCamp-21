import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./verification.css";

const Verification = () => {
  const [inputValue, setInputValue] = useState({
    phoneNumber: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    CVC: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section>
        <div>
          <p className="nav">
            <span>Home {`>`} </span>
            <span>Cart {`>`} </span>Verification
          </p>
        </div>
      </section>
      <h2 className="head-page">Verification</h2>
      <p className="confirm-add">Confirm address & Payments</p>
      <div className="delivery-add">
        <div>
          <h5>Delivery Address</h5>
          <p>Your order will be deliverd to your address</p>
        </div>
        <input
          onChange={handleInputChange}
          type="radio"
          name="confirmDelivery"
          id="confirmDelivery"
          checked
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            onChange={handleInputChange}
            type="tel"
            name="phoneNumber"
            value={inputValue.phoneNumber}
            required
            id="phoneNumber"
            placeholder="+234"
          />
        </div>
        <div className="v-line"></div>
        <div className="form-box">
          <label htmlFor="paymentMethod">Payment method</label>
          <select
            name="paymentMethod"
            required
            id="paymentMethod"
            placeholder="Card"
          >
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>
        <div className="form-box">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            onChange={handleInputChange}
            type="number"
            name="cardNumber"
            value={inputValue.cardNumber}
            required
            id="cardNumber"
            placeholder="2345 6543 7868 2343"
          />
        </div>
        <div className="form-box">
          <label htmlFor="cardName">Card Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="cardName"
            value={inputValue.cardName}
            required
            id="cardName"
            placeholder="TOLUWALASE KENNY OJO"
          />
        </div>
        <div className="v-divide">
          <div className="form-box">
            <label htmlFor="expiryDate">Expiry date</label>
            <input
              onChange={handleInputChange}
              type="number"
              name="expiryDate"
              value={inputValue.expiryDate}
              required
              id="expiryDate"
              placeholder="01/23"
            />
          </div>
          <div className="form-box">
            <label htmlFor="CVC">CVC</label>
            <input
              onChange={handleInputChange}
              type="number"
              maxLength={3}
              name="CVC"
              value={inputValue.CVC}
              required
              id="CVC"
              placeholder="123"
            />
          </div>
        </div>

        <div className="pay">
          <Link to="/order-successful">
            <button>pay</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Verification;
