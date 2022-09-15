import React from 'react';
import BreadcrumbsVerification from './BreadcrumbsVerification/BreadcrumbsVerification';
import { useEffect, useState } from "react";
import Card from './Card';
import Cash from './Cash';
import './Verification.css'

const Verification = () => {
    const [payment, setPayment] = useState("selectPayment");
    const [cash, setCash] = useState(false);
    const [card, setCard] = useState(false);

    useEffect(() => {
        payment === "Cash"
            ? setCash(true)
            : setCash(false);
        payment === "Card" ? setCard(true) : setCard(false);
    }, [payment]);

    const handleOnChange = (e) => {
        setPayment(e.target.value);
    };

    return (
        <>
            <BreadcrumbsVerification />
            <div>
                <div className="VerificationTitle">Verification</div>
                <div className="VerificationSubTitle">Confirm address & Payment</div>
            </div>
            <div>
                <div className='Address'>Delivery Address</div>
                <div className='DeliveryTo'>
                    <div style={{ color: '#696969' }}>Your order will be deliverd to your address</div>
                    <input className='AddressRadio' type="radio" checked readOnly />
                </div>
            </div>
            <section>
                <div className='Item'>
                    <label className='ItemLabel'>Phone Number</label>
                    <input
                        type='tel'
                        placeholder='+234'
                        name='phoneNumber'
                        className='ItemValue'
                    />
                </div>
                <br />
                <hr />
                <br />
                <div className='Item'>
                    <label className='ItemLabel'>Payment method</label>
                    <select className="ItemValue" value={payment} onChange={handleOnChange}>
                        <option value="selectPayment">Select Payment Method</option>
                        <option value="Card">Card</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>
                {cash && <Cash />}
                {card && <Card />}
            </section>
        </>
    );
}

export default Verification;