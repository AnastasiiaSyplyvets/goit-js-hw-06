function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// found btn

const changeColorBtnEl = document.querySelector('.change-color');

console.log(changeColorBtnEl);

// found span

const randomColorEl = document.querySelector('.color');

// console.log(randomColorEl.textContent)
// found body

const bodyEl = document.querySelector('body');
// console.log(bodyEl);



changeColorBtnEl.addEventListener('click', (event) => {

  bodyEl.style.backgroundColor = getRandomHexColor();
 
  randomColorEl.textContent = getRandomHexColor();
  
});