import React, { useState } from "react";
import CheckoutButton from "./CheckoutButton";
import InputElement from "./InputElement";
import SelectElement from "./SelectElement";

const Checkout = () => {
    const [formState, setFormState] = useState({
        phone: "",
        payment: '',
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    })
    
    const handleFormChange= (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form className="fs-lg">
            <div className="border-bottom">
                <InputElement labelName="Phone Number" type="tel" name="phone"  placeholder="+234" value={formState.phone} onChange={handleFormChange}/>
            </div>
            
            <SelectElement name="payment" labelName="Payment method" value={formState.payment} onChange={handleFormChange} />

            <InputElement labelName="Card number" type="number" name="cardNumber"  placeholder="2345 6543 7868 2343" value={formState.cardNumber} onChange={handleFormChange}/>

            <InputElement labelName="Card name" type="text" name="cardName"  placeholder="TOLUWALASE KENNY OJO" value={formState.cardName} onChange={handleFormChange}/>

            <div className="flex">
            <InputElement labelName="Expiry date" type="text" name="expiryDate" value={formState.expiryDate} placeholder="01/23" onChange={handleFormChange}/>

            <InputElement labelName="CVC" type="number" name="cvc"  placeholder="012" value={formState.cvc} onChange={handleFormChange}/>
            </div>

            <CheckoutButton />
        </form>
    )
}
export default Checkout