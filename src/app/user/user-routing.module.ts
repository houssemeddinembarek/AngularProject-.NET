import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent,
    children: [
      { path: 'fixrequest', loadChildren: () => import('./fixrequest/fixrequest.module').then(m => m.FixrequestModule) },
      { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
      {path:'',redirectTo:'fixrequest'},
      { path: 'income', loadChildren: () => import('./income/income.module').then(m => m.IncomeModule) },
      { path: 'credit', loadChildren: () => import('./credit/credit.module').then(m => m.CreditModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
