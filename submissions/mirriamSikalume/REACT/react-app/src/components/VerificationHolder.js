import React from 'react'
import { Header } from './header'
import { VerificationBody } from './VerificationBody'
import { VerificationTitle } from './VerificationTitle'

export const VerificationHolder = () => {
  return (
    <div>
        <Header />
        <VerificationTitle />
        <VerificationBody />
    </div>
  )
}
