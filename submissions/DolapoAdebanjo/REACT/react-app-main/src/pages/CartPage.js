import React from "react";
import Page from "../components/Page"
import Order from "../components/Order";
import Button from "../components/Button";
import data from '../products';
import { Link } from "react-router-dom";

const CartPage = () => {
  const {products} = data;
  
  return (
    <Page page='Cart' wantRemove={true}>
      <div className="cart-container">
          <Order products={products}/>
      </div>
      <Link to="verify">
      <Button buttonName={'Checkout'}/>
      </Link>
    </Page>
  );
};

export default CartPage;
