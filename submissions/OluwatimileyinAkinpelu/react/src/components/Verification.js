import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const Verification = () => {

    //local State
    const [formData, setFormData] = useState({
        phoneNumber: '',
        paymentMethod: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvc: ''
       });

       //handler functions
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
      }

  return (
    <div className='cartPage'> 
        <nav>
            <div className="nav-list nav-two">
                <a href='./CartPage.js' className="text-gray">Home &gt;</a>
                <p className='text-gray nav-two'>Cart &gt;</p>
                <h2 className='nav-two'>Verification</h2>
            </div>
        </nav>
        <main>
            <div className='mb-50'>
                <h3 className='title verify-title'>Verification</h3>
                <p className='verify'>Confirm address & Payment</p>
            </div>
            <div className='flex'>
                <div>
                    <p className='text-md'>Delivery Address</p>
                    <p className='text-deep-gray'>Your order will be delivered to your address</p>
                </div>
                <input type="radio" checked={true} readOnly={true} className="address-radio"></input>
            </div>
            <form action='post' className='mt-30'>
                <div className='d-flex flex-column'>
                        <label className="input-label">Phone number</label>
                        <input
                            type='number'
                            className='input-field'
                            placeholder='+234'
                            value={formData.phoneNumber}
                            name='phoneNumber'
                            onChange={handleChange}
                        />
                </div> 
                <hr className='ruler'/>
                <div className='d-flex flex-column'>
                        <label className="input-label">Payment method</label>
                        <select className='input-field' name='paymentMethod' id="paymentMethod">
                            <option value="volvo">Cash</option>
                            <option value="saab">Card</option>
                            <option value="mercedes">Pay on Delivery</option>
                        </select>
                </div> 
                <div className='d-flex flex-column mt-30'>
                        <label className="input-label">Card Number</label>
                        <input
                            type='number'
                            className='input-field'
                            placeholder='2345 6543 7868 2343'
                            value={formData.cardNumber}
                            name='cardNumber'
                            onChange={handleChange}
                        />
                </div> 
                <div className='d-flex flex-column mt-30'>
                        <label className="input-label">Card Name</label>
                        <input
                            type='text'
                            className='input-field'
                            placeholder='TOLUWALASE KENNY OJO'
                            value={formData.cardName}
                            name='cardName'
                            onChange={handleChange}
                        />
                </div> 
                <div className='grid-container mt-30 mb-50'>
                    <div className='d-flex flex-column'>
                        <label className="input-label">Expiry date</label>
                        <input
                            type='date'
                            className='input-field'
                            placeholder='01/23'
                            value={formData.cvc}
                            name='expiryDate'
                            onChange={handleChange}
                        />
                    </div> 
                    <div className='d-flex flex-column'>
                        <label className="input-label">CVC</label>
                        <input
                            type='number'
                            className='input-field'
                            placeholder='012'
                            value={formData.cvc}
                            name='cvc'
                            onChange={handleChange}
                        />
                    </div>   
                </div>
                <div className='text-center'>
                    <Link to='/order-successful'>
                        <button className='submit-btn' disabled={!formData.cardName || !formData.cardNumber || !formData.cvc || !formData.expiryDate || !formData.phoneNumber || !formData.paymentMethod}>Pay</button>
                    </Link>
                </div>
            </form>
        </main>
    </div>
  )
}

export default Verification