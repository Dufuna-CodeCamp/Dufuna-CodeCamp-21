import React, { Component } from 'react';
import Header from '../header';
import Breadcrumb from './breadcrumb/breadcrumb';
import CartbodyPart from './cartbobypart';
import CartTitle from './cartTitle/carttitle';
import Delivery from './delivery';
import Button from '../verificationpage/form/button';
import Total from '../cart/total'
// images imported
import Close from '../../images/close.svg'
import Item1 from '../../images/image4.svg'
import Plus from '../../images/plus.svg'
import Minus from '../../images/Minus.svg'
import Item2 from '../../images/image3.svg'
import Item3 from '../../images/image1.svg'
import Scooter from '../../images/scooter.svg'

class CartPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            count:0
        }
    }

    addItem = () => {
        this.setState(
            (additems) =>({count:additems.count + 1}))
    }
   removeItem = () =>{
        this.setState((removeItems) =>({count:removeItems.count - 1}))
    }

   render(){
        return(
        <div>
            <Header />
            <Breadcrumb />
            <CartTitle />
            <div>
                <CartbodyPart 
                close ={Close}
                itemImg = {Item1}
                itemName ="KFC - King Bucket"
                itemPrice="10 000"
                plus = {Plus}
                count = "2"
                minus = {Minus}
                addItemHandler = {this.addItem}
                removeItemHandler = {this.removeItem}
                />

                <CartbodyPart 
                close ={Close}
                itemImg = {Item2}
                itemName ="Refuel Max"
                itemPrice="1 200"
                plus = {Plus}
                count = "1"
                minus = {Minus}
                addItemHandler = {this.addItem}
                removeItemHandler = {this.removeItem}
                />

                <CartbodyPart 
                close ={Close}
                itemImg = {Item3}
                itemName ="Refuel Max"
                itemPrice="1 200"
                plus = {Plus}
                count = "1"
                minus = {Minus}
                addItemHandler = {this.addItem}
                removeItemHandler = {this.removeItem}
                />

                <Delivery
                deliveryImg = {Scooter}
                deliveryName ="Delivery fee"
                deliveryPrice = "1,200"
                />

                <Total/>
            </div>
            <div className='checkout-btn'>
                <Button inputType= "submit"
                title ="Checkout"  
                />
            </div>
        </div>
        
        )
    };
}

export default CartPage;