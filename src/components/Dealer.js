import React, { useState, useEffect } from "react";

import Card from "./Card";

const Dealer = (props) => {
  useEffect(() => {
    if (props.cards.length < 5) {
      props.onNewCard();
    }
  });

  return (
    <div className="dealer">
      {props.cards.map((card) => (
        <Card key={card.key} card={card} />
      ))}
    </div>
  );
};

export default Dealer;
