import React from "react";
import Scooter from '../../assets/scooter 1.svg'
import './Cart.css'

const Delivery = (props) => {
    return (
        <div className="Delivery">
            <img src={Scooter} className="ScooterImg" />
            <h2>Delivery fee</h2>
            <h2 className="ProductPrice">&#8358; {props.delivery}</h2>
        </div>
    );
}

export default Delivery;