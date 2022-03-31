/* eslint-disable no-undef */
import React from 'react';
import CartItem from './CartItem';
import Delivery from './Delivery';
import Total from './Total';
import Image4 from '../assets/image4.svg';
import Image3 from '../assets/image3.svg';
import Image1 from '../assets/image1.svg';
import Scooter from '../assets/scooter.svg';

class Cart extends React.Component {
    currencyFormatter = Intl.NumberFormat('en-US');
    item1 = {
        itemId: 1,
        itemName: "KFC - King Bucket",
        unitPrice: 5000,
        quantity: 2,
        itemImage: Image4
    }

    item2 = {
        itemId: 2,
        itemName: "Refuel Max",
        unitPrice: 1200,
        quantity: 1,
        itemImage: Image3
    }

    item3 = {
        itemId: 3,
        itemName: "Refuel Max",
        unitPrice: 1200,
        quantity: 1,
        itemImage: Image1
    }

    items = [this.item1, this.item2, this.item3];

    constructor(props) {
        super(props);

        this.state = {
            itemQuantity: 1,
            itemPriceCount: 0,
            cartItems: this.items,
            totalPrice: 13600,
            isCartEmpty: false,
            initialDeliveryFee: 1200,
            deliveryFee: 1200
        }
    }

    addItem = id => {
        this.items[id - 1].quantity += 1;
        let updatedCart = this.items;

        let itemsTotalPrice = 0;
        //let itemsTotalQuantity = 0;

        updatedCart.forEach((i) => {
            itemsTotalPrice += (i.quantity * i.unitPrice);
            //itemsTotalQuantity += i.quantity;
        })

        if(this.state.deliveryFee === 0) {
            this.setState({deliveryFee: this.state.initialDeliveryFee})
        }

        this.setState({cartItems: updatedCart, totalPrice: itemsTotalPrice + this.state.initialDeliveryFee});
    }
 
    removeItem = id => {
        if (this.items[id - 1].quantity > 0) {
            this.items[id - 1].quantity -= 1;
            let updatedCart = this.items;

            let itemsTotalPrice = 0;
            let itemsTotalQuantity = 0;

            updatedCart.forEach((i) => {
                itemsTotalPrice += (i.quantity * i.unitPrice);
                itemsTotalQuantity += i.quantity;
            })

            if(itemsTotalQuantity === 0) {
                this.setState({cartItems: updatedCart, totalPrice: 0, deliveryFee: 0})
            }
            
            else {
                this.setState({cartItems: updatedCart, totalPrice: itemsTotalPrice + this.state.deliveryFee});
            }
        }        
    }

    renderItem(name, price, source, quantity, id) {
        return <div key={id}>
                <CartItem 
                    itemQuantity={this.state.itemQuantity} 
                    itemPriceCount={this.state.itemPriceCount} 
                    src={source} itemName={name} 
                    itemPrice={price} 
                    count={quantity} 
                    addItemHandler={() => this.addItem(id)} 
                    removeItemHandler={() => this.removeItem(id)} />
                <hr />
            </div>
    }

    render() {
        return <div id='cart'>
            <div>
                <h1 id='cart-title'>{this.props.cartTitle}</h1>
                <p id='item-count'>4 items</p>
                <p id='remove-all'>Remove all</p>
            </div>

            <div id="cart-items">
                {this.state.cartItems.map((cartItem) => {
                    return this.renderItem(cartItem.itemName, this.currencyFormatter.format(cartItem.unitPrice * cartItem.quantity), cartItem.itemImage, cartItem.quantity, cartItem.itemId)
                })}
            </div>

            <Delivery 
                deliveryImage={Scooter} 
                deliveryPrice={this.currencyFormatter.format(this.state.deliveryFee)} 
            />

            <Total totalPrice={this.currencyFormatter.format(this.state.totalPrice)} />
        </div>
    }
}

export default Cart;