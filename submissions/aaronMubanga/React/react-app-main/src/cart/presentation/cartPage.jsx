import React from 'react';
import Hero from './hero';
import Products from '../Attributes/products';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Attributes/Button';
import plussign from '../assets/images/plus.svg';
import minussign from '../assets/images/Minus.svg';
import Delivery from '../Attributes/Delivery';
import close from '../assets/images/close.svg';
import scooter from '../assets/images/scooter .svg';



// import './App.css';

const Html=  ()=>{

    let total_price = 0;
    const delivery_fee = 1200;
    let GoTo = useNavigate();

    const[products,setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products)
    },[])

  const handleChange = (product) => {

    const checkAvailable = products.find((item) => item.id === product.id);

    if(checkAvailable) {
        
       setProducts(

        products.map((item) =>(
          
            product.id === item.id ? {...checkAvailable,quantity: checkAvailable.quantity + 1} : item
        ))

       ) 
    }

  }

  const handleRemoveAll=(product)=>{

    const seekproduct = products.find((item)=> item.id === product.id);

    if(seekproduct.quantity === 1) {

        setProducts(
            Products.filter((item)=> (
                item.id!==product.id
            ))
        )
    }

}

  const HandleDecrement = (product) => {

    const checkAvailable = product.find((item) => item.id === product.id);

    if(checkAvailable) {

        setProducts(
            product.map((item) => (
                product.id === item.id ? {...checkAvailable,quantity: checkAvailable.quantity - (checkAvailable.quantity > 1 ? 1:0)}: item
            ))
        )
    }
  }

    const handleClick = (e) => {
        e.preventDefault();
        GoTo("/verification");

    }

   
        return(
        <div>
            <Hero />
            {
                products.map((product) => (
                <div key={product.id} className="product-container">
                    <div className="imageAndButton">
                        <img src={close} alt="description" onClick={()=>handleRemoveAll(product)} />
                        <div className="image-container">
                            <img src={product.image} alt="description"/>
                        </div>
                    <div className="product-details">
                        <p className="product-price">
                            {product.info}
                        </p>
                    
                        <div className='buttons-class'>
                            <Button
                                    type='button'
                                    value='increment' 
                                    id='increment-button'
                                    handleChange = {() =>handleChange(product)}
                                    //handleChange       
                                    image_src={plussign} 
                                    description="plus sign"
                            />
                                <p>{product.quantity}</p>
                            <Button
                                type='button'
                                value='dencrement' 
                                id='decrement-button'
                                // onclick={()=>HandleIncrement(product)}
                                handleChange  = {()=>HandleDecrement(product)}    
                                image_src={minussign} 
                                description="minus sign"
                            />
                        </div>
                    </div>
                    </div>
                    <div className="product-price">
                        <p>#{product.quantity === 0 ? product.price: product.price * product.quantity}</p>
                        <p id='hidden-total-price'>#{product.quantity === 0 ? (total_price += product.price): total_price += product.price * product.quantity}</p>
                    </div>
                </div>
                ))            
            }

        <Delivery 
            image={scooter}
            fee={delivery_fee}
        />

            <div className="Total">
                <h2>Total</h2>
                <p>#{total_price===0? 0 : (total_price += delivery_fee)}</p>

            </div>

            <div className='submit-button-class'>
                <button 
                    type="submit" 
                    id="submit-button"
                    onClick={(e)=>handleClick(e)}
                    >
                    checkout
                </button>
            </div>
    </div>
    )       

}

export default Html;