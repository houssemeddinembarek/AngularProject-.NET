import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DamagedGood } from '../../models/DamagedGood';

@Component({
  selector: 'app-return-product-modal',
  templateUrl: './return-product-modal.component.html',
  styleUrls: ['./return-product-modal.component.scss']
})
export class ReturnProductModalComponent implements OnInit {

  @Input() purchase:any;
  constructor(public modal: NgbActiveModal,private formBuilder:FormBuilder) { }
  CancelPurchaseForm = this.formBuilder.group({
    reason:['',[Validators.required]],
  })
  ngOnInit(): void {
  }
  Submit(){
    const damagedGood:DamagedGood = {
      purchaseId:this.purchase.id,
      productId:this.purchase.productId,
      quantity:this.purchase.quantity,
      productName:this.purchase.productName,
      returnReason:this.CancelPurchaseForm.value.reason,
    }
    this.modal.close(damagedGood);
  }

}
