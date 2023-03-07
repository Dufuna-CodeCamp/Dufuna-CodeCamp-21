import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DeliverySVG from "../../assets/image/scooter 1.svg";
import CloseSVG from "../../assets/image/close.svg";
import MinusSVG from "../../assets/image/Minus.svg";
import PlusSVG from "../../assets/image/plus.svg";
import KFCKingBucketSVG from "../../assets/image/image4.svg";
import RefuelMaxPotSVG from "../../assets/image/image1.svg";
import KFCKingBucket2SVG from "../../assets/image/image3.svg";
import Header from "../layout/header";
import Nav from "../layout/nav";
import "./cart.css";

const CartPage = () => {

    const [total, setTotal] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(1200);
    const [items, setItems] = useState([
        {
            image: KFCKingBucketSVG,
            product: "KFC - King Bucket 1",
            number: 2,
            unitPrice: 5000,
            totalPrice: 10000,
        },
        {
            image: RefuelMaxPotSVG,
            product: "Refuel Max",
            number: 2,
            unitPrice: 600,
            totalPrice: 1200,
        },
        {
            image: KFCKingBucket2SVG,
            product: "KFC - King Bucket 2",
            number: 2,
            unitPrice: 600,
            totalPrice: 1200,
        },
    ])

    const calculateTotal = (items) => {
        let sum = 0;
        if (items.length < 1) {
            return sum;
        } else {
            for (let i = 0; i < items.length; i++) {
                sum = sum + items[i]["totalPrice"];
            }
            return deliveryPrice + sum;
        }
    }

    const handleIncrease = (idx) => {
        
        let oldItem = items[idx];
        
        let newNumber = oldItem.number + 1;
        oldItem.number = newNumber;
        
        let newTotalPrice = newNumber * oldItem.unitPrice;
        oldItem.totalPrice = newTotalPrice;
        
        setItems(items.map((item, index) =>
            index === idx ? oldItem : item
        ))
        
        setTotal(calculateTotal(items))
    }

    const handleReduce = (idx) => {
        
        let oldItem = items[idx];
        
        let newNumber = oldItem.number - 1;
        if (newNumber < 1) {
           
            

            setItems(items.filter((item, index) => index !== idx))
        } else {
            
            oldItem.number = newNumber;
            
            let newTotalPrice = newNumber * oldItem.unitPrice;
            oldItem.totalPrice = newTotalPrice;
            
            setItems(items.map((item, index) =>
                index === idx ? oldItem : item
            ))
            
            setTotal(calculateTotal(items))
        }
    }

    const handleRemove = (idx) => {
        
        setItems(items.filter((item, index) => index !== idx))
        
        setTotal(calculateTotal(items));

    }

    const handleDelete = (event) => {
        event.preventDefault();
        
        setItems([])
        
        setTotal(calculateTotal(items));

    }


    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items])

    return (
        <>
            <Header/>
            <Nav navList={["Home", "Cart"]}/>
            <div className="cart-body">
                <div className="cart-body-header-section">
                    <div className="cart-body-title-section">
                        <h2 className="cart-body-header-title">Cart</h2>
                        <p className="cart-body-item-number">
                            <span>{items.length}</span>&nbsp;items
                        </p>
                    </div>
                    {items.length > 0 ? (
                        <div className="cart-body-remove-section">
                            <a
                                href="delete"
                                className="cart-body-remove-link"
                                onClick={handleDelete}
                            >
                                Remove all
                            </a>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="cart-list">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <div className="cart-item-detail">
                                    <div className="delete-item">
                                        <button className="delete-item-button">
                                            <img
                                                alt="close"
                                                className="delete-item-image"
                                                src={CloseSVG}
                                                onClick={() => handleRemove(index)}
                                            />
                                        </button>
                                    </div>
                                    <div className="cart-item-product">
                                        <div className="cart-item-product-image-container">
                                            <img
                                                alt="FImg"
                                                className="cart-item-product-image"
                                                src={item.image}
                                            />
                                        </div>
                                        <div className="cart-item-product-description">
                                            <div className="cart-item-product-name-container">
                                                <div className="cart-item-product-name">
                                                    {item.product}
                                                </div>
                                            </div>
                                            <div className="cart-item-product-amount">
                                                <div className="cart-item-reduce">
                                                    <button className="cart-item-reduce-button">
                                                        <img
                                                            alt="-"
                                                            className="cart-item-reduce-image"
                                                            src={MinusSVG}
                                                            onClick={() => handleReduce(index)}
                                                        />
                                                    </button>
                                                </div>
                                                <div className="cart-item-number">
                                                    <div className="cart-item-number-value">
                                                        {item.number}
                                                    </div>
                                                </div>
                                                <div className="cart-item-increase">
                                                    <button className="cart-item-increase-button">
                                                        <img
                                                            alt="+"
                                                            className="cart-item-increase-image"
                                                            src={PlusSVG}
                                                            onClick={() => handleIncrease(index)}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item-price-container">
                                        <p className="cart-item-price">#{item.totalPrice}</p>
                                    </div>
                                </div>

                                <div className="cart-item-border"></div>
                            </div>
                        ))
                    ) : (
                        <div className="cart-list-empty">
                            <h3 className="cart-list-empty-title">No Items In Cart!</h3>
                        </div>
                    )}
                </div>
                <div className="cart-delivery">
                    <div className="cart-delivery-detail">
                        <div className="cart-delivery-description">
                            <img
                                alt="dl"
                                className="cart-delivery-description-image"
                                src={DeliverySVG}
                            />
                            <h3 className="cart-delivery-description-title">
                                Delivery Fee
                            </h3>
                        </div>
                        <div className="cart-delivery-price">
                            <p className="cart-delivery-price-value">
                                #{items.length > 0 ? deliveryPrice : 0}
                            </p>
                        </div>
                    </div>
                    <div className="cart-delivery-border"></div>
                </div>
                <div className="cart-total">
                    <h3 className="cart-total-title">Total</h3>
                    <h3 className="cart-total-value">#{total}</h3>
                </div>
                <div className="cart-checkout">
                    <button className="cart-checkout-button">
                        <Link to="/verification" role="button" className="cart-checkout-button-text">Checkout</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartPage;
