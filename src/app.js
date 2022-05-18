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

  // create a card element
  const card = buildCard();

  // create a top-suit element
  const topSuit = buildSuit("top");

  // create a bottom-suit element
  const bottomSuit = buildSuit("bottom");

  // create a face-value element
  const faceValue = buildFaceValue();

  // append all children
  card.append(topSuit, faceValue, bottomSuit);

  // replace app's content with this elements
  app.innerHTML = "";
  app.appendChild(card);
}

function buildCard() {
  // creates div and adds class names and styles
  const card = document.createElement("div");
  card.className = "d-flex flex-column justify-content-between bg-white";
  card.style.width = "20rem";
  card.style.height = "30rem";
  card.style.border = "solid black 2px";
  card.style.borderRadius = "1rem";
  return card;
}

function buildSuit() {
  // creates div and adds common suit styles and values
  const suit = document.createElement("div");
  suit.style.fontSize = "5rem";
  suit.style.color = window.currentCard.suit.color;
  suit.textContent = window.currentCard.suit.value;
  // using JS arguments variable for functions...
  for (let arg of Object.values(arguments)) {
    // we add class names based on 'top' or 'bottom' argument
    if (arg === "top") {
      suit.className = "d-flex ms-4 align-self-start";
    }
    if (arg === "bottom") {
      suit.className = "d-flex me-4 align-self-end";
      suit.style.transform = "rotate(180deg)";
    }
  }
  return suit;
}

function buildFaceValue() {
  // create div and add values and classnames
  const value = document.createElement("div");
  value.className = "d-flex align-self-center";
  value.style.fontWeight = "600";
  value.style.fontSize = "5rem";
  value.style.color = window.currentCard.suit.color;
  value.textContent = window.currentCard.value;
  return value;
}
