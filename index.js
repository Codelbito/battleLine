const { Input, AutoComplete } = require("enquirer"); // DEPENDENCY !!!!!!
const cardInfo = require("./languague.conf.json"); // imports external static data to this JS & asigns it to a constant call "cardInfo"
const {
  Board,
  NumericCard,
  SemanticCard,
  Deck,
  BattleField,
} = require("./models");

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
      console.log("Player 1", answer);
      promptPlayer2.run().then((answer) => {
        board.setPlayer(2, answer);
        console.log("Player 2", answer);

        gameLoop();
      });
    })

    .catch((error) => console.log(error));

  var getOptions = function optionsMapper(array) {
    return array.map((element) => (element.view ? element.view : element));
  };

  var menuOptions = getOptions(board.fieldsDeck.cards).sort(
    (a, b) => 0.5 - Math.random()
  ); //sort() => shuffle the battlefields

  async function gameLoop() {
    var fieldOptions = ["Jugar una TROPA", "Jugar una TACTICA", "Volver"];

    //creates a new arrays to use in AutoComplete API
    var PromptFieldOptions = [...fieldOptions];
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
     * - create players.
     * - deploy battleFields
     */

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
