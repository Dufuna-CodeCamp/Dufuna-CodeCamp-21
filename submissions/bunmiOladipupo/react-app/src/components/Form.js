import React from "react";
import { Component } from "react";
import Select from "./Select.js";
import Input from "./Input.js";
import Checkout from "./Checkout.js";

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            phone: "",
            paymentMethod: "",
            cardNumber: "",
            cardName: "",
            expiryDate: "",
            CVV: ""
        }
    }

    render(){
        return(
            <>
                <div>
                    <Input name="phone" title="Phone number" type="text" value={this.state.phone} placeholder="+234" handleChange={this.handleChangePhone} />
                </div>
                <hr />
                <div>
                    <Select name="paymentMethod" value={this.state.paymentMethod} handleChange={this.handleChangePayment}/>
                </div>
                <div>
                    <Input name="card" title="Card number" type="text" value={this.state.cardNumber} placeholder="2345 6789 0123 4567"   handleChange={this.handleChangeCardNumber}/>
                </div>
                <div>
                    <Input name="cardname" title="Card Name" type="text" value={this.state.cardName} placeholder="Adamu John Cynthia"  handleChange={this.handleChangeCardName}/>
                </div>
                <div className="row">
                    <div className="col">
                        <Input name="expiry" title="Expiry date" type="text" value={this.state.expiryDate} placeholder="01/23"  handleChange={this.handleChangeExpiryDate}/>
                    </div>
                    <div className="col">
                        <Input name="cvv" title="CVV" type="text" value={this.state.CVV}  handleChange={this.handleChangeCVV} placeholder="012" />
                    </div>
                </div>
                <Checkout id="btncheckout" name="Pay" link="/Success" checkout={this.verifyMe}/>

            </>
        )
    }

    handleChangePhone = (e) => {
        this.setState({phone: e.target.value});
        console.log(this.state.phone)
    }

    handleChangePayment = (e) => {
        this.setState({paymentMethod: e.target.value});
        console.log(e.target.value
            )
    }

    handleChangeCardNumber = (e) => {
        this.setState({cardNumber: e.target.value});
        console.log(this.state.cardNumber)
    }

    handleChangeCardName = (e) => {
        this.setState({cardName: e.target.value});
        console.log(this.state.cardName)
    }
    handleChangeExpiryDate = (e) => {
        this.setState({expiryDate: e.target.value});
        console.log(this.state.expiryDate)
    }

    handleChangeCVV = (e) => {
        this.setState({CVV: e.target.value});
        console.log(this.state.CVV)
    }

    verifyMe = (event) =>{
        if (this.state.CVV === "" || this.state.cardNumber === "" || this.state.expiryDate === "" || this.state.paymentMethod === "" || this.state.phone === "" || this.state.cardName === "") {
            event.preventDefault();
            alert("Please fill all fields");
        }else{
            return true;
        }
    }
    
}

export default Form;