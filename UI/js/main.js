const toggleButton = document.querySelector('.toggle-button');
const navBar = document.querySelector('.nav-bar');
const signButton = document.querySelector('.sign-in');
const close = document.querySelector('.fa-window-close');


toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active'); 
    // signButton.style.display = 'none';
    
})


signButton.addEventListener('click', () => {
    document.querySelector('.header').style.display ='none';
    document.querySelector('.bg-model').style.display = 'flex';
    document.querySelector('.container').style.display = 'none'
})

close.addEventListener('click', () => {
    document.querySelector('.bg-model').style.display = 'none';
    document.querySelector('.header').style.display = 'flex';
    document.querySelector('.container').style.display = ''
})



// // Form validation

const form = document.querySelector('.in');
console.log(form);

const validPassword = () => {
    const password = form.password.value;
    const passwordError = document.querySelector('#password-error');

    if (password) {
        if (password.length >= 6) {
            passwordError.style.display = 'none';
            return 1;
        } else {
            passwordError.textContent = 'Password should be atleat 6 characters!';
            passwordError.style.display = 'block';
        }
    } else {
        passwordError.textContent = 'This field is required!';
        passwordError.style.display = 'block';
    }
}

const validEmail = () => {
    const email = form.email.value.split('@');
    const value = form.email.value;
    const emailError = document.querySelector('#email-error')

    if (email.length > 1) {
        if (email[0] && email[1]) {
            emailError.style.display = 'none';
            return 1;
        } else {
            emailError.textContent = 'Invalid email!';
            emailError.style.display = 'block'

        }
    } else {
        if (value) {
            emailError.textContent = 'Enter a valid email';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = 'This field is required!';
            emailError.style.display = 'block'
        }
    }
}

form.addEventListener('submit', (event) => {
    console.log("HEY");
    event.preventDefault();
    let email = validEmail();
    let password = validPassword();
})