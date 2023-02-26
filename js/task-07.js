const fontSizeControlEl = document.querySelector('#font-size-control');
// console.log(fontSizeControlEl)

const insideTextEl = document.querySelector('#text');
// console.log(insideTextEl)

// insideTextEl.style.fontSize = "16px";

 
insideTextEl.style.fontSize = fontSizeControlEl.value + "px";
fontSizeControlEl.addEventListener('input', (event) => {
        
        insideTextEl.style.fontSize = event.currentTarget.value + "px";


})

