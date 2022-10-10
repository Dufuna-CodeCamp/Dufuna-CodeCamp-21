import React, { useState } from "react";
import Header from "./header";
import Input from "./input";
import Select from "./select";
import FullBorder from "./FullBorder";
import './verification.css'
import Button from "./button";
import { useNavigate } from "react-router-dom";




const Verification = (props) => {
 
 const [states, setStates] = useState({
  phoneNum: "",
  cardNum: "",
  cardName: "",
  expiryDate: "",
  cvc: "",
  paymentMethod: "",
  paymentOptions: ["Card", "Bank Transfer", "Pay On Delivery"]
})

const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setStates({...states, phoneNum: e.target.value})
  }

  const handleCardNumChange = (e) => {
    setStates({...states, cardNum: e.target.value})
    console.log(states.cardNum)
  }

  const handleCardNameChange = (e) => {
    setStates({...states, cardName: e.target.value})
    console.log(states.cardName)
  }

  const handleExpiryChange = (e) => {
    setStates({...states, expiryDate: e.target.value})
    console.log(states.expiryDate)
  }

  const handleCvcChange = (e) => {
    setStates({...states, cvc: e.target.value})
    console.log(states.cvc)
  }

  const handlePaymentChange = (e) => {
    setStates({...states, cvc: e.target.value})
    console.log(states.cvc)
  }

  const handlePayment = () => {
    navigate('/OrderSuccess')
  }

  

  return (
    <div>
      <Header grey="Home > Cart > " bold="Verification" />
      <div>
        <h2 id="cart-title-head">Verification</h2>
        <h3 id="verification-subtitle-head">Confirm address & Payment</h3>

        

        <div id="address-div">
          <div className="address-div">
            <h3 id="delivery-text">Delivery Address</h3>
            <p id="address-text">Your order will be delivered to your address</p>
          </div>
          
          <input type="radio"  checked id="address-radio-btn"/>
        </div>

       </div>

      <Input 
      title="Phone Number" 
      placeholder="+234" 
      inputType="number" 
      name="Phone" 
      value={states.phoneNum } 
      inputChange={handlePhoneChange} 
      />

      <FullBorder />

      <Select title="Payment Method"
        name="payment"
        value={states.paymentMethod}
        options={states.paymentOptions}
        selectChange={handlePaymentChange}
        />

      <Input 
        title="Card Number" 
        placeholder="2345 6789 4563 2354" 
        inputType="number" 
        name="card-number" 
        value={states.cardNum } 
        inputChange={handleCardNumChange} />

      <Input title="Card Name" placeholder="TOBI TOYO" type="text" name="card-name" value={states.cardName } inputChange={handleCardNameChange} />

      <div className="card-details">
        <div className="card-det">
          <Input title="Expiry Date" placeholder="01/23" inputType="number" name="expiry-date" value={states.expiryDate } inputChange={handleExpiryChange} />
        </div>

        <div className="card-det">
          <Input title="CVC" placeholder="012" inputType="number" name="cvc" value={states.cvc } inputChange={handleCvcChange} />
        </div>

      </div>

      <Button  className="checkout-btn" title="Pay" btnClick={handlePayment} />

    </div>
  )
  }


export default Verification;