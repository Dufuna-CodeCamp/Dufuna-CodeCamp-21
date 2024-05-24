import React from "react";

const Sucess = (props) => {
    return(
        <div className="text-center sucess">
            <img src="../images/Success.png" alt="Order sucessful" />
            <p className="green-text opp fs-xl poppins-medium">Order sucessful</p>
            <br/>
            <p className="poppins-regular fs-sm">We have started processing your order.</p>
        </div>
    )
}

export default Sucess;