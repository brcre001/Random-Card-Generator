/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Card and Suit arrays and random position generator
  let suits = ["♠", "♥", "♣", "♦"];
  let suitPicker = Math.floor(Math.random() * suits.length);
  let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardsPicker = Math.floor(Math.random() * cards.length);

  // Created a way to call the .card class
  let cardDiv = document.querySelector(".card");

  // Created the two icons where the type of suit will go
  let icon1 = document.createElement("I");
  let icon2 = document.createElement("I");

  // Adding these icons to their respective classes on CSS
  icon1.classList.add("icon1");
  icon2.classList.add("icon2");

  // Assigning the random suit generated into the innerHTML of the icon
  icon1.innerHTML = suits[suitPicker];
  icon2.innerHTML = suits[suitPicker];

  // Adding in fuctionality to change red suits to the correct color
  if (suits[suitPicker] == "♥" || suits[suitPicker] == "♦") {
    icon1.style.color = "red";
    icon2.style.color = "red";
  }

  // Appending the icons and random card value generated in correct order
  cardDiv.append(icon1);
  cardDiv.append(cards[cardsPicker]);
  cardDiv.append(icon2);
};
