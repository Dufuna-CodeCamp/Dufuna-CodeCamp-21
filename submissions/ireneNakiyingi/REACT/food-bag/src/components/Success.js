import React from "react";
import Header from './Header'
import './Success.css'


import Successimg from './images/Illustration_success.svg'

function Success(){
    return(
        <div>
            <Header/>
            <div className="img-container">
                <div>
                    <img src={Successimg} alt=""/> 
                </div>
                
                <div className="text">
                     <h2>Order successful</h2>
                <h4>We have started processing your order.</h4>
                </div>
               

            </div>

        </div>
    )
}

export default Success;