//All new testing classes will have age of 41, unless there is an
//argument for the constructor. 

//A constructor is a function for a class to do the above.

class Testing {
    age: number = 41;

    constructor(age: number) {
        this.age = age
    }
}


class Testing2 {
    constructor(public age: number) {} //This is valid aswell
}

// INHERITANCE OF CONSTRUCTOR

class Inherited extends Testing {
    constructor(public name: string, age: number) {
        super(age) //This calls the parent's constructor
    }
}
