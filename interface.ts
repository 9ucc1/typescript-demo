export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}
//interfaces don't exist in js
//? after attribute: obtional attribute

let { name : userName, email: userLogin }: User = { name: "John", id: 1, email: ""}
//object destructuring

// userLogin

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000}

export interface Login {
    login(): User;
    //method
}
//export lets it be used outside of this class

let [user1, user2, ...restUsers]: User[] = [
    {name: "John", email: "", id: 1},
    {name: "John1", email: "", id: 2},
    {name: "John2", email: "", id: 3}
]
//console.log(user1, user2, restUsers)

let result = restUsers.filter(user => user.id >2)

