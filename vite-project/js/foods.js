const foods = [
  {
    name: "Pizza",
    price: 12.99,
    type: "entree",
    description:
      "A classic Italian dish made with dough, tomato sauce, cheese, and toppings.",
    image:
      "https://images.unsplash.com/photo-1564752700512-9b45b9d9c644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Hamburger",
    price: 9.99,
    type: "entree",
    description:
      "A sandwich made with a ground beef patty, cheese, lettuce, tomato, and onion.",
    image:
      "https://images.unsplash.com/photo-1584571735932-92004798852f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Salad",
    price: 8.99,
    type: "entree",
    description: "A mix of greens, vegetables, and sometimes meat or cheese.",
    image:
      "https://images.unsplash.com/photo-1546827567-e50a448a4008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "French Fries",
    price: 2.99,
    type: "vegan",
    description: "Thinly sliced potatoes that are deep-fried until crispy.",
    image:
      "https://images.unsplash.com/photo-1506749803568-dc7929288987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Ice Cream",
    price: 3.99,
    type: "dessert",
    description: "A frozen treat made with milk, cream, and sugar.",
    image:
      "https://images.unsplash.com/photo-1516875200960-10051417268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Hummus and Veggie Wraps",
    price: 7.99,
    type: "vegan",
    description:
      "A wrap filled with hummus, vegetables, and a light vinaigrette dressing.",
    image:
      "https://images.unsplash.com/photo-1579849344412-48016479eb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Grilled Salmon with Lemon and Herbs",
    price: 14.99,
    type: "seafood",
    description: "A grilled salmon fillet seasoned with lemon, herbs, and spices.",
    image: "https://images.unsplash.com/photo-1595618918303-eec1348816b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by00YWd4LWQ2NDhlZGZmNWU0&auto=format&fit=crop&w=1000&q=60"
  },
];
export {foods};

foods.filter((food) => food.type.includes("vegan")).forEach((food) => console.log(food.name));