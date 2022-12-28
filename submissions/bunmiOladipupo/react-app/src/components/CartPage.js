import React from "react";
import Cart from './Cart.js';
import Header from './Header.js';
import Subheader from './Subheader.js';
import {Component} from "react";

class CartPage extends Component{
    render(){
        return(
            <>
            <Header />
            <Subheader />
            <Cart />
            </> 
        )
    }
}


export default CartPage;