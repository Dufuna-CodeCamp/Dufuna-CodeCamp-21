import React from "react";
import { Component } from "react";
import plus from '../../src/plus.svg';
import scooter from '../../src/scooter.svg';
class Total extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <>
                <div className="row total">                
                    <div className="col">
                        <p className="deliveryname totallast" onClick={this.props.check}>Total</p>
                    </div>
                    <div className="col">
                        <p className="textprice">&#8358; {this.props.total}</p>
                    </div>
                </div>
            </>
        )
    }
    // CartItem.forEach(function(value){
    //     value += value;
    //     console.log(value)
    // })
}
export default Total;