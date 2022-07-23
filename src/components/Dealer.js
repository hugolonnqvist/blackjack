import React, { useEffect } from "react";

import Card from "./Card";

const Dealer = ({ onNewCard, cards }) => {
  useEffect(() => {
    onNewCard();
  }, []);

  return (
    <div className="dealer">
      {cards.map((card) => (
        <Card key={card.key} card={card} />
      ))}
    </div>
  );
};

export default Dealer;
