

import React from 'react'
import { OrderContents } from './OrderContents'
import OrderHeader from './OrderHeader'

export const OrderMainComponentHolder = () => {
  return (
    <div>
    <div className='order-contents'>
       <OrderHeader />
       <OrderContents />
     </div>
    </div>
  )
}
