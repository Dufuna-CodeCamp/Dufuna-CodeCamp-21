import * as React from "react";
import "./index.scss";
import Navbar from "../../components/navbar/navbar";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import CartItems from "../../components/cartItems/cartItems";
import ChickenBucket from "../../assets/svgs/kfc.svg";
import ChickenBucketMobile from "../../assets/svgs/kfc-mobile.svg";
import RefuelMax from "../../assets/svgs/coke.svg";
import RefuelMaxMobile from "../../assets/svgs/coke-mobile.svg";
import RefuelMax2 from "../../assets/svgs/pot.svg";
import RefuelMax2Mobile from "../../assets/svgs/pot-mobile.svg";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";

export function CartPage() {
  const navigate = useNavigate();
  const cartItems = [
    {
      id: 0,
      image: ChickenBucket,
      name: "KFC - King Bucket",
      price: "5000",
      mobile: ChickenBucketMobile,
      quantity: 0,
    },
    {
      id: 1,
      image: RefuelMax,
      name: "Refuel Max",
      price: "1200",
      mobile: RefuelMaxMobile,
      quantity: 0,
    },
    {
      id: 2,
      image: RefuelMax2,
      name: "Refuel Max",
      price: "1200",
      mobile: RefuelMax2Mobile,
      quantity: 0,
    },
  ];
  const [cartItemsState, setCartItemsState] = React.useState(cartItems);

  const HandleIncrement = (product) => {
    const newProducts = cartItemsState.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItemsState(newProducts);
  };

  const HandleDecrement = (product) => {
    const newProducts = cartItemsState.map((item) => {
      if (item.id === product.id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItemsState(newProducts);
  };

  const HandleRemove = (product) => {
    const newProducts = cartItemsState.filter((item) => item.id !== product.id);
    setCartItemsState(newProducts);
  };

  const total = cartItemsState.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const sumTotal = total + 1200;

  return (
    <div className="cart__page">
      <Navbar />
      <Breadcrumb />
      <h2 className="cart__page--title">Cart</h2>
      <CartItems
        props={cartItemsState}
        HandleDecrement={HandleDecrement}
        HandleIncrement={HandleIncrement}
        HandleRemove={HandleRemove}
        total={total}
      />
      <div className="cart__total">
        <p className="cart__total--text">Total</p>
        <p className="cart__total--price">₦{sumTotal}</p>
      </div>
      <Button
        onClick={() => {
          sumTotal > 1200 && navigate("/verification");
        }}
        children="Checkout"
        className="normal"
      />
    </div>
  );
}
