import React from "react";
import cancel from "../Images/cancel.png"
import plus from '../Images/plus.svg'
import minus from '../Images/Minus.svg'
import scooter from "../Images/scooter 1.svg"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import PagesNav from "./PagesNav";
import Button from './Button'



const Cart = ({ products }) => {

    let total = 0;
    const fee= 1200;

    const navigateTo = useNavigate();

    const[Data, setData] = useState([]);

    useEffect(()=> {

        setData(products)
    },[products])

    
    

    //  METHOD TO INCREASE  QUANTITY OF ITEM
    const increaseItems=(item)=>{

        const findItem = Data.find((param)=> param.product_id=== item.product_id);

        if(findItem) {

            setData(

                Data.map((param)=> (
                param.product_id === item.product_id ? {...findItem, quantity: findItem.quantity + 1}: param
                ))
            )
           
        }
       
    }

    //  METHOD TO INCREASE  QUANTITY OF ITEM
    const removeItems=(item)=>{
    const findItem = Data.find((param)=> param.product_id=== item.product_id)

        if(findItem) {

            setData(

                Data.map((param)=> (
                    param.product_id===item.product_id ? {...findItem, quantity: findItem.quantity - (findItem.quantity <= 1 ? 0 : 1)}: param
                ))
            )
        }

    }
  
//  CHECKOUT-BUTTON METHOD
    const handleOnClick = (e) => {
        e.preventDefault();
        navigateTo('/verification-page')
    }


    return (
        
        <div>
        <Navigation />
        <PagesNav />
            <div className="content-wrapper">
                {
                    Data.map((item) => (
                        
                        <div key={item.product_id} className="content-display">
                            <div className="image-title-wrapper">
                                <span>
                                    <img src={cancel} alt="cancel" id="cancel" ></img>
                                </span>
                                <img src={item.image} id="image" alt="cart item"></img>

                                <div className='title-buttons'>
                                <p id='product-name'>{item.product_name}</p>

                                <div className='buttons'>

                                    <button id ="plus-button" onClick={()=>increaseItems(item)}> 
                                        <img id='plus-image' src = {plus} alt="plus"></img>
                                    </button>
                                
                                    <p id='quantity'>{item.quantity}</p>

                                    <button id ="minus-button" onClick={()=>removeItems(item)}> 
                                        <img id='minus-image' src = {minus}  alt="minus"></img>
                                    </button>
                                </div>

                            </div>

                        </div>

                        <p id ='price'>#{ item.quantity === 0 ? item.price: item.quantity * item.price}</p>
                        <p id='hidden'>{ item.quantity === 0 ? total+=item.price: total += item.quantity * item.price}</p>
                    </div>

                    ))
                }
                <div id="line-break">
                    <hr/>
                </div>

                <div className='delivery-details'>
                    <div className='scooter-delivery-title'>
                        <img src={scooter}  id='scooter' alt='delivery man on scooter'></img>
                        <p id='delivery'>Delivery Fee</p>
                    </div>
                        
                        <p id='delivery-price'>#{total===0? 0: fee}</p>
                </div>
                <div>
                    <hr/>
                </div>
                <div className='total-container'>
                
                        <p id='total-title'>Total</p>
                        <p id='total-price'>#{total===0? 0 : total+fee}</p>
                </div>

                <div className='checkout-container'>
                    <Button id='checkout-button' type="button" title="Checkout" handleOnClick
                    ={(e)=>handleOnClick(e)} />    
                </div> 

            </div>
        </div>
    )
}

export default Cart;
