import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Forest"
              label="Adventure"
              path="/plans"
            />
            <CardItem
              src="images/bali.jpg"
              text="Travel through islands of Bali and stay in Private Hotel"
              label="Luxury"
              path="/plans"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/dubai.jpg"
              text="Experience the thrill in deserts of Dubai"
              label="Experience"
              path="/plans"
            />
            <CardItem
              src="images/mountain.jpg"
              text="Climb The Rocky Terrains with a Trained Professional!"
              label="Adventure"
              path="/plans"
            />
            <CardItem
              src="images/valley1.jpg"
              text="Ride amongst the beautiful valleys of Kerela India"
              label="Enjoy"
              path="/plans"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
