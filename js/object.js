'use strict';
//-------------------------------------------------------------------------------------
//LOOP THROUGH OBJECTS
//-------------------------------------------------------------------------------------

//for-in statement 
//iterates through the elements of an OBJECT(properties and methods)
//returns the key(name) of the item
//you can then fetch the item using it's key

const forInBtn = document.getElementById('for-in-btn');
forInBtn.addEventListener('click', forIn);

function forIn() {

    const product = {
        id: 5,
        colour: 'yellow and green'
        /* detail: function detail () {
            let result= `Product Details are  ${this.id} , ${this.colour}`;
            return result; 
        }*/
    };

    for (const key in product) {
        console.log(product[key]);
    }
}

//for-of statement 
//iterates through the elements of an OBJECT (properties and methods)
//returns the value of the element

const forOfBtn = document.getElementById('for-of-btn');
forOfBtn.addEventListener('click', forOf);

function forOf() {

    let productName = 'the best  product';

    let repeatName = '';

    for (const char of productName) {
        repeatName += char;
    }

    console.log(repeatName.toUpperCase());

}

