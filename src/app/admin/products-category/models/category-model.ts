export class category{
    categoryName:string;
    comment:string;
    constructor(data:any){
        this.categoryName=data.CategoryName;
        this.comment=data.Comment 
    }
}