import React, { useState } from "react";
import Total from "./Total";
import Delivery from "./Delivery";

const Order = ( {products} ) => {
  let totalPrice = products.reduce((a, c) => a + c.quantity * c.orderPrice, 0);
  let [quantity, setQuantity] = useState([]);
  let price;

  return(
          <>
               {products.map((product) => {
                      quantity = product.quantity;
                      price = product.quantity * product.orderPrice;

                      const addHandler = () => {
                        if (product.quantity < 10) {    
                          quantity = setQuantity(++product.quantity);
                        }
                      };

                      const minusHandler = () => {
                        if (product.quantity > 1) {   
                          quantity = setQuantity(--product.quantity); 
                        }
                      };
                    
                     return (
                        <div className="orders" key={product.id}> 
                            <div className="item">
                              <button className="button">
                                <img src="../assets/close.svg" alt="close" className="close" />
                              </button>

                              <img
                                src={`../assets/${product.orderImg}`}
                                className="c-img"
                                alt="order-img"
                              />

                              <div className="counter-info">

                                <p className="order-name">{product.orderName}</p>

                                <div className="counter">
                                  <button className="button" onClick={addHandler}>
                                    <img src="../assets/plus.svg" alt="plus" className="plus" />
                                  </button>

                                  <span className="count">{quantity}</span>

                                  <button className="button" onClick={minusHandler}>
                                    {" "}
                                    <img src="../assets/Minus.svg" alt="minus" className="minus" />
                                  </button>
                                </div>

                              </div>

                            </div>

                            <div className="cost">
                            <span>#</span>
                            {price.toLocaleString()}
                            </div>
                        </div> 
                      )
                }
                )
              }

              <Delivery />

              <Total totalPrice={`#${totalPrice.toLocaleString()}`}/>
          </>
        );
};

export default Order;
