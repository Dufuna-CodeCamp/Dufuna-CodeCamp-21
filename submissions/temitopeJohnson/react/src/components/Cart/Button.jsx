import React from "react";
import { Link } from "react-router-dom";
import './Cart.css'

const Button = () => {
    return (
        <Link to="/Verification">
            <button className="Checkout">Checkout</button >
        </Link>
    );
}

export default Button;
