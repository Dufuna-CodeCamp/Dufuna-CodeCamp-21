import "./cartItems.scss";
import * as React from "react";
import CloseIcon from "../../assets/images/close.svg";
import Plus from "../../assets/images/plus.svg";
import Minus from "../../assets/images/minus.svg";
import Scooter from "../../assets/images/scooter.svg";
import ScooterMobile from "../../assets/images/scooter-mobile.svg";

export const CartItems = ({
  props,
  HandleDecrement,
  HandleIncrement,
  HandleRemove,
}) => {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      {props.map((item, index) => (
        <div className="cart__item" key={index}>
          <img
            src={CloseIcon}
            alt="remove"
            className="cart__icon--remove"
            onClick={() => {
              HandleRemove(item);
            }}
          />
          <div className="cart__counter">
            <div className="counter">
              <img
                src={isMobile ? item.mobile : item.image}
                alt="counter-img"
                className="counter__image"
              />
              <div className="counter__details">
                <p className="counter__details--name">{item.name}</p>
                <div className="counter__btns">
                  <img
                    src={Plus}
                    alt="plus"
                    className="counter__btns--plus"
                    onClick={() => {
                      HandleIncrement(item);
                    }}
                  />
                  <span className="counter__btns--count">
                    {Number(item.quantity)}
                  </span>
                  <img
                    src={Minus}
                    alt="minus"
                    className="counter__btns--minus"
                    onClick={() => {
                      HandleDecrement(item);
                    }}
                  />
                </div>
              </div>
            </div>
            <span className="counter__price">
              ₦{item.price * item.quantity}
            </span>
          </div>
        </div>
      ))}
      <div className="cart__item">
        <div className="delivery">
          <div className="delivery__details">
            <div className="delivery__image">
              <img src={isMobile ? ScooterMobile : Scooter} alt="scooter" />
            </div>
            <p className="delivery__details--name">Delivery fee</p>
          </div>
          <span className="delivery__price">₦1200</span>
        </div>
      </div>
    </>
  );
};

export default CartItems;

// increment and decrement functions for mapped items
// Path: submissions\paulEzemiwe\REACT\react-app\src\components\cartItems\cartItems.jsx
// Compare this snippet from submissions\aaronMubanga\React\react-app-main\src\cart\presentation\cartPage.jsx:

//     const HandleIncrement = (product) => {
//         const newProducts = products.map((item) => {
//             if(item.id === product.id){
//                 return {...item, quantity: item.quantity + 1}
//             }
//             return item
//         })
//         setProducts(newProducts)
//     }

//     const HandleDecrement = (product) => {
//         const newProducts = products.map((item) => {
//             if(item.id === product.id){
//                 return {...item, quantity: item.quantity - 1}
//             }
//             return item
//         })
//         setProducts(newProducts)
//     }

//     const HandleRemove = (product) => {
//         const newProducts = products.filter((item) => item.id !== product.id)
//         setProducts(newProducts)
//     }

//     const HandleClear = () => {
//         setProducts([])
//     }

//     const HandleCheckout = () => {
//         setProducts([])
//     }

//     const HandleTotal = () => {
//         const total = products.reduce((acc, item) => {
//             return acc + item.price * item.quantity
//         }, 0)
//         return total
//     }

//     const HandleCount = () => {
//         const count = products.reduce((acc, item) => {
//             return acc + item.quantity
//         }, 0)
//         return count
//     }
