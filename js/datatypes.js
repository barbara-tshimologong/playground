'use strictly'

const dataTypeBtn = document.getElementById('data-type-btn');

dataTypeBtn.addEventListener('click', dataTypeSample);

function dataTypeSample() {

let productName = 'product name';        //primitive string
let productCount = 5;                    //primitive number
let isActive = true;                     //primitive boolean
let value = null;                        //primitive null
let result;                              //undefined
let sellByDate = new Date();             //object

let product ={
    description : 'this is the product object'
};                                       //Object

let products = [];                       //array

console.log (typeof productName);
console.log (typeof productCount);
console.log (typeof isActive);
console.log (typeof value);
console.log (typeof result);
console.log (typeof sellByDate);

console.log (typeof (4*2));      //expression

console.log (typeof product);
console.log (typeof products);

console.log (typeof dataTypeSample);  //function

}

