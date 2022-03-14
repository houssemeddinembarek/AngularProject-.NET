import { UpdateEmployeeFormComponent } from './../update-employee-form/update-employee-form.component';
import { EmployeeFormComponent } from './../employee-form/employee-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../../models/employee-model';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  @Output() EmployeeSubmit=new EventEmitter<any>();
  @Output() DeleteSubmit = new EventEmitter<any>();
  @Output() NewPasswordSubmit = new EventEmitter<any>();
  @Output() UpdateEmployeeSubmit = new EventEmitter<any>();

  @Input() Employees;
  closeResult: string;
  PasswordId:any;

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult =reason;
    });
  }

  AddEmployee(){
    const ref = this.modalService.open(EmployeeFormComponent)
    ref.result.then(res=>{
      this.EmployeeSubmit.emit(new Employee(res))
    })
  }

  DeleteEmployee(id){
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.DeleteSubmit.emit(id)
    }, (reason) => { })
  }

  SetPasswordId(id){
    this.PasswordId=''
    this.PasswordId=id
  }

  UpdatePassword(f){
    let NewPassword={
      id:this.PasswordId,
      password:f.value.password
    }
    this.NewPasswordSubmit.emit(NewPassword);
  }

  UpdateEmployee(item){
    const ref=this.modalService.open(UpdateEmployeeFormComponent)
    ref.componentInstance.EmployeeToUpdate=item;
    ref.result.then(res=>{
      this.UpdateEmployeeSubmit.emit(res)
    },reason => {})
  }
}
