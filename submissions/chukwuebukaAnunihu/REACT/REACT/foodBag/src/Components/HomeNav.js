import React from "react";

const HomeNav = (props) => {
  return (
    <div className="homeNav">
      <div className="home-vendor-nav">
        <p className="home">
          <a href="landing-page.html">Home &gt;</a>
        </p>
        <p className="vendors active">
          <a href="vendor-page.html">Cart</a>
        </p>
      </div>
      <div className="title">
        <p>Cart</p>
        <p className="item-count">
          {props.items} {props.word}
        </p>
      </div>
      <div id="removeBtn">
        <button onClick={props.removeBtnClick}>Remove all</button>
      </div>
    </div>
  );
};

export default HomeNav;
