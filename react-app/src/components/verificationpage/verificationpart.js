import React from 'react';
import VerifBreadcrumb from './verfiBreadcrumb';
import VeriForm from './veriForm'
import Radio from '../../images/radio.svg'

const VerificationPart =(props)=>{
    return(
        <div>
            <VerifBreadcrumb/>

            <div className='vari-title'>
                <h3>Verification</h3>
                <p>Confirm address & Payment</p>
            </div>

            <div className='vari-address'>
                <div>
                    <h4>Delivery Address</h4>
                    <p>Your order will be deliverd to your address</p>
                </div>
                <div><img src= {Radio} alt='radio'/></div>
            </div>

            <VeriForm />
          
        </div>
    )
};
export default VerificationPart;