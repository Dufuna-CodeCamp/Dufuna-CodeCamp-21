import { Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import CartPage from "./components/CartPage";
import Verification from "./components/Verification";
import OrderSuccessful from "./components/OrderSuccessful";

function App() {
	return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<CartPage />} />
        <Route element={<Verification />} path="/verification" />
        <Route element={<OrderSuccessful />} path="order-successful" />
      </Routes>
    </>
  );
}

export default App;
