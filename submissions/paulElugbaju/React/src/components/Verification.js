import React, { Component } from "react";
import Navbar from "./Navbar";
import { Input } from "./input";
import { Select } from "./select";
import { Button } from "./Button";
import { OrderSuccessful } from "./OrderSuccessful";

export default class Verification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pnumber: "",
      cardnumber: "",
      payment: "",
      paymentMethod: ["Card", "Mobile Transfer", "Others"],
      expiry: "",
      cvc: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePay = (e) => {
    e.preventDefault();
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="mx-10 mb-6 pr-2">
          <div className="mt-20">
            <span className="text-xs text-[#c4c4c4]">Home &gt;</span>{" "}
            <span className="text-xs text-[#c4c4c4]">Cart &gt;</span>{" "}
            <h2 className="text-sm font-bold inline">Verification</h2>
          </div>
          <div className="mt-6 text-xl font-bold">Verification</div>
          <div className="mt-1 text-xs text-[#ad4c4c] font-bold">
            Confirm address & payment
          </div>
          
          <div className="mt-1 flex justify-between items-center">
            <p className="text-xs">
              
            </p>
            <input
              type="radio"
              className="accent-[#ad4c4c] w-4 h-4 mb-[-130px]"
              defaultChecked
            />
          </div>
          <div className="">
            <Input
              labelClass="mt-6 block font-bold"
              title="Delivery Address"
              inputClass="mt-1 outline-none border-none w-[95%] pr-6 py-1 text-xs rounded inline-flex"
              name="address"
              type="text"
              value={this.state.address}
              placeholder="Your order will be deivered to your address"
              handleChange={this.handleInputChange}
            />
          </div>

          <Input
            labelClass="mt-6 block font-bold"
            title="Phone Number"
            inputClass="mt-1 outline-none border border-solid border-[#C4C4C4] w-full px-6 py-2 text-sm rounded"
            name="pnumber"
            type="number"
            value={this.state.pnumber}
            placeholder="+234"
            handleChange={this.handleInputChange}
          />

          <hr className="my-10 border border-solid border-[#c4c4c4]-500" />

          <Select
            labelClass="mt-6 block font-bold"
            name="paymentmethod"
            title="Payment Method"
            value="payment"
            placeholder="Select your payment method"
            options={this.state.paymentMethod}
            handleChange={this.handleInputChange}
            selectClass="mt-1 outline-none border border-solid border-[#C4C4C4] w-full px-6 py-2 text-sm rounded"
          />

          <Input
            labelClass="mt-6 block font-bold"
            title="Card Number"
            inputClass="mt-1 outline-none border border-solid border-[#C4C4C4] w-full px-6 py-2 text-sm rounded"
            name="cardnumber"
            type="number"
            placeholder="2345 6543 7868 2343"
            value={this.state.cardnumber}
            handleChange={this.handleInputChange}
          />

          <Input
            labelClass="mt-6 block font-bold"
            title="Card Name"
            inputClass="mt-1 outline-none border border-solid border-[#C4C4C4] w-full px-6 py-2 text-sm rounded"
            name="cardname"
            type="text"
            placeholder="TOLUWALASE KENNY OJO"
            value={this.state.cardname}
            handleChange={this.handleInputChange}
          />

          <div className="flex">
            <Input
              labelClass="mt-6 block font-bold"
              title="Expiry Date"
              inputClass="mt-1 outline-none border border-solid border-[#C4C4C4] w-[100%] px-6 py-2 text-sm rounded"
              name="expiry"
              type="number"
              placeholder="01/23"
              value={this.state.expiry}
              handleChange={this.handleInputChange}
              class="w-1/2 mr-2"
            />

            <Input
              labelClass="mt-6 block font-bold"
              title="CVC"
              inputClass="mt-1 outline-none border border-solid border-[#C4C4C4] w-[100%] px-6 py-2 text-sm rounded"
              name="cvc"
              type="number"
              placeholder="012"
              value={this.state.cvc}
              handleChange={this.handleInputChange}
              class="w-1/2 ml-2"
            />
          </div>

          <Button
            title="Pay"
            buttonClass=" text-center border  bg-[#ad4c4c] w-[70%] rounded py-1.5 text-white text-sm max-[600px]:w-[100%]"
            class="mt-8 flex justify-center"
            handleClick={this.handlePay}
            to={<OrderSuccessful />}
          />
        </div>
      </div>
    );
  }
}
