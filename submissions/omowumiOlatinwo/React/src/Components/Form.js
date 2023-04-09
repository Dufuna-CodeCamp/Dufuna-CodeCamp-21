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
            <br></br>
                <div>
                    <h5><Input name="phone"  title="Phone number" type="text" value={this.state.phone} placeholder="+234" handleChange={this.handleChangePhone} /></h5>
                </div>
                <br></br>
                <hr />
                <div>
                <h5><Select name="paymentMethod" value={this.state.paymentMethod} handleChange={this.handleChangePayment}/></h5>
                </div>
                <br></br>
                <div>
                <h5> <Input name="card" title="Card number" type="text" value={this.state.cardNumber} placeholder="2345 3333 3333 5555"   handleChange={this.handleChangeCardNumber}/></h5>
                </div>
                <br></br>
                <div>
                <h5><Input name="cardname" title="Card name" type="text" value={this.state.cardName} placeholder="Omowumi Aishat"  handleChange={this.handleChangeCardName}/></h5>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <h5><Input name="expiry" title="Expiry date" type="text" value={this.state.expiryDate} placeholder="01/23"  handleChange={this.handleChangeExpiryDate}/></h5>
                    </div>
                    <div className="col">
                        <h5><Input name="cvv" title="CVV" type="text" value={this.state.CVV}  handleChange={this.handleChangeCVV} placeholder="012" /></h5>
                    </div>
                </div>
                <br></br>
                <Checkout id="btncheckout" name="Pay" link="/Success" checkout={this.verifyMe}/>

            </>
        )
    }

    handleChangePhone = (e) => {
        this.setState({phone: e.target.value});
    }

    handleChangePayment = (e) => {
        this.setState({paymentMethod: e.target.value});
    }

    handleChangeCardNumber = (e) => {
        this.setState({cardNumber: e.target.value});
    }

    handleChangeCardName = (e) => {
        this.setState({cardName: e.target.value});
    }
    handleChangeExpiryDate = (e) => {
        this.setState({expiryDate: e.target.value});
    }

    handleChangeCVV = (e) => {
        this.setState({CVV: e.target.value});
    }

    verifyMe = (event) =>{
        if (this.state.CVV === "" || this.state.cardNumber === "" || this.state.expiryDate === "" || this.state.paymentMethod === "" || this.state.phone === "" || this.state.cardName === "") {
            event.preventDefault();
            alert("Please fill in all details");
        }else{
            return true;
        }
    }
    
}

export default Form;