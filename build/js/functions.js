"use strict";
//Type aliases 
// when we represent out ts type with a diff name it is Type Aliases
//interface stringOrNumberInterface = stringOrNumber - error because we cant asign a ts type to interface 
// Literal Types
let myName;
//myName = 'john' error because myName is literal type now only accepts 'Riyas' as value
let userName;
userName = 'Amy'; //by union we can assing userName 3 value above another value will result in error
//functions
const add = (a, b) => {
    return a + b;
};
//add a colon after the paramters we can add the return type of the function. in this case it will be number
//side effect function which does not return anything. we can add the void return type for it
const logMsg = (message) => {
    console.log(message);
};
let subract = function (c, d) {
    return c - d;
};
// we can also achieve this by defining an interface 
// interface mathFunction {
//     (a:number,b:number):number
// }
// using the type mathfunction in a function
let multiply = function (a, b) {
    return a * b;
};
//optional parameter
//if you have optional parameter it needs to be last in the list
const addAll = (a, b, c) => {
    //return a + b + c
    // the above will throw an error because c is optional and it can be undefined
    // so we have to type guard it
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    //but still it wil be error because a we have a return type number but if c is
    // undeefined it will return undefined which is not we mentioned
    // so we have to write the case where c is undefined
    return a + b;
};
//other way is to add a default parameter
const addAllWithDefaultParameter = (a, b, c = 2) => {
    return a + b + c;
};
//now if we c is not provided it will take the default parameter which is 2
// !type aliases will not work default values
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3)); // will add all the number and output its sum no of argument passed doesnt matter
// The never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// ts will infer the return type as never which is especially for functions that explicitly throws error
// we can also explicitly mention it 
const createErrorWithTypeNever = (errMsg) => {
    throw new Error(errMsg);
};
// it will also be never type if it has infinite loop inside
const infinite = () => {
    let i = 10;
    while (true) {
        i++;
    }
};
// for the above function ts will infer the return type never
// const infinite = ():never => {}  
