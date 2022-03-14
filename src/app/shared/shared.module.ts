import { CreditPageComponent } from './Credit/components/credit-page/credit-page.component';
import { IncomeComponent } from './income/components/income-page/income.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { FixrequestFormComponent } from './components/fixrequest-form/fixrequest-form.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FixrequestPageComponent } from './components/fixrequest-page/fixrequest-page.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { SellerPageComponent } from './seller/components/seller-page/seller-page.component';
import { PurchaseFormComponent } from './seller/components/purchase-form/purchase-form.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ProdDetailsModalComponent } from './seller/components/prod-details-modal/prod-details-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddCreditFormComponent } from './Credit/components/add-credit-form/add-credit-form.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ReturnProductModalComponent } from './components/return-product-modal/return-product-modal.component';
import { DamagedGoodsListComponent } from './components/damaged-goods-list/damaged-goods-list.component';

import { TooltipModule } from 'ng2-tooltip-directive';



@NgModule({
  declarations: [
    FixrequestFormComponent,
    FixrequestPageComponent,
    UpdateFormComponent,
    SellerPageComponent,
    PurchaseFormComponent,
    ReceiptComponent,
    IncomeComponent,
    ProdDetailsModalComponent,
    CreditPageComponent,
    AddCreditFormComponent,
    ConfirmModalComponent,
    ReturnProductModalComponent,
    DamagedGoodsListComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NgSelectModule,
    NgbDropdownModule,
    TooltipModule
  ],
  exports: [
    FixrequestFormComponent,
    FixrequestPageComponent,
    UpdateFormComponent,
    SellerPageComponent,
    PurchaseFormComponent,
    IncomeComponent,
    CreditPageComponent,
    ConfirmModalComponent,
    DamagedGoodsListComponent
  ]
})
export class SharedModule { }
