import React from "react";
import './Breadcrumb.css'

function Breadcrumb(){
    return(
        <div className="breadcrumb">
            <div className="crumb">
                <a href="/" className="home " >
                <h5> Home</h5>
                </a>
            </div>
            <span> {'>'} </span>
            
            <div className="crumb">
            <a href="/" className="cart" >
                <h5> Cart</h5>
                </a>
            </div>

        </div>
    )
}
export default Breadcrumb;