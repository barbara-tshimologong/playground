
const simpleSwitchBtn = document.getElementById('simple-switch-btn');
simpleSwitchBtn.addEventListener('click', simpleSwitch);

function simpleSwitch() {

    const product = {
        id: 5,
        colour: 'yellow and green',
        detail: function () {
            return `Product Details are  ${this.id} , ${this.colour}`;
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

/* const complexSwitchBtn = document.getElementById('complex-switch-btn');
const forInBtn = document.getElementById('for-in-btn');
const forOfBtn = document.getElementById('for-of-btn'); */


/* complexSwitchBtn.addEventListener('click', complexSwitch);
forInBtn.addEventListener('click', forIn);
forOfBtn.addEventListener('click', forOf);
foreachBtn.addEventListener('click', forEach); */


/* function complexSwitch() {

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
} */

//for/in statement 
//iterates through the elements of an object (properties and methods)
//returns the key(name) of the property or object
//you can then fetch the object using the key


/* function forIn() {

    const product = {
        id: 5,
        colour: 'yellow and green',
        detail: function () {
            return `Product Details are  ${this.id} , ${this.colour}`;
        }
    };

    for (const key in product) {
        console.log(product[key])
    }
} */

//for/of statement 
//iterates through the elements of an object (properties and methods)
//returns the object
//you can then fetch the object using the key

/* function forOf() {

    let productName = 'the best  product';

    let repeatName = '';

    for (const char of productName) {
        repeatName += char;
    }
    console.log(repeatName.toUpperCase());

    let productNameArray = [];

    for (const char of productName) {
        productNameArray.push(char);

    }

} */

/* function forEach() {

    let arrayRepeat = '';
    productNameArray.forEach(char => {

        arrayRepeat += char;

        console.log(arrayRepeat);
    });


} */