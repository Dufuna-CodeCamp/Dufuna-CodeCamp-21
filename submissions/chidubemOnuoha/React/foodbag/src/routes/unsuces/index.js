import React from 'react';
import './style.css';
import error from '../../assets/images/error.png'

export default function UnSucess() {
    return (
        <>
            <section className='unsucss-container'>
                <div className="main-image-container">
                    <img src={error} alt="" />
                </div>
                <div className="main-text-container">
                    <h4 style={{ color: 'rgba(255, 100, 74, 1)' }}>Order unsuccessful</h4>
                    <p style={{ height: 64, width: 300, marginTop: 20 }}>Something is wrong with your order.</p>
                </div>


            </section>

        </>
    )
}