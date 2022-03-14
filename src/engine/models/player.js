class Player {
  constructor(id, username) {
    this.id = id;
    this.name = username;
    this.hand = [];
    this.isDefender = false; //if false, the player will be considere as attacker
    this.tacticsPlayed = [];
  }
  take = function (cards) {
    this.hand.push(cards);
  };
}
module.exports.Player = Player;
