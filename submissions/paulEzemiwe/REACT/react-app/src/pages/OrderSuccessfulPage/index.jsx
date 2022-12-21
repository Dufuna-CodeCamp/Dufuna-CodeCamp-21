import Navbar from "../../components/navbar/navbar";
import "./index.scss";
import Success from "../../assets/svgs/success.svg";
import SuccessMobile from "../../assets/svgs/success-mobile.svg";

export const OrderSuccessfulPage = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="success__page">
      <Navbar />
      <div className="success__page--container">
        <img
          src={isMobile ? SuccessMobile : Success}
          alt="success"
          className="success__page--image"
        />
        <h1 className="success__page--header">Order Successful</h1>
        <p className="success__page--text">
          We have started processing your order.
        </p>
      </div>
    </div>
  );
};
