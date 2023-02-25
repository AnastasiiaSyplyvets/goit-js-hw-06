

let counterValue = 0;
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

let btnValueEl = document.querySelector('#value');

console.log(decrementBtnEl)

decrementBtnEl.addEventListener("click", removeNumber);

const incrementBtnEl = document.querySelector('[data-action="increment"]');

console.log(incrementBtnEl.textContent)

incrementBtnEl.addEventListener("click", addNumber);

function addNumber(event) {
        counterValue ++;
        btnValueEl.textContent = counterValue;
        console.log(counterValue);
    }

    
function removeNumber(event) {
    counterValue -=1;
        btnValueEl.textContent = counterValue;
        console.log(counterValue);
     return counterValue;
    }


   