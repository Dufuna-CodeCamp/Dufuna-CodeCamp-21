import "./breadcrumb.scss";
import { RiArrowRightSLine } from "react-icons/ri";

export const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <p className="breadcrumb__home" href="/">
        Home
      </p>
      <RiArrowRightSLine style={{ color: "#C9C9C9" }} />
      <p className="breadcrumb__cart--active">Cart</p>
    </div>
  );
};

export default Breadcrumb;
