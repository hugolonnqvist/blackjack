import React, { useState, useEffect } from "react";

import Deck from "./deck";
import Player from "./Player";
import Dealer from "./Dealer";
import "./Game.css";

const deck = Deck();

const Game = () => {
  const [index, setIndex] = useState(0);

  const onNewCard = () => {};

  return (
    <div className="board">
      <Dealer onNewCard={onNewCard} />
    </div>
  );
};

export default Game;
