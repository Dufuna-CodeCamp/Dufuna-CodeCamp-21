import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Verification = () => {
  const initialValues = {
    phone: "",
    price: "",
    select: "",
    "card-number": "",
    "card-name": "",
    "expiry-date": "",
    cvc: "",
  };
  const [userData, setUserData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const activeStyle = {
    color: "#000000",
  };

  const inActiveStyle = {
    color: "#c9c9c9",
  };

  return (
    <>
      <Header />
      {/* Breadcomb */}
      <ul className="breadcrumb">
        <li>
          <NavLink
            to="Home"
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Cart
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/Verification"}
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Verification
          </NavLink>
        </li>
      </ul>

      <section className="hero-verification">
        <div className="hero-verification__title">
          <h2>Verification</h2>
          <p>Confirm address & Payment</p>
        </div>
        <div className="hero-verification__address">
          <h3>Delivery Address</h3>
          <p>Your order will be delivered to your address</p>

          <div className="location"></div>
        </div>
      </section>
      {/* form for submission */}
      <form action="/Success">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name={"phone"}
          type={"tel"}
          value={userData.phone}
          onChange={handleChange}
          required
        />
        <hr />
        <label htmlFor="payment-method">Payment Method</label> <br />
        <select
          id="payment-method"
          value={userData.select}
          onChange={handleChange}
          name={"select"}
          required
        >
          <option value="card">Card</option>
          <option value="master-card">Master Card</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
        <br />
        <label htmlFor="card-number">Card Number</label>
        <input
          id="card-number"
          name={"card-number"}
          type={"number"}
          value={userData["card-number"]}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="card-name">Card name</label> <br />
        <input
          id="card-name"
          name={"card-name"}
          type={"text"}
          value={userData["card-name"]}
          onChange={handleChange}
          required
        />
        <br />
        <div className="last-part">
          <div>
            <label htmlFor="expiry-date">Expiry Date</label>
            <input
              id="expiry-date"
              name={"expiry-date"}
              type={"date"}
              value={userData["expiry-date"]}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              name={"cvc"}
              type={"text"}
              value={userData.cvc}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <input type="submit" value="Pay" />
      </form>
      {/* End of form */}
    </>
  );
};

export default Verification;
