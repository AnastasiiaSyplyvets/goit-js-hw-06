const findUlEl = document.querySelector("#categories");
// console.log(findUlEl);

const findLiEl = findUlEl.children;
console.log("Number of categories: ", findLiEl.length)

// Нашли li c классом item
const itemEl = document.querySelectorAll(".item");

// console.log(itemEl);

// Нашли заголовки

const titleEl = document.querySelectorAll('h2');
// console.log(titleEl[0].textContent);

// Item 1

const item1 = itemEl[0];
const ul = item1.querySelector("ul");
const ulLiEl = ul.children;

// console.log(ulLiEl.length)

// item 2

const item2 = itemEl[1];
const ul2 = item2.querySelector("ul");
const ulLiEl2 = ul2.children;

// item 3 

const item3 = itemEl[2];
const ul3 = item3.querySelector("ul");
const ulLiEl3 = ul.children;

console.log("Category:", titleEl[0].textContent );
console.log("Elements:", ulLiEl.length);

console.log("Category:", titleEl[1].textContent );
console.log("Elements:", ulLiEl2.length);

console.log("Category:", titleEl[2].textContent );
console.log("Elements:", ulLiEl3.length);


// itemEl.forEach(item => console.log(item));

// const ulEl = itemEl.querySelectorAll("ul");

// console.log(ulEl);

// Category: Animals
// Elements: 4