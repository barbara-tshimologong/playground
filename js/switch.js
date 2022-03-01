'use strict'


const simpleSwitchBtn = document.getElementById('simple-switch-btn').addEventListener('click',simpleSwitch);

const complexSwitchBtn = document.getElementById('complex-switch-btn');
complexSwitchBtn.addEventListener('click', complexSwitch);

function simpleSwitch() {

    const product = {
        id: 5,
        colour: 'yellow and green',
        detail: function () {
            return `Product Details are:
            Id:  ${this.id} , 
            Colour:  ${this.colour}`;
        }
    };


    switch (product.id) {
        case 1:
            console.log("Product 1");
            break;
        case 2:
            console.log("Product 2");
            break;
        default:
            console.log(product.detail());
            break;
    }
}

//------------------------------------------------------------------------------------

function complexSwitch() {

    const product = {
        id: 5,
        colour: 'Pink',
        detail: function () {
            return `Product Details are  ${this.id} , ${this.colour}`;
        }
    };

    switch (product.colour) {
        case "Red":
        case "Pink":
            console.log("Reds");
            break;

        case "Blue":
        case "Light Blue":
        case "Dark Blue":
            console.log("Blues");
            break;

        case 'Grey':
        case 'Gray':
            console.log("Greys");

        default:
            console.log("Not a known colour!!");

    }
}
