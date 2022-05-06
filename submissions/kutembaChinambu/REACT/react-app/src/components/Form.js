import React, {Component} from "react";


class Form extends Component {
        state = {
            phoneNumber: "",
            paymentMethod: "",
            cardNumber: "",
            cardName: "",
            expiryDate: "",
            cvc: ""
        
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.phoneNumber === "" ||
             this.state.paymentMethod === "" ||
             this.state.cardNumber === "" ||
             this.state.cardName === "" ||
             this.state.expiryDate === "" ||
             this.state.cvc === "") {
            alert("Fields are required");
            return;
          } else {
            window.location.href = "/Successful";
          }
        
       
      }


    render() {
    return (
       <form id="form">
            <label htmlFor="phoneNumber">
                <h3>Phone number</h3>
            </label>
            <input 
                className="input-elements"
                name="phoneNumber" 
                title="Phone number" 
                type="number" 
                placeholder="+234" 
                onChange={e => this.change (e)} 
                value={this.state.phoneNumber}     
            />
                <hr />

                <label htmlFor="paymentMethod">
                <h3>Payment method</h3>
            </label>

            <select
            className="input-elements"
            title="Payment method"
            name= "paymentMethod"
            value= {this.state.method}
            onChange={e => this.change (e)} 
            placeholder="Select a payment method"   
            >
            <option value="cash">Cash</option>
            <option value="mobileMoney">Mobile Money</option>
            <option selected value= "Select payment method">Select payment method</option>
            <option value="Card">Card</option>
            <option value="other">Other</option>
            </select>


            <label htmlFor="cardNumber">
                <h3>Card Number</h3>
            </label>

            <input 
                className="input-elements"
                name="cardNumber" 
                title="Card Number" 
                type="number" 
                placeholder="Enter Your Card Number" 
                onChange={e => this.change (e)}  
                value={this.state.cardNumber}
                    
            />

            <label htmlFor="cardName">
                <h3>Card name</h3>
            </label>

            <input
                className="input-elements"
                name="cardName" 
                title="Card name" 
                type="text" 
                placeholder="Enter Your Names" 
                onChange={e => this.change (e)}  
                value={this.state.cardName} 
                    
            />

           

        <div className="last">
            <div className="exp">
                <label htmlFor="expiryDate">
                        <h3>Expiry date</h3>
                    </label>

                <input
                        className="bottom-input"
                        name="expiryDate" 
                        title="Expiry date" 
                        type="text" 
                        placeholder="Enter Your Card Expiry Date" 
                        onChange={e => this.change (e)} 
                        value={this.state.expiryDate}     
                    />
                </div>
            <div className="exp">

                <label htmlFor="cvc">
                    <h3>CVC</h3>
                </label>

                <input
                    className="bottom-input"
                    name="cvc" 
                    title="CVC" 
                    type="number" 
                    placeholder="Enter Your CVC" 
                    onChange={e => this.change (e)} 
                    value={this.state.cvc} 
                        
                />
            </div>

        </div>
        <div id="container">
            <button id="button" type="submit" onClick={this.onSubmitHandler}>Pay</button>
        </div>
            

          
       </form>
    )
}
}
export default Form;