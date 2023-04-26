import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import img1 from '../FoodBag/image1.svg';
import close from '../FoodBag/close.svg';
import img2 from '../FoodBag/image4.svg';
import img3 from '../FoodBag/image3.svg';
import scooter from '../FoodBag/scooter 1.svg';

function CartPage() {
  //STATE AND FUNCTION FOR FIRST ITEM

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const pricePerOne = 5000;

  const increasePrice = () => {
    if (price >= 0 && quantity >= 0) {
      setPrice(price + pricePerOne);
      setQuantity(quantity + 1);
    }
  };
  const decreasePrice = () => {
    if (price >= 0 && quantity >= 1) {
      setPrice(price - pricePerOne);
      setQuantity(quantity - 1);
    }
  };

  //STATE AND FUNCTION FOR SECOND ITEM

  const [price2, setPrice2] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const pricePerOne2 = 600;

  const increasePrice2 = () => {
    if (price2 >= 0 && quantity2 >= 0) {
      setPrice2(price2 + pricePerOne2);
      setQuantity2(quantity2 + 1);
    }
  };
  const decreasePrice2 = () => {
    if (price2 >= 0 && quantity2 >= 1) {
      setPrice2(price2 - pricePerOne2);
      setQuantity2(quantity2 - 1);
    }
  };

  //STATE AND FUNCTION FOR THIRD ITEM

  const [price3, setPrice3] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const pricePerOne3 = 800;

  const increasePrice3 = () => {
    if (price3 >= 0 && quantity3 >= 0) {
      setPrice3(price3 + pricePerOne3);
      setQuantity3(quantity3 + 1);
    }
  };
  const decreasePrice3 = () => {
    if (price3 >= 0 && quantity3 >= 1) {
      setPrice3(price3 - pricePerOne3);
      setQuantity3(quantity3 - 1);
    }
  };
  //DELIVERY FEE
  const deliveryFee = 1200;

  if (!(quantity === 0 && quantity2 === 0 && quantity3 === 0)) {
    var total = price + price2 + price3 + deliveryFee;
  } else {
    total = 0;
  }

  //FUNCRION FOR REMOVE ALL

  const removeAll = () => {
    setPrice(0);
    setPrice2(0);
    setPrice3(0);
    setQuantity(0);
    setQuantity2(0);
    setQuantity3(0);
  };

  const noOfQuantity = quantity + quantity2 + quantity3;

  let checkOrder = false;
  if (total !== 0) {
    checkOrder = true;
  } else {
    checkOrder = false;
  }
  return (
    <div>
      <ul className='home'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>{'>'}</a>
        </li>
        <li className='ca'>
          <a href='/'>Cart</a>
        </li>
      </ul>
      <div className='heading'>
        <div>
          <h2>Cart</h2>
          <p className='noOfQ'>{noOfQuantity} item(s)</p>
        </div>
        <div className='remove'>
          <button onClick={removeAll}>Remove all</button>
        </div>
        <img className='none' src={img1} alt='' />
      </div>
      <Item
        closeImg={close}
        img={img2}
        name={'KFC - King Bucket'}
        quantity={quantity}
        price={'#' + price}
        increasePrice={increasePrice}
        decreasePrice={decreasePrice}
      />
      <hr />
      <Item
        closeImg={close}
        img={img1}
        name={'Refuel Max'}
        quantity={quantity2}
        price={'#' + price2}
        increasePrice={increasePrice2}
        decreasePrice={decreasePrice2}
      />
      <hr />
      <Item
        closeImg={close}
        img={img3}
        name={'KFC - King Bucket'}
        quantity={quantity3}
        price={'#' + price3}
        increasePrice={increasePrice3}
        decreasePrice={decreasePrice3}
      />
      <hr />

      {/* DELIVERY FEE */}

      <section className='delivery'>
        <div className='imgg'>
          <img src={scooter} alt='' />
          <h1>Delivery fee</h1>
        </div>
        <h4 className='deliveryFee'>{'#' + deliveryFee}</h4>
      </section>
      <hr />

      {/* TOTAL */}
      <section className='total'>
        <h4>Total</h4>
        <h4 className='totalPrice'>
          #<span>{total}</span>
        </h4>
      </section>

      {/* CHECKOUT BUTTON */}
      <div>
        {/* <Link to={'/verification'} className ='checkout'>
      <button className='check'>Checkout</button>
       </Link> */}

        {checkOrder ? (
          <Link to={'/verification'} className='checkout'>
            <button className='check'>Checkout</button>
          </Link>
        ) : (
          <Link to={'/'} className='checkout'>
            <button className='pick-check'>Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default CartPage;
