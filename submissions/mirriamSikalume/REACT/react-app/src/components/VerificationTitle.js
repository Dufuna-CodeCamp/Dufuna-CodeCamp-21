import React from 'react'
import "./VerificationTitle.css"
export const VerificationTitle = () => {
  return (
    <div>
        <div className="VerifHome">
            <p>
                <span className="H">Home {">"}</span>
                <span className="C">Cart{">"}</span>
                <span>Verification</span>
            </p>
        </div>
        <div className="verification" >
            <h2>Verification</h2> 
            <p className="VerifDetails"> Confirm address & Payment</p>
        </div>
    </div>
  )
}
