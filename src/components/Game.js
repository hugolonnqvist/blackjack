import React, { useState } from "react";

import Deck from "./Deck";
import Player from "./Player";
import Dealer from "./Dealer";
import "./Game.css";

const Game = () => {
  const deck = Deck();
  const INITIAL_PLAYER_CARDS = [deck[0], deck[2]];
  const INITIAL_DEALER_CARDS = [deck[1], deck[3]];

  console.log(INITIAL_PLAYER_CARDS);
  //console.log(INITIAL_DEALER_CARDS);
  deck.splice(0, 4);

  const [playerCards, setPlayerCards] = useState(INITIAL_PLAYER_CARDS);
  const [dealerCards, setDealerCards] = useState(INITIAL_DEALER_CARDS);

  const hitCardHandler = (card) => {
    setPlayerCards((prevCards) => {
      return [...prevCards, card];
    });
  };

  //Funkar ej med foreach på en usestate arr
  const checkResult = () => {
    let playerValue = 0;
    INITIAL_PLAYER_CARDS.foreach((card) => {
      playerValue += card.value;
    });
    console.log(playerValue);
  };

  const stayHandler = () => {
    checkResult();
  };

  return (
    <div className="board">
      <Dealer dealerCards={dealerCards} />
      <Player
        playerCards={playerCards}
        deck={deck}
        hitCardHandler={hitCardHandler}
        stayHandler={stayHandler}
      />
    </div>
  );
};

export default Game;
