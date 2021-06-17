/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["♠", "♥", "♣", "♦"];
  let suitPicker = Math.floor(Math.random() * suits.length);
  let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardsPicker = Math.floor(Math.random() * cards.length);

  let cardDiv = document.querySelector(".card");

  let icon1 = document.createElement("I");
  let icon2 = document.createElement("I");

  icon1.classList.add("icon1");
  icon2.classList.add("icon2");

  icon1.innerHTML = suits[suitPicker];
  icon2.innerHTML = suits[suitPicker];

  if (suits[suitPicker] == "♥" || suits[suitPicker] == "♦") {
    icon1.style.color = "red";
    icon2.style.color = "red";
  }

  cardDiv.append(icon1);
  cardDiv.append(cards[cardsPicker]);
  cardDiv.append(icon2);
  //   console.log(cardDiv.target);
};
