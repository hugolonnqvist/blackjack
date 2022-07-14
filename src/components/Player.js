import "./Player.css";

import Card from "./Card";
import React, { useEffect } from "react";

const Player = (props) => {
  /*useEffect(() => {
  if (props.playerCards.length < 5) {
      props.onNewCard();
    }
  });
*/
  return (
    <div className="player">
      <div className="hands">
        {props.playerCards.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
      <button>Hit</button>
      <button>Stay</button>
    </div>
  );
};

export default Player;
