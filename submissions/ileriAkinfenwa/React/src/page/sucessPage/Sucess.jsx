import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import imgSucess from '../../assets/Success.svg'

const Sucess = () => {
  return (
    <div className='suceess'>
        <Navbar/>
      <div style={{display:"flex",alignContent:'center', justifyContent:'center', marginTop:"200px"}} >
        <div style={{display:"flex", flexDirection:'column', alignItems:"center"}}>
            <img src={imgSucess} alt="suc"/>
            <h3 style={{color:'#5EA304', marginTop:"-10px"}}>Order Sucessfull</h3>
            <p style={{marginTop:'-10px',color:'#696969'}}>We have started processing your order</p>
        </div>  
      </div>
  </div>
  )
}

export default Sucess