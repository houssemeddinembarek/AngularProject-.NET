import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ProductsCategoryRoutingModule } from './products-category-routing.module';
import { ProductsCategoryComponent } from './containers/category/products-category.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';



@NgModule({
  declarations: [
    ProductsCategoryComponent,
    CategoryPageComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    ProductsCategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsCategoryModule { }
