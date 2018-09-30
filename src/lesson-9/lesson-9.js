import './lesson-9.scss';

const openedClassName = 'global-nav_opened';
let isOpened = false;
const btnToggle = document.querySelector('#btnToggle');
const nav = document.querySelector('#nav');

function toggle() {
    console.log('Hello World');
    if (isOpened) {
        nav.classList.remove(openedClassName);
        isOpened = false;
    } else {
        nav.classList.add(openedClassName);
        isOpened = true;
    }
}
btnToggle.onclick = toggle;