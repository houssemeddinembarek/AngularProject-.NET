import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  AddCategory = this.formBuilder.group({
    CategoryName:['',[Validators.required]],
    Comment:['',[Validators.required]]
  })
  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
  }

  Submit(){
    this.activeModal.close(this.AddCategory.value)
  }
}
