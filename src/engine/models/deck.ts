import { Card } from "./card";

export class Deck {
  public cards: Card[] = []
  constructor() {}
  draw = function () {
    return this.cards.length ? this.cards.pop() : null;
  };
  add = function (card: Card) {
    this.cards.push(card);
  };
  shuffle = function () {
    this.cards.sort((a, b) => 0.5 - Math.random());
  };
}
