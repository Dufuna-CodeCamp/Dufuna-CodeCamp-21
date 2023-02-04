import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "./App.css";
import CartPage from "./components/CartPage";
import VerificationPage from "./components/VerificationPage";

function App() {

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <div>
    //             <p> please navigate to <Link to="/cart">Cart</Link> for the Cart page </p>
    //             <br/>
    //             <p> please navigate to <Link to="/verification">Verification</Link> for the Verification page </p>
    //         </div>,
    //     },
    //     {
    //         path: "/cart",
    //         element: <CartPage/>,
    //     },
    //     {
    //         path: "/verification",
    //         element: <VerificationPage/>
    //     }
    // ]);
    return (
        // <CartPage />
        // <VerificationPage/>
        // <RouterProvider router={router}/>
        <Router>
            <Switch>

                {/*<Route path="/">*/}

                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/verification">
                        <VerificationPage/>
                    </Route>
                {/*</Route>*/}
                <Route path="/">
                    <div>
                        <p> please navigate to <Link to="/cart">Cart</Link> for the Cart page </p>
                        <br/>
                        <p> please navigate to <Link to="/verification">Verification</Link> for the Verification page
                        </p>
                    </div>
                </Route>
            </Switch>
        </Router>
    );

}

export default App;
