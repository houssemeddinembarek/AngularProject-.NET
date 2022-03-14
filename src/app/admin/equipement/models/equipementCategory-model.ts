import { v4 as uuid } from 'uuid';
export class EquipementCategory {
    name:string;
    comment:string;
    constructor(data:any){
        this.name=data.name
        this.comment=data.comment

    }
}

export class EquipementCategoryToUpdate extends EquipementCategory{
    id:uuid;
    constructor(value){
        super(value)
        this.id=value.id;
    }
    public UpdateEquipementCategory(value:any){
        this.name=value.name;
        this.comment=value.comment
    }
}