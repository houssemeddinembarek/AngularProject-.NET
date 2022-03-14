import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/admin/products/models/product-model';
import { DamagedGood } from 'src/app/shared/models/DamagedGood';

@Component({
  selector: 'app-damaged-good-data-form',
  templateUrl: './damaged-good-data-form.component.html',
  styleUrls: ['./damaged-good-data-form.component.scss']
})
export class DamagedGoodDataFormComponent implements OnInit {

  @Input() products:Product[] = [];
  selectedProduct:any=null;
  placeholder='Type Product Name...';

  damagedGoodForm = this.formBuilder.group({
    productId:['',[Validators.required]],
    productName:['',[Validators.required]],
    quantity:['',[Validators.required]],
    returnReason:['',[Validators.required]],
  });
  constructor(public modal: NgbActiveModal,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  ProductSelected(product){
    this.selectedProduct = product;
    this.damagedGoodForm.patchValue({
      productId:product.id,
      productName:product.title,
    });
  }
  Submit(){
    const damagedGood:DamagedGood = {
      productId:this.damagedGoodForm.value.productId,
      productName:this.damagedGoodForm.value.productName,
      quantity:this.damagedGoodForm.value.quantity,
      returnReason:this.damagedGoodForm.value.returnReason,
    }
    this.modal.close(damagedGood);
  }

}
