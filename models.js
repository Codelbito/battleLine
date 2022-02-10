class BattleField {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.attackerCards = [];
    this.defenderCards = [];
    this.claimedBy = null; // should be a Player || null
    this.resolved = false; // also determines draws. (solved ? claimedBy : false) ? true : the_field_is_a_draw
    this.resolve; //private method
  }
  resolve = function () {
    //look for battle ground win condition when both players had played specified cards
  };
  checkAdjacentsFieldsStatus = function () {
    // look if it's adjacent field were claimed or not.
  };
}
class Deck {
  constructor() {
    this.cards = [];
    this.draw;
    this.add;
  }
  draw = function () {
    //return 1 card
  };
  add = function (card) {
    this.cards.push(card);
  };
}

class Card {
  constructor(id, view) {
    this.id = id;
    this.view = view;
  }
}

class NumericCard extends Card {
  constructor(id, value, color, view) {
    super(id, view);
    this.value = value;
    this.color = color;
  }
}

class SemanticCard extends Card {
  constructor(id, effect, title, view) {
    super(id, view);
    this.effect = effect;
    this.title = title;
  }
}

class Board {
  constructor(decks) {
    this.player1 = new Player(1, "Helbio");
    this.player2 = new Player(2, "Helbito");
    this.troopsDeck = decks.troops;
    this.tacticsDeck = decks.tactics;
    this.fieldsDeck = decks.fields;
  }
}
class Player {
  constructor(id, username) {
    this.id = id;
    this.hand = [];
    this.isDefender = false; //if false, the player will be considere as attacker
    this.tacticsPlayed = [];
  }
}

/**
 * Module exports
 */
module.exports.Board = Board;
module.exports.NumericCard = NumericCard;
module.exports.SemanticCard = SemanticCard;
module.exports.Deck = Deck;
module.exports.BattleFiel = BattleField;