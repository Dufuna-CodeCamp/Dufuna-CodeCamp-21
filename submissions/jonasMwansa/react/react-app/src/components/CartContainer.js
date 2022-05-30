import React, { useEffect, useState} from 'react';

import plus from '../image_assets/plus.svg'
import minus from '../image_assets/Minus.svg'
import cancel from '../image_assets/cancel.png'
import scooter from '../image_assets/scooter 1.svg'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Sublink from './Sublink'


const CartContainer = ({products})=>{

    let total = 0;
    const fee= 1200;

    const navigateTo = useNavigate();

    const[Data, setData] = useState([]);

    useEffect(()=> {

        setData(products)
    },[products])


    //method to remove item from cart if quantity is only one item
    const removeFromCart=(item)=>{

        const findItem = Data.find((param)=> param.product_id===item.product_id);

        if(findItem.quantity===1) {

            setData(
                Data.filter((param)=> (
                    param.product_id!==item.product_id
                ))
            )
        }

    }

    //methods to mutate values of the quantities

    //increase the number of items
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

    //reduce the number of items
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
  
    const handleOnClick = (e) => {
        e.preventDefault();
        navigateTo('/verification-page')

}
    return(

        <div>
        <Sublink />
        <div className='content-wrapper'>

           {
               Data.map((item)=> (

                <div key={item.product_id} className='content-display'>

                    <div className='image-title-wrapper'>  

                        <button id="remove-btn" onClick={()=> removeFromCart(item)}>
                            <img src={cancel} alt="cancel" id='cancel'></img>
                        </button>
                        <img src={item.image} id="image" alt="product item"></img>

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
            <div>
                <hr/>
            </div>

            <div className='delivery-details'>
                <div className='scooter-delivery-title'>
                    <img src={scooter}  id='scooter' alt='delivery man on scooter'></img>
                </div>
                    <p id='delivery'>Delivery Fee</p>
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
                <Button 
                    button_id='checkout-button' 
                    type='button' 
                    button_value="checkout" 
                    handleOnClick={(e)=>handleOnClick(e)}
                />

            </div>

        </div>
        </div>
        
    )
}

export default CartContainer;