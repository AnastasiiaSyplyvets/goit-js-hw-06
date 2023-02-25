// Нашли форму

const formEl = document.querySelector('.login-form');

// console.log(formEl)

// Нашли лейбл мейла

const emailEl = formEl.firstElementChild;

// console.log(emailEl)

// Нашли инпут мейла

const emailInputEl = emailEl.firstElementChild;

// console.log(emailInputEl)

// Нашли лейб пассворда

const passwordEl = emailEl.nextElementSibling;

// console.log(passwordEl)

// Нашли инпут пассворда
const passwordInputEl = passwordEl.firstElementChild;

// console.log(passwordInputEl)


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInputEl.value === '' || passwordInputEl.value === '') 
        {alert("All fields should be filled in");
        return;}

        console.log('Email: ', emailInputEl.value);
        console.log('Password: ', passwordInputEl.value);

        event.target.reset();
})
    
    

   

