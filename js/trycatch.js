'use strict';

const tryCatchbtn = document.getElementById('try-catch-btn');
//tryCatchbtn.addEventListener('click', tryCatch);
tryCatchbtn.addEventListener('click',tryCatchFinally);

function tryCatch(){

    try {
        let result=x/10;
        console.log(`result: ${result}`);
    } catch(error) {
        console.log(`error message: ${error.message}`);
    }   
}

function tryCatchFinally(){

    let result;
    try {
        result=x/10;
        console.log(`result: ${result}`);
    } catch(error) {
        console.log(`error message: ${error.message}`);
    }
    finally{
        console.log(`we are in the finally block`);
    }
}

    