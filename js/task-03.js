const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Variant 1

const gallaryEl = document.querySelector(".gallery");

const createGall = ({url, alt}) => `<li class="item"><img class="image" src='${url}' alt='${alt}' width="400"></li>`;


const arr = images.map(item => createGall(item)).join("");

console.log(arr)

gallaryEl.insertAdjacentHTML("afterbegin", arr);


// Variant 2
// const imgArr = images.map(item => {
// const liEl = document.createElement("li");
// const imgEl = document.createElement("img");
// imgEl.src = item.url;
// imgEl.alt = item.alt;

// liEl.append(imgEl);

// return liEl;

// }).join(" ");

// console.log(imgArr)


// gallaryEl.append(imgArr);

// Не работает 2 вариант

// Variant 3
// const imgArr = images.map(item => `<li><img src='${item.url}' alt='${item.alt}' width="200"></li>`).join("");
// gallaryEl.insertAdjacentHTML("afterbegin", imgArr);