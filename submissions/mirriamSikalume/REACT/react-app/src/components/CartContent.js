import React, { useEffect, useState } from 'react'
import { Header } from './header'
import Data from './Data'
import { Button } from './Button'
import close from '../images/close.svg'
import plus from '../images/plus.svg'
import Minus from '../images/Minus.svg'
import scooter from '../images/scooter 1.svg'


import cartContents from './cartContents.css'

export const CartContent = () => {


  const cash = 1200;
  let total = 0;
  const [ListOfData, setListOfData] = useState([])

  useEffect(() => {

    setListOfData(Data)

  }, [])

  const HandleIncrement = (item) => {

    const exits = ListOfData.find((param) => param.id === item.id
    )

    if (exits) {

      setListOfData(

        ListOfData.map((param) => (
          item.id === param.id ? { ...exits, quantity: exits.quantity + 1 } : param
        ))

      )

    }
  }

  const HandleDecrement = (item) => {

    const exits = ListOfData.find((param) => param.id === item.id
    )

    if (exits) {

      setListOfData(
        ListOfData.map((param) => (

          item.id === param.id ? { ...exits, quantity: exits.quantity - (exits.quantity <= 1 ? 0 : 1) } : param
        ))
      )
    }

  }

  const HandleCancle = (item) => {

    const exits = ListOfData.find((param) => param.id === item.id
    )

    if (exits) {

      setListOfData(
        ListOfData.filter((param) => (
          exits.quantity > 1 ? param : item.id !== param.id
        ))
      )

    }

  }
  return (
    <div className='container'>
      {
        ListOfData.length === 0 ? <p id='empty'> Whooops this is empty</p> : ListOfData.map((item) => (

          <div key={item.id} className="main-container">
            <div className='contents'>
              <div className='cancle-image-title'>

                <Button id='cancle-btn' img={close}
                  onClick={() => HandleCancle(item)}
                  imageId="imageId" />
                <img id='food-image' src={item.image} ></img>

                <div className='title-buttons'>

                  <p id='title'>{item.title}</p>

                  <div className='btn-quantity'>
                    <button id='plus' onClick={() => HandleIncrement(item)} >
                      <img id=" plus-image-id " src={plus} ></img>
                    </button>


                    <p id='quantity'>{item.quantity}</p>

                    <button id='plus' img={Minus} onClick={() => HandleDecrement(item)} >
                      <img id=" plus-image-id " src={Minus} ></img>
                    </button>

                  </div>
                </div>

              </div>
              <div className='cart-price'>
                <p>#{item.quantity * item.price}</p>
                <p id='hide-total'> {total += item.quantity * item.price}</p>
              </div>
            </div>


          </div>

        ))
      }

   {
    ListOfData.length ==0 ?
    <p></p>: 
    <div>
        <div className='delevery-details'>

        <div className='scooter-delivery-feel'>
        <img id="scooter" src={scooter}></img>
        <p id='feel'>Delivery Fee</p>
        </div>

        <p id='total'>#{total == 0 ? 0 : cash}</p>
        <p id='total-plus-cash'>#{total == 0 ? 0: total += cash}</p>
       

      </div>

      <div className='total'>
        <p id='final-total'>Total</p>
        <p id='sum-total'>#{total}</p>
      </div>

      <div className='footer'>
         <button id='checkout'>checkout</button>
      </div>
      </div>
   }
     
    </div>
  )
}
