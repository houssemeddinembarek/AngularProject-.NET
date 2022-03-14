import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './containers/income-page/income.component';

const routes: Routes = [{ path: '', component: IncomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
