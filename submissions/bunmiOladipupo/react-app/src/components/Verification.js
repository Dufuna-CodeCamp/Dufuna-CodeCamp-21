import React from "react";
import Form from "./Form.js";
import Header from "./Header.js";

class Verification extends React.Component{
    
        constructor(props){
            super(props)
            this.state = {
                number: "0"
            }
            
        }

    render(){
        return(
            <div className="container">
                <Header />
                <div id='homecart'>
                <span className="grey">Home &gt; </span>
                <span className="grey">Cart &gt; </span>
                <span>Verification</span>
                </div>
                <div id="verify">                        
                    <h2 id="verification">Verification</h2>
                    <span>Confirm address & Payment</span>
                </div>

                <div className="row rad">
                    <div className="col-10 deliveryaddress">
                        <h6 id="deliver">Delivery Address</h6>
                        <span id="deliveryorder">Your order will be delivered to your address</span>
                    </div>
                    <div className="col-2 deliveryaddress">
                        <input type="radio" checked className="radio" id="radio"/>
                    </div>
                </div>
                <Form />
                
            </div>
        )
    }
}

export default Verification;