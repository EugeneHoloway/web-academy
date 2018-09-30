import './lesson-12.scss';

const container = document.querySelector('.select');
const header = document.querySelector('.select__header');
const controls = document.querySelectorAll('.select__control');

console.log(controls);

for (let i = 0; i < controls.length; i++) {
    console.log(i);
    controls[i].onclick = selectOption;
}

function toggle() {
    if (container.classList.contains('select_opened')) {
        close();
    } else {
        open();
    }
}

function close() {
    container.classList.remove('select_opened')
}

function open() {
    container.classList.add('select_opened')
}

function selectOption() {
    console.log(this);
    const text = this.textContent;
    header.textContent = text;
    close();
}


header.onclick = toggle;