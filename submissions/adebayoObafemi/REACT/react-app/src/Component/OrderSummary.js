import React from "react";
import Navigation from "./Navigation";
import "./ordersummary.css";
import orderSuccessImage from "../FoodBag-Task-Assets/Illustration_success.svg";

export default function OrderSummary() {
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

      <main class="orderSummaryContainer">
        <img src={orderSuccessImage} alt="success" />
        <h3 class="success">Order successful</h3>
        <p class="success">We have started processing your order.</p>
      </main>
    </div>
  );
}