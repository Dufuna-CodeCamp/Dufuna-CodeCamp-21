import React from "react";
import CartContents from "./CartContents";
import Header from "./Header";
import image from '../components/images/image4.svg'
import image2 from '../components/images/image3.svg'
import remove from '../components/images/cancel.png'

const ComponentsHolder= () => {

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

    return (
        <div>
        <Header />
        <CartContents  ListOfData = {ListOfData}/>
        </div>
    )
}

export default ComponentsHolder;