import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './containers/product/products.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsPageComponent,
    ProductFormComponent
    ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ProductsModule { }
