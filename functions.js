"use strict";
//3 ways to write function
function add(num1, num2) {
    return num1 + num2;
}
const sub = (num1, num2) => num1 - num2;
const mult = function (num1, num2) {
    return num1 * num2;
};
//optional parameter:
function addthree(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2; //ternary
}
//can also set default value: num3 = 10
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[5, 6, 7]));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a,", "b"]);
//for reusable functions, generic functions
