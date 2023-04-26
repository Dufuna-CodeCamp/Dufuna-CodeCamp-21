import "./breadcrumb.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Breadcrumb = () => {
  const isMatch = (path) => {
    return window.location.pathname === path;
  };
  const navigate = useNavigate();


  return (
    <div className="breadcrumb">
      <p
        className={
          isMatch("/") ? "breadcrumb__home--active" : "breadcrumb__home"
        }
        onClick={() => navigate("/")}
      >
        Home
      </p>
      <RiArrowRightSLine style={{ color: "#C9C9C9" }} />
      <p
        className={
          isMatch("/cart") ? "breadcrumb__cart--active" : "breadcrumb__cart"
        }
        onClick={() => navigate("/cart")}
      >
        Cart
      </p>
      <RiArrowRightSLine style={{ color: "#C9C9C9" }} />
      <p
        className={
          isMatch("/verification")
            ? "breadcrumb__verification--active"
            : "breadcrumb__cart"
        }
        onClick={() => navigate("/verification")}
      >
        Verification
      </p>
    </div>
  );
};

export default Breadcrumb;

