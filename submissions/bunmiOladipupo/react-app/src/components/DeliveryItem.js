import React from "react";
import { Component } from "react";
import close from '../../src/close.svg';
import plus from '../../src/plus.svg';
import minus from '../../src/minus.svg';
import scooter from '../../src/scooter.svg';
import $ from 'jquery';

class DeliveryItem extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
            return (
                <>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src={scooter} className="img-fluid deliveryimg" width="80px" height="60px" alt="delivery image"/>
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
            
            // del = (props) =>{
            //     var de = new CartItem();
            //     var del = "";
            //     var total = "";
            //     total = de.totalGross()
                
            //     if (total > 0) {
            //         del = 1200;            
            //     }else{
            //         del = 0;     
            //     }   
            //     this.setState({delivery: "del"});
            //     console.log("Mr. del "+del);              
            //     return del;
            // }
    }    
export default DeliveryItem;