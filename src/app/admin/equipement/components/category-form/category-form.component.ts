import { EquipementCategoryToUpdate } from './../../models/equipementCategory-model';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input()Category:EquipementCategoryToUpdate;

  AddEquipementCategory = this.formBuilder.group({
    name:['',[Validators.required]],
    comment:['',[Validators.minLength(8)]]
  })
  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.Category){
      this.AddEquipementCategory.patchValue(this.Category)
    }
  }

  Submit(){
    if(this.Category){
      this.Category= new EquipementCategoryToUpdate(this.Category)
      this.Category.UpdateEquipementCategory(this.AddEquipementCategory.value)
      this.activeModal.close(this.Category)
    }else{
    this.activeModal.close(this.AddEquipementCategory.value)
    }
  }

}
