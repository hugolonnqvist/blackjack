import React, { useState, useEffect } from "react";

import Deck from "./deck";
import Dealer from "./Dealer";
import "./Game.css";

const deck = Deck();

const Game = () => {
  const [index, setIndex] = useState(0);
  const [dealerCards, setDealerCards] = useState([]);

  const newDealerCardHandler = () => {
    setDealerCards((prevCards) => {
      return [...prevCards, deck[index]];
    });
  };

  useEffect(() => {
    setIndex(index + 1);
  }, [dealerCards]);

  return (
    <div className="board">
      <Dealer onNewCard={newDealerCardHandler} cards={dealerCards} />
    </div>
  );
};

export default Game;
