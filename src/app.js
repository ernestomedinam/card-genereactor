/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Card } from "./Card";

window.onload = function() {
  // generate new random card
  const firstCard = new Card();
  // store random card on window memory
  window.currentCard = firstCard;
  // render our card with values stored on window memory
  render();
};

function render() {
  const app = document.querySelector(".app");
  const p = document.createElement("p");
  p.textContent = "working on this";
  app.appendChild(p); // window.currentCard.asHTML()
}
