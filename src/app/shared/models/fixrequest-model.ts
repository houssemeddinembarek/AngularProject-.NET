import { v4 as uuid } from 'uuid';


export class FixRequest {
    equipementName:string
    comment:string
    price:number
    clientName:string
    phoneNumber:string
    advance:number
    discount:number
    fixCategoryId:uuid
    constructor(data:any){
        this.equipementName=data.equipementName
        this.comment=data.comment
        this.price=data.price
        this.clientName=data.clientName
        this.phoneNumber=data.phoneNumber
        this.advance=data.advance
        this.discount=data.discount
        this.fixCategoryId = data.fixCategoryId
    }
}

export class FixRequestToUpdate extends FixRequest{
    id:uuid;
    isFixed:boolean;
    isPayed:boolean;
    isDelivered:Boolean;
    unfixable:Boolean;
    constructor(value){
        super(value)
        this.id = value.id
    }
    public UpdateRequest(data:any){
        this.clientName = data.clientName;
        this.advance = data.advance;
        this.comment = data.comment;
        this.discount = data.discount;
        this.equipementName = data.equipementName;
        this.phoneNumber = data.phoneNumber;
        this.price = data.price
        this.isFixed = data.isFixed;
        this.isPayed = data.isPayed;
        this.isDelivered = data.isDelivered;
        this.fixCategoryId = data.fixCategoryId;
        this.unfixable = data.unfixable;
    }
}