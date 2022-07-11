import "./Player.css";

import Card from "./Card";

const Player = (props) => {
  const getCard = () => {
    let card = props.deck[0];
    props.deck.splice(0, 1);
    return card;
  };

  const newCardHandler = () => {
    let newCard = getCard();
    props.hitCardHandler(newCard);
  };

  return (
    <div className="player">
      <div className="hands">
        {props.playerCards.map((card) => (
          <Card card={card} />
        ))}
      </div>
      <button onClick={newCardHandler}>Hit</button>
      <button onClick={props.stayHandler}>Stay</button>
    </div>
  );
};

export default Player;
