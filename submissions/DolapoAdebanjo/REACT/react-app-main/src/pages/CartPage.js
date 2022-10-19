import React from "react";
import Page from "../components/Page"
import Order from "../components/Order";
import Checkout from "../components/Checkout";
import data from '../products';
import { Link } from "react-router-dom";

const CartPage = () => {
  const {products} = data;
  
  return (
    <Page page='Cart'>
      <div className="cart-container">
          <Order products={products}/>
      </div>
      <Link to="verify">
      <Checkout/>
      </Link>
    </Page>
  );
};

export default CartPage;
