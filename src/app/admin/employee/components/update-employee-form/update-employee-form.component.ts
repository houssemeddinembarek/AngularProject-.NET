import { EmployeeToUpdate } from './../../models/employee-model';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.scss']
})
export class UpdateEmployeeFormComponent implements OnInit {

  @Input()EmployeeToUpdate:EmployeeToUpdate

  EmployeeUpdateForm= this.formBuilder.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    userName:['',[Validators.required,Validators.minLength(4)]]
  })

  constructor(public activeModal:NgbActiveModal, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.EmployeeUpdateForm.patchValue(this.EmployeeToUpdate)
  }

  Submit(){
    this.EmployeeToUpdate = new EmployeeToUpdate(this.EmployeeToUpdate);
      this.EmployeeToUpdate.UpdateEmployee(this.EmployeeUpdateForm.value);
      this.activeModal.close(this.EmployeeToUpdate);
    }
}
