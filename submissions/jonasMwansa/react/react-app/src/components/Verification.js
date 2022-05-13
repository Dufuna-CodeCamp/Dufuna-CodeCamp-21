import Input from './InputComponent';
import SelectComponent from './SelectComponent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Details from './Details';



const Verification=()=> {

    //using the state
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

            //method for navigation
            const navigateTo = useNavigate();

            const handleOnClick = (e) => {
                e.preventDefault();
                if(phone_number==="" || card_number==="" || card_name==="" || cvc==="" ||expirely_date==="" || selectValue===""){
                    return;
                }
                navigateTo('/success-page')
            
            }




    return(
        <div>
            <div className="sub-title">
                <a href="index.html">Home {'>'} Cart {'>'} </a>Verification
                <h3 id="cart-title">Verification</h3>
                <p>confirm payment & order</p>
            </div>
            <div className='sub-heading'>
                <div className='location'>
                    <h1>Delivery Address</h1>
                    <input type='radio'  defaultChecked/>    
                </div>
                <p>Your order will be deliverd to your address</p>
            </div>
            
                <form>
                    <Input 
                        label="phone_number" 
                        label_value="Phone number" 
                        type="text"  
                        placeholder="+234"
                        handleChange={(event)=>handlePhoneChange(event)}
                        value={phone_number}
                    />
                    
                    <hr/>

                    <SelectComponent   
                        
                        name='payment_method'
                        title='payment method'
                        id='option'
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
                        label="Card_number" 
                        label_value="Card number" 
                        type="text" 
                        name="card_number" 
                        placeholder="2345 6543 7868 2343" 
                        handleChange={(event)=>handleCardChange(event)}
                        value={card_number}
                        />

                    <Input 
                        label="Card_name" 
                        label_value="Card name" 
                        type="text" 
                        name="card_name" 
                        placeholder="TOLUWALASE KENNY OJO" 
                        handleChange={(event)=>handleCardNameChange(event)}
                        value={card_name}
                        />
                    
                    <div className='inline-items'>
                        <Input 
                            label="Card_expiry_date" 
                            label_value="Expiry date" 
                            type="date" 
                            name="Card_expiry_date" 
                            handleChange={(event)=>handleDateChange(event)}
                            value={expirely_date}

                            />
                        <Input 
                            label="Card_verification_code" 
                            label_value="CVC" 
                            type="text" 
                            name="Card_verification_code" 
                            placeholder="012"
                            value={cvc} 
                            handleChange={(event)=>handCvcChange(event)}
                            />
                    </div>
                    
            <div className='pay-container'>
                <Button 
                    button_id='pay-button' 
                    type='button' 
                    button_value="pay"
                    handleOnClick={(event)=>handleOnClick(event)} 
                />

            </div>

                </form>
        </div>
    )
}


export default Verification;