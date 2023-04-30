//Classes are templates for objects. Don't call the class, call an
//instance of the class with "new"

class Employee {
    starShift(): void {
        console.log("Start shift")
    }
}

const employee = new Employee()
employee.starShift(); //Would return the console.log

//A class can inherit/extend a previous one instead of copy-paste
//the previous one

class Mechanic extends Employee {
    //** This would override the original class **//
    //starShift(): void {
    //     console.log("Mechanic started shift")
    // }
}

const mechanic = new Mechanic()
mechanic.starShift() //It still works, as mechanic extended employee.

//***** MODIFIERS *****//
//Keywords that restricts access to public, private or protected

//Public -> Can be called anywhere
//Private -> Can be called by other methods in the class
//Protected -> Above OR child classes.

class Teacher {
    public classroom(): void {
        console.log("English classroom")
    }
    private children(): void { //Can't be called outside
        console.log("Six students")
    }
    public callChildren(): void {
        this.children() //Can be called because it's inside the class
    }
    protected hours(): void {
        console.log("Works 8 hours")
    }
}

class Maths extends Teacher{
    callChildren2(): void {
        this.children() //Private can't be used un child
    }
    callHours(): void {
        this.hours() //Can be called, it's protected
    }
}

const children = new Teacher();
children.children() // Error due to private

const maths = new Maths();
maths.children() //Can't be called, still private
maths.hours()
maths.callHours()