"use strict";
/**
 * Assertion
 */
//convert to less or mor specific
const a = 'hello';
const b = a; // less specific
const c = a; // more specific. it will ignore the warning because we asserted the type Three
let d = 'world'; // does the same thing as above but this doesnt work in react
let e = 'heey';
//real life usage for assertion
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
//let myVal: string = addOrConcat(2, 2, 'concat')
// the above will throw an error even though it will only return a string. so we can modify it using assertion
let nextVal = addOrConcat(2, 2, 'concat');
// now we are asserting that we know better than typescript knows in this situation
// it will override the warning that was shown above
//Be careful! TS sees no problem - but as string is returned
let val = addOrConcat(2, 2, 'concat');
// TS beleives us that it will return a number but this is not the case here 
//but it still checks when it can 
// 10 as string 
// the above will still throw an error
//but it cant always check as the above function provided
//Forced casting or double casting 
// still we can override the 10 as string to not throw an error but first we have to convert it to unknown
10; //now it will not throw an error
// The DOM
// const img = document.querySelector('img') - TS will infer the type as HTMLImageElement | null
// img.src - will throw error because img still has possible null return type
const img = document.querySelector('img');
img.src;
// now img has return type set to HTMLImageElement
//Non null assertion
// we can use ! to mention that it wil not be null
const myImg = document.querySelector('img');
myImg.src;
