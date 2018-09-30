import './lesson-13.scss';
/*
function
switch (parentNode) {
    const ACTIVE = 'off';
    const switcher = parentNode.querySelectorAll('.switcher');

    for (let i = 0; i < switcher; i++) {
        switcher[i].onclick = toggle;
    }

    function toggle() {
        switchOff();
        this.classList.remove(ACTIVE);

    }

    function switchOff() {
        for (let i = 0; i < switcher.length; i++) {
            switcher[i].classList.remove('ACTIVE')
        }
    }
}

switch (document.querySelector('#1'));
switch (document.querySelector('#2'));


*/


function greetingWidget(parentNode) {
    const btn = parentNode.querySelector('.control');
    const block = parentNode.querySelector('.block');



    btn.addEventListener('click', toggle);


    function toggle() {
        const name = prompt("Your name?");
        block.textContent = `${block.textContent} ${ name }`;
        block.classList.toggle('block_visible');
    }
}
greetingWidget(document.querySelector('.element'));
greetingWidget(document.querySelector('.element-2'))