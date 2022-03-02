'use strict';

function eventHandler(ctl){
    
    console.log(ctl.toString());
}

const thisObjectLiteralBtn = document.getElementById('this-object-literal-btn');
thisObjectLiteralBtn.addEventListener('click',thisObjectLiteral);

function thisObjectLiteral(){

    let product = {
        'productId':5,
        'productName':'Bicycle',
        'fullDescription': function () {
            return (`${this.productName}  ${this.productId}`);}
        }

        console.log(product.fullDescription());
}
