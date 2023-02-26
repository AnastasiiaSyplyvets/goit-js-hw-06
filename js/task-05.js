const inputEl = document.querySelector('#name-input');


const inputNewContent = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {

if(inputEl.value === '') {
    inputNewContent.textContent = "Anonymous";
}

 else{inputNewContent.textContent = event.target.value;
}   
  
});

