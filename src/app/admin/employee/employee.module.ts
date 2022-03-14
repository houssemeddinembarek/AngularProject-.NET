import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './containers/employees/employee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { UpdateEmployeeFormComponent } from './components/update-employee-form/update-employee-form.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeePageComponent,
    UpdateEmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    NgbDropdownModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
