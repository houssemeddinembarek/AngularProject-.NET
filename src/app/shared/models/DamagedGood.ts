import { v4 as uuid } from 'uuid';

export class DamagedGood {
    purchaseId?:uuid;
    productId:uuid;
    productName:string;
    returnReason:string;
    quantity:number;
}