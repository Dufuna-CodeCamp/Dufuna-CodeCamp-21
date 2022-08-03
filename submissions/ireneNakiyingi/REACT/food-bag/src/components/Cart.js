import React, { useEffect, useState } from 'react';

import Breadcrumb from './Breadcrumb';
import CheckOut from './Checkout.js'
import Delivery from './Delivery.js';
import Button from './Buttons.js';
import Header from './Header.js';
import './Cart.css'


import Close from './images/close.svg'
import Plus from './images/plus.svg'
import Minus from './images/Minus.svg'
import img1 from './images/refuelmax.svg'
import img2 from './images/refuelmax2.svg'
import img3 from './images/kfc-kingb.svg'


const data =[
    {
        id: 1,
        product: img3,
        title: 'KFC- King Bucket',
        quantity: 1,
        price: 5000
    },
    {
        id:2 ,
        product:img1 ,
        title: 'Refuel Max' ,
        quantity: 1,
        price:1200 
    },
    {
        id: 3,
        product: img2 ,
        title: 'Refuel Max' ,
        quantity:1 ,
        price: 1200
    }
]

function CartPage (){
    let totalPrice = 0; 

    const [cart, setCart]= useState([]);
    useEffect(()=>{
        setCart(data);
    }, []);

    function productAvailable(id){
       if (cart.some((item) => item.id===id)){ 
            return true
                }
        
    };
    function pricer(id){
        let cartObj = {};
        for (let i =0;data.length >i; i++){
            if (data[i].id === id){
                cartObj = data[i]

            }
        }
        return cartObj.price
    }
    pricer()
    // update price
    function trackCartTotal(){
        let pricec=1200;
        for (let i =0; i < cart.length; i ++){
            pricec += cart[i].price
        }
        totalPrice= pricec
        return totalPrice
    }
    trackCartTotal()

    function increament (product){
        if(productAvailable(product.id)){
            const newCart = cart.map((item)=>{
                let quantity= item.quantity;
                let price = item.price;
                if (item.id === product.id && item.quantity >= 1){
                    product.quantity +=1;
                    price = (pricer(item.id))*product.quantity
                
                    
                }
                return{
                    ...item,
                    quantity,
                    price,
                }
            });
            
            setCart(newCart);
            trackCartTotal(); 
        } else{
            alert ('Item not available.')
        }
    }
    function decreament (product){
        if(productAvailable(product.id)){
            const newCart= cart.map((item)=>{
                let quantity= item.quantity;
                let CPrice = item.price;
                let price= item.price;
                if (item.id === product.id && product.quantity>1){
                    product.quantity--;
                    price=CPrice -pricer(item.id) ;
                }
                return{
                    ...item,
                    quantity,
                    price
                }
            });
            setCart(newCart);
            trackCartTotal();
        }else{
            alert('Item not availabe.')
        }
    }
    function trackQTotal(){
        let quantitytotal=0
        let qtotal=0;
        for (let i =0; i < data.length; i ++){
           qtotal += data[i].quantity
        }
        quantitytotal=qtotal
        return(quantitytotal)
       
        
        
    }
    trackQTotal()
    
    
    
    
    return(
        <div className='cart'>

        <Header/>

        <Breadcrumb/>
        <div className='heading'>
            <div className='heading1'>
                <h2 className='cartheading'>Cart</h2>

                <h3 className='q-text'>{trackQTotal(data.quantity)} items</h3>
                
            </div>
            <div >
                <h4 className='right'>Remove all</h4>
            </div>
            
        </div>
        


        <div className='KFC'>
            <div className='cart-item' key = {data[0].id}>
            <span className='removebtn' >
                <img src={Close} alt='removebtn'/>
            </span>
            <div className='item-img'>
                <img src={data[0].product} alt=' product-img' /> 

            </div>
            <div className='product-info'>
                <h3 className='info'> {data[0].title} </h3>
                <div className='counter-btns'>
                    <Button
                 type='button'
                 class='quatity-counter'
                 id="plus-btn"
                 value = {<img src={Plus} alt='add'/>}
                 handleOnClick= { ()=> increament(data[0])} />

                <h3 className='quantity'> {data[0].quantity}</h3>
                    <Button
                 type='button'
                 class='quatity-counter'
                 id="minus-btn"
                 value = {<img src={Minus} alt='subtract'/>}
                 handleOnClick= { ()=> decreament(data[0])} />
                
                
                </div>
            
            
            </div>
            <div>
               <h3 className='price'> #{data[0].price* data[0].quantity}</h3>
 
            </div>
            
        </div>
    
        </div>
        <hr></hr>

        <div className='refuelmax1'>
            <div className='cart-item' key = {data[1].id}>
                    <span className='removebtn' >
                        <img src={Close} alt='removebtn'/>
                    </span>
                    <div className='item-img'>
                        <img src={data[1].product} alt=' product-img' /> 

                    </div>
                    <div className='product-info'>
                        <h3 className='info'> {data[1].title} </h3>
                        <div className='counter-btns'>
                            <Button
                         type='button'
                         class='quatity-counter'
                         id="plus-btn"
                         value = {<img src={Plus} alt='add'/>}
                         handleOnClick= { ()=> increament(data[1])} />

                        <h3 className='quantity'> {data[1].quantity}</h3>
                            <Button
                         type='button'
                         class='quatity-counter'
                         id="minus-btn"
                         value = {<img src={Minus} alt='subtract'/>}
                         handleOnClick= { ()=> decreament(data[1])} />
                        
                        
                        </div>
                    
                    
                    </div>
                    <div>
                        <h3 className='price'> #{(data[1].price)*data[1].quantity}</h3>
                    </div>
                    

                </div>
        </div>

        <hr></hr>
        <div className='refuelmax2'>
            <div className='cart-item' key = {data[2].id}>
                    <span className='removebtn' >
                        <img src={Close} alt='removebtn'/>
                    </span>
                    <div className='item-img'>
                        <img src={data[2].product} alt=' product-img' /> 

                    </div>
                    <div className='product-info'>
                        <h3 className='info'> {data[2].title} </h3>
                        <div className='counter-btns'>
                            <Button
                         type='button'
                         className='quatity-counter'
                         id="plus-btn"
                         value = {<img src={Plus} alt='add'/>}
                         handleOnClick= { ()=> increament(data[2])} />

                        <h3 className='quantity'> {data[2].quantity}</h3>
                            <Button
                         type='button'
                         className='quatity-counter'
                         id="minus-btn"
                         value = {<img src={Minus} alt='subtract'/>}
                         handleOnClick= { ()=> decreament(data[2])} />
                        
                        
                        </div>
                    
                    
                    </div>
                    <div>
                        <h3 className='price'> #{(data[2].price)* data[2].quantity}</h3>
                    </div>
                    

                </div>
        </div>

        <hr></hr>
        <Delivery/>
        <hr></hr>
        <div className='btn-nav'>
            <div className='total' >
                <h1> Total</h1>
                <h1 className='totalp'> #{totalPrice}</h1> 
            </div>
            <div className='checkout-count'>
                <CheckOut/>
            </div>
        </div>
    </div>
    )
}

export default CartPage;