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

  let classDiv = document.querySelector(".card");
  classDiv.style.width = "225px";
  classDiv.style.height = "350px";
  classDiv.style.margin = "10px";
  classDiv.style.textAlign = "center";
  classDiv.style.verticalAlign = "middle";
  classDiv.append(cards[cardsPicker]);
  console.log(classDiv.target);
};
