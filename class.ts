import { Login, User } from './interface';

import * as UserLogin from './interface'; 
//alias

interface Address {
    street: string;
    city: string;
    state: string;
}

class Employee implements Login{
    //give type to each property
    #id: number;
    address: Address;
    protected name: string

    get empId():number{
        return this.#id
    }
    set empId(id:number){
        this.#id = id
    } //getter and setter

    static getEmployeeCount(): number {
        return 50
    }

    constructor(id: number, name: string, address: Address){
        this.address= address;
        this.#id = id;
        this.name = name;
    }
    login(): User {
        return { name: "John", id: 1, email: ""}
    }

    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`
    }
}

let john = new Employee(1, "John", {
    street: "ABC",
    city: "Bangalore",
    state: "Karnatka"
});
let address = john.getNameWithAddress()

//john.id = 1;
//john.name = 'John';
//john.address = "Highway 71";
//console.log(john)
console.log(address)