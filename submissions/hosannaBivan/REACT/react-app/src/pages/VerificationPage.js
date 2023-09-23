import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import logo from '../images/FoodBag.png'
import Checkout from '../components/Checkout';
import { Link } from 'react-router-dom'



function VerificationPage(){

    const [phone, setPhone] = useState('');
    const [method, setMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [err, setErr] = useState(false);



    const handleSubmit = (e,) => {
        e.preventDefault();
        if(phone==="" || method==='' || cardNumber==="" || cardName==="" || expiryDate==="" || cvc===''){
            setErr(true);
            return;
            
        } 
    }


  return (
    <>
        <Navbar
        logo = {logo}
        navItem1 = 'Cart'
        navItem2 = 'Login'
        navItem3 = 'Sign up'
        home = 'Home' 
        category = 'Verification'
        />

        <div className='extra'>
            <p className='one'>Confirm Address and Payment</p>

            <div>
                <h5>Delivery Address</h5>
                <p>Your order will be delivered to your address</p>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
                
                <div className='form-group'>
                    <label htmlFor="phoneNumber">Phone number</label> <br />
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+234' /> <br />
                    {err && phone==="" ? <span className='error'>Your phone number is required</span> : null}
                </div>

                <div className='form-group'>
                    <label htmlFor="method">Payment Method</label> <br />

                    <select name="method" value={method} onChange={(e) => setMethod(e.target.value)} id="">
                        <option value="1">Card</option>
                        <option value="2">Mobile Tranfer</option>
                        <option value="3">USSD</option>
                    </select> <br />

                    {/* <input type="text" value={method} onChange={(e) => setMethod(e.target.value)} placeholder='Card' />  */}
                    {err && method==="" ? <span className='error'>Your payment method is required</span> : null}
                </div>

                <div className='form-group'>
                    <label htmlFor="cardNumber">Card Number</label> <br />
                    <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder='2345 6789 7868 2343' /> <br />
                    {err && cardNumber==="" ? <span className='error'>Your card number is required</span> : null}
                </div>

                <div className='form-group'>
                    <label htmlFor="cardName">Card Name</label> <br />
                    <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder='TOLUWASE KENNY OJO' /> <br />
                    {err && cardName==="" ? <span className='error'>Your card name is required</span> : null}
                </div>

                <div className="form-flex">
                        <div className='form-group'>
                            <label htmlFor="expiryDate">Expiry Date </label> <br />
                            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder='01/23' />
                            {err && expiryDate==="" ? <span className='error'>Your expiry date is required</span> : null}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="cvc">CVC</label> <br />
                            <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder='012' />
                            {err && cvc==="" ? <span className='error'>Your CVC is required</span> : null}
                        </div>
                </div>

                {/* <button>Submit</button> */}
                {/* <ConditionalLink> */}

                
            
                    
                    <Link to='/'>
            
                           <Checkout button = 'Pay' />
            
                    </Link> 
            
               
                
        </form>

    </>
  )
}


export default VerificationPage;