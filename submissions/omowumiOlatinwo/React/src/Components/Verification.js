import React from "react";
import Form from "./Form.js";
import Navbar from "./Navbar.js";

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
                <Navbar />
                <div id='homecart'>
                <span className="toGrey">Home &gt; </span>
                <span className="toGrey">Cart &gt; </span>
                <span >Verification</span>
                </div>
                <div id="verify">                        
                    <h2 id="verification">Verification</h2>
                    <span style={{color: "rgb(168, 7, 7)"}}>Confirm address & Payment</span>
                </div>

                <div className="row rad">
                    <div className="col-10 deliveryaddress">
                        <h5 id="deliver">Delivery Address</h5>
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