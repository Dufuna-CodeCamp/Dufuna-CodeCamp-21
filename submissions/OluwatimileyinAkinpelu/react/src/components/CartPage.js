import React, { useState } from 'react'
import kfcKingBucket from '../assets/icons/Rectangle 28.svg'
import refuelMax1 from '../assets/icons/Rectangle 35.svg'
import refuelMax2 from '../assets/icons/Rectangle 29.svg'
import removeIcon from '../assets/icons/Vector.svg'
import Scooter from '../assets/icons/scooter 1.svg'
import kfcKingBucketSmall from '../assets/icons/Rectangle 28-small.svg'
import refuelMax1Small from '../assets/icons/Rectangle 38-small.svg'
import refuelMax2Small from '../assets/icons/Rectangle 36-small.svg'
import ScooterSmall from '../assets/icons/scooter 1-small.svg'
import {useNavigate} from 'react-router-dom';


const CartPage = () => {
  const navigate = useNavigate();
    const InitCartList = [
        {
            id: 1,
            imgSrc: kfcKingBucket,
            imgSrcSmall: kfcKingBucketSmall,
            title:'KFC - King Bucket',
            price: 5000,
            // price: 10000,
            quantity: 0
        },
        {
            id: 2,
            imgSrc: refuelMax1,
            imgSrcSmall: refuelMax1Small,
            title:'Refuel Max',
            price: 1200,
            quantity: 0
        },
        {
            id: 3,
            imgSrc: refuelMax2,
            imgSrcSmall: refuelMax2Small,
            title:'Refuel Max',
            price: 1200,
            quantity: 0
        }
    ];
    const [cartList, setCartList] = useState(InitCartList);

    const increaseQuantity = (item) => {
      const desiredItem = cartList.find((cartItem)=> cartItem.id === item.id);
      if(desiredItem) {
        setCartList(
        cartList.map((cartItem) => (
          cartItem.id === item.id ? {...desiredItem, quantity: desiredItem.quantity + 1} : cartItem
        )))
      }
    }
    const decreaseQuantity = (item) => {
      const desiredItem = cartList.find((cartItem)=> cartItem.id === item.id);
      if(desiredItem) {
        setCartList(
        cartList.map((cartItem) => (
          cartItem.id === item.id ? {...desiredItem, quantity: desiredItem.quantity - (desiredItem.quantity === 0 ? 0 : 1)} : cartItem
        )))
      }
    }
      const totalCartAmount = cartList.reduce((acc, item) => acc + item.quantity * item.price, 0) 
      const deliveryPrice = totalCartAmount !== 0 ? 1200 : 0
      const totalAmount = (totalCartAmount + deliveryPrice)
  return (
    <div className='cartPage'>
        <nav>
            <div className="nav-list nav-two">
                <a href='./CartPage.js' className="text-gray">Home &gt;</a>
                <h2 className='nav-two'>Cart</h2>
            </div>
        </nav>
        <h3 className="title">Cart</h3>
        { cartList.map((item, index) => {
            return (
              <div key={index}>
                <div className='flex'>
                  <div className='cart-item'>
                  {/* <button type='link'> */}
                    <img src={removeIcon} alt='remove icon' className='remove-icon'/>
                  {/* </button> */}
                    <img src={item.imgSrc} alt='' className='big-image'/>
                    <img src={item.imgSrcSmall} alt='' className='small-image'/>
                    <div className='cart-title'>
                      <p>{item.title}</p>
                      <div className='add-tab'>
                        <button className='add-icon' onClick={() => increaseQuantity(item)}> + </button>
                        <span className='' key={index}>{item.quantity}</span>
                        <button className='add-icon' onClick={() => decreaseQuantity(item)}> - </button>
                      </div>
                    </div>
                  </div>
                  <p className='price'>₦{item.price * item.quantity}</p>
                </div>
                  <hr className="ruler"/>
              </div> 
            );
        })}
        <div>
          <div className='flex'>
            <div className='delivery'>
              <img src={Scooter} alt='scooter' className="big-image"/>
              <img src={ScooterSmall} alt='scooter' className='small-image'/>
              <p className='ml-5'>Delivery fee</p>
            </div>
            <p className='price'>{deliveryPrice}</p>

          </div>
          <hr className="ruler"/>
        </div>
        <div className='flex'>
          <h3 className="title">Total</h3>
          <h3 className="title">₦{totalAmount}</h3>
        </div>
        <div className='text-center'>
          <button className='submit-btn' onClick={() => navigate('/verification-page')}>Checkout</button>
        </div>
    </div>
  )
}

export default CartPage