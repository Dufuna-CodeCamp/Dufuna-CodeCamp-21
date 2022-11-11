import React from "react";
import { Component } from "react";
import close from '../../src/close.svg';
import kfc from '../../src/kfc.svg';
import plus from '../../src/plus.svg';
import minus from '../../src/minus.svg';
import DeliveryItem from "./DeliveryItem.js";
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
                            <img src={this.props.close} className="hand cancel"/>
                            {/* item image */}
                            <img src={this.props.imagesrc} className="img-fluid images" width="150px" height="100px"/>
                            </div>
                            {/* item name */}
                            <div className="col desc">
                            <p className="itemname">{this.props.name}</p><br/>

                            {/* <div className="row sign">
                                {/* <div className="col">
                                {/* plus }
                                
                                </div> */}
                                {/* <div className="col">
                                    
                                </div>  }
                                <div className="col">
                                
                                </div> 
                            </div> */}
                            <img src={this.props.plus} className="hand spaceboot plus" width="8%" align="left" onClick={this.props.increaseNumber}/>
                                {/* { counter } */}
                        <p id="numb" className="itemnumber spaceboot number">{this.props.number}</p>

                                    {/* minus */}
                        <img src={this.props.minus} className="hand spaceboot minus" width="8%" align="right" onClick={this.props.decreaseNumber}/>
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
    // increaseNumber = (props) =>{
    //     this.setState({number: Number(this.state.number) + 1});
    //     var del = new DeliveryItem()
    //     del.del()
    //     //console.log("Item "+ new DeliveryItem());
    // }
    // decreaseNumber = (props) =>{
    //     if (this.state.number > 0) {            
    //         this.setState({number: Number(this.state.number) - 1});
    //         var del = new DeliveryItem()
    //         del.del()
    //     }else{
    //         this.setState({number: 0});
    //         var del = new DeliveryItem()
    //         del.del()
    //     }
    // }
    // totalGross = (props) =>{
    //    var price = document.getElementsByClassName('spanprice');
    //    //console.log(price[0].outerText);
    //    var total = 0;
    //    //var dprice = new DeliveryItem()
    //    for (let i = 0; i < price.length; i++) {
    //         total += Number(price[i].outerText);
    //    }
    //    this.setState({total: total})
    //    console.log("total is "+total)
    //    //console.log(this.state.delivery)
    //    return total;
    // }

    // deliveryPrice = (props) =>{
    //     var delivery = "";
    //     var totalGross = this.totalGross();
    //     if(totalGross > 0){
    //         delivery = 1200;
    //         this.setState({delivery: 1200})
    //     }else{
    //         delivery = 0;
    //         this.setState({delivery: 0})
    //     }
    //     console.log("Delivery is "+delivery)
    //     return delivery;
    // }
    // totalNet = (props) =>{
    //     var total = this.totalGross()
    //     var delivery = this.deliveryPrice()
    //     var totalNe = "";
    //     totalNe = Number(delivery) + Number(total);
    //     console.log(totalNe);
    //     return totalNe;
    // }
}
export default CartItem;