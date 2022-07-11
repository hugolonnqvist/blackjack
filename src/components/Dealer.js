import Card from "./Card";

const Dealer = (props) => {
  const firstCard = props.dealerCards[0];
  //const secondCard = props.dealerCards[1];

  return (
    <div className="dealer">
      <Card card={firstCard} />
      <div className="card"></div>
    </div>
  );
};

export default Dealer;
