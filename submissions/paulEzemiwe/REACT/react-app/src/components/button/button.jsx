import "./button.scss";

export const Button = ({ children, onClick, type, ...props }) => {
  return (
    <button className={`btn__${props.className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
