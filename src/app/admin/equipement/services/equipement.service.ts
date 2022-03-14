import { catchError } from 'rxjs/operators';
import { EquipementCategory, EquipementCategoryToUpdate } from './../models/equipementCategory-model';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  EquipementCategorySubject= new BehaviorSubject<any[]>([]);

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  GetEquipementCategory(){
    this.http.get<any>(environment.apiUrl+'EquipementFix').subscribe(res=>{
      this.EquipementCategorySubject.next(res)
    })
  }

  AddEquipementCategory(data:EquipementCategory){
    this.http.post<any>(environment.apiUrl+'EquipementFix', data).pipe(catchError(err=>{
      return throwError(err)
    })).subscribe(res=>{
      let EquipementCategory = this.EquipementCategorySubject.value
      EquipementCategory.push(res)
      this.EquipementCategorySubject.next(EquipementCategory)
      this.toastr.success('Equipement Added Successfully')
    })
  }

  DeleteEquipementCategory(id){
    this.http.delete<any>(environment.apiUrl+'EquipementFix/'+id).subscribe(res=>{
      let EquipementCategory = this.EquipementCategorySubject.value;
      const Index = EquipementCategory.findIndex(i => i.id == id)
      EquipementCategory.splice(Index,1)
      this.EquipementCategorySubject.next(EquipementCategory)
      this.toastr.success('Equipement Deleted Successfully')
    })
  }

  UpdateEquipementCategory(item:EquipementCategoryToUpdate){
    this.http.patch<any>(environment.apiUrl+'EquipementFix',item).subscribe(res=>{
      let EquipementCategory = this.EquipementCategorySubject.value
      const Index = EquipementCategory.findIndex(i => i.id == item.id)
      EquipementCategory[Index] = item
      this.EquipementCategorySubject.next(EquipementCategory)
      this.toastr.success('Equipement Updated Successfully')
    })
  }
}
