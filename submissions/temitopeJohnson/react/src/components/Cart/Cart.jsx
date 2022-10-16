import React, { useState } from "react";
import product3Image from "../../assets/CR1.svg";
import product2Image from "../../assets/CR3_4.svg";
import product1Image from "../../assets/image4.svg";
import removeImage from "../../assets/close.svg";
import plusImg from "../../assets/plus.svg"
import minusImg from "../../assets/minus.svg"
import Button from "./Button";
import Total from "./Total";
import Delivery from "./Delivery";
import './Cart.css'
import BreadcrumbsCart from "./BreadcrumbsCart/BreadcrumbsCart"

const Cart = () => {
    const CartContent = [
        {
            id: 1,
            productImage: product1Image,
            productName: "KFC - King Bucket",
            productPrice: 10000,
            productQuantity: 1
        },
        {
            id: 2,
            productImage: product2Image,
            productName: "Refuel Max",
            productPrice: 1200,
            productQuantity: 1
        },
        {
            id: 3,
            productImage: product3Image,
            productName: "Refuel Max",
            productPrice: 1200,
            productQuantity: 1
        }
    ];
    const [CartItem, setCartItem] = useState(CartContent);

    const increase = (quantity) => {
        const updatedQuantity = CartItem.find((cartQuantity) => cartQuantity.id === quantity.id);
        if (updatedQuantity) {
            setCartItem(
                CartItem.map((cartQuantity) => (
                    cartQuantity.id === quantity.id ? { ...updatedQuantity, productQuantity: updatedQuantity.productQuantity + 1 } :
                        cartQuantity
                ))
            )
        }
    }

    const decrease = (quantity) => {
        const updatedQuantity = CartItem.find((cartQuantity) => cartQuantity.id === quantity.id);
        if (updatedQuantity) {
            setCartItem(
                CartItem.map((cartQuantity) => (
                    cartQuantity.id === quantity.id ? { ...updatedQuantity, productQuantity: updatedQuantity.productQuantity - (updatedQuantity.productQuantity === 0 ? 0 : 1) } :
                        cartQuantity
                ))
            )
        }
    }

    const cartTotal = CartItem.reduce((acc, quantity) => acc + quantity.productQuantity * quantity.productPrice, 0)
    const deliveryPrice = cartTotal !== 0 ? 1200 : 0
    const totalPrice = cartTotal + deliveryPrice

    return (
        <>
            <BreadcrumbsCart />
            <div className="PageTitle">Cart</div>
            <div className="MobileSummary">
                <div>4 Items</div>
                <div className="RmvAll">Remove all</div>
            </div>
            <div>
                {
                    CartItem.map((quantity, index) => {
                        return (
                            <div key={index}>
                                <div className="Cart">
                                    <img src={removeImage} alt="remove item" />
                                    <img src={quantity.productImage} alt="cart item" className="ItemImg" />
                                    <div>
                                        <h2>{quantity.productName}</h2>
                                        <div className="ProductQuantity">
                                            <a onClick={() => increase(quantity)} ><img src={plusImg} /> </a>
                                            <h2 key={index}>{quantity.productQuantity}</h2>
                                            <a onClick={() => decrease(quantity)} ><img src={minusImg} /> </a>
                                        </div>
                                    </div>
                                    <h2 className="ProductPrice">&#8358; {quantity.productPrice * quantity.productQuantity}</h2>
                                </div>
                                <br />
                                <hr style={{ borderColor: '#C9C9C9', borderWidth: 1 }} />
                                <br />
                            </div>
                        )
                    })
                }
                <Delivery delivery={deliveryPrice} />
                <br />
                <Total price={totalPrice} />
                <Button />
            </div>
        </>
    );
}

export default Cart;