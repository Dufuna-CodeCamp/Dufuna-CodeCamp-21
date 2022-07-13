import React from 'react';
import Cart from './Cart';
import image from '../components/images/image4.svg';
import image3 from '../components/images/image3.svg';
import image1 from '../components/images/image1.svg';
import remove from '../components/images/cancel.png';

const Holder = () => {

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
                image: image3,
                 price: 1200,
                 quantity: 1
             },
             {
                id:  3,
                title: "Refuel Max",
                cancel: remove,
                image: image1,
                price: 1200,
                quantity: 1
             },
    
    
             
        ]
    
        return (
            <div>
                <Cart  ListOfData = {ListOfData}/>
            </div>
        )
    }
    

export default Holder