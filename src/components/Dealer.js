import Card from "./Card";
import "./Dealer.css";

const Dealer = ({ cards }) => {
  return (
    <div className="dealer">
      <div className="dealerHand">
        {cards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Dealer;
