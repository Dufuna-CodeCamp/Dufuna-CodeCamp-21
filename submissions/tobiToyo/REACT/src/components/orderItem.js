import React from "react";
import close from "../images/close.svg";

import plus from "../images/plus.svg";
import Minus from "../images/Minus.svg";
import Border from "./borderline";

class OrderItem extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            itemPrice: "",
            image: "",
            quantity: 0,
            display: true,
            totalPrice: 0
        }
    }

    addClick = () => {
        this.setState ( state => ({quantity: state.quantity + 1,
        totalPrice: state.totalPrice + this.props.price })
        );
    }

    minusClick = () => {
         if (this.state.quantity > 0) {
            this.setState ( state => ({quantity: state.quantity - 1,
                totalPrice: state.totalPrice - this.props.price })
            );
         }        
    }

    removeItem = () => {
        this.setState (
            {display: false}
        )
    }

    // I'll find a way to make this component automatic later
    

    // chooseFood = () => {
    //     if (this.props.name in this.foodItems) {
    //         let index = this.props.name;
    //         console.log(this.foodItems[index])
    //         this.setState ({
    //             itemPrice: this.foodItems[index].price,
    //             image: this.foodItems[index].img
    //         })
    //     }
    // }

    
    

    render () {

        // console.log("Crunchy-Wings" in this.foodItems);

        // this.chooseFood()

        // console.log("price state = " + this.state.itemPrice);
        
            if (!this.state.display) {
                return (
                    <div></div>
                )
            }

            else {
                return (                   
                    <div>
                        <div className="order">
                            <div className="order-leftside">

                                <div className="close-img-div" onClick={this.removeItem}>
                                    <img className="plus-minus-img" src={close} alt="close" />
                                </div>
                                
                                <div className="food-img-div">
                                    <img src={this.props.image} alt="King Bucket" className="food-img"/>
                                </div>

                                <div className="food-order">
                                    <div className="food-name"> {this.props.name} </div>

                                    <div className="food-number">

                                        <div className="plus-minus-btn">
                                            <img src={plus} alt="plus" onClick={this.addClick} className="plus-minus-img" />
                                        </div>
                                        
                                        <div id="food-number">
                                            {this.state.quantity}
                                        </div>
                                        
                                        <div className="plus-minus-btn">
                                            <img src={Minus} alt="Minus" onClick={this.minusClick} className="plus-minus-img" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="order-rightside">
                                {"#" + this.props.price * this.state.quantity }
                            </div>
                            
                            {/* <h1> Total Price: {this.state.totalPrice} </h1> */}

                        </div>

                        <Border />

                    </div>
                        )
            }
    
    }
}



export default OrderItem;