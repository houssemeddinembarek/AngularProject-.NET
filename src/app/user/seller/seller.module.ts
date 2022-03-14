import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './containers/seller-page/seller.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SellerComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedModule
  ]
})
export class SellerModule { }
