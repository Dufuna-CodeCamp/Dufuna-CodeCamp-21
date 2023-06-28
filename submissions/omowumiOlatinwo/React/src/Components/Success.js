import React from "react";
import { Component } from "react";
import Navbar from "./Navbar.js";
import success from "../images/success.svg";

class Success extends Component{

    render(){
        return(
            <>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <div className="successful d-flex justify-content-center">                        
                        <img src={success} alt="delivery success"/>
                        <h2><span id="greenOrder">Order Successful </span></h2>
                        We have started processing your order.
                    </div>
            </>
        )
    }
}

export default Success;