//Arguments must have it's type, return can, it's advisable
//There is no inference for arguments.

const multiply = (x: number, y: number): number => {
    return x * y;
}


//***** ANONYMOUS FUNCTION *****//

function sum(x:number, y:number): number {
    return x + y
}

//Return type can be "never", it means the function will never
//return anything (like throw an error). It's rare.