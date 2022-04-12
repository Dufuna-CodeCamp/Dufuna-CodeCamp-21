import React from "react";
import BreadCrumbPart from "../components/BreadCrumbPart";
import Input from "../components/Input";
import Pay from "../components/Pay";
import Select from "../components/Select";
import radio from "../assets/radio.svg";

class Verification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: "",
            paymentMethod: "",
            cardNumber: "",
            cardName: "",
            expiryDate: "",
            cvc: "",
            options: ["Card", "Cash", "Mobile Money", "Crypto"]
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    handlePayClick = (event) => {
        event.preventDefault();
        const {phoneNumber, paymentMethod, cardNumber, cardName, expiryDate, cvc} = this.state;

        if (phoneNumber !== "" && paymentMethod !== "" && cardNumber !== "" && cardName !== "" && expiryDate !== "" && cvc !== "") {
            window.alert("Submitted successfully");
        }

        else {
            window.alert("Please fill in all fields");
        }
    }

    render() {
        return (
            <form className="container">
                <div id="verification-breadcrumb">
                    <BreadCrumbPart crumbName="Home > " crumbColor="#C9C9C9" />
                    <BreadCrumbPart crumbName="Cart > " crumbColor="#C9C9C9" />
                    <BreadCrumbPart crumbName="Verification" crumbColor="#000000" />
                </div>

                <div id="verification-header-text">Verification</div>
                <div id="cap">Confirm address &amp; Payment</div>
                <div id="da">Delivery Address</div>
                <div id="da-text">Your order will be deliverd to your address</div>

                <img id="radio" src={radio} alt="radio" />

                <Input title="Phone number" name="phoneNumber" type="text" value={this.state.phoneNumber} placeholder="+234" handleChange={this.handleInputChange} />

                <hr id="verification-hr" />

                <Select name="paymentMethod" title="Payment method" options={this.state.options} value={this.state.paymentMethod} handleChange={this.handleInputChange} />
                <Input title="Card Number" name="cardNumber" type="number" value={this.state.cardNumber} placeholder="2345 6543 7868 2343" handleChange={this.handleInputChange} />
                <Input title="Card name" name="cardName" type="text" value={this.state.cardName} placeholder="TOLUWALASE KENNY OJO" handleChange={this.handleInputChange} />

                <div className="col left">
                    <Input title="Expiry date" name="expiryDate" type="text" value={this.state.expiryDate} placeholder="01/23" handleChange={this.handleInputChange} />
                </div>
                
                <div className="col right">
                    <Input title="CVC" name="cvc" type="number" value={this.state.cvc} placeholder="012" handleChange={this.handleInputChange} />
                </div>

                <Pay onButtonClick={this.handlePayClick} />
            </form>
        );
    }
}

export default Verification;