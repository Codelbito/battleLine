import { Card } from "./card";

export class Player {
  public hand: Card[];
  public isDefender: boolean;
  public tacticsPlayed: Card[];
  
  constructor(public id: number, public name: string) {
    this.hand = [];
    this.isDefender = false; //if false, the player will be consider as attacker
    this.tacticsPlayed = [];
  }
  
  take = function (cards) {
    this.hand.push(cards);
  };
}
