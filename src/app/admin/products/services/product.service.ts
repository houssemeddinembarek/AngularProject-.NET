import { Product, ProductToAdd } from '../models/product-model';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { category } from '../../products-category/models/category-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  ProdCategory:any;
 
  productSubject = new BehaviorSubject<Product[]>([]);
  ProductsCategoriesSubject = new BehaviorSubject<any[]>([]);
  constructor(private http:HttpClient, private toastr:ToastrService) { }

GetProdcutsCategories(){
  this.http.get<any>(environment.apiUrl+'Product/GetProductsGategory').subscribe(res=>{
    this.ProductsCategoriesSubject.next(res)
  })
}
SearchByCategoryAndName(selectedCatefory: any, data: any) {
  this.http.post<any[]>(environment.apiUrl+'Product/SearchProductByNameCategory',{categoryDTO:selectedCatefory,productQuery:data}).subscribe(res=>{
    this.productSubject.next(res);
  })
}
SearchByCategory(category: any) {
  this.http.post<any[]>(environment.apiUrl+'Product/SearchProductByCategory',category).subscribe(res=>{
    this.productSubject.next(res);
  })
}
addProduct(data:ProductToAdd){
  this.http.post<Product>(environment.apiUrl+'Product/AddProduct',data).pipe(catchError(err=>{
    this.toastr.error('Error While Adding Product')
    return throwError(err);
  })
  ).subscribe(res=>{
    let products = this.productSubject.value;
    products.push(res);
    this.productSubject.next(products);
    this.toastr.success('Product Added Successfully')
  })
}

getProducts(){
   this.http.get<any>(environment.apiUrl+'Product/GetProducts').subscribe(res => {
     this.productSubject.next(res);
   })
}

deleteProduct(id){
this.http.delete<any>(environment.apiUrl+'Product/deletePrduct/'+id).subscribe(res => {
  let products = this.productSubject.value;
  const index = products.findIndex(p => p.id == id);
  products.splice(index,1);
  this.productSubject.next(products);
  this.toastr.success('Product Deleted Successfully')
})
}

UpdateProduct(value: Product) {
this.http.patch<Product>(environment.apiUrl+'Product/UpdateProduct',value).subscribe(res=>{
  let products = this.productSubject.value;
  const index = products.findIndex(p => p.id == value.id);
  products[index]=value
  this.productSubject.next(products);
  this.toastr.success('Product Updated Successfully')
})
}

UpdateStock(id,quantity){
  this.http.patch<any>(environment.apiUrl+'Product/UpdateProductQuantity/'+id+'/'+quantity,quantity).subscribe(res=>{
    this.toastr.success('Stock Updated Successfully')
  })
}

SearchByProdName(data){
  this.http.post<any>(environment.apiUrl+'Product/SearchProductByName',data).subscribe(res=>{
    this.productSubject.next(res);
  })
}
}


