import React, { useEffect } from "react";

import Card from "./Card";

const Dealer = (props) => {
  useEffect(() => {
    if (props.dealerCards.length < 2) {
      props.onNewDealerCard();
    }
  });

  return (
    <div className="dealer">
      {props.dealerCards.map((card) => (
        <Card card={card}></Card>
      ))}
    </div>
  );
};

export default Dealer;
