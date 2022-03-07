class Deck {
  constructor() {
    this.cards = [];
  }
  draw = function () {
    return this.cards ? this.cards.pop() : null;
  };
  add = function (card) {
    this.cards.push(card);
  };
  shuffle = function () {
    this.cards.sort((a, b) => 0.5 - Math.random());
  };
}

module.exports.Deck = Deck;
