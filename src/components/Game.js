import React, { useState, useEffect } from "react";

import deckArray from "./deckArray";
import Dealer from "./Dealer";
import Player from "./Player";
import "./Game.css";

const deck = deckArray();

const Game = () => {
  console.log(deck);
  const [index, setIndex] = useState(0);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  const newPlayerCard = (playerIndex) => {
    setIndex((i) => i + 1);

    setPlayerCards(
      playerCards.map((cards, i) => {
        return playerIndex === i ? [...cards, deck[index]] : cards;
      })
    );
  };

  useEffect(() => {
    let ix = index;

    if (dealerCards.length === 0) {
      setDealerCards([deck[ix], deck[ix + 1]]);
      ix = ix + 2;
    }

    if (playerCards.length === 0) {
      const newCards = Array(3)
        .fill([])
        .map(() => {
          const cards = [deck[ix], deck[ix + 1]];
          ix = ix + 2;
          return cards;
        });
      setPlayerCards(newCards);
    }
    setIndex(ix);
  }, [dealerCards, playerCards, index]);

  return (
    <div className="board">
      <Dealer cards={dealerCards} />
      <div className="player-hands">
        {playerCards.map((cards, i) => (
          <Player
            key={i}
            cards={cards}
            newCardHandler={() => newPlayerCard(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
