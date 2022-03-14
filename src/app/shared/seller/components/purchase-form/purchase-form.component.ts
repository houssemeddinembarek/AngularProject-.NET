import { ProductService } from '../../../../admin/products/services/product.service';
import { category } from './../../../../admin/products-category/models/category-model';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { PurchaseUpdate } from 'src/app/shared/models/pruchase-model';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {

  @Input()Products:any[];
  @Input()ProdCategory:any[];

  placeholder='Type Product Name...';
  ProductName:string;
  ProductNameList:any=[];
  ProdDetails:any;
  quantity:number;
  

  PurchaseForm = this.formBuilder.group({
    income:['',[Validators.required]],
    quantity:['',[Validators.required]],
    productName:['',[]],
    
  })

  constructor(public activeModal:NgbActiveModal,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    for (let index = 0; index < this.Products.length; index++) {
      this.ProductNameList.push(this.Products[index].title)
    }

  }


  Submit(){
    this.activeModal.close({
    productId:this.ProdDetails.id,
    income:this.PurchaseForm.value.income,
    originalPrice:this.ProdDetails.originalPrice,
    quantity:this.PurchaseForm.value.quantity,
    productName:this.ProdDetails.title
    })
  }



  ProdName(value){
    this.ProductName = value;
    this.ProdDetails  =this.Products.find(i => i.title == value);;
    this.quantity = this.ProdDetails.stock;
    console.log(this.ProdDetails.price,this.ProdDetails.discount,this.ProdDetails.price * (this.ProdDetails.discount / 100));
    
    this.PurchaseForm.controls['income'].setValidators([Validators.required,Validators.min(this.ProdDetails.price * (1-(this.ProdDetails.discount / 100)))]);
  }
}
