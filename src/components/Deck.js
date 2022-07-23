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
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const deck = [];

  suits.forEach((suit, sIndex) => {
    values.forEach((value, vIndex) => {
      deck.push({
        value,
        suit,
        key: vIndex + sIndex * values.length,
      });
    });
  });

  const shuffleDeck = (deck) => {
    for (let i = 0; i < deck.length; i++) {
      let randomCard = Math.floor(Math.random() * 52);
      let temp = deck[i];
      deck[i] = deck[randomCard];
      deck[randomCard] = temp;
    }
  };

  shuffleDeck(deck);

  return deck;
};

export default Deck;
