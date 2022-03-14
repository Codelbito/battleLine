class BattleField {
  constructor(player, card) {
    this.defender = player;
    this.attackerCards = [];
    this.defenderCards = [];
    this.claimedBy = null; // should be a Player || null
    this.resolved = false; // also determines draws. (solved ? claimedBy : false) ? true : the_field_is_a_draw
    this.resolve; //private method
  }
  addCard = function () {
    if (this.name === player.name) this.defenderCards.push(card);
    else this.attackerCards.push(card);
  };

  resolve = function () {
    //look for battle ground win condition when both players had played specified cards
  };

  checkAdjacentsFieldsStatus = function () {
    // look if it's adjacent field were claimed or not.
  };
}

module.exports.BattleField = BattleField;
