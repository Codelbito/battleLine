const { AutoComplete } = require("enquirer"); // DEPENDENCY !!!!!!
const cardInfo = require("./languague.conf.json"); // imports external static data to this JS & asigns it to a constant call "cardInfo"
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

function RulesHelper() {
  /**
   * TODO:
   *  - Implements formations (points criteria) helpers
   *  - Spike = same color consecutive values;
   *  - Batallion = same values;
   *  - Column = same color;
   *  - Finger = consecutive values;
   *  - Skirmish = all diferent (sum values);
   */
}

class Player {
  constructor(id, username) {
    this.id = id;
    this.hand = [];
    this.isDefender = false; //if false, the player will be considere as attacker
    this.tacticsPlayed = [];
  }
}

function createTroops(cardId) {
  let troopsDeck = new Deck(),
    colors = ["black", "pink", "blue", "green", "red", "brown"];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 10; j++) {
      let value = j + 1;

      troopsDeck.add(
        new NumericCard(cardId, value, colors[i], getInterface(value, i))
      );
      cardId++;
    }
  }
  return troopsDeck;
}

function createTactics(cardId) {
  let tacticsDeck = new Deck(),
    tacticsInfo = cardInfo.es.tactics;

  for (let j = 0; j < 10; j++) {
    let value = j + 1;

    let cardTitle = tacticsInfo[value].title;
    let cardEffect = tacticsInfo[value].descr;

    tacticsDeck.add(
      new SemanticCard(
        cardId,
        cardEffect,
        cardTitle,
        getInterface(cardTitle, 6)
      )
    );
    cardId++;
  }
  return tacticsDeck;
}

function createFields(cardId) {
  let fieldsDeck = new Deck(),
    fieldsIndo = cardInfo.es.battle_fields;

  for (let j = 0; j < 9; j++) {
    let value = j + 1;

    let cardTitle = fieldsIndo[value].title;
    let cardEffect = fieldsIndo[value].descr;

    fieldsDeck.add(
      new SemanticCard(
        cardId,
        cardEffect,
        cardTitle,
        getInterface(cardTitle, 7)
      )
    );
  }
  return fieldsDeck;
}

function createDecks() {
  let cardsCount = 0,
    troops,
    tactics,
    fields;

  function updateCounter(count) {
    cardsCount += count;
  }

  troops = createTroops(cardsCount);
  updateCounter(troops.cards.length);
  tactics = createTactics(cardsCount);
  updateCounter(tactics.cards.length);
  fields = createFields(cardsCount);

  return (decks = { troops: troops, tactics: tactics, fields: fields });
}

function getInterface(value, i) {
  let cardInterfaces = [
    `|-a-|${value}|-a-|`,
    `|-b-|${value}|-b-|`,
    `|-c-|${value}|-c-|`,
    `|-d-|${value}|-d-|`,
    `|-e-|${value}|-e-|`,
    `|-f-|${value}|-f-|`,
    `|>@<|${value}|>@<|`,
    `|###|${value}|###|`,
  ];
  return cardInterfaces[i];
}

function setGame() {
  var board = new Board(createDecks()),
    fields = board.fieldsDeck.cards.map((element) => {
      return element.view;
    });

  const askField = new AutoComplete({
    name: "Terreno",
    message: "Elija un terreno",
    choices: fields,
  });

  const firstChoise = askField.run();
}

function init() {
  setGame();
  /**
   * TODO:
   *  - randomize fields possitions on board
   *  - handle card draws for each player
   */
}

function endTurn() {
  /**
   * TODO:
   *  - updates game status
   */
}

init();
