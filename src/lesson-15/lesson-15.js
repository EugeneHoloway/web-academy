import './lesson-15.scss';
import { lampController } from './lamp-controller';
import { Lighter } from './lighter';




const lighter1 = new Lighter(document.querySelector('.lighter-1', 'green'));
const lighter2 = new Lighter(document.querySelector('.lighter-2', 'yellow'));
const controller = new lampController(document.querySelector('.container'));






















/*
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function() {
        console.log('Meow');
    }
    this.run = function() {
        console.log('Run, kitty, run');
    }

}

const tom = new Cat('Tom', 'ginger');
const begemot = new Cat('Begemot', 'black');


class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    meow() {
        console.log('Meow');
    }
    move() {
        console.log('Run, kitty, run');
    }
}
*/