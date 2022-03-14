import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamagedGoodsRoutingModule } from './damaged-goods-routing.module';
import { DamagedGoodsComponent } from './containers/damaged-goods/damaged-goods.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DamagedGoodDataFormComponent } from './components/damaged-good-data-form/damaged-good-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DamagedGoodsComponent,
    DamagedGoodDataFormComponent
  ],
  imports: [
    CommonModule,
    DamagedGoodsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class DamagedGoodsModule { }
