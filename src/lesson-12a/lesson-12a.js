import './lesson-12a.scss';

var tabs = document.querySelectorAll('a');
var content = document.querySelectorAll('.lighter__item');

function changeTab(event) {
    var currentLink = event.target;
    for (var j = 0; j < tabs.length; j++) {
        console.log(tabs[j]);
        tabs[j].parentNode.classList.remove('on');
        content[j].classList.remove('on');
    }
    currentLink.parentNode.classList.add('on');
    var link = currentLink.getAttribute('href');
    document.querySelector(link).classList.add('on');
}

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', changeTab);
}