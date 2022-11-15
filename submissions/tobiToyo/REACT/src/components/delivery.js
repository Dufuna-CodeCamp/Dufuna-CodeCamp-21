import React from "react";
import Border from "./borderline";

const DeliveryFee = (props) => {
   

        return (                   
            <div>
                <div className="order">
                    <div className="order-leftside">

                        
                            
                        <div className="scoo-img-div">
                            <img src={props.image} alt="Delivery Scooter" className="food-img"/>
                        </div>

                        <div className="scoo-description">
                            <div className="food-name"> Delivery </div>
                        </div>

                    </div>

                        <div className="order-rightside">
                            {"#" + props.price}
                        </div>
                    
                </div>

                <Border />

            </div>
            )    
    }




export default DeliveryFee;