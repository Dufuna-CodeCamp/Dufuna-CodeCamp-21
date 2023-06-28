import React from 'react';
import { pickInterest, serve } from './data';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>FoodBag</h1>
        <h3>Anything food, we have you covered.</h3>
      </div>

      <div className="input_form">
        <h3> Where are you?</h3>
        <input type="text" placeholder="Bodija market" />
      </div>
      <div className="pick_interests">
        <h3>Pick an interest</h3>
        <div className="pick_interest">
          {pickInterest.map((pick) => {
            const { id, img, header, para } = pick;
            return (
              <div className="pick_interest_details" key={id}>
                <img src={img} alt={header} />
                <h3>{header}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="serves">
        <h3> How we serve you</h3>
        <div className="serve">
          {serve.map((ser) => {
            const { id, img, header, para } = ser;
            return (
              <div className="serve_details" key={id}>
                <img src={img} alt={header} />
                <h3>{header}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
