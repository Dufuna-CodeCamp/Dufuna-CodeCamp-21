import React from "react";
import close from "../images/close.svg";
import add from "../images/plus.svg";
import minus from "../images/Minus.svg";


function CartItems (props) {
        return (
                <div>
                    <ul className="wrapper22">
                        <li key={props.id}>
                            <img id="closed" src={close} alt="close"/>
                            <img className="theCart" src={props.image} alt="product"></img>
                            <div className="theCart"><h3 id="foodName">{props.foodName}</h3>
                            <button className="controls"><img src={add} alt="plus" onClick={props.increaseCount} /></button>
                            <span id="count">{props.count}</span>
                            <button className="controls"><img  src={minus} alt="minus" onClick={props.decreaseCount} /></button>
                            </div>
                            <h3 className="theCart" id="priceCart">#{props.price}</h3> 
                        </li>
                    </ul>
                       
                </div>
       )
     
}

export default CartItems;