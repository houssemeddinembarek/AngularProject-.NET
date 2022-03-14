import { catchError } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from '../models/category-model';
import { throwError, BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  CategorySubject= new BehaviorSubject<any[]>([]);
  ProductsCategoriesSubject = new BehaviorSubject<any[]>([]);

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  AddCategory(data:category){
    this.http.post<any>(environment.apiUrl+'Product/AddProductCatgory',data).pipe(catchError(err=>{
      this.toastr.error('Error While Adding Category')
      return throwError(err)
    })).subscribe(res=>{
      let category=this.CategorySubject.value
      category.push(res)
      this.CategorySubject.next(category);
      this.toastr.success('Category Added Successfully')
    })
  }

  GetCategories(){
    this.http.get<any>(environment.apiUrl+'Product/GetProductsGategory').subscribe(res=>{
      this.CategorySubject.next(res)
    })
  }

  DeleteCategory(id){
    this.http.delete<any>(environment.apiUrl+'Product/deletePrductCategory/'+id).subscribe(res=>{
      let category=this.CategorySubject.value;
      const Index = category.findIndex(i => i.categoryId == id);
      category.splice(Index,1)
      this.CategorySubject.next(category);
      this.toastr.success('Category Deleted Successfully')
    })
  }
}
