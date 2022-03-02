'use strict';

//The Spread Operator:
//Expands any iterable (string or array) into an array
//Is used to pass multiple arguments to a method
//The syntax uses the ellipsis symbol (...)
//Always on the right-side of an equal sign
//CURRENTLY IE AND EDGE do not support spread

const spreadBtn = document.getElementById('spread-btn');

spreadBtn.addEventListener('click', spreadSample);

function spreadSample() {

    let productNumber = 'FR-R92B-58';

    let values = [...productNumber];

    console.log(values);

    let arr = [1, 2, 3];
    let arr2 = [...arr];

    arr2.push(4);
    arr2[0] = 99;

    console.log(arr);
    console.log(arr2);

    //------------------------------------------

    let products = [{
            name: 'product1',
            description: 'product1 description'
        },
        {
            name: 'product2',
            description: 'product2 description'
        },
        {
            name: 'product3',
            description: 'product3 description'
        },
    ]

    let diff = [...products];

    diff.forEach(element => {
        console.log(element.name);
        console.log(element.description);
    });

    diff[1].name = 'changed name';

    console.log(diff[1].name.toString());

    //-------------------------------------------

    let extraProducts = [{
            name: 'Extra product 1',
            description: 'product 1 description'
        },
        {
            name: 'Extra product 2',
            description: 'product 2 description'
        },
        {
            name: 'Extra product 3',
            description: 'product 3 description'
        },
    ]

    let allProducts = products.concat(extraProducts);
    console.log(allProducts.length);

    [...products,...extraProducts];
    console.log([...products,...extraProducts].length);

    let birthDate = new Date(1966,8,20);
    console.log(birthDate);

    let dateFields = [1966,7,20];
    newDate = new Date(...dateFields);
    console.log(newDate);

    //-----------------------------------------------------------

}