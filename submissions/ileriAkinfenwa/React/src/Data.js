import React from 'react'
import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Cart } from './page/cartPage/Cart';
import Vendor from './page/vendorPage/Vendor';

const Data = () => {

    const [product] =useState([
        {
            pictures:"image1",
            name:"Chicken strips",
            price:"1500"
        },
        {
            pictures:"image2",
            name:"Chicken strips",
            price:"1500"
        },
        {
            pictures:"image3",
            name:"Chicken strips",
            price:"1500"
        },
        {
            pictures:"image4",
            name:"Chicken strips",
            price:"1500"
        },               
      ])
      const [cart,setCart ] = useState([])
      const [showCart, setShowCart]=useState(false)
      const addToCart =(data) =>{
         setCart([...cart, {...data, quantity:1}])
      }
      const handleShowCart=(value)=>{
         setShowCart(value)
      }
  return (
    <div>
    <Navbar count={cart.length} 
    handleShowCart={handleShowCart}/>
    {
      showCart ?
      <Cart cart ={cart}/> 
      :
      <Vendor product={product} addToCart={addToCart}/>
    }
    </div>
  )
}

export default Data