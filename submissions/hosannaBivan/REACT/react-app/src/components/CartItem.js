// import React, { useState } from 'react'
// import close from '../images/close.png'
// import minus from '../images/Minus.svg'
// import plus from '../images/plus.svg'
// import kfc from '../images/Rectangle28.png'
// import chicken from '../images/Group33.png'
// import pot from '../images/Rectangle281.png'
// import scooter from '../images/scooter 1.svg'
// import Delivery from './Delivery'
// import Checkout from './Checkout'

// function CartItem() {

//   const products = [
//     {
//       productImage: kfc,
//       productName: 'KFC - King Bucket',
//       price: 10000,
//       quantity: 1,

//     },
//     {
//       productImage: chicken,
//       productName: 'Refuel Max',
//       price: 1200,
//       quantity: 1,

//     },
//     {
//       productImage: pot,
//       productName: 'Express Meal',
//       price: 1200,
//       quantity: 1,

//     }
//   ];

//   const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(0);

//   const [price, setPrice] = useState(0)

//   const incrementCount = (product) => {

//     setPrice(current => current + product.price)

//     setTotal(current => current + product.price);
//     setCount(count+1);
//     product.quantity = product.quantity+count
//     return product.quantity

//     }

//   const decrementCount = (product) => {
//     if(count >= 1){
//       setCount(count-1);

//       if(total >= product.price){
//         setTotal(current => current - product.price);
//       }

//       if(price >= product.price){
//         setPrice(current => current - product.price)

//       }

//     }
//   }

//   return (

//     <div className=''>
//             <div className='food-section'>
//                 <div>

//                     {products.map((product) => (
//                       <div className='row' key={product.productName}>
//                         <div className='flex food'>
//                             <img id='close' src={close} alt='' />
//                               <img alt="img" src={product.productImage} />

//                               <div className='flex-column plus-parent'>
//                                   {product.productName}
//                                   <div className='plus-minus'>
//                                       <img onClick={() => decrementCount(product)} src={minus} alt='' />
//                                       {product.quantity}
//                                       <img onClick={() => incrementCount(product)} src={plus} alt='' />
//                                   </div>
//                               </div>

//                         </div>

//                           <div>#{price}</div>
//                       </div>
//                     ))}
//                 </div>

//             </div>

//             <Delivery
//             productImage = {scooter}
//             productName = 'Delivery fee'
//             price = {1200}
//         />

//             <div className='row'>
//                 <div className='food-section total'>
//                     Total
//                 </div>
//                 <div className='total-money'># {total + 1200}</div>
//             </div>

//         <Checkout />

//     </div>
//   )
// }

// export default CartItem

import React, { Component } from "react";
import close from "../images/close.png";
import minus from "../images/Minus.svg";
import plus from "../images/plus.svg";
// import scooter from '../images/scooter 1.svg'
// import Delivery from './Delivery'
// import Checkout from './Checkout'

export class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      total: 0,
      //  price: 0,
      //  props.price * this.state.count,
    };
  }

  //  const [total, setTotal] = useState(0);

  incrementCount = () => {
    this.setState((plus) => ({ count: plus.count + 1 }));

    // this.setState(
    //   {total: (this.props.price * (this.state.count + 1))}
    //   );
    // console.log('total', 1200 + (this.props.price * (this.state.count + 1)))
    // console.log('count', this.state.count + 1)
    // console.log('price', this.state.total +this.props.price)

    this.props.setPriceArray((prevS) => {
      const copyArray = [...prevS];

      copyArray[this.props.indexAr] = this.props.price * (this.state.count + 1);

      return copyArray;
    });
  };

  decrementCount = () => {
    if (this.state.count >= 1) {
      this.setState((minus) => ({ count: minus.count - 1 }));
      // this.setState({total: this.state.total + this.props.price * this.state.count});
      // console.log('total', this.state.total)
    }

    this.props.setPriceArray((prevS) => {
      const copyArray = [...prevS];

      copyArray[this.props.indexAr] = this.props.price * (this.state.count-1);

      return copyArray;
    });
  };

  render(props) {
    const { count } = this.state;
    // const { total } = this.state;

    return (
      <div className="ml-10 row">
        <div className="food-section">
          <img id="close" src={close} alt="" />
          <img id="productImage" src={this.props.productImage} alt="" />

          <div className="flex-column plus-parent">
            {this.props.productName}
            <div className="plus-minus">
              <img onClick={this.decrementCount} src={minus} alt="" />
              {count}
              <img onClick={this.incrementCount} src={plus} alt="" />
            </div>
          </div>
        </div>
        <div>#{this.props.price * this.state.count}</div>
        {/* <div>#{this.props.total * this.state.count}</div> */}

        {/* <Delivery 
             productImage = {scooter}
             productName = 'Delivery fee'
             price = {1200} 
         /> */}

        {/* <div className='row'>
                <div className='food-section total'>
                     Total
                 </div>
                 <div className='total-money'># {total + 1200}</div>
             </div> */}

        {/* <Checkout /> */}
      </div>
    );
  }
}

export default CartItem;
