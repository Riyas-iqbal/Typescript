

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
        public readonly name:string,
        public music: string,
        private age: number,
        protected lang: string,
    ){
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

    secondLang! : string // beginners are advised to stay away from this

    constructor(
        public readonly name:string,
        public music: string,
        private age: number,
        protected lang: string,
    ){
        this.name = name
        this.music = music 
        this.age = age
        this.lang = lang
    }
}

