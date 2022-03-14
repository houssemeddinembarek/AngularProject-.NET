import { Product } from './../../models/product-model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any[];
  categories: any[];
  selectedCatefory: any;
  searchKeyword:string = "";
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.ProductsCategoriesSubject.asObservable().subscribe(res => {
      this.categories = res;
      this.service.ProdCategory = this.categories
    });

    this.service.GetProdcutsCategories();
    this.service.productSubject.asObservable().subscribe(res => {
      this.productList = res
    })
    this.service.getProducts();
  }

  prodSubmitted(value: Product) {
    this.service.addProduct(value)
  }
  SearByCategory(category) {
    this.selectedCatefory = category;
    if(this.selectedCatefory == null){
      if(this.searchKeyword!=""){
        this.service.SearchByProdName({queryString:this.searchKeyword});

      }
      else{
        this.service.getProducts();
      }
    }
    else if(this.searchKeyword != ""){
      this.service.SearchByCategoryAndName(this.selectedCatefory, {queryString:this.searchKeyword});
    }else{
      this.service.SearchByCategory(category);
    }
  }

  prodDeleted(id) {
    this.service.deleteProduct(id);
  }

  UpdateProduct(value) {
    this.service.UpdateProduct(value)

  }

  UpdateStockSubmitted(data) {
    this.service.UpdateStock(data.id, data.stock)
  }

  SearchSubmitted(data) {
    if (data.length < 1) {
      this.searchKeyword = "";
      this.service.getProducts();
    } else {
      this.searchKeyword = data.queryString;
      if (this.selectedCatefory != null) {
        this.service.SearchByCategoryAndName(this.selectedCatefory, data);
      } else {
        this.service.SearchByProdName(data);
      }
    }
  }
}