import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../css/Verification.css";



class Verification extends Component{
    constructor(props){
        super(props);

        this.state = {
            phoneNumber:"",
            paymentMethod: "Card",
            cardNumber: "",
            cardName: "",
            expiryDate: "",
            cvc: "",
            options: ["Card", "Bitcoin", "Others"],
        }
    }

    handleInputChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }

    showSuccess = (event) =>{
        event.preventDefault();
    }

    render(){
        return(
            <div >
                <div style={{marginTop: "50px", marginBottom: "50px"}}>
                    <p><span style={{color: "rgb(212, 205, 205)"}}>Home &#62; Cart &#62;</span>Verification</p>
                    <h2 style={{marginTop: "30px"}}>Verification</h2>
                    <p style={{color: "brown"}}>Confirm address & Payment</p>

                    <div className="title-items-show">
                        <div>
                            <h3>Delivery Address</h3>
                            <p>Your order will be delivered to your address</p>
                        </div>
                        <input type = "radio" checked = {true} readOnly = {true} className="address-radio"></input>
                    </div>
                </div>
                <form onSubmit={this.showSuccess}>
                    <div className= "form-group">
                        <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                        <input
                            className="form-control"
                            type="text"
                            id="phoneNumber"
                            value={this.state.phoneNumber}
                            placeholder="+234"
                            name="phoneNumber"
                            onChange={this.handleInputChange}
                            />
                    </div>
                    <hr/>

                    
                    <div className="form-group" style={{marginTop:"30px"}}>
                        <label className="form-label" htmlFor="paymentMethod">Payment method</label>
                        <select
                            id="paymentMethod"
                            className="form-control"
                            value={this.state.paymentMethod}
                            name = "paymentMethod"
                            onChange={this.handleInputChange}>

                                
                                {this.state.options.map((value)=>{
                                    return(
                                        <option key={value} value={value} label={value}>{value}</option>
                                    )
                                })}

                        </select>
                    </div>
                    
                    <div className= "form-group">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <input
                            className="form-control"
                            type="number"
                            id="cardNumber"
                            value={this.state.cardNumber}
                            placeholder="0919 1555 0903 6416"
                            name="cardNumber"
                            onChange={this.handleInputChange}
                            />
                    </div>
                    
                    <div className= "form-group">
                        <label htmlFor="cardName" className="form-label">Card name</label>
                        <input
                            className="form-control"
                            type= "text"
                            id="cardName"
                            value={this.state.cardName}
                            placeholder="EMMANUEL CHIBUEZE OKEKE"
                            name="cardName"
                            onChange={this.handleInputChange}
                            />
                    </div>

                    <div className = "exp-cvc-container" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className= "form-group">
                            <label htmlFor="expiryDate" className="form-label">Expiry date</label>
                            <input
                                className="form-control"
                                type= "text"
                                id="expiryDate"
                                value={this.state.expiryDate}
                                placeholder="11/24"
                                name="expiryDate"
                                onChange={this.handleInputChange}
                                />
                        </div>
                        
                        <div className= "form-group">
                            <label htmlFor="cvc" className="form-label">CVC</label>
                            <input
                                className="form-control"
                                type= "number"
                                id="cvc"
                                value={this.state.cvc}
                                placeholder="032"
                                name="cvc"
                                onChange={this.handleInputChange}
                                />
                        </div>
                    </div>

                    <div className='flex-center' style={{width:"100%", justifyContent:"center"}}>
                        <Link to = '/ordersucceful'>
                            <button
                                className="btn"
                                type= "submit"
                                style = {{backgroundColor:"brown", color:"white"}}
                                >Pay</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Verification;