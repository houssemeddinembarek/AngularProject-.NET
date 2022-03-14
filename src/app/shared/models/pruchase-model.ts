import { v4 as uuid } from 'uuid';

export class Purchase {
    productId:uuid;
    income:number;
    originalPrice:number;
    quantity:number;
    productName:string;
    constructor(data:any){
        this.productId = data.productId;
        this.income = data.income;
        this.originalPrice = data.originalPrice;
        this.quantity = data.quantity;
        this.productName = data.productName;
    }
}

export class PurchaseUpdate extends Purchase{
    id:uuid;
    sellerId:uuid;
    constructor(value){
        super(value)
        this.id=value.id;
        this.sellerId=value.sellerId;
    }

    public PurchaseToUpdate(data:any){
        this.productId = data.productId;
        this.income = data.income;
        this.originalPrice = data.originalPrice;
        this.quantity = data.quantity;
        this.productName = data.productName;
    }
}