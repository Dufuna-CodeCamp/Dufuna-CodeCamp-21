import React, { Component } from 'react';
import styled from 'styled-components';
import img1 from '../FoodBag/radio_button_checked.svg';
import { Link } from 'react-router-dom';

class Verification extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvc: '',
      payment: '',
      change: false,
      paymentMethod: ['Card', 'Visa', 'RuPay', 'MasterCard'],
    };
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    const {
      phoneNumber,
      payment,
      cardName,
      cardNumber,
      cvc,
      expiryDate,
      paymentMethod,
    } = this.state;
    const details = {
      phoneNumber: phoneNumber,
      cardName: cardName,
      cardNumber: cardNumber,
      paymentMethod: paymentMethod,
      cvc: cvc,
      expiryDate: expiryDate,
      payment: payment,
    };

    if (
      phoneNumber !== 0 &&
      cardName !== '' &&
      cardNumber !== 0 &&
      paymentMethod !== 0 &&
      expiryDate !== 0 &&
      cvc !== 0
    ) {
      this.setState({ details: details, change: true });
    } else {
      this.setState({ change: false });
      e.preventDefault();
      console.log(this.state.change);
    }
  };

  render() {
    return (
      <div>
        <Wrapper className='verification'>
          <div>
            <div className='veri'>
              <h2>Verification</h2>
              <span>Confirm address & Payment</span>
            </div>
            <img className='checkbox' src={img1} alt='radio button' />

            <h4>Delivery Address</h4>

            <p>Your order will be delivered to your address</p>
          </div>

          {/* FORM */}

          <FormWrapper className='form' action=''>
            <label htmlFor='Phone number'>Phone number</label>
            <br />{' '}
            <input
              onChange={this.handleInputChange}
              value={this.state.phoneNumber}
              name='phoneNumber'
              type='number'
              placeholder='+234'
              required
            />
            <br />
            <hr />
            <br />
            <label htmlFor='Payment method'>Payment method</label>
            <br />
            <input type='text' className='none' />
            <select
              onChange={this.handleInputChange}
              value={this.state.payment}
              name='payment'
              required>
              {this.state.paymentMethod.map((pay) => {
                return (
                  <option key={pay} value={pay} label={pay}>
                    {pay}
                  </option>
                );
              })}
            </select>
            <br />
            <label htmlFor='Card number'>Card number</label>
            <br />
            <input
              onChange={this.handleInputChange}
              value={this.state.cardNumber}
              name='cardNumber'
              type='number'
              autoComplete='card-num'
              inputMode='numeric'
              placeholder='2345 6543 7868 2343'
              required
            />
            <br />
            <label htmlFor='Card name'>Card name</label>
            <br />
            <input
              type='text'
              onChange={this.handleInputChange}
              value={this.state.cardName}
              name='cardName'
              placeholder='Debby Bello'
              required
            />
            <br />
            <div className='box'>
              <div className='expiry'>
                <label htmlFor='Expiry date'>Expiry date</label>
                <input
                  type='text'
                  name='expiryDate'
                  onChange={this.handleInputChange}
                  value={this.state.expiryDate}
                  placeholder='MM/YY'
                  maxLength='5'
                  required
                />
              </div>

              <br />

              <div className='cvc'>
                <label htmlFor='CVC'>CVC</label>
                <input
                  type='number'
                  name='cvc'
                  onChange={this.handleInputChange}
                  value={this.state.cvc}
                  placeholder='012'
                  inputMode='numeric'
                  maxLength='3'
                  required
                />
              </div>
            </div>
            {/* CHECKOUT BUTTON */}
            <div>
              {this.state.change === true ? (
                <Link to={'/OrderSuccessful'} className='checkout'>
                  <button onClick={this.handleFormSubmit} className='check'>
                    Pay
                  </button>
                </Link>
              ) : (
                <Link to={'/verification'} className='checkout'>
                  <button onClick={this.handleFormSubmit} className='check'>
                    Pay
                  </button>
                </Link>
              )}
            </div>
          </FormWrapper>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  margin: 20px;

  h2 {
    font-size: 16px;
  }
  .veri {
    margin-bottom: 40px;
  }
  span {
    font-size: 13px;
    color: #ad4c4c;
    font-weight: 600;
  }
  h4 {
    font-size: 13px;
  }
  p {
    font-size: 11px;
    margin: 5px 0px 10px 0px;
  }
  .checkbox {
    float: right;
    width: 18px;
  }
`;

const FormWrapper = styled.form`
  input,
  select {
    padding: 7px;
    border-radius: 5px;
    margin: 10px 0px 20px 0px;
    border: 1px solid grey;
    min-width: 100%;
  }

  hr {
    margin: 20px 0px 0px 0px;
  }
  label {
    font-weight: 600;
    font-size: 13px;
  }

  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .expiry {
    min-width: 50%;
    margin-right: 10px;
  }
  .cvc {
    min-width: 48%;
  }
`;

export default Verification;
