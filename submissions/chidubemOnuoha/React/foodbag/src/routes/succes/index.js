import React from 'react'
import './style.css'
import success from '../../assets/images/sucess.png'

const SucessfulPage = () => {
    return (
        <>
            <header className='header-container'>
                <nav className='nav-logo'>
                    <div className="logo">
                        <h3>Food<span style={{ color: 'rgba(173, 76, 76, 1)' }}>Bag</span></h3>
                    </div>
                </nav>

                <nav className="nav-link">
                    <ul>
                        <li style={{ color: 'rgba(173, 76, 76, 1)', marginTop: 5 }}>Cart</li>

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

            <section className='body-container'>

                <div className="img-container">
                    <img src={success} alt="" />
                </div>
            </section>

            <p className='p-h1'>Order successful</p>
            <p className='p-h2'>We have started processing your order.</p>
        </>

    )
}

export default SucessfulPage;