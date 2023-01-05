import React from "react";
import { Component } from "react";
class CartItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: "1",
            price: "",
            total: "0",
            delivery: "1200"
        }
    }

    render(){
        return (
            <>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            {/* close */}
                            <img src={this.props.close} className="hand cancel" alt="close item"/>
                            {/* item image */}
                            <img src={this.props.imagesrc} className="img-fluid images" width="150px" height="100px" alt="items"/>
                            </div>
                            {/* item name */}
                            <div className="col desc">
                            <p className="itemname">{this.props.name}</p><br/>

                            <img src={this.props.plus} className="hand spaceboot plus" width="8%" align="left" onClick={this.props.increaseNumber} alt="increase"/>
                                {/* { counter } */}
                        <p id="numb" className="itemnumber spaceboot number">{this.props.number}</p>

                                    {/* minus */}
                        <img src={this.props.minus} className="hand spaceboot minus" width="8%" align="right" onClick={this.props.decreaseNumber} alt="decrease"/>
                            </div>
                        </div>
                    </div>
                    <>
                    <div className="col">
                        {/* total for items */}
                        <p className="textprice" onClick={this.props.totalNet}>&#8358; <span  className="spanprice item">{this.props.price * this.props.number}</span>
                        
                        </p>
                    </div>
                    </>
                    
                </div>
                <hr />
            </>
        )
    }
    
}
export default CartItem;