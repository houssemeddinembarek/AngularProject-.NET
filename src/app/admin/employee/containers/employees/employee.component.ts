import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  Employees:any

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.service.EmployeeSubject.asObservable().subscribe(res=>{
      this.Employees=res
    })
    this.service.GetEmployee()
  }

  EmployeeSubmitted(value){
    this.service.AddEmployee(value)
  }

  DeleteSubmitted(id){
    this.service.DeleteEmployee(id)
  }

  NewPasswordSubmitted(data){
    this.service.UpdatePassword(data)
  }

  UpdateEmployeeSubmitted(data){
    this.service.UpdateEmployee(data)
  }
}
