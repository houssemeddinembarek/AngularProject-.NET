import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { ReturnProductModalComponent } from 'src/app/shared/components/return-product-modal/return-product-modal.component';
import { ProductService } from '../../products/services/product.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  Purchases:any;
  Products:any;
  ProdCategory:any;
  

  constructor(private service:SellerService, private ProductService:ProductService,private modalService:NgbModal) { 
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

  DeleteSubmitted(id){
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.service.DeletePurchase(id);
    }, (reason) => { })
  }
  ReturnProduct(purchase:any){
    let modalRef = this.modalService.open(ReturnProductModalComponent);
    modalRef.componentInstance.purchase = purchase;
    modalRef.result.then(res => {
      this.service.ReturnProduct(res);
    }, (reason) => { })
    //this.service.ReturnProduct(id);
  }


}