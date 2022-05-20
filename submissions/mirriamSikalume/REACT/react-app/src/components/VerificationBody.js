import React from 'react'
import "./VerificationBody.css"
import checked from "../images/radio_button_checked.svg"

export const VerificationBody = () => {
  return (
    <div className="VerifyBody">
        <div>
           <h3>Delivery Address</h3>
           <div className="check">
            <p id="P">Your order will be delivered to your address</p>
            <img id="checked" src={checked} alt="/img"></img>
           </div>
           
        </div>
        <div>
            <label for="Phone Number">Phone Number</label><br></br>
            <input type="Phone Number" id="phone" placeholder="+234"></input>
        </div>
        <div>
            <label for="Payment Method">Payment Method</label><br></br>
            <select name="Payment Method" id="Payment">
                <option value="default-value" selected>Card</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
            </select>
        </div>
        <div>
            <label for="Card Number">Card Number</label><br></br>
            <input type="Card Number" id="Card" placeholder="123 456 789"></input>
        </div>
        <div>
            <label for="Card Name">Card Name</label><br></br>
            <input type="Card Name" id="Name" placeholder="Mirriam Junior"></input>
        </div>
        <div className="Date">
            <span>
            <label for="Date">Expiry Date</label><br></br>
            <input type="Number" id="expiry" placeholder="01/23"></input>   
            <label for="CVC" id="CVClabel">CVC</label> 
            <input type="Number" id="CVC" placeholder="021"></input>
            </span>
            
        </div>
        <div className='footer'>
         <button id='pay'>Pay</button>
      </div>
        
       
    </div>
  )
}
