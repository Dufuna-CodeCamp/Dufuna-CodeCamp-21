import React from "react";
import Header from "./Header";
import SuccessContent from "./SuccessContent";
import image from "../images/Illustration_success.svg"

class Successful extends React.Component {
    render() {
        return (
            <div>
                <Header 
                heading1 = "Food" 
                heading2 = "Bag" 
                signUp= "SignUp"  
                linkElement1 = "Login" 
                linkElement2="Cart" 
                />

                <SuccessContent
                image = {image}
                />

            </div>

            )

    }
    
}
export default Successful;