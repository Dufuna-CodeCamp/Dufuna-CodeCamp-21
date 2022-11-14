import React from "react";
import { Component } from "react";
// import plus from '../../src/plus.svg';
import scooter from '../../src/scooter.svg';

class DeliveryItem extends Component{
    
    render(){
            return (
                <>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src={scooter} className="img-fluid deliveryimg" width="80px" height="60px" alt="delivery"/>
                                </div>
                                <div className="col desc">
                                <p className="deliveryname">Delivery&nbsp;fee</p><br/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p className="textprice delprice">&#8358; <span className="spanprice">{this.props.delivery}</span></p>
                        </div>
                    </div>
                    <hr />
                </>
            )
            }
            
    }    
export default DeliveryItem;