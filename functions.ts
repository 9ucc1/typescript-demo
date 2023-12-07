//3 ways to write function
function add(num1 : number, num2: number) : number{
    return num1 + num2
}

const sub = (num1: number, num2: number) : number => num1 - num2;

const mult = function (num1: number, num2: number): number {
    return num1*num2
}

//optional parameter:
function addthree(num1: number, num2: number, num3? : number): number{
    return num3 ? num1 + num2 + num3 : num1 + num2; //ternary
}
//can also set default value: num3 = 10

function add2(num1: number, num2: number, ...num3: number[]):number{
    return num1 + num2 + num3.reduce((a,b)=> a+b, 0)
}

let numbers = [1,2,3,4,5];
console.log(add2(2, 3, ...numbers))
console.log(add2(2, 3, ...[5,6,7]))

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items)
}
let concatResult = getItems<number>([1,2,3,4,5])
let concatString = getItems<string>(["a,", "b"])
//for reusable functions, generic functions