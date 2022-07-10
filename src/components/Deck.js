import ShuffleDeck from "./ShuffleDeck";

const Deck = () => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = [" Hearts", " Diamonds", " Clubs", " Spades"];
  const deck = [];

  values.forEach((value) => {
    suits.forEach((suit) => {
      deck.push({ value, suit });
    });
  });

  ShuffleDeck(deck);
  return deck;
};

export default Deck;
