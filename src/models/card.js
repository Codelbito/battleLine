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

module.exports.NumericCard = NumericCard;
module.exports.SemanticCard = SemanticCard;
