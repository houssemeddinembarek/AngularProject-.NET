import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixrequestRoutingModule } from './fixrequest-routing.module';
import { FixrequestComponent } from './containers/fixrequest-page/fixrequest.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FixrequestComponent,
  ],
  imports: [
    CommonModule,
    FixrequestRoutingModule,
    SharedModule
  ]
})
export class FixrequestModule { }
