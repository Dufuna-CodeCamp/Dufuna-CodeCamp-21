import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { useFormik } from 'formik'
import './verification.css'


  const initialValues =  {
    PhoneNumber:'',
    Cardnumber:'',
    Cardname:'',
    CVCnumber:'',
    expirenumber:"",
  }
  const onSubmit = values => {
    console.log('Form data', values)
  }
  const validate = values => {
    let errors = {}

    if(!values.PhoneNumber){
      errors.PhoneNumber='Required'  
    } 
    if(!values.CardNumber){
      errors.CardNumber='Required'  
    } 
    if(!values.CVCnumber){
      errors.CVCnumber='Required'  
    } 
    if(!values.expirenumber){
      errors.expirenumber='Required'  
    } 
    if(!values.Cardname){
      errors.Cardname='Required'  
    } 

    return errors
  }

  const Verification = () => {
    const formik = useFormik({
      initialValues,  
      onSubmit,
      validate,
      
      })
    console.log('Form errors', formik.errors)
  return (
    <div className='verify'>
    <Navbar/>
      <div className="breadcremb">
          <a href="./vendor" style={{textDecoration:"none", color:'black'}}>Home &gt; cart &gt; <strong>Verification</strong></a>
        </div>
         <h2 style={{marginTop:"30px"}}>Verification</h2>
         <p style={{marginTop:'-20px',color:"#AD4C4C",fontSize:'13px'}}>Confirm address & Payment</p>
         <div className="address" style={{display:"flex", justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h3>Delivery Address</h3>
              <p style={{marginTop:'-20px',fontSize:'13px'}}>Your order will be delivered to you address</p>
            </div>
            <div>
              <input type="radio" name="check" id="check" style={{}}/>
            </div>
            </div>
            <div className="formdetils">
              <form onSubmit={formik.handleSubmit}>
                <div className="formdetail" style={{display:"flex", flexDirection:'column'}}>
                  <label htmlFor="">Phone number</label>
                  <input
                   style={{height:'20px', paddingLeft:"10px"}}
                   type="number" 
                   name="PhoneNumber" 
                   id="PhoneNumber" 
                   onChange={formik.handleChange}
                   value={formik.values.PhoneNumber}
                   placeholder='+234' 
                    />
                    {formik.errors.PhoneNumber ? <div style={{color:'red'}}>{formik.errors.PhoneNumber}</div>:null}
                    </div>
                <hr />
                <div className="formdetail" style={{display:"flex", flexDirection:'column', marginBottom:'10px'}}>
                  <label htmlFor="Payment">Payment method</label>
                  <select
                   style={{height:'30px', paddingLeft:"10px"}}
                   onChange={formik.handleChange}
                   value={formik.values.PaymentMethod}
                   placeholder='Card'
                   >
                   <option>Visa</option>
                   <option>Master Card</option>
                   <option>America Express</option>
                   <option>others</option>
                   </select>
                </div>
                <div className="formdetail" style={{display:"flex",marginBottom:'10px', flexDirection:'column'}}>
                  <label htmlFor="">Card number</label>
                  <input 
                    style={{height:'20px', paddingLeft:"10px"}}
                    type="number"
                    name="CardNumber" 
                    id="CardNumber" 
                    onChange={formik.handleChange}
                    value={formik.values.CardNumber}
                    placeholder='9678 29847 2857' 
                   />
                   {formik.errors.CardNumber ? <div style={{color:'red'}}>{formik.errors.CardNumber}</div>:null}

                </div>
                <div className="formdetail" style={{display:"flex", marginBottom:'10px', flexDirection:'column'}}>
                  <label htmlFor="">Card name</label>
                  <input 
                    style={{height:'20px', paddingLeft:"10px"}}
                   type="name"
                   name="Cardname" 
                   id="Cardname" 
                   onChange={formik.handleChange}
                   value={formik.values.Cardname}
                   placeholder="Olatunbosun Deborah "
                  />
                  {formik.errors.Cardname ? <div style={{color:'red'}}>{formik.errors.Cardname}</div>:null}

                </div>
                <div className="formdetail" style={{display:"flex", gap:'20px', justifyContent:'space-between'}}>
                  <div className="expiry"style={{display:"flex", flex:'1', flexDirection:'column'}} >
                    <label htmlFor="Expire">Expire date</label>
                    <input type="number" 
                      style={{height:'20px', paddingLeft:"10px"}}
                      name="expirenumber" id="expirenumber"
                      onChange={formik.handleChange}
                      value={formik.values.expirenumber} 
                      placeholder='01/23'
                      />
                      {formik.errors.expirenumber ? <div style={{color:'red'}}>{formik.errors.expirenumber}</div>:null}

                  </div>
                  <div className="CVC" style={{display:"flex", flex:"1", flexDirection:'column' }}>
                    <label htmlFor="">CVC</label>
                    <input 
                     style={{height:'20px', paddingLeft:"10px"}}
                     type="number"
                     name="CVCnumber" 
                     id="CVCnumber"
                     onChange={formik.handleChange}
                     value={formik.values.CVCnumber} 
                     placeholder='012' 
                    />
                    {formik.errors.CVCnumber ? <div style={{color:'red'}}>{formik.errors.CVCnumber}</div>:null}

                  </div>
              </div>
              <div style={{display:"flex",justifyContent:"center",alignContent:"center", justifyItems:'center',marginTop:"40px",}} >
                <button type='submit'  style={{width:'50%', height:'30px',border:"none",backgroundColor:!(formik.dirty && formik.isValid) ? 'null' : '#AD4C4C',cursor: !(formik.dirty && formik.isValid) ? 'not-allowed':"pointer",color:!(formik.dirty && formik.isValid) ?"null": "white"}} disabled={!(formik.dirty && formik.isValid)}>Pay</button>
              </div>
          </form>
      </div>
        
    </div>
  )
}

export default Verification