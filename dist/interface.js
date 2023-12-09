"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//interfaces don't exist in js
//? after attribute: obtional attribute
let { name: userName, email: userLogin } = { name: "John", id: 1, email: "" };
let employee = { name: "John", id: 1, email: "", salary: 1000 };
//export lets it be used outside of this class
let [user1, user2, ...restUsers] = [
    { name: "John", email: "", id: 1 },
    { name: "John1", email: "", id: 2 },
    { name: "John2", email: "", id: 3 }
];
//console.log(user1, user2, restUsers)
let result = restUsers.filter(user => user.id > 2);
