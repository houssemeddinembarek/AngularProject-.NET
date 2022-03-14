import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCategoryComponent } from './containers/category/products-category.component';

const routes: Routes = [{ path: '', component: ProductsCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsCategoryRoutingModule { }
