import { Deck } from "./deck";
import { Player } from "./player";

export class Board {
  public player1: Player; 
  public player2: Player; 
  constructor(public troopsDeck: Deck, public tacticsDeck: Deck, public fieldsDeck: Deck) {
  }
  setPlayer = function (id: number, userName: string) {
    if (id === 1) {
      this.player1 = new Player(id, userName);
    } else {
      this.player2 = new Player(id, userName);
    }
  };
}