const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const categoriesEl = document.querySelector("#ingredients");


const newArr = ingredients.map(ingridient => {

  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingridient;
  
 return liEl;

})


categoriesEl.append(...newArr);

console.log(newArr)




// Нашли ingridients

// const categoriesEl = document.querySelector("#ingredients");
// console.log(categoriesEl)

// // Создали li

// const liEl = document.createElement("li");

// // Добавили контент

// liEl.textContent = "Potatoes";

// console.log(liEl)

// // Создали класс

// liEl.classList.add("item");
// console.log(liEl)