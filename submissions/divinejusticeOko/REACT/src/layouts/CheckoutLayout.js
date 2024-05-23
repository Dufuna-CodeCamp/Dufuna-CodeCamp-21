import React from "react";
import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default CheckoutLayout;