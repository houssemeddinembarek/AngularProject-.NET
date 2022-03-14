import { CreditUpdate } from './../../../models/credit-model';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-credit-form',
  templateUrl: './add-credit-form.component.html',
  styleUrls: ['./add-credit-form.component.css']
})
export class AddCreditFormComponent implements OnInit {

  @Input() CreditToUpdate:any;

CreditForm = this.formbuilder.group({
  name:['',[Validators.required]],
  comment:['',[]],
  phone:['',[Validators.required,Validators.minLength(8)]],
  creditAmount:['',[Validators.required]]
})

  constructor(private formbuilder:FormBuilder,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.CreditToUpdate){
      this.CreditForm.patchValue(this.CreditToUpdate);
    }
  }

  Submit(){
    if(this.CreditToUpdate){
      this.CreditToUpdate = new CreditUpdate(this.CreditToUpdate);
      this.CreditToUpdate.UpdateCredit(this.CreditForm.value);
      this.activeModal.close(this.CreditToUpdate);
    }else{
    this.activeModal.close(this.CreditForm.value);
    }
  }
}
