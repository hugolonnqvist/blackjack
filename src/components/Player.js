import React from "react";

import Card from "./Card";
import "./Player.css";

const Player = ({ cards, newCardHandler }) => {
  return (
    <div className="player">
      <div className="hands">
        {cards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
      <button onClick={newCardHandler}>Hit</button>
    </div>
  );
};

export default Player;
