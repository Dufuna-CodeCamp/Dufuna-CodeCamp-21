import React, { useState } from "react" ;



import OrderItem from "./orderItem";
import DeliveryFee from './delivery';
import Button from "./button";

import kingBuckImg from "../images/image4.svg";
import refuelCiti from "../images/image1.svg";
import express from "../images/image2.svg";
import crunch from "../images/image3.svg";
import scooter from "../images/scooter 1.svg";






const Cart = (props) => {

    const [display, setDisplay] = useState(true);
    const [itemNum, setItemNum] = useState (4); //need to make this number dynamic later so that it changes as items are added to cart
    const removeAll = () => {
        setDisplay( false )
        setItemNum(0)
    }
        
    if (display) {
        return(

        <div>
            <div className="cart-title-div">
                <div>
                    <h2 id="cart-title-head">Cart</h2>
                    <h3 id="cart-title-item">{itemNum} items</h3> {/* I'll nedd to change this later */}
                </div>
                <h3 id="cart-title-remove" onClick={removeAll}>Remove all</h3>
            </div>

            <div>
                <OrderItem name="King-Bucket" price={5000} image={kingBuckImg} />
                <OrderItem name="Citizen Meal" price={1500} image={refuelCiti} />
                <OrderItem name="Express Meal" price={2000} image={express} />
                <OrderItem name="Crunchy Wings" price={1750} image={crunch} />
                <DeliveryFee price={1200} image={scooter} />
                <Button className="checkout-btn" title="Checkout" />
            </div>
                
        </div>
        )
     }
        




    else {
        return (
                <div className="cart-title-div">
                    <div>
                        <h2 id="cart-title-head">Cart</h2>
                        <h3 id="cart-title-item">{itemNum} items</h3> {/* I'll nedd to change this later */}
                    </div>
                    <h3 id="cart-title-remove" onClick={removeAll}>Remove all</h3>
                </div>
        )
    }
}

export default Cart;