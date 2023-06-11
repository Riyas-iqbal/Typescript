let stringArr = ['one', 'hey', 'Dave']
//not mentioning type will result in ts to infer the type
// for example the above will be type of string[]

let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]
// type will be (string|number|boolean)[]

stringArr[0] = 'John'
stringArr.push('hey')

// stringArr[0] = 56 - Error Type 'number' is not assignable to 'string'

let test = [] // type = any[]

let bands: string[] = []
bands.push('Van halen')

/**
 * the order of the elements or the length of the array doesnt matter 
 * however if you want to explicitly mention it you can. Using Tuple
 */

// Tuple
let myTuple: [string, number, boolean] = ['dave', 42, true]
//has specific length and type based on the order


let myArray: (string | number | boolean)[] = ['Hello', 50, true];

// myTuple = myArray - Error 
// will throw error because it doesnt know how many elements will be there is myArray

//Objects
let myObj: object;
myObj = [] //doesnt throw error because in js arrays are objects bts
console.log(typeof myObj)
myObj = bands
myObj = {}

let inferObj = {
    name: 'riyas',
    active: true
}

// ts infers the types for the object it will be an obj with each having its type 
// the name key will be having string type and active will be having boolean type

type Student = {
    name: string,
    active: boolean,
    age: number,
    partOf: (string)[]
}

//student1 has type Student that we declared so it should have all the key with 
// defined type or it will result in an error
let student1: Student = {
    name: 'riyas',
    active: true,
    age: 21,
    partOf: ['teamOne', 'teamTwo']
}

//student1.school = 'High school'
// the above will throw an error because it doesnt exist in the student that was predefined

type NewStudent = {
    name: string,
    active?: boolean,
    age: number,
    partOf: (string)[]
}

//to make a property optional we can use ?
// it will result in active becoming a union with boolean | undefined

let student2: NewStudent = {
    name: 'riyas',
    age: 31,
    partOf: ['teamOne', 'teamTwo']
}
// now active is optional

// student1 = student2 -
//error because NewStudent has active as Union type wiht undefined


//we can also use inteface instead of Student type

interface StudentInInterface {
    name?: string;
    age: number
}
//the above works the same

let interfaceStudent: StudentInInterface = {
    name: 'riyas',
    age: 31
}

const printStudentName = (student: StudentInInterface) => {
    //return `Hello ${student.name.toString()}` //will throw an error because name is a union type that can be undefined an we can call methods on undefined
    return `${student.name?.toString()}` //by adding optional chaining it will work fine
}       

//Enums 
// "Unlike most ts features, enums are not a type-level addition to js but 
// something addition to javascript but something added to the language and runtime"

enum Grade {
    U, //default = 0 if we assign 1 here the rest will change according to it
    D, 
    C,
    B, //default = 3
    A
}

console.log(Grade.U) // 0

