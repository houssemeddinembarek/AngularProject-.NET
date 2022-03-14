import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { EquipementRoutingModule } from './equipement-routing.module';
import { EquipementComponent } from './containers/equipement/equipement.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EquipementComponent,
    CategoryPageComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    EquipementRoutingModule,
    FormsModule,
    NgbDropdownModule,
    ReactiveFormsModule
  ]
})
export class EquipementModule { }
