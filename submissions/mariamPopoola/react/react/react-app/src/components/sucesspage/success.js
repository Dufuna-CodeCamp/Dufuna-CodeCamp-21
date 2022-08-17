import React from 'react'
import Header  from '../header'
import SuccessPart from './sucesspart'
import success from '../../images/success.svg'

const Success =(props)=>{
    return(
        <div>
            <Header/>
            <SuccessPart 
            image = {success}
            imageName = "sucess"
            order ="Order successfull"
            orderMessage="We have started processing your order"
            />
        </div>
      
    )
};
export default Success;

