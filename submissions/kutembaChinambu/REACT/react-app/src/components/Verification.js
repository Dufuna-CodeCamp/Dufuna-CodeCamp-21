import React from "react";
import Header from "./Header";
import VerificationNav from "./VerificationNav";
import VerificationTag from "./VerificationTag";
import breadcrumb from "../images/radio_button_checked.svg";
import Form from "./Form";

class Verification extends React.Component {
    state = {
            phoneNumber:"",
    };

    handleInputChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        return(
            <div>
                <Header 
                heading1 = "Food" 
                heading2 = "Bag" 
                signUp= "SignUp"  
                linkElement1 = "Login" 
                linkElement2="Cart" 
                />

                <VerificationNav 
                cart = "Cart>"
                home = "Home>"
                verification = "Verification"
                />

                <VerificationTag
                name = "Verification"
                confirm = "Confirm address & Payment"
                address = "Delivery Address"
                addressTag = "Your order will be delivered to your address"
                breadcrumb = {breadcrumb}
                />

                <Form />  
            </div>
        )
    }
}

export default Verification;