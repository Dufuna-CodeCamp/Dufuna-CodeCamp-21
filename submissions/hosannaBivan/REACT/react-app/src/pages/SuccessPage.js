import React from 'react'
import Navbar from '../components/Navbar';
import logo from '../images/FoodBag.png'
import success from '../images/Success _Two Color 1.svg'

const SuccessPage = () => {
  return (
    <div>
        
        <Navbar 
            logo = {logo}
            navItem1 = 'Cart'
            navItem2 = 'Login'
            navItem3 = 'Sign up'
            />

            <div className='success-div'>
                <img className='success-img' src={success} alt="" />
                <p className="green">Order Successful</p>
                <p className="p">We have started processing <br /> your order</p>
            </div>
    </div>
  )
}

export default SuccessPage