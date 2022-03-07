const { Input, AutoComplete } = require("enquirer"); // DEPENDENCY !!!!!!
const cardInfo = require("./languague.conf.json"); // imports external static data to this JS & asigns it to a constant call "cardInfo"
const { Board } = require("./models/board");
const { Deck } = require("./models/deck");
const { BattleField } = require("./models/battleField");
const { NumericCard, SemanticCard } = require("./models/card");

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
  troopsDeck.shuffle();
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
  tacticsDeck.shuffle();
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
  fieldsDeck.shuffle();
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

  return { troops: troops, tactics: tactics, fields: fields };
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
  var board = new Board(createDecks());

  /**
   * TODO:
   * players creation reafctor :/
   */
  const promptPlayer1 = new Input({
    name: "player1",
    message: "Ingrese el nombre del jugador 1",
  });
  const promptPlayer2 = new Input({
    name: "player2",
    message: "Ingrese el nombre del jugador 2",
  });

  promptPlayer1
    .run()
    .then((answer) => {
      board.setPlayer(1, answer);
      promptPlayer2.run().then((answer) => {
        board.setPlayer(2, answer);
        for (let i = 0; i < 5; i++) {
          board.player1.take(board.troopsDeck.draw());
          board.player2.take(board.troopsDeck.draw());
        }
        gameLoop();
      });
    })

    .catch((error) => console.log(error));

  var getOptions = function optionsMapper(array) {
    return array.map((element) => (element.view ? element.view : element));
  };

  var menuOptions = getOptions(board.fieldsDeck.cards);

  async function gameLoop() {
    var fieldOptions = ["Jugar una TROPA", "Jugar una TACTICA"];

    //duplicate arrays to use in AutoComplete API
    var PromptFieldOptions = [...fieldOptions, "Volver"];
    var promptMenuOptions = [...menuOptions];

    let mainMenu = new AutoComplete({
      name: "Menu",
      message: `Turno del jugador ${board.player1.name}`,
      choices: promptMenuOptions,
    });
    let FieldsMenu = new AutoComplete({
      name: "Field Menu",
      message: "Elije una opcion: ",
      choices: PromptFieldOptions,
    });

    /**
     * TODO:
     * - offer to play a tactic card.
     * - offer to play a troop card.
     * - offer to go back.
     * - if turn ends, player draw a card.
     */
    var selectionHandler = await mainMenu.run().then(async (userChoice) => {
      if (menuOptions.includes(userChoice)) {
        selectionHandler = await FieldsMenu.run().then((userChoice) => {
          if (fieldOptions.includes(userChoice)) {
            console.log(userChoice);
            gameLoop();
          }
        });
      } else {
        gameLoop();
      }
    });
  }
}

function init() {
  setGame();
}

function endTurn() {
  /**
   * TODO:
   *  - updates game status
   */
}

init();
