import React, { useState, useEffect, useCallback } from "react";

import Deck from "./deck";
import Player from "./Player";
import Dealer from "./Dealer";
import "./Game.css";

const deck = Deck();

const Game = () => {
  const [index, setIndex] = useState(0);
  const [dealerCards, setDealerCards] = useState([]);

  const onNewDealerCard = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    setDealerCards((prevCards) => {
      return [...prevCards, deck[index]];
    });
    console.log(index);
  }, [index]);

  return (
    <div className="board">
      <Dealer
        index={index}
        dealerCards={dealerCards}
        onNewDealerCard={onNewDealerCard}
      />
    </div>
  );
};

export default Game;
