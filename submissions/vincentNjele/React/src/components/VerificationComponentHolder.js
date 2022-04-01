import React from 'react'

import { VerificationButton } from './VerificationButton'
import VerificationHeader from './VerificationHeader'
import { VerificationInput } from './VerificationInput'
import { VerificationSelect } from './VerificationSelect'
import VerificationDetails from './VerificationDetails'


export const VerificationComponentsHolder = () => {

    const SelectOptions = [
        {
            title: "Card",
            value: "Card"
        },
        {
            title: "Mobile",
            value: "Mobile Money"
        },
        {
            title: "Paypal",
            value: "Pay By Paypal"
        }
    ]

  return (
    <div className='contents'>

    <VerificationHeader />
    <VerificationDetails />

    <VerificationInput name = "Phone Number" lableId = "label-id" inputId= 'input-id' placeholder = "+234"  />
     <hr id='line'/>
    <VerificationSelect labelId = "label-id" name = "Payment Method" selectId = "form-group" options  =  
    {SelectOptions.map((index)=>(

        <option key={index.title}>{index.value}</option>
    
        ))}>
    </VerificationSelect>

    <VerificationInput name = "Card Number" lableId = "label-id" inputId= 'input-id' 
     placeholder = "2345 6543 7868 2343"  />

     <VerificationInput name = "Card Name" lableId = "label-id" inputId= 'input-id' 
     placeholder = "Fabunmi Tolulope Eniola"  />

     <div className='con'>
     
     <div className='expiry-date'>
     <VerificationInput name = "Expiry Date" lableId = "label-id" inputId= 'input-id' 
     placeholder = "01/23"  > </VerificationInput>

     </div>
        <br/>
    
        <div className='cvc'>
        <VerificationInput name = "CVC" lableId = "label-id" inputId= 'input-id' 
           placeholder = "012"  > </VerificationInput>
        </div>
     
        </div>
        <br/>
     
        <VerificationButton buttonClass="button-class" name= "Pay" />
    </div>
  )
}
