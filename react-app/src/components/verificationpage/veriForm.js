import React, {Component} from 'react';
import Input from './form/input';
import Select from './form/select';
import Button from './form/button';

class VeriForm extends Component{
    constructor(props){
        super(props);

        this.state ={
            phoneNumber:"",
            paymentMethod:"",
            cardNumber:"",
            cardName:"",
            expiryDate:"",
            CVC:"",
            methodOption:[
                "Card",
                "Bank Transfer",
                "Cash",
            ],
        }
    }

    handleFormChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    };



    render(){
        return(
            <div className='form'>
                <Input 
                title ="Phone Number"
                name ="phoneNumber"
                value ={this.state.phoneNumber}
                inputType ="tel"
                placeholder= "+234"
                handleChange ={this.handleFormChange}
                />
                <br/>
                <hr/><br/>

                <Select
                title ="Payment Method"
                name ="PaymentMethod"
                value={this.state.method}
                options={this.state.methodOption}
                placeholder= "Card"
                handleChange ={this.handleFormChange}
                />

                <Input 
                title ="Card Number"
                name ="cardNumber"
                value ={this.state.cardNumber}
                inputType ="text"
                placeholder= "2345 6543 7868 2343"
                handleChange ={this.handleFormChange}
                />

                <Input 
                title ="Card Name"
                name ="cardName"
                value ={this.state.cardName}
                inputType ="text"
                placeholder= "TOLUWALASE KENNY OJO"
                handleChange ={this.handleFormChange}
                />

                <div className='card-details'>
                    <div>
                        <Input 
                        title ="Expiry Date"
                        name ="expiryDate"
                        value ={this.state.expiryDate}
                        inputType ="text"
                        placeholder= "01/23"
                        handleChange ={this.handleFormChange}
                        />
                    </div>

                    <div>
                        <Input 
                        title ="CVC"
                        name ="CVC"
                        value ={this.state.CVC}
                        inputType ="text"
                        placeholder= "012"
                        handleChange ={this.handleFormChange}
                        />
                    </div>
                </div>

               <div className='btn'>
                   <Button title = "Pay" inputType ="submit"/>
               </div>
            </div>
        )
    }
}

export default VeriForm;