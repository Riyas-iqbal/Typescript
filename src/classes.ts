/**
 * Defining Classes members
 */
class Code {
    //we can create a member without being initialized in the constructor
    name: string;
    //so we need to define constructor with this property in it
    constructor(name: string) {
        this.name = name
    }
}

// you cannot also create a member without defining it in the class

// class Coder{
//     constructor(name:string){
//         this.name = name  [error] because we havent defined it in the class itself
//     }
// }

// we can remove redundancy from our code and there is a method to achieve this

/**
 * Visibility modifiers ( Data modifiers or access modifiers) 
 */

class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string,
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
}

// by defining the visibility modifiers. we dont have to explicitly decalare it as
// a member in the class making it redundant

// but if you dont want to initialize it and declare it as a member you can use assertion

class CoderTwo {

    secondLang!: string // beginners are advised to stay away from this

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'eng',
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.name}`
    }
}

const Dave = new CoderTwo('Dave', 'Rock', 42, 'eng')
console.log(Dave.getAge()) //Hello, I'm Dave
// console.log(Dave.age) [error] property age is private
// console.log(Dave.lang) [error] property lang is protected, only accessible within CoderTwo class and its subclass

class WebDev extends CoderTwo {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Riyas = new WebDev('mac', 'riyas', 'lofi', 43)

console.log(Riyas.getLang())
// console.log(Riyas.age) [error] because age is still private
// console.log(Riyas.lang) [error] because age is still protected and only accessible in subclass

// ----------------------------------------------------------------

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'guitar');

console.log(Page.play('strums'))


// static members

class Peeps {
    static count: number = 0;
    //static member has a sinlge memory for whole class even if it has multiple objects

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}


const John = new Peeps('John')
const Amy = new Peeps('Amy')
const Steve = new Peeps('Steve')

console.log(John.id) // 1 
console.log(Amy.id) // 2 

console.log(Peeps.count) //will print 3 because count is a static member 

//----------------------------------------------------------------

/**
 * Getters and setters
 */

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young','Led Zep']
console.log(MyBands)
MyBands.data = [...MyBands.data,'ZZ Top']
console.log(MyBands.data)
// MyBands.data = ['Van Halen',43] [error] type number is assignable to string