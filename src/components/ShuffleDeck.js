const ShuffleDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    let randomCard = Math.floor(Math.random() * 52);
    let temp = deck[i];
    deck[i] = deck[randomCard];
    deck[randomCard] = temp;
  }
};

export default ShuffleDeck;
