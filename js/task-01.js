// const findUlEl = document.querySelector("#categories");
// console.log(findUlEl);

// const findLiEl = findUlEl.children;
// console.log("Number of categories: ", findLiEl.length)

// Нашли li c классом item
// const itemEl = document.querySelectorAll(".item");

// console.log(itemEl);

// Нашли заголовки

// const titleEl = document.querySelectorAll('h2');
// console.log(titleEl[0].textContent);

// Item 1

// const item1 = itemEl[0];
// const ul = item1.querySelector("ul");
// const ulLiEl = ul.children;

// console.log(ulLiEl.length)

// item 2

// const item2 = itemEl[1];
// const ul2 = item2.querySelector("ul");
// const ulLiEl2 = ul2.children;

// item 3 

// const item3 = itemEl[2];
// const ul3 = item3.querySelector("ul");
// const ulLiEl3 = ul.children;

// console.log("Category:", titleEl[0].textContent );
// console.log("Elements:", ulLiEl.length);

// console.log("Category:", titleEl[1].textContent );
// console.log("Elements:", ulLiEl2.length);

// console.log("Category:", titleEl[2].textContent );
// console.log("Elements:", ulLiEl3.length);


const categoriesEl = document.querySelector('#categories');

// console.log(categoriesEl)

// Categories amount

const subCategoriesAmount = categoriesEl.childElementCount;

console.log("Number of categories: ", subCategoriesAmount)

const subcategoriesEl = document.querySelectorAll('.item');

// console.log(subcategoriesEl)

subcategoriesEl.forEach(item => {
    const titleEl = item.firstElementChild.textContent;
    const ulEl = item.querySelector('ul');

// console.log(ulEl)
const liEl = ulEl.childElementCount;
// console.log(liEl)
    console.log("Category: ", titleEl);
    console.log("Elements: ", liEl);

})


// const allLinksEl = categories.querySelectorAll('.item');
// console.log('Number of categories:', allLinksEl.length);

//First element.

// const firstEl = categories.firstElementChild;
// console.log("Category:", firstEl.firstElementChild.textContent);