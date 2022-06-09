import React, { Component } from "react";
import Header from "./Header";
import HomeNav2 from "./HomeNav2";
import Input from "./Input";
import Select from "./Select";
import PayButton from "./PayButton";

class VerificationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvc: "",
      paymentMethod: "",
      paymentOptions: ["Card"],
      show: false,
      showInput: false,
      link: "/success",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.showPayButton();
    this.showInputFields();
    this.displayErrorPage();
  };

  showPayButton = () => {
    if (
      this.state.paymentMethod !== "" &&
      this.state.phoneNumber !== "" &&
      this.state.cardNumber !== "" &&
      this.state.cardName !== "" &&
      this.state.expiryDate !== "" &&
      this.state.cvc.length >= 2
    ) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  };

  showInputFields = () => {
    const { phoneNumber, paymentMethod } = this.state;

    if (phoneNumber.length >= 10) {
      this.setState({
        showInput: true,
      });
    } else if (paymentMethod !== "" && phoneNumber.length === 10) {
      this.setState({
        showInput: true,
      });
    }
  };

  displayErrorPage() {
    const { cardNumber } = this.state;

    if (cardNumber.length < 16) {
      this.setState({
        link: "/failed",
      });
    } else {
      this.setState({
        link: "/success",
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <HomeNav2 />
        <Input
          title="Phone number"
          type="number"
          class="phone"
          name="phoneNumber"
          div="phone-number"
          placeholder="Please enter 11 digit phone number"
          handleChange={this.handleInputChange}
          value={this.state.phoneNumber}
          showInput={true}
          maxLength={11}
        />
        <hr id="after" />
        <Select
          title="Payment method"
          name="paymentMethod"
          value={this.state.paymentMethod}
          options={this.state.paymentOptions}
          handleChange={this.handleInputChange}
          placeholder="Select a payment method"
        />
        <Input
          title="Card Number"
          type="number"
          class="number"
          name="cardNumber"
          div="card-number"
          placeholder="Please enter 16 digit card number"
          handleChange={this.handleInputChange}
          value={this.state.cardNumber}
          showInput={this.state.showInput}
          maxLength={16}
        />
        <Input
          title="Card name"
          type="text"
          class="name"
          name="cardName"
          div="card-name"
          placeholder="Please enter card name"
          handleChange={this.handleInputChange}
          value={this.state.cardName}
          showInput={this.state.showInput}
        />
        <div className="last-two">
          <Input
            type="date"
            title="Expiry date"
            class="exp"
            name="expiryDate"
            div="expiry-date"
            placeholder="Please enter card expiry date"
            handleChange={this.handleInputChange}
            value={this.state.expiryDate}
            showInput={this.state.showInput}
          />
          <Input
            title="CVC"
            type="number"
            class="cvc-input"
            name="cvc"
            div="cvc"
            placeholder="Please enter CVV"
            handleChange={this.handleInputChange}
            value={this.state.cvc}
            showInput={this.state.showInput}
            maxLength={3}
          />
        </div>
        <PayButton
          show={this.state.show}
          onPayButtonClick={this.displayErrorPage}
          link={this.state.link}
        />
      </div>
    );
  }
}

export default VerificationPage;
