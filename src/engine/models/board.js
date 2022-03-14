const { Player } = require("./player");

class Board {
  constructor(decks) {
    this.player1 = "";
    this.player2 = "";
    this.troopsDeck = decks.troops;
    this.tacticsDeck = decks.tactics;
    this.fieldsDeck = decks.fields;
  }
  setPlayer = function (id, userName) {
    if (id === 1) {
      this.player1 = new Player(id, userName);
    } else {
      this.player2 = new Player(id, userName);
    }
  };
}

module.exports.Board = Board;
