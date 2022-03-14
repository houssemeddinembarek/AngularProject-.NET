import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixrequestComponent } from './containers/fixrequest-page/fixrequest.component';

const routes: Routes = [{ path: '', component: FixrequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixrequestRoutingModule { }
