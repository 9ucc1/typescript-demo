"use strict";
//let lname = 'John';
//lname = 10;
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
//console.log(newname)
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
//have to assign something here, boolean = true or false
//console.log(isValid)
let empList;
let depList;
// 2 ways to say the same thing
empList = ["hi", "hii"]; //can't add number to this array
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
//console.log(results)
let num = numList.find((num) => num === 2);
//stripping down type information, const saves indexes, js code is c = 2
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
let department;
department = "IT";
department = 10;
//AVOID ANY!
