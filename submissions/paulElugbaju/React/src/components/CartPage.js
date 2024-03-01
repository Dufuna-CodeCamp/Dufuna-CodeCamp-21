import React, { useState } from "react";
import { CartItems } from "./CartItems";
import kingbucket from "../icons/kingbucket.png";
import refuelmax1 from "../icons/refuelmax1.png";
import refuelmax2 from "../icons/refuelmax2.png";
import delivery from "../icons/delivery.png";
import Navbar from "./Navbar";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [kfcItemQuantity, setKfcItemQuantity] = useState(0);
  const [rm1ItemQuantity, setRm1ItemQuantity] = useState(0);
  const [rm2ItemQuantity, setRm2ItemQuantity] = useState(0);
  const [kfcPrice, increaseKfcPrice] = useState(0);
  const [rm1Price, increaseRm1Price] = useState(0);
  const [rm2Price, increaseRm2Price] = useState(0);
  const deliveryFee = 1200;
  const navigateTo = useNavigate;
  const totalFee = kfcPrice + rm1Price + rm2Price + deliveryFee;
  const totalItems = kfcItemQuantity + rm1ItemQuantity + rm2ItemQuantity;

  const increaseKfcQuantity = () => {
    setKfcItemQuantity(kfcItemQuantity + 1);
    increaseKfcPrice(kfcPrice + 5000);
  };

  const decreaseKfcQuantity = () => {
    if (kfcItemQuantity === 0) {
      setKfcItemQuantity(kfcItemQuantity);
      increaseKfcPrice(kfcPrice);
    } else {
      setKfcItemQuantity(kfcItemQuantity - 1);
      increaseKfcPrice(kfcPrice - 5000);
    }
  };

  const increaseRm1Quantity = () => {
    setRm1ItemQuantity(rm1ItemQuantity + 1);
    increaseRm1Price(rm1Price + 1200);
  };

  const decreaseRm1Quantity = () => {
    if (rm1ItemQuantity === 0) {
      setRm1ItemQuantity(rm1ItemQuantity);
      increaseRm1Price(rm1Price);
    } else {
      setRm1ItemQuantity(rm1ItemQuantity - 1);
      increaseRm1Price(rm1Price - 1200);
    }
  };

  const increaseRm2Quantity = () => {
    setRm2ItemQuantity(rm2ItemQuantity + 1);
    increaseRm2Price(rm2Price + 1200);
  };

  const decreaseRm2Quantity = () => {
    if (rm2ItemQuantity === 0) {
      setRm2ItemQuantity(rm2ItemQuantity);
      increaseRm2Price(rm2Price);
    } else {
      setRm2ItemQuantity(rm2ItemQuantity - 1);
      increaseRm2Price(rm2Price - 1200);
    }
  };

  const clear = () => {};

  const handleCheckout = (e) => {
    e.preventDefault();

    navigateTo("/Verification");
  };

  return (
    <div>
      <Navbar />
      <div className="mx-10 mb-6 pr-2">
        <div className="mt-20">
          <span className="text-xs text-[#c4c4c4]">Home &gt;</span>{" "}
          <span className="text-sm font-bold inline">Cart</span>
        </div>
        <h2 className="mt-4 mb-12 font-bold text-lg max-[600px]:mb-2">Cart</h2>
        <div className="flex justify-between pr-2 text-[#ad4c4c] min-[601px]:hidden">
          <span>{totalItems} items</span>{" "}
          <span
            className="underline underline-offset-1  font-bold"
            onClick={clear}
          >
            Remove all
          </span>
        </div>
        <CartItems
          src={kingbucket}
          alt="King_Bucket"
          title="KFC - King Bucket"
          quantity={kfcItemQuantity}
          handleIncrease={increaseKfcQuantity}
          handleDecrease={decreaseKfcQuantity}
          price={kfcPrice}
        />
        <CartItems
          src={refuelmax1}
          alt="Refuel_max1"
          title="Refuel Max"
          quantity={rm1ItemQuantity}
          handleIncrease={increaseRm1Quantity}
          handleDecrease={decreaseRm1Quantity}
          price={rm1Price}
        />
        <CartItems
          src={refuelmax2}
          alt="Refuel_max2"
          title="Refuel Max"
          quantity={rm2ItemQuantity}
          handleIncrease={increaseRm2Quantity}
          handleDecrease={decreaseRm2Quantity}
          price={rm2Price}
        />
        <div>
          <div className="flex items-center justify-between w-2/3 mx-auto mt-4 max-[600px]:w-[90%]">
            <div className="inline-flex items-center">
              <img src={delivery} alt="delivery" className="ml-[10px] mr-8" />
              <span className="font-bold text-sm text-[#434d4d]">
                Delivery fee
              </span>{" "}
            </div>
            <span>&#35;{deliveryFee}</span>
          </div>
          <hr className="w-2/3 mx-auto mt-4 border border-solid border-[#c4c4c4]-500 max-[600px]:w-[90%]" />
        </div>
        <div>
          <div className="flex items-center justify-between w-2/3 mx-auto mt-4 max-[600px]:w-[90%]">
            <span className="font-bold text-lg text-[#434d4d]">Total</span>{" "}
            <span className="font-bold text-lg">&#35;{totalFee}</span>
          </div>
        </div>
      </div>
      <Button
        title="Checkout"
        buttonClass=" text-center border  bg-[#ad4c4c] w-[60%] rounded py-1.5 text-white text-sm max-[600px]:w-[90%]"
        class="mt-8 flex justify-center mb-6"
        handleClick={handleCheckout}
      />
    </div>
  );
}
