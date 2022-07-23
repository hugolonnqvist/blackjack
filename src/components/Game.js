import React, { useState, useEffect } from "react";

import Deck from "./Deck";
import Dealer from "./Dealer";
import "./Game.css";

const deck = Deck();

const Game = () => {
  const [index, setIndex] = useState(0);
  const [dealerCards, setDealerCards] = useState([]);

  const newDealerCardHandler = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    setDealerCards((prevCards) => {
      return [...prevCards, deck[index]];
    });
  }, [index]);

  return (
    <div className="board">
      <Dealer onNewCard={newDealerCardHandler} cards={dealerCards} />
    </div>
  );
};

export default Game;
