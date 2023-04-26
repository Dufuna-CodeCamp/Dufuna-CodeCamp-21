import React from "react";
import { Component } from "react";
class Total extends Component {
    
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
}
export default Total;