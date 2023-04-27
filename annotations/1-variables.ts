// It provokes an error whenever we try to assign a value that 
// isn't a number to the variable age

let age: number = 3

//Annotation like this can be used with any kind of type
//string, numbers, booleans, objects, etc

//************************//
//It can be used for values with the same name as the type

let notValue: null = null
let unassigned: undefined = undefined

//*************************//
//Annotation for arrays and objects works a bit different

let planets: string[] = ['Earth', 'Mars']

let product: {name:string; price:number} = {
    name: "pen",
    price: 15
}

//You can make a class that defines the variable instead of
//telling it directly what it is.

class One{}
let one: One = new One()

//*********************//
//Functions works different too. There is more details of this,
//arrays and objects in a different file

const printer: (content: string) => void = (content: string) => {
    console.log(content)
}

//Void means we don't expect a return here. It technically
//could return undefined or null.

//*************************//
//Type inference means any simple annotation is not needed
//because typescript will assign automatically it depending on
//value of the variable.

let example = 3

let example2;
example 2 = 3

//Only if you put the value on the same line Typescript reads it
