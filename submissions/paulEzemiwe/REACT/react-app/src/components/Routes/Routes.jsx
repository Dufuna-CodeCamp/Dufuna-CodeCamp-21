import { Routes as Router, Route } from "react-router-dom";
import { CartPage } from "../../pages/CartPage";
import { OrderSuccessfulPage } from "../../pages/OrderSuccessfulPage";
import { PageNotFound } from "../../pages/PageNotFound";
import { VerificationPage } from "../../pages/VerificationPage";

export const Routes = () => {
  return (
    <Router>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/success" element={<OrderSuccessfulPage />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Router>
  );
};
