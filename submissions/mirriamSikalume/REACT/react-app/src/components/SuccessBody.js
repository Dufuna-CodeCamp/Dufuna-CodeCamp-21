import React from 'react'
import success from "../images/Illustration_success.svg"
import "./SuccessBody.css"

export const SuccessBody = () => {
  return (
    <div>
        <div className="successpic">
            <img id="successimg" src={success} alt="/img"></img>
        </div>

        <div className="SuccessDetails">
            <span>
            <h3 id="Order">
                Order Successfull
            </h3>
            <p id="pressing">
                We have started processing your order.
            </p>
            </span>
            
        </div>

    </div>
  )
}
