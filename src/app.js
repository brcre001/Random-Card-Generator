/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.generateRandomCard = function() {
  // Card and Suit arrays and random position generator
  let suits = ["♠", "♥", "♣", "♦"];
  let suitPicker = suits[Math.floor(Math.random() * suits.length)];
  let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardPicker = cards[Math.floor(Math.random() * cards.length)];

  // Adding card color depending on suit
  let cardColor = "";
  if (suitPicker == "♥" || suitPicker == "♦") {
    cardColor = "red";
  } else {
    cardColor = "black";
  }

  // Returning an object with labels to identify properties
  return {
    suit: suitPicker,
    card: cardPicker,
    color: cardColor
  };
};

function renderCard(randomCard) {
  // Creating the elements that will go into the main card div
  let cardText = document.createElement("SPAN");
  let icon1 = document.createElement("I");
  let icon2 = document.createElement("I");

  // Adding the card value and suit to the proper elements
  cardText.innerHTML = randomCard.card;
  icon1.innerHTML = randomCard.suit;
  icon2.innerHTML = randomCard.suit;

  // Adding styling from CSS to the icons
  icon1.classList.add("icon1");
  icon2.classList.add("icon2");

  // Adding the color of the text depending on the suit of the card
  icon1.style.color = randomCard.color;
  icon2.style.color = randomCard.color;
  cardText.style.color = randomCard.color;

  // Creating card variable to append elements to the card
  let card = document.querySelector(".card");
  card.append(icon1);
  card.append(cardText);
  card.append(icon2);
}

function emptyCard() {
  // Set the contents of the card blank to
  // prepare for appending of a new card
  let cardDiv = document.querySelector(".card");
  cardDiv.innerHTML = "";
}

window.onload = function() {
  let card = generateRandomCard();
  renderCard(card);

  // Making button to change card when pressed
  let newCardButton = document.querySelector("#newCard");
  newCardButton.addEventListener("click", function() {
    emptyCard();
    let card = generateRandomCard();
    renderCard(card);
  });

  // Changing the card every 10 seconds
  setInterval(function() {
    emptyCard();
    let card = generateRandomCard();
    renderCard(card);
  }, 5000);

  // Changing width and height of card
  let changeButton = document.querySelector("#change");
  let w = document.querySelector("#newWidth");
  let h = document.querySelector("#newHeight");

  let cardDiv = document.querySelector(".card");
  changeButton.addEventListener("click", function() {
    if (parseInt(w.value) >= 100 || parseInt(h.value) >= 200) {
      cardDiv.style.width = w.value + "px";
      cardDiv.style.height = h.value + "px";
    }
  });
};
