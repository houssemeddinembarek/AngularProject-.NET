import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
