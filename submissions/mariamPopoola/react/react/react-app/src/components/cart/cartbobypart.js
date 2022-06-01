import React from 'react';

const CartbodyPart =(props) => {
    return(
        <div>
            <div className="cartItem">
                    <img src={props.close} alt = "close" className="close"/>
                    <img src={props.itemImg} alt = "item" className="itemImg"/>

                    <div className="itemDetails">
                        <p>{props.itemName}</p>
                        <p>
                            <img src={props.plus} alt = "plus" onClick={props.addItemHandler}/> 
                             {props.count}
                            <img src={props.minus} alt = "minus" onClick={props.removeItemHandler}/>
                        </p>
                    </div>
                    <p className="itemPrice"><span>#</span>{props.itemPrice}</p>
            </div>
            <hr />
        </div>

    )
};

export default CartbodyPart;