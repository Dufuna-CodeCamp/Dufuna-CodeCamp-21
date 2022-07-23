import React from 'react';
import './componentCrumb.css';
import VbreadCrumbs from '../../verificationCrumbs/VbreadCrumbs';
import VerificationForm from '../../verification/VerificationForm';

function Verification() {
  return (
    <div className="wrapper">
      <VbreadCrumbs />
      <h2 className='heading'>Verification</h2>
      <p className="v-caption">Confirm address & Payment</p>
      <VerificationForm />
    </div>
  )
}

export default Verification;