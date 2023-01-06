import React, {Component} from "react";
import "./cartItem.css"
import CloseSVG from "../../assets/image/close.svg"
import PlusSVG from "../../assets/image/plus.svg"
import MinusSVG from "../../assets/image/Minus.svg"

export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="cart-item" key={this.props.index}>
                <div className="cart-item-detail">
                    <div className="delete-item">
                        <button className="delete-item-button">
                            <img alt="close" className="delete-item-image" src={CloseSVG} onClick={() => this.props.handleRemove(this.props.index)}/>
                        </button>
                    </div>
                    <div className="cart-item-product">
                        <div className="cart-item-product-image-container">
                            <img alt="FImg" className="cart-item-product-image" src={this.props.image}/>
                        </div>
                        <div className="cart-item-product-description">
                            <div className="cart-item-product-name-container">
                                <div className="cart-item-product-name">
                                    {this.props.product}
                                </div>
                            </div>
                            <div className="cart-item-product-amount">
                                <div className="cart-item-reduce">
                                    <button className="cart-item-reduce-button">
                                        <img alt="-" className="cart-item-reduce-image" src={MinusSVG}
                                             onClick={() => this.props.handleReduce(this.props.index)}/>
                                    </button>
                                </div>
                                <div className="cart-item-number">
                                    <div className="cart-item-number-value">{this.props.number}</div>
                                </div>
                                <div className="cart-item-increase">
                                    <button className="cart-item-increase-button">
                                        <img alt="+" className="cart-item-increase-image" src={PlusSVG}
                                             onClick={() => this.props.handleIncrease(this.props.index)}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item-price-container">
                        <p className="cart-item-price">#{this.props.price}</p>
                    </div>
                </div>

                <div className="cart-item-border"></div>
            </div>
        )
    }
}