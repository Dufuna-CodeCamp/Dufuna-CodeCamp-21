import React from "react";
import image from "../icons/success.png";
import Navbar from "./Navbar";

export const OrderSuccessful = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-[90vh] justify-center items-center">
        <img src={image} alt="success_icon" className="h-[20%] mb-10" />
        {/* <h1 className="justify-center items-center my-20">How are you</h1> */}
        <p className="mb-2.5 w-[15%] text-center text-[#5EA304] font-bold">
          Order successful
        </p>
        <p className="w-[15%] text-center text-sm text-[#696969]">
          We have started processing your order.
        </p>
      </div>
    </div>
  );
};


