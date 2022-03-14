import { Employee } from './../../models/employee-model';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Input() Employee:Employee;

  EmployeeForm= this.formBuilder.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    userName:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
   
  }

  Submit(){
    this.activeModal.close(this.EmployeeForm.value)
  }
}
