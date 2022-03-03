'use strict';

//ARRAYS

//forEach statement 
//iterates through the items in an ARRAY 

const forEachBtn = document.getElementById('foreach-btn');
forEachBtn.addEventListener('click', forEach);

function forEach() {

    let productNameArray = ['a', 'b', 'c'];
    let arrayRepeat = '';
    productNameArray.forEach(char => {

        arrayRepeat += char;
    });

    console.log(arrayRepeat.toUpperCase());

}

//----------------------------------------------------
//Splice to add items at specified indexes in an array
//----------------------------------------------------

const spliceBtn = document.getElementById('splice-btn');
spliceBtn.addEventListener('click',splicefn);

function splicefn(){

    let before = ['a','b','c'];

    console.log('before: ' + before);

    //at index 1, 0 number of deletes, add 'd'
    //----------------------------------------
    before.splice(1,0,'d');

    //create a string from the array, separating items with a ,.

    let after = before.join(',');

    console.log('after: ' + after);

    
}
