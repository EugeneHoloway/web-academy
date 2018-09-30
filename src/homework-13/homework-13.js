import './homework-13.scss';



function greetingWidget(parentNode) {
    const inputName = document.querySelector('#username');
    const btn = parentNode.querySelector('.login-form__submit');
    const block = parentNode.querySelector('.login__result');
    greetingWidget(document.querySelector('.login-form__button'));
    btn.onclick = toggle;


    //btn.addEventListener('click', toggle);


    function toggle() {
        // const name = prompt("Your name?");
        // const x = document.querySelector('login-form__input-login').value;
        //  document.querySelector('login__result').innerHTML = x;

        //  var input_value = document.getElementById('username').value;
        //  document.getElementById('result').innerHTML = input_value;

        //  block.textContent = `${block.textContent} ${ x }`;

        const username = inputName.value;
        outputElement.textContent = `${block.textContent} ${ username }`;


        block.classList.toggle('login__result_visible');
    }
}