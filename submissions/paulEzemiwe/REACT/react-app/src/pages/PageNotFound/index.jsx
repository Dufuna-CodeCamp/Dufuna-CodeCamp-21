import "./index.scss";
import { Button } from "../../components/button/button";

export const PageNotFound = () => {
  return (
    <div className="error__page">
      <h1 className="error__page--title">404</h1>
      <p className="error__page--text">Page not found</p>
      <Button children={"Go Home"} className={"exception"} />
    </div>
  );
};
