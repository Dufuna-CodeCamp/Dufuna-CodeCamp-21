import "./input.scss";
import { Button } from "../button/button";
import { useNavigate } from "react-router-dom";

export const Input = ({ props, select, side, submit }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`input__container ${side ? `input__container--${side}` : ""}`}
    >
      {!submit && <label className="input__label">{props.label}</label>}
      {select ? (
        <select
          name={props?.name}
          className={`select__field`}
          {...props.register(props?.name, { required: true })}
        >
          <option hidden value="">
            Select payment method
          </option>
          <option value="card">Card</option>
        </select>
      ) : submit ? (
        <Button
          children="Pay"
          className={props?.errors ? "inactive" : "normal"}
          type="submit"
          onClick={() => {
            if (!props?.errors) {
              navigate("/success");
            }
          }}
        />
      ) : (
        <input
          name={props?.name}
          type={props.type}
          placeholder={props.placeholder}
          className="input__field"
          {...props.register(props?.name, { required: true })}
        />
      )}
      {props?.errors[props?.name] && (
        <p className="input__error">{props?.errors[props?.name].message}</p>
      )}
    </div>
  );
};
