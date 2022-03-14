import { PasswordToUpdate, EmployeeToUpdate } from './../models/employee-model';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee-model';
import { throwError, BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EmployeeSubject= new BehaviorSubject<any[]>([])

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  GetEmployee(){
    this.http.get<any>(environment.apiUrl+'Admin/GetEmployees').subscribe(res=>{
      this.EmployeeSubject.next(res)
    })
  }

  AddEmployee(data:Employee){
    this.http.post<any>(environment.apiUrl+'Admin/AddEmployee',data).pipe(catchError(err=>{
      return throwError(err)
    })).subscribe(res=>{
      let NewEmployee=this.EmployeeSubject.value;
      NewEmployee.push(res)
      this.EmployeeSubject.next(NewEmployee)
      this.toastr.success('Employee Added Successfully')
    })
  }

  DeleteEmployee(id){
    this.http.delete<any>(environment.apiUrl+'Admin/DeleteEmployee/employeeId?employeeId='+id).pipe(catchError(err=>{
      
      return throwError(err)
    })).subscribe(res=>{
      let employee = this.EmployeeSubject.value;
      const Index = employee.findIndex(i => i.id == id)
      employee.splice(Index,1)
      this.EmployeeSubject.next(employee)
      this.toastr.success('Employee Deleted Successfully')
    })
  }

  UpdatePassword(password:PasswordToUpdate){
    this.http.patch<any>(environment.apiUrl+'Admin/UpdatePassword',password).pipe(catchError(err=>{
      this.toastr.error("Error While Updating Password")
      return throwError(err)
    })).subscribe(res=>{
      this.toastr.success('Password Update Successfuly')
    })
  }

  UpdateEmployee(data:EmployeeToUpdate){
    this.http.patch<any>(environment.apiUrl+'Admin/UpdateEmployee', data).pipe(catchError(err=>{
      this.toastr.error("Error While Updating Employee")
      return throwError(err)
    })).subscribe(res=>{
      let Employee = this.EmployeeSubject.value
      const Index = Employee.findIndex(i => i.id == data.id)
      Employee[Index]=data
      this.EmployeeSubject.next(Employee)
      this.toastr.success('Employee Updated Successfuly')
    })
  }
}

