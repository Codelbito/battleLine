export class Card {
  constructor(public id: number, public view: string) 
  {}
}

export class NumericCard extends Card {
  constructor(
    public id: number,
    public value: number,
    public color: string,
    public view: string
  ) {
    super(id, view);
  }
}

export class SemanticCard extends Card {
  constructor(
    public id: number,
    public effect: string,
    public title: string,
    public view: string
  ) {
    super(id, view);
  }
}