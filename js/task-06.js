const inputEl = document.querySelector('#validation-input');

const dataLengthEl = Number(inputEl.dataset.length);
// console.log(typeof(dataLengthEl))
  
  inputEl.addEventListener('blur', (event) => {
    // console.log('Длина символов дата', event.target.value.length)
    
    
    if(event.target.value.length === dataLengthEl) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');

        // console.log('Длина символов дата', event.target.value.length)
    }
    else {
      inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
  });
