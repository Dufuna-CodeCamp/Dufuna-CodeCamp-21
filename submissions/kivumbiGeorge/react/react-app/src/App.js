import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import CartPage from "./components/CartPage";
import OrderSuccessful from "./components/OrderSuccessful";
import Verification from "./components/Verification";

function App() {
  return (
    <Router>
      <Switch>
        {/*<Route path="/">*/}

        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/verification">
          <Verification />
        </Route>
        <Route path="/success">
          <OrderSuccessful />
        </Route>
        {/*</Route>*/}
        <Route path="/">
          <div>
            <p>
              {" "}
              please navigate to <Link to="/cart">Cart</Link> for the Cart page{" "}
            </p>
            <br />
            <p>
              {" "}
              please navigate to <Link to="/verification">
                Verification
              </Link>{" "}
              for the Verification page
            </p>
            <br />
            <p>
              {" "}
              please navigate to <Link to="/success">Success</Link> for the
              Success page
            </p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
