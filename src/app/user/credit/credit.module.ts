import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { CreditComponent } from './containers/credit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreditComponent
  ],
  imports: [
    CommonModule,
    CreditRoutingModule,
    SharedModule
  ]
})
export class CreditModule { }
