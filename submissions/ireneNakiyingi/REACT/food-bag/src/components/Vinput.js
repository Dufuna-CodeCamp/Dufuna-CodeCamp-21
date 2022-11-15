import React from 'react';
import './Input.css'

const VInput=()=>{
    return(
        <form>
        <div className='form-container'> 
          <div className='input-container'>
            <label name='Phone'>Phone number </label>
            <input type='number' placeholder='+234' required className='input'/>

            <hr></hr>
            <label>Payment method</label>
            <select required className='input'>
                    <option>Card</option>
                    <option>Visa</option>
                    <option>Paypal</option>
                    <option>Mastercard</option>
            </select>
            <br></br>

            <label className='card-number'>Card Number</label>
            <input name= 'card-number' className='input' required placeholder='2345 6543 7868 2343'  /> 

            <br></br>
            <label>Card name</label>
            <input required type='text' className='input' placeholder='TOLUWALASE KENNY OJO'/>
           </div>

           <div className='e-cvc'>
                <div className='expiry'>
                    <label>Expiry date</label>
                    <br></br>
                    <input type='text' placeholder='01/23' required/>
                </div>
                <div className='expiry'>
                    <label>CVC</label>
                    <br></br>
                    <input type='number' placeholder='012'  required/>
                </div>
           </div>
            

        </div>
        </form>
    )
}
export default VInput;