import React from "react";
import { Component } from "react";
import scooter from '../images/scooter.svg';

class DeliveryItem extends Component{
    
    render(){
            return (
                <>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src={scooter} className="img-fluid deliveryimg" width="80px" height="60px" alt="deliveryImage"/>
                                </div>
                                <div className="col">
                                <p className="deliveryname">Delivery&nbsp;fee</p><br/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p className="d-flex justify-content-end">&#8358; <span className="spanprice">{this.props.delivery}</span></p>
                        </div>
                    </div>
                    <hr />
                </>
            )
            }
            
    }    
export default DeliveryItem;