import { Card } from "./card";
import { Player } from "./player";

export class BattleField {
  public attackerCards: Card[] = [];
  public defenderCards: Card[] = [];
  public claimedBy: Player | null =  null;
  /**
   * resolved also determines draws. (solved ? claimedBy : false) ? true : the_field_is_a_draw
   */
  public resolved: boolean =  false;
  constructor(public defender: Player, private card: Card) {
    this.attackerCards = [];
    this.defenderCards = [];
    this.claimedBy = null; // should be a Player || null
    this.resolved = false; // 
  }
  addCard = function (playerName: string) {
    // TODO: ternary not looking readable. Improve it
    playerName === this.defender.name ?
    this.defenderCards.push(this.card):
    this.attackerCards.push(this.card);
  };

  //look for battle ground win condition when both players had played specified cards
  private resolve = function () {
    // solve condition =>
    return true;
  };

  // look if it's adjacent field were claimed or not.
  checkAdjacentFieldsStatus = function () {
  };
}
