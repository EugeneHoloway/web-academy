import './lesson-11.scss';

/* let = var - перезаписывается
const = var - не перезаписывается
*/

const adminName = 'admin';
const adminPassword = '111';
const inputName = document.querySelector('#name');
const inputPassword = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit-btn');
const outputElement = document.querySelector('#output');



console.log(btnSubmit);

function showMessage() {

    //   console.log('Hello, my name is ' + inputName.value);
    //   console.log('And password is ' + inputPassword.value);

    const username = inputName.value;
    const password = inputPassword.value;


    if (username === adminName && adminPassword === password) {
        outputElement.textContent = 'Hello admin';
        inputName.classList.remove('name-pass-false');
        inputPassword.classList.remove('name-pass-false');
        outputElement.classList.remove('output-false');
        outputElement.classList.add('output-true');
        inputName.classList.add('name-pass-true');
        inputPassword.classList.add('name-pass-true');


    } else {
        outputElement.textContent = 'You are not admin';
        inputName.classList.add('name-pass-false');
        inputPassword.classList.add('name-pass-false');
        outputElement.classList.add('output-false');


    }
    inputName.value = '';
    inputPassword.value = '';
}
btnSubmit.onclick = showMessage;