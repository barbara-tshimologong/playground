//by specifying 'use strict':
//*-you will be forced to declare all variables.
//*-keywords can't be used as variable names
//*-you can't delete a variable or function.
//*-ignored by older browsers
//*-you should always use this.
'use strict';

//Ternary Operator
//----------------

const ternaryBtn = document.getElementById('ternary-btn');
ternaryBtn.addEventListener('click',ternaryfn);

function ternaryfn(){
    console.log('1'== 1 ?'equal':'not equal');

    console.log('1'===1?'equal':'not equal');

}

//Comparison
//----------

const comparisonBtn = document.getElementById('comparison-btn');
comparisonBtn.addEventListener('click',comparisons);

function comparisons() {
    let leftSide = 'a';
    let rightSide = 'b';
    
    let result = leftSide > rightSide;

    console.log(result);
}


//Plus Sign
//---------

const plusSignBtn = document.getElementById('plus-sign-btn');
plusSignBtn.addEventListener('click', plusSign);

function plusSign() {
    //numbers(addition)
    let result = 1 + 1;
    console.log('Using the plus sign to add to numbers:' + result);

    //strings (concatenation)
    result = 'a' + 'b';
    console.log('Using the plus sign to concatenate strings: ' + result);

    //strings and numbers (concatenation)
    result = 1 + '1' + 'one';
    console.log('Using the plus sign to concatenate strings and numbers: ' + result);

    //converting the string to a number and then adding
    result = 1 + +('1');
    console.log('Using the plus sign to add strings(converted to number) and numbers: ' + result);

}
//this
//-----
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
