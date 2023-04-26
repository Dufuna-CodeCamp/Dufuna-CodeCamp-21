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
                <div className="row p-10 itemsSpread">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            {/* close img*/}
                            <img src={this.props.close} alt="close item"/>
                            {/* item image */}
                            <img src={this.props.imagesrc} className="img-fluid images" width="150px" height="100px" alt="items"/>
                            </div>
                            {/* item name */}
                            <div className="col">
                            <p className="itemname">{this.props.name}
                            <br></br>
                                {/*plus image*/}
                            <img src={this.props.plus} className="plus" onClick={this.props.increaseNumber} alt="increase"/>
                                {/* { counter } */}
                        <span id="numb" className="itemnumber numitem">{this.props.number}</span>

                                    {/* minus image*/}
                        <img src={this.props.minus} className="minus" onClick={this.props.decreaseNumber} alt="decrease"/>
                        </p>
                            </div>
                        </div>
                    </div>
                    <>
                    <div className="col">
                        {/* total for the items */}
                        <p className="textprice d-flex justify-content-end" onClick={this.props.totalNet}>&#8358; <span  className=" spanprice item">{this.props.price * this.props.number}</span>
                        </p>
                    </div>
                    </>
                </div>
                <hr></hr>
            </>
        )
    }
    
}
export default CartItem;