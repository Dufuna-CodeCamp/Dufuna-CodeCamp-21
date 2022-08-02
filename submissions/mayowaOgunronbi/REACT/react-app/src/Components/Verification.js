import React from "react";
import Input from "./Input";
import Select from "./Select";
import Details from "./Details";
import Button from "./Button";
import Navigation from "./Navigation";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Verification = () => {

    //  STATES
    const [phone_number,setPhoneNumber]= useState('');
    const [card_name, setCardName]= useState('');
    const [expirely_date, seteExpirelyDate]= useState('');
    const [card_number,setCadNumber]= useState('');
    const [cvc, setCvc]= useState('')
    const [selectValue,setSelectedOption]= useState('')
    const [Data,setData]= useState( [])



    useEffect(()=> {
     setData(Details)
    },[])

const handlePhoneChange=(event)=>{
    setPhoneNumber(event.target.value);
}

const handleSelectChange=(event)=>{
    setSelectedOption(event.target.value)
}

const handleCardChange=(event)=>{
    setCadNumber(event.target.value)
}

const handleCardNameChange=(event)=>{
    setCardName(event.target.value)
}

const handleDateChange=(event)=>{
   seteExpirelyDate(event.target.value)
}

const handCvcChange=(event)=>{
    setCvc(event.target.value)
}

            //`NAVIGATE TO SUCCESS PAGE
            const navigateTo = useNavigate();

            const handleOnClick = (e) => {
                e.preventDefault();
                if(phone_number==="" || card_number==="" || card_name==="" || cvc==="" ||expirely_date==="" || selectValue===""){
                    return;
                }
                navigateTo('/success-page');
            
            }

    return (
        <div>

            <Navigation />
            <div>
                <div className="verification-nav">
                    <a href="index.html">Home {'>'} Cart {'>'} <span>Verification</span> </a> 
                </div>
                <div>
                    <h2 id="verification">Verification</h2>
                    <p id="confirm">Confirm  address & Payment</p>
                </div>
            </div>
                <div className='location'>
                    <h1>Delivery Address</h1>
                    <input type='radio'  defaultChecked/>    
                </div>
                <h3 id="order-delivered">Your order will be deliverd to your address</h3>

            <form>
                    <Input 
                        name="phone_number" 
                        title="Phone Number" 
                        type="text" 
                        id="input" 
                        placeholder="+234"
                        handleChange={(event)=>handlePhoneChange(event)}
                        value={phone_number}
                    />
                    
                    <hr id="line-break"/>

                    <Select   
                        
                        name='payment_method'
                        title='Payment Method'
                        id='select'
                        type='select'
                        handleChange={(event)=>handleSelectChange(event)} 
                        value = {selectValue}
                       options =  {

                                Data.map((item) => (

                                <option key={item.id} > {item.title}</option>
                            ))
                        }
                    />

                    <Input 
                        name="Card_number" 
                        title="Card Number" 
                        type="text" 
                        id="input" 
                        placeholder="2345 6543 7868 2343" 
                        handleChange={(event)=>handleCardChange(event)}
                        value={card_number}
                        />

                    <Input 
                        name="Card_name" 
                         title="Card Name" 
                        type="text" 
                        id="input" 
                        placeholder="TOLUWALASE KENNY OJO" 
                        handleChange={(event)=>handleCardNameChange(event)}
                        value={card_name}
                        />
                    
                    <div className='inline-items'>
                        <Input 
                            name="Card_expiry_date" 
                            title="Expiry Date" 
                            type="date" 
                            id="inline-input" 
                            handleChange={(event)=>handleDateChange(event)}
                            value={expirely_date}

                            />
                        <Input 
                            name="Card_verification_code" 
                            title="CVC" 
                            type="text" 
                            id="inline-input" 
                            placeholder="012"
                            value={cvc} 
                            handleChange={(event)=>handCvcChange(event)}
                            />
                    </div>
                    
            <div className='checkout-container'>
                <Button 
                    id='checkout-button' 
                    type='button' 
                    title="Pay"
                    handleOnClick={(event)=>handleOnClick(event)} 
                />

            </div>

                </form>
        </div>
    )
}

export default Verification;