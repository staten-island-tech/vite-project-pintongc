import '../css/style.css';
import { foods } from './foods';
import { DOMSelectors } from './dom';

const filteredFoods = {
  vegan: foods.filter((food) => food.type = ("vegan")),
  seafood: foods.filter((food) => food.type = ("seafood")),
  entree: foods.filter((food) => food.type = ("entree")),
  appeetizers: foods.filter((food) => food.type = ("appetizer"))
};

const createCard = (food) => {
  DOMSelectors.cards.insertAdjacentHTML(
    'afterbegin',
    `<div class="card">
        <div class="card-title">${food.name}</div>
        <div class="card-image"><img src="${food.image}" alt="${food.name}"></div>
        <div class="card-desciption">${food.description}</div>
      </div>`
  );
};

document.querySelector('.switch').addEventListener('click', function() {
  if (document.body.classList.contains('dark', 'warm')) {
    document.body.classList.add('light');
    document.body.classList.remove('dark', 'warm');
  } else {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }
});

document.querySelector('.switch1').addEventListener('click', function() {
  if (document.body.classList.contains('dark', 'light')) {
    document.body.classList.add('warm');
    document.body.classList.remove('dark', 'light');
  } else {
    document.body.classList.add('dark');
    document.body.classList.remove('warm');
  }
});

const createAllCards = () => {
  foods.forEach((food) => createCard(food));
};

createAllCards();
