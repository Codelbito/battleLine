class BattleField{
    constructor(defender){
        this.id = 0;
        this.name = "";
        this.description = "";
        this.attackerCards = [];
        this.defenderCards = [];
        this.claimedBy = null; // should be a Player || null
        this.resolved = false; // also determines draws. (solved ? claimedBy : false) ? true : the_field_is_a_draw
        this.resolve; //private method
    }
    resolve = function(){
            //look for battle ground win condition when both players had played specified cards
        };
    checkAdjacentsFieldsStatus = function (){
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
    add = function (cards) {
        //push cards
    };
}

class Card {
    constructor(id, value, color) {
        this.id = id;
        this.value = value;
        this.color = color;
        this.ui = "";
    }
}

function RulesHelper(){
    //Spike = same color consecutive values;
    //Batallion = same values;
    //Column = same color;
    //Finger = consecutive values;
    //Skirmish = all diferent (sum values);
}


class Player {
    constructor(id, username) {
        this.id = id;
        this.hand = [];
        this.isDefender = false; //if false, the player will be considere as attacker
        this.tacticsPlayed = [];
    }
}
function init() {
    
    //ramdomize fields possitions
    //each player receive 5 troops card
}

function endTurn(){
    //playedBattleField.claimCondition ? battleField.solveBattle(battleFieldPlayed) : false
    //  |-b-6-b-| |-a-6-a-| |-c-6-c-| |-d-6-d-|
    //  |---7---|   |-x-2-x-|
}
