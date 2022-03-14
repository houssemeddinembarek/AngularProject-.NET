import { FixRequestToUpdate } from './../../models/fixrequest-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

@Input()UpdateFixRequest:any;
@Input()Categories;

  UpdateForm = this.formBuilder.group({
    equipementName:['',[Validators.required]],
    comment:['',[Validators.minLength(10)]],
    price:['',[Validators.required]],
    clientName:['',[Validators.required,Validators.minLength(3)]],
    phoneNumber:['',[Validators.required,Validators.minLength(8)]],
    advance:['',[Validators.nullValidator]],
    isPayed:[false,[Validators.required]],
    discount:['',[Validators.nullValidator]],
    isFixed:[false,[Validators.required]],
    isDelivered:[false,[Validators.required]],
    fixCategoryId:['',[Validators.required]],
    unfixable:[false,[Validators.required]]
  })
  constructor(private formBuilder:FormBuilder, public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
    if(this.UpdateFixRequest){
      this.UpdateForm.patchValue(this.UpdateFixRequest)
    }
  }


  Submit(){
    if(this.UpdateFixRequest){
      this.UpdateFixRequest = new FixRequestToUpdate(this.UpdateFixRequest)
      this.UpdateFixRequest.UpdateRequest(this.UpdateForm.value)
      this.activeModal.close(this.UpdateFixRequest)
    }
  }
}
