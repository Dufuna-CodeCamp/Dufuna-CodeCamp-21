import React, { useEffect, useState } from 'react';
import Header from './header';
import foodItems from './foodItems';
import Minus from '../images/Minus.svg';
import plus from '../images/plus.svg';
import close from "../images/close.svg";
import scooter from "../images/scooter 1.svg";
import Border from './borderline';
import FullBorder from './FullBorder';
import Button from './button';
import { useNavigate } from 'react-router-dom';




const CartPage = () => {

    const fee = 1200;
    let total = 0;

    const [FoodList, setFoodList] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        setFoodList(foodItems)
        }, [])

    const addClick = (food) => {
        const foodItem = FoodList.find((item) => item.id === food.id );
        
        if (foodItem) {
            setFoodList (
                FoodList.map ((item) => (
                    food.id === item.id 
                        ? {...foodItem, quantity: foodItem.quantity + 1}
                        : item
                ))
            )
        }
    }


    const minusClick = (food) => {
        const foodItem = FoodList.find((item) => item.id === food.id );
        
        if (foodItem) {
            setFoodList (
                FoodList.map ((item) => (
                    food.id === item.id 
                        ? {...foodItem, quantity: foodItem.quantity - (foodItem.quantity <= 1 ? 0 : 1) }
                        : item
                ))
            )
        }
    }

    const removeItem = (food) => {
        const foodItem = FoodList.find((item) => item.id === food.id );
        
        if (foodItem) {
            setFoodList (
                FoodList.filter((item) => (
                    foodItem.quantity > 1
                        ? item 
                        : food.id !== item.id
                ))
            )
        }
    }

    const removeAll = () => {
        setFoodList(
            FoodList.map((item) => removeItem(item))
        )
    }

    const navigateVerification = () => {
        navigate('/Verification');
    }

    return (
        <div>
            <Header grey="Home > "  bold="Cart" />

            <div className=''>
                <div className="cart-title-div">
                    <div>
                        <h2 id="cart-title-head">Cart</h2>
                        <h3 id="cart-title-item">{FoodList.length} items</h3> {/* I'll nedd to change this later */}
                    </div>
                    <h3 id="cart-title-remove" onClick={() => removeAll} >Remove all</h3>
                </div>
                {
                    FoodList.length === 0
                        ? <p>You Have An Empty Cart</p>
                        : FoodList.map((item) => (
                            <div>
                                <div className="order">
                                    <div className="order-leftside">
                                        <div className="close-img-div" onClick={() => removeItem(item)}>
                                            <img className="plus-minus-img" src={close} alt="close" />
                                        </div>
                                        <div className="food-img-div">
                                            <img src={item.img} alt="food" className="food-img"/>
                                        </div>

                                        <div className="food-order">
                                            <div className="food-name"> {item.food} </div>

                                            <div className="food-number">

                                                <div className="plus-minus-btn">
                                                    <img src={plus} alt="plus" onClick={() => addClick(item)} className="plus-minus-img" />
                                                </div>
                                                
                                                <div id="food-number">
                                                    {item.quantity}
                                                </div>
                                                
                                                <div className="plus-minus-btn">
                                                    <img src={Minus} alt="Minus" onClick={() => minusClick(item)} className="plus-minus-img" />
                                                </div>
                                            </div>
                                        </div>
                                

                                    </div>
                                    <div className="order-rightside">
                                    {"#" + item.price * item.quantity }
                                    <p id='hide-total'>
                                        {total += item.quantity * item.price}
                                    </p>
                                    </div>
                            
                               </div>
                               <Border />
                               
                            </div>
                     ))
                }
            </div>

            {FoodList.length === 0
                ? <p></p>
                : <div>
                        <div className='order' id='delivery-div'>
                            <div className='order-leftside' id='delivery'>
                                <div className="food-img-div">
                                    <img src={scooter} alt='scooter'className="food-img"/>
                                </div>
                                <p className="food-name" >Delivery Fee</p>
                            </div>

                            <div className="order-rightside">
                                {"#" +  fee}
                            </div>
                            
                        </div>
                        <FullBorder />
                        <div className='total'>
                            <p className='total-text'>Total</p>
                            <p className='total-text'>#{total + fee}</p>
                        </div>
                        <Button className="checkout-btn" title="Check Out" btnClick={navigateVerification} />
                        
                </div> 
                }
        </div>
    )

    
}




export default CartPage;