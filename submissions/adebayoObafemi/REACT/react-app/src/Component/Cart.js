import Menu from "./Menu";
import Navigation from "./Navigation";
import Button from "./Button";
import { useState } from "react";
import close from "../FoodBag-Task-Assets/close.svg";
import kfcImage from "../FoodBag-Task-Assets/image4.svg";
import refuelImg1 from "../FoodBag-Task-Assets/image3.svg";
import refuelImg2 from "../FoodBag-Task-Assets/image1.svg";
import scooter from "../FoodBag-Task-Assets/scooter.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const menuList = [
    {
      id: 1,
      name: "KFC - king Bucket",
      price: 5000,
      image1: close,
      image2: kfcImage,
      count: 0,
    },
    {
      id: 2,
      name: "Refuel Max",
      price: 1200,
      image1: close,
      image2: refuelImg1,
      count: 0,
    },
    {
      id: 3,
      name: "Refuel Max",
      price: 1200,
      image1: close,
      image2: refuelImg2,
      count: 0,
    },
  ];

  const delivery = {
    id: "delivery",
    name: "Delivery Fee",
    price: 1200,
    image: scooter,
    total: "5000",
  };

  const [items, setItems] = useState(menuList);
  // console.log(items);
  const total =
    items.reduce((a, item) => a + item.price * item.count, 0) === 0
      ? 0
      : items.reduce((a, item) => a + item.price * item.count, 0) +
        delivery.price;

  const totalCount =
    items.reduce((a, item) => a + item.count, 0) === 0
      ? 0
      : items.reduce((a, item) => a + item.count, 0);

  function incrementCount(id) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === id ? { ...item, count: item.count + 1 } : item;
      });
    });
  }

  function decrementCount(id) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item;
      });
    });
  }

  function resetCount() {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.count > 0 ? { ...item, count: 0 } : item;
      });
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
      </div>

      <div className="secondLevelNav">
        <Navigation text="Cart" className="secondLevelCart" />
      </div>

      <div className="cartItemsTotal">
        <Navigation
          text={totalCount <= 1 ? `${totalCount} item` : `${totalCount} items`}
        />
        <Navigation text="Remove all" onClick={resetCount} />
      </div>

      <div className="cart">
        {items.map((item) => (
          <div key={item.id}>
            <Menu
              count={item.count}
              incrementCount={() => incrementCount(item.id)}
              decrementCount={() => decrementCount(item.id)}
              id={item.id}
              image1={item.image1}
              image2={item.image2}
              name={item.name}
              price={item.price}
            />
            <hr className="cart-hr" />
          </div>
        ))}
      </div>

      <div id={delivery.id}>
        <div className="delivery">
          <img src={delivery.image} alt="scooter" />
          <h3 className="deliveryText">{delivery.name}</h3>
        </div>
        <div className="deliveryFee">
          <h3>
            {totalCount
              ? delivery.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  maximumFractionDigits: 0,
                })
              : Number(0).toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
          </h3>
        </div>
      </div>
      <hr />

      <div className="total">
        <div>
          <h2>Total</h2>
        </div>
        <div className="totalFee">
          <h4>
            {total.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
              maximumFractionDigits: 0,
            })}
          </h4>
        </div>
      </div>

      <div>
        <Link to="verification">
          <Button text="Checkout" className="checkout-button" />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
