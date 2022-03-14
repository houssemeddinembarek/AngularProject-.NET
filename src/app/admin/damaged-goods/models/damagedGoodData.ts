import { v4 as uuid } from 'uuid';

export class DamagedGoodData{
    id:uuid;
    productId:uuid;
    productName:string;
    returnReason:string;
    quantity:number;
    createdAt:Date;
}