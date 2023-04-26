import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Verification.css'

const Card = () => {

    const [cardPayment, setcardPayment] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setcardPayment((prevcardPayment) => ({ ...prevcardPayment, [name]: value }))
    }

    return (
        <form>
            <div className='Item'>
                <label className='ItemLabel'>Card Number</label>
                <input
                    type='tel'
                    placeholder='2345 6543 7868 2343'
                    value={cardPayment.cardNumber}
                    name='cardNumber'
                    onChange={handleChange}
                    required
                    className='ItemValue'
                />
            </div>
            <div className="Item">
                <label className='ItemLabel'>Card Name</label>
                <input
                    type='text'
                    placeholder='TOLUWALASE KENNY OJO'
                    value={cardPayment.cardName}
                    name='cardName'
                    onChange={handleChange}
                    required
                    className='ItemValue'
                />
            </div>
            <div className="Col">
                <div className="Item Flex1">
                    <label className='ItemLabel'>Expiry date</label>
                    <input
                        type='date'
                        placeholder='01/23'
                        value={cardPayment.expiryDate}
                        name='expiryDate'
                        onChange={handleChange}
                        required
                        className='ItemValue'
                    />
                </div>
                <div className="Item Flex2">
                    <label className='ItemLabel'>CVC</label>
                    <input
                        type='tel'
                        placeholder='012'
                        value={cardPayment.cvc}
                        name='cvc'
                        onChange={handleChange}
                        maxLength="3"
                        required
                        className='ItemValue'
                    />
                </div>
            </div>
            <Link to="/OrderSuccessful">
                <button type="submit" className='PaymentBtn'>Pay</button>
            </Link>
        </form>
    );
}

export default Card;