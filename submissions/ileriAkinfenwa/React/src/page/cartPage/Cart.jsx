import React, { useEffect, useState } from 'react'
import Vector from "../../assets/Vector.png"
import Scooter from "../../assets/scooter 1.svg"
import "./cart.css"

export const Cart = ({cart}) => {
  const [CART, setCART] =useState([])
  
  useEffect(() =>{
      setCART(cart)
  },[cart])

  const Delivery = 1200

  const Price = CART < 1 ? null: Delivery 

  return ( 
    <div className='cart'>
        <div class="breadcremb">
            <a href="./vendor" style={{textDecoration:"none", color:'black'}}>Home &gt; <strong>Cart</strong></a>
        </div>
        <h2 style={{marginTop:"30px"}}>Cart</h2>
        <div className='cartContainer'>
        {
          CART?.map((cartItem,cartIndex)=>{
            return(
              <div>
                <div className="cartSms">
                  <div className="cartdetails">
                    <img src={Vector} alt='rem' className='remove'/>
                    <img width={'150px'} src={require("../../assets/" + cartItem.pictures + `.svg`).default}  alt="" />
                      <div className="cartdetail">
                      <div className="name">
                        <span>{cartItem.name}</span>
                      </div>
                    <div className="btn">   
                      <button
                        onClick={()=>{
                        const _CART= CART.map((item,index)=>{
                        return cartIndex === index ? {...item, quantity : item.quantity > 0 ? item.quantity - 1 : 1}: item})
                        setCART(_CART)    
                        }}
                      >-</button>
                      <span className='quantity'>{cartItem.quantity}</span>
                      <button onClick={()=>{
                      const _CART= CART.map((item,index)=>{
                        return cartIndex === index ? {...item, quantity : item.quantity + 1 }: item})
                        setCART(_CART)    
                      }}>+</button>
                      </div>
                    </div>
                  <div>
                    </div>
                    </div>
                    <div>
                      <span className='cartPrice'>#{cartItem.price * cartItem.quantity}</span>
                    </div>
                     
                </div> 
                <hr />
                </div>
                ) 
              }) 
            }  
          </div>
            <div className='cartSms'>
              <div className="cartdetails">
              <img src={Scooter} alt="del" width={'70px'} style={{marginLeft:'40px'}}/>
                <div className='cartSms'>
                  <h4 style={{marginLeft:"70px"}}>Delivery Fee</h4>
                </div>
              </div>
              <p className='quantity cartPrice'>#{Price}</p>
            </div>
            <hr />
            <div className="totalPrices">
              <p className='totalPrice' style={{color:'#4E4D4D'}}>Total : <span></span>
              <div className="totalPrice">
                #{
                Price + CART.map(item => item.price * item.quantity).reduce((total,value) => total+value, 0)
                }
                </div>
              </p>
              <div className="check" >
                <button>Checkout</button>
              </div>
        </div>
    </div>
  )
}
