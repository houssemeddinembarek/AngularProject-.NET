import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  IncomeSubject = new BehaviorSubject<any[]>([]);

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  GetIncomeData(date){
    this.http.post<any>(environment.apiUrl+'Income',date).subscribe(res=>{
      this.IncomeSubject.next(res);
    })
  }

  UpdateIncomeData(data){
    this.http.patch<any>(environment.apiUrl+'Income', data).pipe(catchError(err=>{
      this.toastr.error('Error While Updating Income Data');
      return throwError(err);
    })).subscribe(res=>{
      let request = this.IncomeSubject.value;
      const Index = request.findIndex(i => i.id == data.id);
      request[Index] = data;
      this.IncomeSubject.next(request);
      this.toastr.success('Data Updated Successfully');
    })
}

}
