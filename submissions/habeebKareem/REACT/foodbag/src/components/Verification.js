// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './css/Verification.css'
// import { Input } from './Input'

// function Verification() {

//     const [inputValue, setInputValue] = useState(
//         {phoneNumber: '', 
//          cardNumber: '', 
//          cardName: '',
//          expiryDate: '',
//          CVC: ''
//         });

//     const handleInputChange = (event) => {
//         const {name, value} = event.target;

//         setInputValue(prevInputValue => ({
//             ...prevInputValue,
//             [name]: value
//         }))
//     };

//     const [radioBtn, setRadioBtn] = useState("")

//     const handleRadioChange = (event) => {
//         radioBtn === "" ? setRadioBtn(event.target.checked = "checked") : setRadioBtn(event.target.checked = "")
//     }

//     return (
//         <div>
            
//             {/* Breadcrumb */}
//             <ul className='breadcrumb'>
                
//                     <li className='breadcrumb-item'><Link  to=''> Home</Link></li>
//                     <li className='breadcrumb-item'><Link to='/CartPage'>Cart</Link></li>
//                     <li className='breadcrumb-item'><Link style={{color:"#000000"}} to='/CartPage'>Verification</Link></li>
//             </ul>
          
//             <h2>Verification</h2>
//             <p>Confirm address &amp; Payment </p>

//             <div className='radio' >
//                 <label htmlFor="Deliveryaddress">Delivery Address</label>
//                 <input 
//                     type="radio" 
//                     id="deliveryAddress" 
//                     name="deliveryAddress" 
//                     value="deliveryAddress"
//                     onChange={handleRadioChange}
//                     checked={radioBtn} />
//             </div>

//             <span className='order-address' >Your order will be delivered to your address</span>

//             <Input 
//                 name="phoneNumber"
//                 label="Phone number" 
//                 inputType="number" 
//                 value={inputValue.phoneNumber}
//                 handleInputChange={handleInputChange}
//                 placeholder="+234" 
//             />
//             <hr />
            
//             <label style={{fontWeight: "500", fontSize: "20px"}} htmlFor='cards'>Payment method</label>
            
//                 <select  name="pets" id="cards" >
//                     <option value="" >Card</option>
//                     <option value="dog">Visa</option>
//                     <option value="cat">MasterCard</option>
//                 </select>
                  

//             <Input
//                 name="cardNumber"
//                 label="Card Number" 
//                 inputType="number" 
//                 value={inputValue.cardNumber}
//                 handleInputChange={handleInputChange} 
//                 placeholder="2345 6543 7863" 
//             />
//             <Input
//                 name="cardName"
//                 label="Card name" 
//                 inputType="text" 
//                 value={inputValue.cardName}
//                 handleInputChange={handleInputChange}
//                 placeholder="TOLUWALASE KENNY OJO" 
//             />

//             <div className='last-input' >
//             <Input
//                 name="expiryDate"
//                 label="Expiry date" 
//                 inputType="number" 
//                 value={inputValue.expiryDate}
//                 handleInputChange={handleInputChange}
//                 placeholder="01/23" 
//             />
//             <Input
//                 name="CVC"
//                 label="CVC" 
//                 inputType="number" 
//                 value={inputValue.CVC}
//                 handleInputChange={handleInputChange}
//                 placeholder="012" 
//             />
            
//             </div>

//              <Link className='pay-btn' to='/OrderSuccessful'>Pay</Link>    
//         </div>
//     )
// }
// export default Verification


import React from 'react'

function Verification() {
    return (
        <div>
            <h2>Verification</h2>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <select>
                <option value=""></option>
            </select>
            
        </div>
    )
}

export default Verification
