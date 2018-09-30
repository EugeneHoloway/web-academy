import './homework-14.scss';


/**add class to all divs**/
function classChange(onOff, selectElement) {
    let section = document.querySelectorAll(selectElement),
        i;

    for (i = 0; i < section.length; i++) {
        section[i].className += " " + onOff;
    }
}

/**add/remove/toggle class function***/
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
function blinkColor(color) {
  let colorButton = document.getElementById(color);
  colorButton.style.background = *highlightColor*;
  if(highlightColor == colorButton.style.background){
    setTimeout(() => {colorButton.style.background = *white(i.e.)*}, 1000);
  } else {
    setTimeout(() => {colorButton.style.background = *originalColor*}, 1000);
  }
}
*/