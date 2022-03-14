import { PurchaseUpdate } from './../../../shared/models/pruchase-model';
import { environment } from './../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';
import { Purchase } from 'src/app/shared/models/pruchase-model';

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
      this.PurchasesSubject.next(request)
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


}