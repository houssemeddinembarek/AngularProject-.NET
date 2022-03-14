import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DamagedGood } from 'src/app/shared/models/DamagedGood';
import { Purchase, PurchaseUpdate } from 'src/app/shared/models/pruchase-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  

  PurchasesSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  GetPurchases(request) {
    this.http.post<any>(environment.apiUrl + 'Seller/GetPurchases', request).pipe(catchError(err => {
      this.toastr.error('Error While Getting Purchases');
      return throwError(err);
    })).subscribe(res => {
      this.PurchasesSubject.next(res);
    })
  }

  AddPurchase(data: Purchase) {
    this.http.post<any>(environment.apiUrl + 'Seller/AddPurchase', data).pipe(catchError(err => {
      this.toastr.error('Error While Adding Purchase')
      return throwError(err)
    })).subscribe(res => {
      let request = this.PurchasesSubject.value;
      request.push(res);
      this.PurchasesSubject.next(request);
      this.GetPurchases({});
      this.toastr.success('Purchase Added Successfully')
    })
  }

  UpdatePurchase(data: PurchaseUpdate) {
    this.http.patch<any>(environment.apiUrl + 'Seller/UpdatePurchase', data).pipe(catchError(err => {
      this.toastr.error('Error While Updating Purchase');
      return throwError(err);
    })).subscribe(res => {
      let request = this.PurchasesSubject.value;
      const Index = request.findIndex(i => i.id == data.id);
      request[Index] = data;
      this.PurchasesSubject.next(request)
      this.toastr.success('Purchase Updated Successfully')
    })
  }

  DeletePurchase(id){
    this.http.delete<any>(environment.apiUrl+'Seller/'+id).pipe(catchError(err=>{
      this.toastr.error('Error While Deleting Purchase');
      return throwError(err);
    })).subscribe(res=>{
      let request = this.PurchasesSubject.value;
      const Index = request.findIndex(i=> i.id == id);
      request.splice(Index,1);
      this.PurchasesSubject.next(request);
    })
  }
  
  ReturnProduct(damagedGood: DamagedGood) {
    this.http.post<DamagedGood>(environment.apiUrl+'Seller/returnProduct',damagedGood).pipe(catchError(err=>{
      this.toastr.error('Error While Canceling Purchase');
      return throwError(err);
    })).subscribe(res=>{
      let request = this.PurchasesSubject.value;
      const Index = request.findIndex(i=> i.id == damagedGood.purchaseId);
      request.splice(Index,1);
      this.PurchasesSubject.next(request);
    })
    throw new Error('Method not implemented.');
  }

 
  
}