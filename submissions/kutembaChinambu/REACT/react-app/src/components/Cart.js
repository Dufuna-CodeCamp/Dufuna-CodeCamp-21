import React from "react";
import Header from "./Header";
import Lowernav from "./Lowernav";
import PageName from "./PageName";
import CartItems from "./CartItems"
import food from "../images/image4.svg"
import food2 from "../images/image3.svg"
import food3 from "../images/image1.svg"
import scooter from "../images/scooter 1.svg"
import Delivery from "./Delivery";
import Total from "./Total";
import Checkout from "./Checkout";


class Cart extends React.Component {

    addComma = Intl.NumberFormat('en-US');

    product = [
        {
            "pid": 0,
            "name":"KFC-King Bucket",
            "price": 5000,
            "image": food,
            "quantity": 0
        },

        {
            "pid": 1,
            "name":"Refuel Max",
            "price": 1200,
            "image": food2,
            "quantity": 0
        },
        {
            "pid": 2,
            "name":"Refuel Max",
            "price": 1200,
            "image": food3,
            "quantity": 0
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            products: this.product,
            deliveryFee:0,
            quantity: 0,
            total: 0,
            addDelivery:1200,
            delivery: 0,
            summedQuantity:0
        }

    }

    increaseCount = id => { 
        this.product[id].quantity += 1;
        this.setState({delivery: this.state.addDelivery})

        var newCart = this.product;
        console.log('Prod ID: ', id)

        let totalPrice = 0;
        let qTotal = 0;
        
        let totalQuantity = this.product[id].quantity;

        newCart.forEach((i) => {
         totalPrice += (i.quantity * i.price);
         qTotal += (i.quantity)
        })

        this.setState({products: newCart, quantity: totalQuantity, total: totalPrice + this.state.addDelivery, summedQuantity: qTotal});     
    }

    decreaseCount = id => {
        if (this.product[id].quantity === 0) {
            return 0;
        } else {
            this.product[id].quantity -= 1;
        }
        let newCart = this.product;
        let totalPrice = 0;
        let qTotal = 0;
        let totalQuantity = this.product[id].quantity;

        newCart.forEach((i) => {
            totalPrice += (i.quantity * i.price);
            qTotal += (i.quantity)
           })
           
           if (totalPrice === 0) {
            this.setState({products:newCart, delivery: 0, total:0, quantity:totalQuantity, summedQuantity: 0})
        } else {
            this.setState({products: newCart, quantity: totalQuantity, total:totalPrice + this.state.delivery, summedQuantity: qTotal});

        }
    }

    renderItem(name, price, image, quantity, cost, id, index) {
        return <div key={id}>
                <CartItems 
                    my={index}
                    price = {price}
                    increaseCount = {() => this.increaseCount(id)} 
                    decreaseCount = {() => this.decreaseCount(id)}
                    foodName = {name}
                    image={image} 
                    itemPrice={price} 
                    count={quantity} 
                 />
                <hr />
            </div>
    }

    render() {
        return (
            <div>
                <Header 
                heading1 = "Food" 
                heading2 = "Bag" 
                signUp= "SignUp"  
                linkElement1 = "Login" 
                linkElement2="Cart" />

                <Lowernav 
                cart = "Cart"
                home = "Home>"
                />

                <PageName 
                name = "Cart"
                quantity = {this.state.summedQuantity}
                remove = "Remove all"
                />

                 <div>
                    {this.state.products.map((item, index) => {
                        return this.renderItem(item.name, this.addComma.format(item.price * item.quantity), item.image, item.quantity, item.pid, index)
                    })}
                </div>
                
                <Delivery 
                feeTag = "Delivery fee"
                price = {this.addComma.format(this.state.delivery)}
                image = {scooter}
                />
                <hr />
                
                <Total 
                total = "Total"
                totalCost = {this.addComma.format(this.state.total)}
                />

                <Checkout />
                
            </div>

        )
    }
}
export default Cart;