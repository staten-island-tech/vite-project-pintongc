const foods = [
  {
    name: "Pizza",
    price: 12.99,
    type: "entree",
    description:
      "A classic Italian dish made with dough, tomato sauce, cheese, and toppings.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hamburger",
    price: 9.99,
    type: "entree",
    description:
      "A sandwich made with a ground beef patty, cheese, lettuce, tomato, and onion.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Salad",
    price: 8.99,
    type: "entree",
    description: "A mix of greens, vegetables, and sometimes meat or cheese.",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "French Fries",
    price: 2.99,
    type: "vegan, appetizers",
    description: "Thinly sliced potatoes that are deep-fried until crispy.",
    image:
      "https://images.unsplash.com/photo-1577715694662-6bcf16c06e29?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ice Cream",
    price: 3.99,
    type: "dessert",
    description: "A frozen treat made with milk, cream, and sugar.",
    image:
      "https://images.unsplash.com/photo-1669127045641-0ae683639570?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hummus and Veggie Wraps",
    price: 7.99,
    type: "vegan",
    description:
      "A wrap filled with hummus, vegetables, falafel, and a light vinaigrette dressing.",
    image:
      "https://plus.unsplash.com/premium_photo-1663853052046-95cc00fd20b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grilled Salmon with Lemon",
    price: 14.99,
    type: "seafood",
    description:
      "A grilled salmon fillet seasoned with lemon, herbs, and spices.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicken Curry with Rice",
    price: 10.99,
    type: "entree",
    description:
      "Aromatic curry with chicken, vegetables, and a creamy coconut sauce served with fluffy rice.",
    image:
      "https://plus.unsplash.com/premium_photo-1695456065067-45cabcf25e8f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tom Yum Soup",
    price: 7.99,
    type: "appetizer",
    description:
      "Spicy and sour Thai soup with shrimp, mushrooms, lemongrass, and kaffir lime leaves.",
    image:
      "https://th.bing.com/th/id/OIP.yD3kttx8xVV8HHsPCTsfCwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    name: "Falafel Pita",
    price: 5.99,
    type: "vegan",
    description:
      "Warm pita bread filled with crispy falafel balls, hummus, tahini sauce, chopped vegetables, and fresh herbs.",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051503-57130cb26bc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beef Tacos",
    price: 8.99,
    type: "entree",
    description:
      "Soft corn tortillas filled with seasoned ground beef, lettuce, tomato, cheese, and salsa.",
    image:
      "https://images.unsplash.com/photo-1640983743761-4f0e0204bc58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sushi Platter",
    price: 15.99,
    type: "entree",
    description:
      "Assortment of fresh sushi rolls and nigiri pieces with soy sauce, wasabi, and ginger.",
    image:
      "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chocolate Mousse",
    price: 4.99,
    type: "dessert",
    description:
      "Rich and decadent chocolate mousse topped with whipped cream and chocolate shavings.",
    image:
      "https://images.unsplash.com/photo-1602513902411-40bc2cf5044a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNob2NvbGF0ZSUyMG1vdXNzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Garlic Parmesan Wings",
    price: 6.99,
    type: "appetizer",
    description: "Crispy chicken wings tossed in garlic parmesan sauce.",
    image: "https://bing.com/th?id=OSK.b81f7fceb3e53c88928e1077c5f0b88e",
  },
  {
    name: "Mozzarella Sticks",
    price: 5.49,
    type: "appetizer",
    description: "Deep-fried mozzarella cheese sticks served with marinara sauce.",
    image: "https://bing.com/th?id=OSK.86362e221b733fc680a2730d5a5f58b8",
  },
  {
    name: "Spinach Artichoke Dip",
    price: 7.49,
    type: "appetizer",
    description: "Creamy spinach and artichoke dip served with tortilla chips.",
    image: "https://www.cookingclassy.com/wp-content/uploads/2018/12/spinach-artichoke-dip-16.jpg",
  },
  {
    name: "Bruschetta",
    price: 6.99,
    type: "appetizer",
    description: "Toasted bread topped with diced tomatoes, basil, and olive oil.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export { foods };
