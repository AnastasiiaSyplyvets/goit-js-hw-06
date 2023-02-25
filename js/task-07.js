const fontSizeControlEl = document.querySelector('#font-size-control');
// console.log(fontSizeControlEl)

const insideTextEl = document.querySelector('#text');
// console.log(insideTextEl)

fontSizeControlEl.addEventListener('input', (event) => {

    insideTextEl.style.fontSize = event.currentTarget.value + "px";

})