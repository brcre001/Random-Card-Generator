/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["spade", "heart", "club", "diamond"];
  let suitPicker = Math.floor(Math.random() * suits.length);
  let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardsPicker = Math.floor(Math.random() * cards.length);

  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
  body.style.justifyContent = "center";

  let cardDiv = document.querySelector(".card");
  let cardStyle = cardDiv.style;
  cardStyle.width = "225px";
  cardStyle.height = "350px";
  cardStyle.display = "flex";
  cardStyle.justifyContent = "center";
  cardStyle.margin = "50px";
  cardStyle.fontSize = "50px";
  cardStyle.textAlign = "center";

  cardDiv.append(cards[cardsPicker]);
  console.log(cardDiv.target);
};
