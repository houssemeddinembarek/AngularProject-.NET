import { ProductService } from '../../../../admin/products/services/product.service';
import { SellerService } from './../../services/seller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  
  Purchases:any;
  Products:any;
  ProdCategory:any;
  

  constructor(private service:SellerService, private ProductService:ProductService) { 
  }

  ngOnInit(): void {
    this.service.PurchasesSubject.asObservable().subscribe(res=>{
      this.Purchases = res
    })
    this.service.GetPurchases({})
    this.ProductService.productSubject.asObservable().subscribe(res=>{
      this.Products = res
    })
    this.ProductService.getProducts()
    this.ProductService.ProductsCategoriesSubject.asObservable().subscribe(res=>{
      this.ProdCategory = res
    })
    this.ProductService.GetProdcutsCategories()
  }

  PurchaseSubmitted(data){
    this.service.AddPurchase(data)
  }

  UpdateSubmitted(data){
    this.service.UpdatePurchase(data)
  }

  DateSubmitted(data){
    this.service.GetPurchases(data)
    this.service.PurchasesSubject.asObservable().subscribe(res=>{
      this.Purchases = res
    })
  }
}
