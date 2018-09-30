import './homework-11.scss';

const openedClassName = 'submenu__open';
let isOpened = false;
const btnToggle = document.querySelector('#btnToggle');
const nav = document.querySelector('#nav');


function toggle() {

    if (isOpened) {
        nav.classList.remove(openedClassName);
        isOpened = false;
    } else {
        nav.classList.add(openedClassName);
        isOpened = true;
    }
}
btnToggle.onclick = toggle;