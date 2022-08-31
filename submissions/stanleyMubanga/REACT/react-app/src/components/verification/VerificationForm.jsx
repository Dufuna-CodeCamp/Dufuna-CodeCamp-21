import {useState} from 'react';
import CardExpirery from '../expiry/CardExpiry';
import FormInput from '../formInput/FormInput';
import InputSelect from '../inputSelect/InputSelect';
import {useNavigate} from 'react-router-dom';
import Pay from '../pay/Pay';
import './style.css';
// import OrderSuccess from './orderPage/OrderSuccess';


function VerificationForm(props) {

  const radio = "radio"

  const [phone_number, setPhoneNumber] = useState('');
  const [selectValue, setSelectedValue] = useState('');
  const [card_name, setCardName] = useState('');
  const [card_number, setCardNumber] = useState('');
  const [expiry_date, setExpiryDate] = useState('');

  let goto = useNavigate();

  const handlePhoneChange=(event)=> {
    setPhoneNumber(event.target.value);
  }

  const handleSelecValuetChange=(event)=> {
    setSelectedValue(event.target.value);
  }

  const handleCardNameChange=(event)=> {
    setCardName(event.target.value);
  }

  const handleCardNumberChange=(event)=> {
    setCardNumber(event.target.value);
  }

  const handleExpityDateChange=(event)=> {
    setExpiryDate(event.target.value);
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    if (phone_number !=="" && selectValue !=="" && card_name !=="" && card_number !=="" && expiry_date !=="") {
        goto('orderPage/OrderSuccess')
    }
  }

  return (
    <div className='cart-validation'>
        <form className='cart-checkout'>
            <section className='form-group address'>
              <aside className='address-title'>
                <h2 className='heading'>
                  Delivery Address
                </h2>
                <p className='caption gray-color'>Your order will be deliverd to your address</p>
              </aside>
              <aside className='address-input'>
                <input type={radio} />
              </aside>
            </section>
            <section className='form-group phone'>
              <FormInput 
                id="phone"
                title="Phone Number"
                inputType="text"
                placeholder="+234"
                handleChange={(event)=>handlePhoneChange(event)}
              />
            </section>
            <section className='form-group payment-method'>
              <InputSelect 
                id="paymentMethod"
                title="Payment method"
                inputType="text"
                value="phone_number"
                handleChange={(event)=>handleSelecValuetChange(event)}
              />
            </section>
            <section className='form-group card-number'>
            <FormInput 
                id="cardNumber"
                title="Card number"
                inputType="text"
                placeholder="2345 6543 7868 2343"
                handleChange={(event)=>handleCardNumberChange(event)}
              />
            </section>
            <section className='form-group card-name'>
            <FormInput 
                id="cardName"
                title="Card name"
                inputType="text"
                placeholder="TOLUWALASE KENNY OJO"
                handleChange={(event)=>handleCardNameChange(event)}
              />
            </section>
            <section className='form-group card-validity'>
              <CardExpirery
                expiryId="expiryDate" 
                expiryTitle="Expiry date"
                expiryInputType="text"
                expiryPlaceholder="01/03"
                
                handleChange={(event)=>handleExpityDateChange(event)}
                
                cvcId="cvc"
                cvcTitle="CVC"
                cvcInputType="text"
                cvcPlaceholder="012"

              />
            </section>
            <section className='form-group'>
              <Pay 
                onClick={(e)=> handleSubmit(e)} 
              />
            </section>
        </form>
    </div>
  )
}

export default VerificationForm;