
// This component is redundat. I converted it to a functional component so I could use usenavigate to go to the order success page


import React, { Component } from "react";
import Header from "./header";
import Input from "./input";
import Select from "./select";
import FullBorder from "./FullBorder";
import './verification.css'
import Button from "./button";




class Verification extends Component {

  constructor(props) {
    super(props)

    this.state = {
      phoneNum: "",
      cardNum: "",
      cardName: "",
      expiryDate: "",
      cvc: "",
      paymentMethod: "",
      paymentOptions: ["Card", "Bank Transfer", "Pay On Delivery"]
    }
  }



  handlePhoneChange = (e) => {
    this.setState({phoneNum: e.target.value})
    console.log(this.state.phoneNum)
  }

  handleCardNumChange = (e) => {
    this.setState({cardNum: e.target.value})
    console.log(this.state.cardNum)
  }

  handleCardNameChange = (e) => {
    this.setState({cardName: e.target.value})
    console.log(this.state.cardName)
  }

  handleExpiryChange = (e) => {
    this.setState({expiryDate: e.target.value})
    console.log(this.state.expiryDate)
  }

  handleCvcChange = (e) => {
    this.setState({cvc: e.target.value})
    console.log(this.state.cvc)
  }

  handlePaymentChange = (e) => {
    this.setState({cvc: e.target.value})
    console.log(this.state.cvc)
  }

  handlePayment = () => {
    this.props.navigation.navigate('/Success')
  }

  render(){

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
      value={this.state.phoneNum } 
      inputChange={this.handlePhoneChange} 
      />

      <FullBorder />

      <Select title="Payment Method"
        name="payment"
        value={this.state.paymentMethod}
        options={this.state.paymentOptions}
        selectChange={this.handlePaymentChange}
        />

      <Input 
        title="Card Number" 
        placeholder="2345 6789 4563 2354" 
        inputType="number" 
        name="card-number" 
        value={this.state.cardNum } 
        inputChange={this.handleCardNumChange} />

      <Input title="Card Name" placeholder="TOBI TOYO" type="text" name="card-name" value={this.state.cardName } inputChange={this.handleCardNameChange} />

      <div className="card-details">
        <div className="card-det">
          <Input title="Expiry Date" placeholder="01/23" inputType="number" name="expiry-date" value={this.state.expiryDate } inputChange={this.handleExpiryChange} />
        </div>

        <div className="card-det">
          <Input title="CVC" placeholder="012" inputType="number" name="cvc" value={this.state.cvc } inputChange={this.handleCvcChange} />
        </div>

      </div>

      <Button  className="checkout-btn" title="Pay" btnClick={this.handlePayment} />

    </div>
  )
  }
}

export default Verification;