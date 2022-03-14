import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DamagedGood } from 'src/app/shared/models/DamagedGood';
import { environment } from 'src/environments/environment';
import { DamagedGoodData } from '../models/damagedGoodData';

@Injectable({
  providedIn: 'root'
})
export class DamagedGoodsService {

  DamagedGoodsSubject = new BehaviorSubject<DamagedGoodData[]>([]);

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  GetDamagedGoods() {
    this.http.get<DamagedGoodData[]>(environment.apiUrl + 'DamagedGood').pipe(catchError(err => {
      this.toastr.error('Error While Getting Damaged Goods')
      return throwError(err)
    })).subscribe(res => {
      this.DamagedGoodsSubject.next(res)
    })
  }
  AddDamagedGood(data: DamagedGood) {
    this.http.post<DamagedGoodData>(environment.apiUrl + 'DamagedGood', data).pipe(catchError(err => {
      this.toastr.error('Error While Adding Damaged Goods')
      return throwError(err)
    })).subscribe(res => {
      let request = this.DamagedGoodsSubject.value;
      request.push(res);
      this.DamagedGoodsSubject.next(request);
    })
  }

  DeleteDamagedGood(id) {
    this.http.delete<any>(environment.apiUrl + 'DamagedGood/' + id).pipe(catchError(err => {
      this.toastr.error('Error While Deleting Damaged Goods');
      return throwError(err);
    })).subscribe(res => {
      let request = this.DamagedGoodsSubject.value;
      const Index = request.findIndex(i => i.id == id);
      request.splice(Index, 1);
      this.DamagedGoodsSubject.next(request);
      this.toastr.success('Damaged Goods Deleted Successfully')
    })
  }
}
