import { ObjectUnsubscribedError } from 'rxjs';
import { v4 as uuid } from 'uuid';
export class Employee {
    firstName:string;
    lastName:string;
    userName:string;
    password:String;
    constructor(data:any){
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.userName=data.userName;
        this.password=data.password;
    }
}

export class PasswordToUpdate{
    id:uuid;
    password:string;
}

export class EmployeeToUpdate extends Employee{
    id:uuid;
    constructor(value){
        super(value)
        this.id=value.id
    }
    public UpdateEmployee(value:any){
        this.firstName=value.firstName;
        this.lastName=value.lastName;
        this.userName=value.userName;
        }
}