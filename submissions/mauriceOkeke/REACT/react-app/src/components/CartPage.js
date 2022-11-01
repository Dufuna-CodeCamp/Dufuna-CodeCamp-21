import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/bigBucket.png";
import scooter from "../images/scooter.png";
import refuel from "../images/Refuel.png";
import refuel2 from "../images/Refuel2.png";
import Header from "./Header";
import ProductCheckout from "./ProductCheckout";

const CartPage = () => {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  const prices = {
    item1: 5000,
    item2: 1200,
    item3: 1200,
    deliveryFee: 1200,
  };

  if (counter === 0 && counter1 === 0 && counter2 === 0) {
    prices.deliveryFee = 0;
  }

  useEffect(() => {
    if (counter <= 0) {
      setCounter(0);
    }
    if (counter1 <= 0) {
      setCounter1(0);
    }
    if (counter2 <= 0) {
      setCounter2(0);
    }
  }, [counter, counter1, counter2]);

  return (
    <>
      <Header />
      <div className="home">
        Home {" > "}
        <p className="name-active"> Cart</p>
      </div>

      <main>
        <h2 className="title">
          <strong>Cart</strong>
        </h2>
        <div className="cartPage-actions">
          <p className="number-items"> 4 items</p>
          <button className="removeAll">Remove all</button>
        </div>
        {/* Products */}
        <ProductCheckout
          image={image}
          counter={counter}
          name={"KFC - King Bucket"}
          price={(prices.item1 = prices.item1 * counter)}
          increaseNumber={() => setCounter(counter + 1)}
          decrementNumber={() => setCounter(counter - 1)}
        />

        <div className="cartItem">
          <div className="deleteItem">X</div>
          <img src={refuel} alt="item" className="itemImage" />
          <div className="item-details">
            <p>{"Refuel Max"}</p>
            <div className="item-cta">
              <button
                className="addItem"
                onClick={() => setCounter1(counter1 + 1)}
              >
                +
              </button>
              <span className="itemCount">{counter1}</span>
              <button
                className="removeItem"
                onClick={() => setCounter1(counter1 - 1)}
              >
                -
              </button>
            </div>
          </div>
          <p className="itemPrice">
            #{(prices.item2 = prices["item2"] * counter1)}
          </p>
        </div>

        <ProductCheckout
          image={refuel2}
          counter={counter2}
          name={"Refuel Max"}
          price={(prices.item3 = prices["item3"] * counter2)}
          increaseNumber={() => setCounter2(counter2 + 1)}
          decrementNumber={() => setCounter2(counter2 - 1)}
        />
        {/* Delivery fee */}
        <div className="delivery">
          <img src={scooter} alt="item" className="delivery-image" />

          <p className="delivery-title">Delivery fee</p>
          <p className="deliveryFee">#{prices.deliveryFee}</p>
        </div>
        <div className="total">
          {/* Push items to the array */}

          <strong>Total </strong>
          <span className="total-fee">
            <strong>
              #{prices.item1 + prices.item2 + prices.item3 + prices.deliveryFee}
            </strong>
          </span>
        </div>

        <Link to="/Verification">
          <button className="checkout" type="submit">
            Checkout
          </button>
        </Link>
      </main>
    </>
  );
};

export default CartPage;
