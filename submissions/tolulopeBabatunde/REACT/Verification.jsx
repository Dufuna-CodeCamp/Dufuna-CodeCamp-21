import React from 'react'
import styled from 'styled-components'
import img1 from '../FoodBag/radio_button_checked.svg';
function Verification() {
    return (
        <div>
            <ul className="home">
                <li><a href="/">Home</a></li>
                <li><a href="/">{'>'}</a></li>
                <li><a href="/">Cart</a></li>
                <li><a href="/">{'>'}</a></li>
                <li className='ca'><a href="/verification">Verification</a></li>
            </ul>

            <Wrapper className='verification'>



                <div>
                    <div className='veri'>
                        <h2>Verification</h2>
                        <span>Confirm address & Payment</span>
                    </div>
                    <img className='checkbox' src={img1} alt="radio button" />

                    <h4>Delivery Address</h4>

                    <p>Your order will be delivered to your address</p>


                </div>

{/* FORM */}

                <FormWrapper className='form' action="">
                    <label htmlFor="Phone number">Phone number</label>
                    <br /> <input type="number" placeholder='+234' required />
                    <br />
                    <hr />
                    <br />
                    <label htmlFor="Payment method">Payment method</label>
                    <br />
                    <input type="text" className="none" />
                    <select  name="card-type" id="card-type" required>
                        <option value="">Card</option>
                        <option value="Visa">Visa</option>
                        <option value="RuPay">RuPay</option>
                        <option value="MasterCard">MasterCard</option>
                    </select>
                    <br />
                    <label htmlFor="Card number">Card number</label>
                    <br />
                    <input  type="number" name='card-num' autoComplete='card-num' inputMode='numeric' pattern='[\d]{10,30}' placeholder='2345 6543 7868 2343' required />
                    <br />
                    <label htmlFor="Card name">Card name</label>
                    <br />
                    <input type="text" placeholder='Tolulope Bright Babatunde' required />
                    <br />

                    <div className='box'>

                        <div className='expiry'>
                            <label htmlFor="Expiry date">Expiry date</label>
                            <input type='text' placeholder="MM/YY" maxLength="5" required />

                        </div>

                        <br />

                        <div className="cvc">
                            <label htmlFor="CVC">CVC</label>
                            <input type="number" placeholder='012' inputMode="numeric" maxLength={3} required />

                        </div>
                    </div>
                    {/* CHECKOUT BUTTON */}
                    <div className='checkout'>
                        <button className='check'>Pay</button>
                    </div>

                </FormWrapper>
            </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
margin:20px;

h2{
    font-size:16px
}
.veri{
    margin-bottom:40px
}
span{
    font-size:13px;
    color:#ad4c4c;
    font-weight:600;
}
h4{
    font-size:13px
}
p{
    font-size:11px;
    margin:5px 0px 10px 0px;
}
.checkbox{
    float:right;
    width:18px
}

`

const FormWrapper = styled.form`

input, select{
   padding:7px;
   border-radius:5px;
   margin:10px 0px 20px 0px;
   border:1px solid grey;
   min-width:100%
}

hr{
    margin:20px 0px 0px 0px;
}
label{

    font-weight:600;
    font-size:13px
}

.box{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
.expiry{
    min-width:50%;
    margin-right:10px;
}
.cvc{
    min-width:48%;
    
}


`






export default Verification
