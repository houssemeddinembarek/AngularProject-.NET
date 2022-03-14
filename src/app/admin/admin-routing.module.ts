import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '',
   component: AdminComponent,
   children: [
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'productcategory', loadChildren: () => import('./products-category/products-category.module').then(m => m.ProductsCategoryModule) },
    { path: 'equipement', loadChildren: () => import('./equipement/equipement.module').then(m => m.EquipementModule) },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'fixrequest', loadChildren: () => import('./fixrequest/fixrequest.module').then(m => m.FixrequestModule) },
    { path: '', redirectTo:'products'},
    { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
    { path: 'income', loadChildren: () => import('./income/income.module').then(m => m.IncomeModule) },
    { path: 'credit', loadChildren: () => import('./credit/credit.module').then(m => m.CreditModule) },
    { path: 'damagedgoods', loadChildren: () => import('./damaged-goods/damaged-goods.module').then(m => m.DamagedGoodsModule) }
   ]
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
