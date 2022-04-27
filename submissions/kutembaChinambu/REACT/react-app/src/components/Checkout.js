import React from "react";
import { useHistory } from "react-router-dom";

handleClick = () => {
    window.open("http://twitter.com/saigowthamr");

}

const Checkout = (props) => {
    const history = useHistory();
  
    const openVerification = () => {
        history.push("/Verification")

    return (
        <div id="container">
            <button id="button" onClick={openVerification}>Checkout</button>
        </div>
    )
}
export default Checkout;

 