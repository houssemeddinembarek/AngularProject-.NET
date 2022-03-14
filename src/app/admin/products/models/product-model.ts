import { v4 as uuid } from 'uuid';

export class ProductToAdd{
    title:string;
    originalPrice:number;
    price:number;
    comment:string;
    categoryId:uuid;
    stock:number;
    discount:number;

    constructor(data:any){
        this.title=data.title;
        this.originalPrice=data.originalPrice;
        this.price=data.price;
        this.comment=data.comment;
        this.categoryId=data.categoryId;
        this.stock=data.stock;
        this.discount=data.discount;
    }
}
export class Product extends ProductToAdd{ 
    id:uuid;
    category:string;
    constructor(value){
        super(value);
        this.id = value.id;
    }
    public UpdateProduct(value:any){
        this.title=value.title;
        this.originalPrice=value.originalPrice;
        this.price=value.price;
        this.comment=value.comment;
        this.categoryId=value.categoryId;
        this.stock=value.stock;
        this.discount=value.discount;
    }        
}

export class Categories{
    CategoryName: string;
    Comment: string;
    constructor(data:any){
        this.CategoryName=data.CategoryName;
        this.Comment=data.Comment
    }
}