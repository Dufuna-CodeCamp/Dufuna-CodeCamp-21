
import React, {createContext, useEffect, useState} from "react";

import image from '../components/images/image4.svg'
import image2 from '../components/images/image3.svg'
import remove from '../components/images/cancel.png'


 export const MainContext = createContext();

 const ManageContext = (props) =>{

    const ListOfData = [
        {
            id: 1,
            title : "KFC - King Bucket",
            cancel: remove,
            image : image,
            price : 5000,
            quantity: 1
         },
         {  id: 2,
            title: "Refuel Max ",
            cancel: remove,
            image: image2,
             price: 1200,
             quantity: 1
         },
         {
            id:  3,
            title: "Refuel Max",
            cancel: remove,
            image: image2,
            price: 1200,
            quantity: 1
         },


         
    ]

    const[cartItems, setCartItems] = useState([]);

    useEffect(()=> {
      setCartItems(ListOfData)
      },[ListOfData.values]);

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

   return(
     <MainContext.Provider value={{cartItems,OnAdd, OnRemove,RemoveItem,buttonClick}}>
     {props.children}
     </MainContext.Provider>
   )
}

export default ManageContext;