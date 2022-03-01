import React from 'react'
import { Link } from 'react-router-dom'
import './verify.css'


const Verification = () => {
    return (
        <>

            <header className='verify-container'>
                <nav className='verify-logo'>
                    <div className="food-logo">
                        <h3>Food<span style={{ color: 'rgba(173, 76, 76, 1)' }}>Bag</span></h3>
                    </div>
                </nav>

                <nav className="nav-link-verify">
                    <ul>
                        <Link to='/'>
                            <li style={{ color: 'rgba(173, 76, 76, 1)', marginTop: 5 }}>Cart</li>
                        </Link>


                        <li style={{ marginTop: 5 }}>Login</li>


                        <li style={{
                            color: 'rgba(173, 76, 76, 1)',
                            border: '1px solid  rgba(173, 76, 76, 1)',
                            padding: 10,
                            marginTop: -7,
                            borderRadius: 5

                        }} className='last-link'>Sign up</li>
                    </ul>
                </nav>
            </header>

            {/* info section */}

            <section className='info-container'>

                <p>Home  &gt; Cart  &gt; Verification</p>
                <h3>Verification</h3>
                <p>Confirm address & Payment</p>
            </section>

            {/* form section */}

            <form action="" className='row'>
                <div className="mb-3 div-container">
                    <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="+234" />
                </div>
                <hr />


                <div className='div-selection'>
                    <label for="exampleFormControlInput1" className="form-label">Payment method</label>
                    <select class="form-select form-control" aria-label="Default select example">
                        <option selected>Card</option>
                        <option value="1">visa Card</option>
                        <option value="2">Master Card</option>
                        <option value="3">bank tranfer</option>
                    </select>
                </div>


                <div className="mb-3 div-number ">
                    <label for="exampleFormControlInput1" className="form-label">Card Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="2345 6543 7868 2343" />
                </div>

                <div className="mb-3 div-name">
                    <label for="exampleFormControlInput1" className="form-label">Card Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="TOLUWALASE KENNY OJO" />
                </div>

                <div class="col-md-4 class-one">
                    <label for="exampleFormControlInput1" className="form-label">Expiry date</label>
                    <input type="text" class="form-control form-control-1 " placeholder="01/23" />
                </div>
                <div class="col-md-4 class-two">
                    <label for="exampleFormControlInput1" className="form-label">CVC</label>
                    <input type="text" class="form-control form-control-2" id="validationCustom03" required placeholder="012" />

                </div>


                <div style={{ marginBottom: 200, marginTop: 100, textAlign: 'center' }} className='button-dev'>
                    <Link to='/sucess'>
                        <button className='btn-pay btn-danger'>Pay</button>
                    </Link>
                </div>
            </form>

        </>
    )
}

export default Verification;