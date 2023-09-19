import React, { useState, useEffect } from "react";
import Delivery from "./Delivery";
import CartItem from "./CartItem";
import kfc from "../images/Rectangle28.png";
import chicken from "../images/Group33.png";
import pot from "../images/Rectangle281.png";
import scooter from "../images/scooter 1.svg";
import Checkout from "./Checkout";



function CartPage() {
  const [priceArray, setPriceArray] = useState([0, 0, 0]);

  const [overallTotal, setOverallTotal] = useState(0);


  useEffect(() => {

    const totalAll = priceArray.reduce((a, b) => a + b, 0)

    setOverallTotal(totalAll)
    
  }, [priceArray])


  return (
    <>
      <CartItem
        productImage={kfc}
        productName="KFC - King Bucket"
        price={10000}

        priceArray={priceArray}
        setPriceArray={setPriceArray}
        indexAr={0}
      />
      <CartItem
        productImage={chicken}
        productName="Refuel Max"
        price={1200}

        priceArray={priceArray}
        setPriceArray={setPriceArray}
        indexAr={1}

      />
      <CartItem
        productImage={pot}
        productName="Express Meal"
        price={1200}
        
        priceArray={priceArray}
        setPriceArray={setPriceArray}
        indexAr={2}

      />

      <Delivery 
             productImage = {scooter}
             productName = 'Delivery fee'
             price = {1200} 
         />


      <div className="row">
        <div className="food-section total">Total</div>
        <div className="total-money"># {overallTotal + 1200}</div>
      </div>

      <Checkout />
    </>
  );
}
// }

export default CartPage;
