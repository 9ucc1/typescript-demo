//let lname = 'John';

//lname = 10;

let lname : string;
lname = "Santosh";

let newname = lname.toUpperCase();
//console.log(newname)

let age : number;

age = 25;
age = 25.5;

let dob = "25"

let result = parseInt(dob)

let isValid : boolean = false;
//have to assign something here, boolean = true or false
//console.log(isValid)

let empList : string[];
let depList : Array<string>;
// 2 ways to say the same thing

empList = ["hi", "hii"] //can't add number to this array

let numList : Array<number>;
numList = [1,2,3,4,5]
let results = numList.filter((num)=>num>2);
//console.log(results)
let num = numList.find((num)=> num===2)
//console.log(num)

const enum Color {
    Red,
    Green,
    Blue
}
//stripping down type information, const saves indexes, js code is c = 2
let c: Color = Color.Blue

let swapNumbs: [number,number];
function swapNumbers(num1:number, num2:number) : [number, number]{ //assign type
    return[num2,num1]
}
swapNumbs = swapNumbers(10,20);
swapNumbs[0]

let department : any;
department = "IT";
department = 10;
//AVOID ANY!