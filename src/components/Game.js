import "./Game.css";
import Card from "./Card";
import Deck from "./Deck";
import React, { useState } from "react";

const Game = () => {
  const deck = Deck();
  const [activeGame, setActiveGame] = useState(false);
  const [hitCard, setHitCard] = useState(false);

  const getCard = () => {
    let card = deck[0];
    deck.splice(0, 1);
    return card;
  };

  const startGameHandler = () => {
    setActiveGame(true);
  };

  const hitCardHandler = () => {
    setHitCard(true);
  };

  const start = () => {
    let numberOfHands = 1;
    let dealerCard = getCard();
    let startHands = [];

    for (let i = 0; i < numberOfHands; i++) {
      startHands[i] = { firstCard: getCard(), secondCard: getCard() };
    }

    return (
      <div className="board">
        <div id="23" className="dealer">
          <Card card={dealerCard} />
        </div>
        <div className="player">
          {startHands.map((hand, handIndex) => (
            <div className="hand">
              <div id={`hand${handIndex}`} className="cards">
                <Card card={hand.firstCard} />
                <Card card={hand.secondCard} />
                {hitCard ? (
                  <Card card={getCard()} />
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </div>
              <button onClick={hitCardHandler}>Hit</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {activeGame ? (
        start()
      ) : (
        <button onClick={startGameHandler}>Start game</button>
      )}
    </div>
  );
};

export default Game;
