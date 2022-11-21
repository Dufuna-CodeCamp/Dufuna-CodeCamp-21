import React from 'react';

function Item(props) {
  return (
    <div>
      <section className='img-container'>
        <div className='container'>
          <img className='close' src={props.closeImg} alt='' />
          <img className='image' src={props.img} alt='' />
          <div className='item-details'>
            <h6 className='name'> {props.name}</h6>
            <div className='quantity'>
              <button onClick={props.increasePrice}>+</button>
              <h4>{props.quantity}</h4>
              <button onClick={props.decreasePrice}>-</button>
            </div>
          </div>
        </div>

        <h4 className='price'>{props.price}</h4>
      </section>
    </div>
  );
}

export default Item;
