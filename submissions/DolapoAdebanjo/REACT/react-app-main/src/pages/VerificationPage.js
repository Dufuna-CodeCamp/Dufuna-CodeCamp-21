import React, {useState} from 'react';
import Button from "../components/Button";
import Page from '../components/Page';
import { useNavigate } from "react-router-dom";

function VerificationPage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const clickButton = () => {
    if (inputs.pnumber && inputs.payment && inputs.cnumber && inputs.cname && inputs.edate &&  inputs.cvc){
      navigate("/success")
    }
  }
  return (
    <div>
        <Page page="Verification" wantRemove={false}>
          <p className='confirm-paragraph'>Confirm address and payment</p>
          <div className='sub-heading'>
            <div className="radio-header">
              <h3 className="medium-font">Delivery Address</h3>
              <input type="radio" readOnly checked style={{accentColor: "#AD4C4C"}}/>
            </div>
          <p className="small-heading">Your order will be delivered to your address</p>
          </div>
          <form>
            <div className="form-group">
            <label className="label" htmlFor="pnumber">Phone Number</label>
            <input type="text" id="pnumber" name="pnumber" value={inputs.pnumber} className="input-field" placeholder='+234' onChange={handleChange}/>
            </div>
            <hr style={{margin: '20px 0'}}/>
            <div className="form-group">
            <label className="label" htmlFor="payemt">Payment method</label>
              <select name="payment" id="payment"  className="input-field" onChange={handleChange}>
                <option>Choose payment option</option>
                  <option value="card">Card</option>
                  <option value="cash">Cash</option>
              </select>
            </div>
            {inputs.payment === 'card' && (
              <>
                <div className="form-group">
                    <label className="label" htmlFor="cnumber">Card Number</label>
                    <input type="text" id="cnumber" name="cnumber" value={inputs.cnumber} className="input-field" placeholder='2345 6543 7868 2343' onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="cname">Card Name</label>
                    <input type="text" id="cname" name="cname" value={inputs.cname} className="input-field" placeholder='TOLUWALASE KENNY OJO' onChange={handleChange}/>
                </div>
                <div className='row-group'>
                    <div className="form-group row-form">
                        <label className="label" htmlFor="edate">Expiry date</label>
                        <input type="text" id="edate" name="edate" value={inputs.edate} className="input-field" placeholder='01/23' onChange={handleChange}/>
                    </div>
                  <div className="form-group row-form">
                      <label className="label" htmlFor="cvc">CVC</label>
                      <input type="text" id="cvc" name="cvc" value={inputs.cvc} className="input-field" placeholder='012' onChange={handleChange}/>
                  </div>
                </div>
                </>
            )}
          </form>
          <Button buttonName={'Pay'} disable={!(inputs.pnumber && inputs.payment && inputs.cnumber && inputs.cname && inputs.edate &&  inputs.cvc) } handleClick={clickButton} />
        </Page>
    </div>
  )
}

export default VerificationPage;