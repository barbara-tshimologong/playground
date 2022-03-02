'use strict';

//Reference Error - 'x' is not defined.
//-------------------------------------

const refErrorBtn = document.getElementById("ref-error-btn");

refErrorBtn.addEventListener('click', refError);

function refError() {

    let result;

    try {
        result = x / 10;
    } catch (error) {
        handleError(error);
    }
}

//Range Error - a number cannot have 200 significant digits.
//----------------------------------------------------------

const rangeErrorBtn = document.getElementById("range-error-btn");

rangeErrorBtn.addEventListener('click', rangeError);

function rangeError() {
    let result = 0;

    try {
        result.toPrecision(200);
    } catch (error) {
        handleError(error);
    }
}

//Type Error - result is a numeric, and it should be a string.
//------------------------------------------------------------

const typeErrorBtn = document.getElementById("type-error-btn");

typeErrorBtn.addEventListener('click', typeError);

function typeError() {
    let result = 0;

    try {
        result.ToUpperCase();
    } catch (error) {
        handleError(error);
    }
}

//URI Error - when a url has invalid characters
//---------------------------------------------

const uriErrorBtn = document.getElementById("uri-error-btn");

uriErrorBtn.addEventListener('click', uriError);


function uriError() {

    let uri = "http://www.netinc.com/path%%%/fine name";

    try {
        decodeURI(uri);
    } catch (error) {
        handleError(error);
    }
}

//Syntax Error - missing quote
//-----------------------------
const syntaxErrorBtn = document.getElementById("syntax-error-btn");

syntaxErrorBtn.addEventListener('click', syntaxError);


function syntaxError() {

    try {
        let sum = eval("alert('Hello)");
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log(`Reference error:  ${error.message}`);
            break;
        case 'RangeError':
            console.log(`Range error:  ${error.message}`);
            break;
        case 'TypeError':
            console.log(`Type error:  ${error.message}`);
            break;
        case 'URIError':
            console.log(`URI error:  ${error.message}`);
            break;
        case 'SyntaxError':
            console.log(`Syntax error:  ${error.message}`);
            break;
        case 'EvalError':
            console.log(`Eval error:  ${error.message}`);
            break;
        default:
            console.log(`Error Type:  ${error.name} - Message:  ${error.message}`);
            break;
    }
}