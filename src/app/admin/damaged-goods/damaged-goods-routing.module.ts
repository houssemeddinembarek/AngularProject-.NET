import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamagedGoodsComponent } from './containers/damaged-goods/damaged-goods.component';

const routes: Routes = [
  {
    path: '',
    component:DamagedGoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamagedGoodsRoutingModule { }
