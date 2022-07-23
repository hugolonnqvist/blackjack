import React, { useEffect } from "react";

import Card from "./Card";
import "./Dealer.css";

const Dealer = ({ onNewCard, cards }) => {
  useEffect(() => {
    onNewCard();
  }, [onNewCard]);

  const hitHandler = () => {
    onNewCard();
  };

  return (
    <div className="dealer">
      <div className="dealerHand">
        {cards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
      <button onClick={hitHandler}>Hit</button>
    </div>
  );
};

export default Dealer;
