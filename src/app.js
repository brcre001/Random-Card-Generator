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

  // Added the button to generate a new card
  // Copied needed code from above and put it in the correct place
  let button = document.querySelector("#newCard");

  button.addEventListener("click", function() {
    suitPicker = Math.floor(Math.random() * suits.length);
    cardsPicker = Math.floor(Math.random() * cards.length);

    if (suits[suitPicker] == "♥" || suits[suitPicker] == "♦") {
      icon1.style.color = "red";
      icon2.style.color = "red";
    } else {
      icon1.style.color = "black";
      icon2.style.color = "black";
    }

    icon1.innerHTML = suits[suitPicker];
    icon2.innerHTML = suits[suitPicker];

    // Set the innerHTML to blank so that we can reappend variables in div
    cardDiv.innerHTML = "";

    cardDiv.append(icon1);
    cardDiv.append(cards[cardsPicker]);
    cardDiv.append(icon2);
  });

  // Changing the card every 10 seconds
  setInterval(function() {
    suitPicker = Math.floor(Math.random() * suits.length);
    cardsPicker = Math.floor(Math.random() * cards.length);

    if (suits[suitPicker] == "♥" || suits[suitPicker] == "♦") {
      icon1.style.color = "red";
      icon2.style.color = "red";
    } else {
      icon1.style.color = "black";
      icon2.style.color = "black";
    }

    icon1.innerHTML = suits[suitPicker];
    icon2.innerHTML = suits[suitPicker];

    // Set the innerHTML to blank so that we can reappend variables in div
    cardDiv.innerHTML = "";

    cardDiv.append(icon1);
    cardDiv.append(cards[cardsPicker]);
    cardDiv.append(icon2);
  }, 10000);

  // Changing width and height of card
  let changeButton = document.querySelector("#change");
  let w = document.querySelector("#newWidth");
  let h = document.querySelector("#newHeight");

  changeButton.addEventListener("click", function() {
    if (parseInt(w.value) > 100 && parseInt(h.value) > 200) {
      cardDiv.style.width = w.value + "px";
      cardDiv.style.height = h.value + "px";
    }
  });
};
