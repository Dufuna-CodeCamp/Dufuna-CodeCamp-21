import React, { useState } from 'react'
import InputField from './InputField';

const VerificationPage = () => {

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
                <h2 className='text-gray nav-two'>Cart &gt;</h2>
                <h2 className='nav-two'>Verification</h2>
            </div>
        </nav>
        <main>
            <div className='mb-50'>
                <h3 className='title verify-title'>Verification</h3>
                <p className='verify'>Confirm address & Payment</p>
            </div>
            <div>
                <p className='text-md'>Delivery Address</p>
                <p className='text-deep-gray'>Your order will be delivered to your address</p>
            </div>
            <form action='post' className='mt-30'>
                <InputField
                    type='number'
                    placeholder='+234'
                    label='Phone number'
                    name='phoneNumber'
                    onChange={handleChange}
                    value={formData.phoneNumber}
                />
                <hr className='ruler'/>
                <InputField
                    type='text'
                    placeholder='345 6543 7868 2343'
                    label='Payment method'
                    name='paymentMethod'
                    value={formData.paymentMethod}
                    onChange={handleChange}
                />
                <InputField
                    type='number'
                    placeholder='2345 6543 7868 2343'
                    label='Card Number'
                    name='cardNumber'
                    value={formData.cardNumber}
                    onChange={handleChange}
                    containerVariant='mt-30'
                />
                <InputField
                    type='text'
                    placeholder='TOLUWALASE KENNY OJO'
                    label='Card Name'
                    name='cardName'
                    value={formData.cardName}
                    onChange={handleChange}
                    containerVariant='mt-30'
                />
                <div className='grid-container mt-30 mb-50'>
                <InputField
                    type='date'
                    placeholder='01/23'
                    label='Expiry Date'
                    name='expiryDate'
                    value={formData.expiryDate}
                    onChange={handleChange}
                />
                 <InputField
                    type='text'
                    placeholder='012'
                    label='CVC'
                    name='cvc'
                    value={formData.cvc}
                    onChange={handleChange}
                />
                </div>
                <div className='text-center'>
                    <button className='submit-btn' disabled={!formData.cardName || !formData.cardNumber || !formData.cvc || !formData.expiryDate || !formData.phoneNumber || !formData.paymentMethod}>Pay</button>
                </div>
            </form>
        </main>
    </div>
  )
}

export default VerificationPage