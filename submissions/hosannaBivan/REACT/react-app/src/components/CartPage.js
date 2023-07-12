import React, { Component } from 'react'
import Total from './Total'
import Delivery from './Delivery'
import CartItem from './CartItem'
import kfc from '../images/Rectangle28.png'
import chicken from '../images/Group33.png'
import pot from '../images/Rectangle281.png'
import scooter from '../images/scooter 1.svg'
import Checkout from './Checkout'


export class CartPage extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
        //  total: 1200,
        //  price: 0,
        //  props.price * this.state.count,
      }
    }

    incrementCount = () => {
        this.setState(
            (plus) => ({count: plus.count + 1}));
        // this.setState({total: 1200 + (this.props.price * (this.state.count + 1))});
        // console.log('total', 1200 + (this.props.price * (this.state.count + 1)))
        // console.log('count', this.state.count + 1)
        // console.log('price', this.props.price)

      }
    decrementCount = () => {
      if(this.state.count >= 1){
        this.setState(
            (minus) => ({count: minus.count - 1}));
        // this.setState({total: this.state.total + this.props.price * this.state.count});
        // console.log('total', this.state.total)
      }
    }
    


render() {
    // const { count } = this.state;

    // const total = (price) => {}

  // const deleteItem = (item) => {
  //   setItems(items.filter((item) => item.id !== id ))
  // } 

    return (
      <>
         <CartItem
          productImage = {kfc}
          productName = 'KFC - King Bucket'
          quantity = '0'
          price = {10000} 
          
        />
        <CartItem
            productImage = {chicken}
            productName = 'Refuel Max'
            quantity = '0'
            price = {1200}
            
        />
        <CartItem
            productImage = {pot}
            productName = 'Express Meal'
            quantity = '0'
            price = {1200} 
            
        />
        <Delivery 
            productImage = {scooter}
            productName = 'Delivery fee'
            price = {1200} 
        />

        <Total
            totalPrice = {23600} 
        /> 

        <Checkout />

        
    </> 
    ) 
  }
}

export default CartPage