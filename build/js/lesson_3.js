"use strict";
let stringArr = ['one', 'hey', 'Dave'];
//not mentioning type will result in ts to infer the type
// for example the above will be type of string[]
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
// type will be (string|number|boolean)[]
stringArr[0] = 'John';
stringArr.push('hey');
// stringArr[0] = 56 - Error Type 'number' is not assignable to 'string'
let test = []; // type = any[]
let bands = [];
bands.push('Van halen');
/**
 * the order of the elements or the length of the array doesnt matter
 * however if you want to explicitly mention it you can. Using Tuple
 */
// Tuple
let myTuple = ['dave', 42, true];
//has specific length and type based on the order
let myArray = ['Hello', 50, true];
// myTuple = myArray - Error 
// will throw error because it doesnt know how many elements will be there is myArray
//Objects
let myObj;
myObj = []; //doesnt throw error because in js arrays are objects bts
console.log(typeof myObj);
myObj = bands;
myObj = {};
let inferObj = {
    name: 'riyas',
    active: true
};
//student1 has type Student that we declared so it should have all the key with 
// defined type or it will result in an error
let student1 = {
    name: 'riyas',
    active: true,
    age: 21,
    partOf: ['teamOne', 'teamTwo']
};
//to make a property optional we can use ?
// it will result in active becoming a union with boolean | undefined
let student2 = {
    name: 'riyas',
    age: 31,
    partOf: ['teamOne', 'teamTwo']
};
//the above works the same
let interfaceStudent = {
    name: 'riyas',
    age: 31
};
const printStudentName = (student) => {
    var _a;
    //return `Hello ${student.name.toString()}` //will throw an error because name is a union type that can be undefined an we can call methods on undefined
    return `${(_a = student.name) === null || _a === void 0 ? void 0 : _a.toString()}`; //by adding optional chaining it will work fine
};
//Enums 
// "Unlike most ts features, enums are not a type-level addition to js but 
// something addition to javascript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // 0
