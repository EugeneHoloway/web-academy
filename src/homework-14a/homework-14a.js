import './homework-14a.scss';

function classChange(onOff, selectAll) {
    let section = document.querySelectorAll(selectAll),
        i;

    for (i = 0; i < section.length; i++) {
        section[i].className += " " + onOff;
    }
}

function onOff(clicked, blue, changed, buttonActiveMode) {
    const buttonSwitch = document.querySelector(clicked);
    const buttonText = buttonSwitch.innerHTML;
    const myLamp = document.querySelector(blue);
    buttonSwitch.addEventListener("click", function() {
        if (this.innerHTML == buttonText) {
            buttonSwitch.innerHTML = changed;
            buttonSwitch.className += " " + buttonActiveMode;
            myLamp.className += " on";
        } else {
            buttonSwitch.innerHTML = buttonText;
            buttonSwitch.classList.remove(buttonActiveMode);
            myLamp.classList.remove("on");
        }
    }, false);

}
onOff("button.switcher", "div.lamp", "Click Off", "active");
classChange('', 'anyName');


/*

function blinkLamp(blink) {
        const myLamp = document.querySelectorAll(blink);
        myLamp.style.background = color;
        if (this.innerHTML == myLamp.style.background) {
            setTimeout(() => { myLamp.style.background = "blue" }, 1000);
        } else {
            setTimeout(() => { myLamp.style.background = "grey" }, 1000);
        }
blinkLamp();
    }

    

const colorGrey= "Grey";
const colorBlue="Blue"; // what ever color you want
For changing background of BODY

document.div.style.backgroundImage=colorGrey  //changing bg image
document.div.style.backgroundColor=colorBlue //changing bg color
To change an element with ID

document.querySelector("on").style.backgroundImage=colorGrey
document.querySelector("on").style.backgroundColor=colorBlue 
for elements with same class

const elements = document.querySelector("on")
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.background=colorGrey;
        }




*/