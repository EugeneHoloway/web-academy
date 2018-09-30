import { Lighter } from './lighter'

export class lampController {
    constructor(parentNode) {
        this.parentNode = parentNode;
        this.lighters = [];
        this.render();
        this.handleEvents();
    }
    render() {
        this.btnAdd = document.createElement('button');
        this.btnAdd.textContent = 'Add';
        this.lampsWrapper = document.createElement('div');


        //    this.btnGlobal = document.createElement('globalButton');
        //    this.btnGlobal.textContent = "Remove";
        //    this.lampsOff = document.createElement('div');

        this.parentNode.appendChild(this.btnAdd);
        this.parentNode.appendChild(this.lampsWrapper);


    }

    handleEvents() {
        this.btnAdd.addEventListener('click', () => {
            this.addLamp();
        });
    }
    addLamp() {
            const lighterContainer = document.createElement('div');
            const lighter = new Lighter(lighterContainer);
            this.lampsWrapper.appendChild(lighterContainer);
            this.lighters.push(lighter);
        }
        /*
            addButton() {
                const btnGlobal = document.createElement('div')
                const lighterContainer = new Global(btnGlobal);
            }
            */
}