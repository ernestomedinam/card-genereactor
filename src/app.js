/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Card } from "./Card";

window.onload = function() {
  // updates code to create window currentCard
  // and setCurrentCard method
  window.state = {
    currentCard: new Card(),
    setCurrentCard: function(card = new Card()) {
      this.currentCard = card;
      render();
    }
  };
  render();
  const intervalID = setInterval(() => {
    window.state.setCurrentCard();
  }, 1000);
  window.state.intervalID = intervalID;
};

function render() {
  const app = document.querySelector(".app");

  // create a card element
  const card = buildCard();
  card.addEventListener("click", () => {
    if (window.state.intervalID) {
      clearInterval(window.state.intervalID);
      window.state.intervalID = undefined;
    } else {
      const intervalID = setInterval(() => {
        window.state.setCurrentCard();
      }, 1000);
      window.state.intervalID = intervalID;
      window.state.setCurrentCard();
    }
  });
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
  card.style.cursor = "pointer";
  card.style.transition = "transform 0.1s linear 0s";
  card.addEventListener("mouseenter", function(event) {
    this.style.transform = "scale(1.1)";
  });
  card.addEventListener("mouseleave", function(event) {
    this.style.transform = "scale(1)";
  });
  return card;
}

function buildSuit() {
  // creates div and adds common suit styles and values
  const suit = document.createElement("div");
  suit.style.fontSize = "5rem";
  suit.style.color = window.state.currentCard.suit.color;
  suit.textContent = window.state.currentCard.suit.value;
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
  value.style.color = window.state.currentCard.suit.color;
  value.textContent = window.state.currentCard.value;
  return value;
}
