import React from 'react';

import { VerificationButton } from './VerificationButton';
import VerificationNavbar from './VerificationNavbar';
import { VerificationInput } from './VerificationInput';
import { VerificationSelect } from './VerificationSelect';
import VerificationDetails from './VerificationDetails';
import './styles.css';



export const VerificationHolder = () => {

    const SelectOptions = [
        {
            title: "Card",
            value: "Card"
        },
        {
            title: "Card",
            value: "Visa Card"
        },
        {
            title: "Master Card",
            value: "Master Card"
        }
    ]

  return (
    <div className="contents">

    <VerificationNavbar />
    <VerificationDetails />

    <VerificationInput name = "Phone Number" lableId = "label-id" inputId= 'input-id' placeholder = "+234"  />
     <hr id='line'/>
    <VerificationSelect labelId = "label-id" name = "Payment Method" selectId = "form-group" options  =  
    {SelectOptions.map((index)=>(

        <option key={index.title}>{index.value}</option>
    
        ))}>
    </VerificationSelect>

    <VerificationInput name = "Card Number" lableId = "label-id" inputId= 'input-id' 
     placeholder = "4647 0003 9058 1302"  />

     <VerificationInput name = "Card Name" lableId = "label-id" inputId= 'input-id' 
     placeholder = "Fabunmi Tolulope Eniola"  />

     <div className="comb">
     
     <>
     <VerificationInput name = "Expiry Date" lableId = "label-id" inputId= 'input-id' 
     placeholder = "10/24"  > </VerificationInput>
    
        <>
        <VerificationInput name = "CVC" lableId = "label-id" inputId= 'input-id' 
           placeholder = "656"  > </VerificationInput>
        </>
     </>
        </div>
        <br/>
     
        <VerificationButton buttonClick= {()=> window.location.assign("/OrderHolder")} buttonClass="button-class" name= "Pay" />
    </div>
  )
}