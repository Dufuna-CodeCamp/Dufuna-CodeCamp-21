import NavBar from "./Navbar";
import Input from "./Input";
import '../App.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardDetails from "../cardDetails";
import Select from "./Select";
import Button from "./Button";

const Verification = ()=>{

    const [phone_number,setPhoneNumber]= useState(0);
    const [card_name, setCardName]= useState(0);
    const [expirely_date, seteExpirelyDate]= useState('');
    const [card_number,setCadNumber]= useState(0);
    const [cvc, setCvc]= useState(0)
    const [selectValue,setSelectedOption]= useState(0)
    const [formData,setFormData]= useState([])

    useEffect(()=>{
        setFormData(cardDetails)
    }, [])


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


    const linkTo = useNavigate();

    const handleOnClick = (e) => {
        e.preventDefault();
        if(phone_number==="" || card_number==="" || card_name==="" || cvc==="" ||expirely_date==="" || selectValue===""){
            return;
        }
        linkTo('/success');
    
    }
    return(
        <main>
            <NavBar/>
            <section className="page-nav">
                <p>Home &gt;&nbsp;</p>
                <p>Cart &gt;&nbsp;</p>
                <p className="py-dark">Verification</p>
            </section>
            <section>
                <div>
                    <p className="verification-form-title">Verification</p>
                    <p className="verification-form-desc">Confirm address & Payment</p>
                </div>
               
                <form action="" className="form-group">
                    <div className="fieldClassName">
                        <p className="form-label">Delivery Address</p>
                        <div className="delivery-address-field">
                            <p className="form-radio-text">Your order will be delivered to your address</p>
                            <input className="form-radio" type="radio" name="" id="" checked/>
                        </div>
                    </div>
                    <Input 
                        name="Phone number"
                        placeholder="+234"
                        type="text"
                        handleChange={(event)=>handlePhoneChange(event)}
                    />
                    <hr className="horizontal-line"/>
                    <Select
                        name='Payment Method'
                        options = {
                            formData.map((payment_type) => (
                                <option key={payment_type.id}>{payment_type.title}</option>
                            ))
                        }
                        handleChange={(event)=>handleSelectChange(event)}
                    />
                    <Input
                        name="Card number"
                        placeholder="2345 6543 7868 2343"
                        type="text"
                        handleChange={(event)=>handleCardChange(event)}  
                    />
                    <Input
                        name="Card name"
                        placeholder="TOLUWALASE KENNY OJO"
                        type="text"
                        handleChange={(event)=>handleCardNameChange(event)}
                    />
                    <div className="form-flex">
                        <Input
                            name="Expiry date"
                            placeholder="01/23"
                            type="date"
                            handleChange={(event)=>handleDateChange(event)}
                        />
                        <Input
                            name="CVC"
                            placeholder="012"
                            type="text"
                            handleChange={(event)=>handCvcChange(event)}
                        />
                    </div>
                    <Button
                        name="Pay"
                        type='button'
                        handleOnClick={(event)=>handleOnClick(event)}
                    />
                </form>
            </section>
        
        </main>
    )
}

export default Verification;