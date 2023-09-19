import React, { useState, useEffect } from "react";
// import Total from './Total'
import Delivery from "./Delivery";
import CartItem from "./CartItem";
import kfc from "../images/Rectangle28.png";
import chicken from "../images/Group33.png";
import pot from "../images/Rectangle281.png";
import scooter from "../images/scooter 1.svg";
import Checkout from "./Checkout";

// export class CartPage extends Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//          count: 0,

//       }
//     }

//     incrementCount = () => {
//         this.setState(
//             (plus) => ({count: plus.count + 1}));

//       }
//     decrementCount = () => {
//       if(this.state.count >= 1){
//         this.setState(
//             (minus) => ({count: minus.count - 1}));

//       }
//     }

// render() {

//     return (

function CartPage() {
  const [priceArray, setPriceArray] = useState([0, 0, 0]);

  const [overallTotal, setOverallTotal] = useState(0);

  //     setTotal(current => current + product.price);

  //       if(total >= product.price){
  //         setTotal(current => current - product.price);
  //       }

  // function calculateTotal = (item) => {

  // }


  useEffect(() => {

    const totalAll = priceArray.reduce((a, b) => a + b, 0)

    setOverallTotal(totalAll)
    
  }, [priceArray])


  return (
    <>
      <CartItem
        productImage={kfc}
        productName="KFC - King Bucket"
        //   quantity = '0'
        price={10000}

        priceArray={priceArray}
        setPriceArray={setPriceArray}
        indexAr={0}
      />
      <CartItem
        productImage={chicken}
        productName="Refuel Max"
        // quantity = '0'
        price={1200}

        priceArray={priceArray}
        setPriceArray={setPriceArray}
        indexAr={1}

      />
      <CartItem
        productImage={pot}
        productName="Express Meal"
        // quantity = '0'
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

      {/* <Total /> */}

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
