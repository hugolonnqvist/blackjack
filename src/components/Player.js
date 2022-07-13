import "./Player.css";

import Card from "./Card";
import React from "react";

const Player = (props) => {
  let playerCards = [];
  playerCards += [props.card];

  return (
    <div className="player">
      <div className="hands">
        {playerCards.map((card) => (
          <Card card={card} />
        ))}
      </div>
      <button>Hit</button>
      <button>Stay</button>
    </div>
  );
};

export default Player;
