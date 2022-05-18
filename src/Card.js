import { suits, values } from "./constants";

export function Card() {
    this.suit = this.generateRandomSuit();
    this.value = this.generateRandomValue();
};

Card.prototype.generateRandomSuit = function() {
    return suits[
        Math.floor(Math.random() * suits.length)
    ];
};

Card.prototype.generateRandomValue = function() {
    return values[
        Math.floor(Math.random() * values.length)
    ];
};