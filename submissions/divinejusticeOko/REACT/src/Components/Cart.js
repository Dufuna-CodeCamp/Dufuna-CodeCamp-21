import React, {Component} from "react";
import CartItem from "./CartItem";
import DeliveryItem from "./DeliveryItem";
import TotalCartPrice from "./TotalCartPrice";
import CheckoutButton from "./CheckoutButton";

class Cart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    id: 0,
                    name: "KFC - King Bucket",
                    price:"5000",
                    quantity: 1,
                    image: "./images/Kfc_king_bucket.png",
                },
                {        
                    id: 1,
                    name: "Refuel Max",
                    price: "1200",
                    quantity: 0,
                    image: "./images/Refuel_max_2.png",
                },
                {        
                    id: 2,
                    name: "KFC - King Bucket",
                    price: "1200",
                    quantity: 1,
                    image: "./images/Refuel_max.png",
                },
            ],
            delivery: 1200,
            totalCartPrice: '',
        }
    }

    totalCartPrice() {
        const totalProductCost = this.state.products.reduce((total, {quantity, price}) => total + (quantity * price), 0 )
        this.setState(prevState => ({
            totalCartPrice: totalProductCost + prevState.delivery
        }))
    }
    IsDelivery() {
        const totalQuantity = this.state.products.reduce((total, {quantity}) => total + quantity, 0 )

        if (totalQuantity === 0) {
            this.setState(prevState => ({
                delivery: 0
            }));
        } else {
            this.setState(prevState => ({
                delivery: 1200
            }));
        }
    }

    handleQuantityIncrement = (id) => {
        const newState = Object.assign({}, this.state);
        newState.products[id].quantity += 1;
        this.setState(newState);
        this.IsDelivery();
        this.totalCartPrice();
    }
    handleQuantityDecrement = (id) => {
        const newState = Object.assign({}, this.state);
        if (newState.products[id].quantity > 0) {
            newState.products[id].quantity -= 1;
        }
        this.setState(newState);
        this.IsDelivery();
        this.totalCartPrice();
    }

    componentDidMount() {
        this.totalCartPrice();
    }

    render() {
        return (
            <div className="cart-container">
                <div className="cartText poppins-semibold flex">
                    <div>
                        <h1 className="fs-xl">Cart</h1>
                        <p className="fs-lg red-text">4 items</p>
                    </div>
                    <p className="fs-lg red-text u-text">Remove all</p>
                </div>
                {this.state.products.map(product => (
                    <CartItem key={product.id} image={product.image} id={product.id} name={product.name} price={product.price * product.quantity} quantity={product.quantity} increaseQuantity={(event)=>this.handleQuantityIncrement(event.target.id)} decreaseQuantity={(event)=>this.handleQuantityDecrement(event.target.id)}/>
                ))}
                <DeliveryItem deliveryFee={this.state.delivery} />
                <TotalCartPrice totalCartPrice={this.state.totalCartPrice}/>
                <CheckoutButton />
            </div>
        )
    }
}
export default Cart