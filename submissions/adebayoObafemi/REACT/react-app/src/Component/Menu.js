import Button from "./Button";

const Menu = (props) => {
  return (
    <div className="menu" id={props.id}>
      <div className="recipe">
        <div className="menuImages">
          <img src={props.image1} alt="close" />
          <img src={props.image2} alt={props.name} />
        </div>
        <div className="selectMenu">
          <div>
            <h3 className="recipeName">{props.name}</h3>
          </div>
          <div>
            <Button
              text="+"
              className="changeCountButton"
              onClick={props.incrementCount}
            />
            <span className="recipeCount">{props.count}</span>
            <Button
              text={<span>&ndash;</span>}
              onClick={props.decrementCount}
              className="changeCountButton"
            />
          </div>
        </div>
      </div>
      <div className="price">
        <p>
          {(props.count === 0
            ? props.price * 0
            : props.price * props.count
          ).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
};

export default Menu;
