import React from "react";
import { Component } from "react";
import Header from "./Header.js";
import Illustration_success from "../Illustration_success.svg";

class Success extends Component{

    render(){
        return(
            <>
                <Header />
                <div className="row">
                    <div className="col-12" id="ordersuccess">                              
                        <img src={Illustration_success} alt="delivery success"/>
                        <h2>Order Successful</h2>
                        <span id="span">We have started processing your order.</span>
                    </div>
                    <div className="col-12 style">

                    </div>
                </div>
            </>
        )
    }
}

export default Success;