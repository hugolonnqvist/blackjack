import React, { useState, useEffect, useCallback } from "react";

import deckArray from "./deckArray";
import Dealer from "./Dealer";
import "./Game.css";

const deck = deckArray();

const Game = () => {
  const [index, setIndex] = useState(-2);
  const [dealerCards, setDealerCards] = useState([]);

  const newDealerCardHandler = useCallback(() => {
    console.log(deck);
    setIndex((i) => i + 1);
  }, [setIndex]);

  useEffect(() => {
    if (index < 0) {
      return;
    }
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
