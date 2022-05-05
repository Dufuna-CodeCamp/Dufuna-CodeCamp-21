import React from "react";
import { Link } from 'react-router-dom';


const Checkout = (props) => {
//    let history = useHistory()


    return (
        <div id="container">
            <Link to='/' id="button" >{props.Checkout}</Link>
        </div>
    )
}
export default Checkout;

 