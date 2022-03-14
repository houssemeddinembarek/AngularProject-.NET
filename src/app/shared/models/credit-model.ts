import { v4 as uuid } from 'uuid';

export class Credit {
    name:string;
    creditAmount:number;
    comment:string;
    phone:string;

    constructor(data:any){
        this.name = data.name;
        this.creditAmount = data.creditAmount;
        this.comment = data.comment;
        this.phone = data.phone;
    }
}

export class CreditUpdate extends Credit{
    id:uuid;
    isPayed:boolean;
    constructor(value){
        super(value)
        this.id = value.id;
        this.isPayed = value.isPayed;
    }
    public UpdateCredit(data:any){
        this.name = data.name;
        this.creditAmount = data.creditAmount;
        this.comment = data.comment;
        this.phone = data.phone;
        
    }
}