import "../css/style.css";
import { DOMSelectors } from "./dom";
import { foods } from "./foods.js";

const filterTypes = ["vegan", "seafood", "entree", "appetizer", "dessert"];

const filteredFoods = (
  filterTypes.map((type) => [type, foods.filter((food) => food.type === type)])
);

console.log(filteredFoods);

const createCard = function (food) {
  DOMSelectors.gallery.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <div class="card-title">${food.name}</div>
        <img src="${food.image}" alt="${food.name}">
        <div class="card-description">${food.description}</div>
      </div>`
  );
};

const createAllCards = () => {
  foods.forEach((food) => createCard(food));
};

createAllCards();

function deleteAllCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

let buttons = document.querySelectorAll(".food-btn");

buttons.forEach((btn) =>
  btn.addEventListener("click", function () {
    const filter = btn.textContent.toLowerCase();
    deleteAllCards();
    if (filter === "all") {
      createAllCards();
    } else {
      foods
        .filter((food) => food.type.includes(filter))
        .forEach((food) => createCard(food));
    }
  })
);

//THEMES
document.body.classList.add("light");
document.querySelector(".switch").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("warm");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("warm");
  }
});