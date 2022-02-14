class BattleField {
  constructor(player, card) {
    this.defender = player;
    this.attackerCards = [];
    this.defenderCards = [];
    this.claimedBy = null; // should be a Player || null
    this.resolved = false; // also determines draws. (solved ? claimedBy : false) ? true : the_field_is_a_draw
    this.resolve; //private method
    this.addCard = function(){
      console.log(this.name);
      this.name === player ?  this.defenderCards.push(card) : this.attackerCards.push(card);
    };
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
    return this.cards ? this.cards.pop() : null;
  };
  add = function (card) {
    this.cards.push(card);
  };
  shuffle = function () {
    this.cards.sort((a, b) => 0.5 - Math.random());
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

/**
 * Module exports
 */
module.exports.Board = Board;
module.exports.NumericCard = NumericCard;
module.exports.SemanticCard = SemanticCard;
module.exports.Deck = Deck;
module.exports.BattleFiel = BattleField;
