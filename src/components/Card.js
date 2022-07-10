import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="upper-value">{props.card.value}</div>
      <div className="suit">{props.card.suit}</div>
      <div className="under-value">{props.card.value}</div>
    </div>
  );
};

export default Card;
