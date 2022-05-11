import Input from './InputComponent';
import SelectComponent from './SelectComponent';
import Button from './Button';
import { Component } from 'react/cjs/react.development';

class Verification extends Component{

        constructor(props){
            super(props);

            this.state={
                phone_number:'',
                card_number:'',
                card_name:'',
                expirely_date:'',
                cvc:'',
                option:'',
                options:[
                    "CARD",
                    "CASH",
                    "MOBILE MONEY"
                ],
                Data: [
                    {
                        id : 1,
                        title : "Card"
                    },
                    {
                     id : 2,
                     title : "Mobile Money"
                 },
                 {
                     id : 3,
                     title : "Cash"
                 }
                ],
                selectValue: "",

            }
}
    

handlePhoneChange=(event)=>{
    this.setState({phone_number: event.target.value})
    console.log(this.state.phone_number)
}

handleSelectChange=(event)=>{
    this.setState({
        selectValue : event.target.value
    })
    console.log(this.state.selectValue)
}


handleCardChange=(event)=>{
    this.setState({card_number: event.target.value})
    console.log(this.state.card_number)

}

handleCardNameChange=(event)=>{
    this.setState({card_name: event.target.value})
    console.log(this.state.card_name)
}


handleDateChange=(event)=>{
    this.setState(
        {
            expirely_date: event.target.value
        }
    )
}



render(){

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
            git
                <form>
                    <Input 
                        label="phone_number" 
                        label_value="Phone number" 
                        type="text"  
                        placeholder="+234"
                        handleChange={this.handlePhoneChange}
                        value={this.state.phone_number}
                    />
                    
                    <hr/>

                    <SelectComponent   
                        
                        name='payment_method'
                        title='payment method'
                        id='option'
                        type='select'
                        handleChange={this.handleSelectChange} 
                        value = {this.state.selectValue}
                       options =  {

                            this.state.Data.map((item) => (

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
                        handleChange={this.handleCardChange}
                        value={this.state.card_number}
                        />

                    <Input 
                        label="Card_name" 
                        label_value="Card name" 
                        type="text" 
                        name="card_name" 
                        placeholder="TOLUWALASE KENNY OJO" 
                        handleChange={this.handleCardNameChange}
                        value={this.state.card_name}
                        />
                    
                    <div className='inline-items'>
                        <Input 
                            label="Card_expiry_date" 
                            label_value="Expiry date" 
                            type="date" 
                            name="Card_expiry_date" 
                            handleChange={this.handleDateChange}
                            value={this.state.expirely_date}

                            />
                        <Input label="Card_verification_code" label_value="CVC" type="text" name="Card_verification_code" placeholder="012" />
                    </div>
                    
            <div className='pay-container'>
                <Button 
                    button_id='pay-button' 
                    type='button' 
                    button_value="pay" 
                />

            </div>

                </form>
        </div>
    )
}
}

export default Verification;