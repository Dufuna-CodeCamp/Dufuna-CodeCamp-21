import Cancel from '../asserts/icons/cancel.png'
import NavBar from "./Navbar";
import Button from "./Button";
import Plus from '../asserts/icons/plus.svg'
import Minus from '../asserts/icons/Minus.svg'
import Scooter from '../asserts/images/scooter 1.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../data.js';
import { useEffect } from 'react';

const Cart = ()=>{
    let total = 0;
    const deliveryFee = 1200;
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    setCartItems(products)},[]);

  const onAdd = (product)=>{
    console.log(product)
    const exist = cartItems.find((item)=>item.id===product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item)=> item.id === product.id?{...exist, quantity:exist.quantity + 1}:item)
        
      )
    }else{
      setCartItems([...cartItems, {...product, quantity:1}]);
    }
  }


  const onRemove = (product)=>{
    const exist = cartItems.find((item)=>item.id===product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item)=> item.id === product.id?{...exist, quantity:exist.quantity - (exist.quantity <= 1 ? 0:1)}:item)
      )
    }else{
      setCartItems([...cartItems, {...product, quantity:1}]);
    }
  }
    return(
        <main>
            <NavBar/>
            <section className="page-nav">
                <p>Home &gt;&nbsp;</p>
                <p className="py-dark">Cart</p>
            </section>
            <section className='cart-item-section'>
                <p className='cart-title'>Cart</p>
                {cartItems.map((product)=>{
                    return(
                    
                    <section key={product.id}className='cart'>
                        <div className='cart-cancel'>
                            <img className='small' src={Cancel} alt="" />
                        </div>
                        <div className='cart-item'>
                            <div>
                                <img className="cart-item-img"src={product.img} alt="" />
                            </div>
                            <div className='item-details'>
                                <p className='item-name'>{product.name}</p>
                                <div className='item-change-qty'>
                                    <div>
                                        <button onClick={()=>onAdd(product)} className='btn-small'><img className='img-plus' src={Plus} alt="" /></button>
                                    </div>
                                    
                                    <span className='qty'>{product.quantity}</span>
                                    <div>
                                        <button onClick={()=>onRemove(product)}className='btn-small'><img className='img-minus' src={Minus} alt="" /></button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='item-price'>
                                <p className='item-price'>&#8358;{product.price * product.quantity}</p>
                            </div>
                        </div>
                        <p className='hidden'>{product.quantity === 0 ? total+=product.price: total += product.quantity * product.price}</p>
                    </section>
            )})}
                <section className='cart'>
                    <div className='indent'>
                        
                    </div>
                    <div className='cart-item'>
                        <div className='scooter-adjust'>
                            <img src={Scooter} alt="" />
                        </div>
                        <div>
                            <p className='item-name center-delivery-fee'>Delivery fee</p>
                        </div>
                        <div className='item-price'>
                            <p>&#8358;{total === 0?0:deliveryFee}</p>
                        </div>
                    </div>
                </section>
                    <div className='cart-item-total'>
                        <div className='indent'>

                        </div>
                        <div>
                            <p className='item-total'>Total</p>
                        </div>
                        <div className='item-price'>
                            <p className='item-total py-dark'>&#8358;{total===0?0:total + deliveryFee}</p>
                        </div>
                    </div>
            </section>
            
            <Button name={"Checkout"}/>
        </main>
    )
}

export default Cart;