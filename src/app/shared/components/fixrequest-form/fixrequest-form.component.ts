import { NgbActiveModal, NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixrequest-form',
  templateUrl: './fixrequest-form.component.html',
  styleUrls: ['./fixrequest-form.component.scss']
})
export class FixrequestFormComponent implements OnInit {

  @Input() Categories;

  FixRequestForm = this.formBuilder.group({
    equipementName:['',[Validators.required]],
    comment:['',[Validators.minLength(10)]],
    price:['',[Validators.required]],
    clientName:['',[Validators.required,Validators.minLength(3)]],
    phoneNumber:['',[Validators.required,Validators.minLength(8)]],
    advance:['',[Validators.nullValidator]],
    discount:['',[Validators.nullValidator]],
    fixCategoryId:['',[Validators.required]]

  })

  constructor(private formBuilder:FormBuilder, public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  Submit(){
    this.activeModal.close(this.FixRequestForm.value)
  }


}
