'use strict';

const throwBtn = document.getElementById('throw-btn');

throwBtn.addEventListener('click', throwfn);

function throwfn() {

    let result;

    try {
        demonstrateThrow();
    } catch (error) {

        //console.log(`this is the: ${error.name} , ${error.message}`);
        handleError(error);
    }
}

function demonstrateThrow() {
  
        throw {
            name:'customer error',
            message: 'custom message'
        };
  
}
