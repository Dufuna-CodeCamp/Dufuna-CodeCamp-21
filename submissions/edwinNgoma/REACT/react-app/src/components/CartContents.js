
import React, {useEffect,useState } from "react";
import plus from './images/plus.svg'
import minus from './images/Minus.svg'
import scooter from '../components/images/scooter1.svg'
import CardDetails from "./CartDetails";
import Button from "./Button";


export default function CartContents (props) {

  const {ListOfData} = props
    const[cartItems, setCartItems] = useState([]);

    useEffect(()=> 
      
      setCartItems(ListOfData),[ListOfData]
      
      );

   const OnAdd =(item) => {
       //check if the product exits in the array, if it exits we increment the quantity
       const itemExits = cartItems.find((index)=> index.id===item.id)
       
       if(itemExits) {

         setCartItems(
            cartItems.map((index)=>(
                index.id=== item.id ? {...itemExits, quantity: itemExits.quantity+1}: index
            ))

         )

       }
        
   }

   const OnRemove = (item) => {
   
    //check if the product exits in the array, if it exits we increment the quantity
    const itemExits = cartItems.find((index)=> index.id===item.id)

    if(itemExits) {

        setCartItems(
            cartItems.map((index) => (
              index.id===item.id ? {...itemExits,quantity: itemExits.quantity - (itemExits.quantity<=0? 0: 1)}: index
            ))
        )
    }

   }

   const RemoveItem = (item) => {
    
      //check if the product exits in the array, if it exits we increment the quantity
      const itemExits = cartItems.find((index)=> index.id===item.id)
      if(itemExits.quantity===0) {

     
      setCartItems(
        cartItems.filter((index)=> (
           index.id !==item.id 
        ))
      )

    }

   }

   const buttonClick = () => {
    setCartItems([])
   }


    let totalPrice = 0;
    let cash = 1200;
   // const {cartItems, OnAdd, OnRemove,RemoveItem,buttonClick} = useContext(MainContext)
     return (
       <section>
        <CardDetails value= {cartItems.length} number = {cartItems.length===0? 0 : cartItems.length + 1}
          buttonClick = {()=>buttonClick()}/>
        { cartItems.length!==0?
            
            <div>
       {cartItems.map((item)=> (
      


        <div key={item.id}>
        
    
           <div  className="cart-contents">

            
                <div className="cart-items-image-title">
           
                    <div className="remove-item-image">
                     
                    
                    <button onClick ={()=>RemoveItem(item)} id = "add-btn">
                    <img id="remove-item-from-list" src= {item.cancel} alt="Cancel icon here" ></img>
                    </button>
                   
                   
                    </div>

                    <div className="cart-item-image">
                     <img id="item-image-main" src={item.image} alt="food"></img>
                    </div>

                    <div className="cart-item-title">
                      <p id="item-title">{item.title}</p>

                
                          <div className="add-remove-buttons">
  

                            <button onClick={()=> OnAdd(item)}  id = "add-btn" >
                            <img src={plus} alt="plus"></img>
                            </button>

                            <p>{item.quantity}</p>


                            <button onClick={() => OnRemove(item)}  id = "add-btn" >
                            <img src={minus} alt="minus"></img>
                            </button>

                            </div>

                    </div>
                
                    </div>

    
                <div className="cart-item-price">
                <p >#{item.price * item.quantity}</p>
                <p id="hide-total-price">#{totalPrice += item.price * item.quantity}</p>
                <p></p>
                </div>
               
        </div>
       
        <hr/>
        
        </div>

      
        ))}

        <div className="delivery-details">
  
         <div className="delivery-image-title">
             <img id="scooter" src={scooter} alt="scooter"></img>
             <p id="delivery-title">Delivery fee</p>
         </div>

         <div className="delivery-price">
         
             <p>#{totalPrice ===0? cash=0 : cash}</p>
         </div>

        </div>

        <hr/>
        
        <div className="total-price">
            <p>Total <span>#{totalPrice === 0? cash=0 : totalPrice + cash }</span></p>
        </div>
           
        <Button button="checkout-buttons"  buttonName= "Checkout" />

        </div> : <p id="cart-is-empty"> Whoops :) The Cart Is Empty </p>
       }
      
       </section>
    )
}