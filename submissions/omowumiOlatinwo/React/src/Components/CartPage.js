import React from 'react';
import Cart from './Cart.js';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import { Component } from 'react';

class CartPage extends Component{
    render(){
        return(
            <>
            <Navbar />
            <Hero />
            <Cart />
            </> 
        )
    }
}


export default CartPage;