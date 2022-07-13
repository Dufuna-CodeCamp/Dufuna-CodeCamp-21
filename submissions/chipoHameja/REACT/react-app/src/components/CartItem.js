import React from 'react';
import Vector from '../assets/vector.png';

function CartItem(props) {
    return <div className='cart-item'>
        <div className='x'><img src={Vector} alt="Vector" width={14} height={14} /></div>
        <img className='item-image' src={props.src} alt="Item"/>
        
        <div className='item-details'>
            <div className='item-name'>{props.itemName}</div>
            <button className='add-button' onClick={props.addItemHandler}>+</button>
            <p className='count'>{props.count}</p>
            <button className='remove-button' onClick={props.removeItemHandler}>-</button>
            
        </div>
        <p className='item-price' style={{float: 'right'}}><span>#</span>{props.itemPrice}</p>
    </div>
}

export default CartItem;