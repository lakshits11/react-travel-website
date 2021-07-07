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
              src="images/img-2.jpg"
              text="Travel through islands of Bali in a Private Cruise"
              label="Luxury"
              path="/plans"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/img-8.jpg"
              text="Experience the thrill in deserts of Dubai"
              label="Experience"
              path="/plans"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Climb The Mount Everest!"
              label="Adventure"
              path="/plans"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Play Football on Top of Himalayan Mountains"
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
