const Navigation = ({ text, className, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      {text}
    </span>
  );
};
export default Navigation;
