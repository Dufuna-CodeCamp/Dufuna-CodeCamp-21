import React from "react";
import { Component } from "react";
class Total extends Component {
    
    render(){
        return (
            <>
                <div className="row" >                
                    <div className="col">
                        <p style={{fontWeight: "bold", color: "black"}} onClick={this.props.check}>Total</p>
                    </div>
                    <div className="col ">
                        <p className="d-flex justify-content-end" style={{fontWeight: "bold", color: "black"}}>&#8358; {this.props.total}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default Total;