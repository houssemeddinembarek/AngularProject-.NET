import { ProductService } from '../../services/product.service';
import { Categories, Product } from './../../models/product-model';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product:Product;
  category:Categories;


  addprodForm=this.formBuilder.group({
    title:['',[Validators.required]],
    comment:['',[Validators.required]],
    categoryId:['',[Validators.required]],
    price:['',[Validators.required]],
    originalPrice:['',[Validators.required]],
    stock:['',[Validators.required]],
    discount:['',[Validators.required]]
  })
  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private service:ProductService) { }

  ngOnInit(): void {
    if(this.product){
      this.addprodForm.patchValue(this.product)
    }
    this.category=this.service.ProdCategory
  }

  Submit(){
    if(this.product){
      this.product = new Product(this.product);
      this.product.UpdateProduct(this.addprodForm.value);
      this.activeModal.close(this.product);
    }
    else{
      this.activeModal.close(this.addprodForm.value);
    }
  }
}
