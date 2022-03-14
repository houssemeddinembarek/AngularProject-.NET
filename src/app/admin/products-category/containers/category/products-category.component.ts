import { category } from './../../models/category-model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

  CategoryData:any

  constructor(private service:CategoryService) { }

  ngOnInit(): void {
    this.service.CategorySubject.asObservable().subscribe(res=>{
      this.CategoryData=res
    })
    this.service.GetCategories()
  }

  CategorySubmitted(value:category){
    this.service.AddCategory(value)
  }

  DeleteSubmitted(id){
    this.service.DeleteCategory(id)
  }

}
