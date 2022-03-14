import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  CreditSubject = new BehaviorSubject<any[]>([]);
  constructor(private http:HttpClient, private toastr:ToastrService) { }

  GetCredit(){
    this.http.get<any>(environment.apiUrl+'Credit').subscribe((res)=>{
      this.CreditSubject.next(res);
    })
  }

  DeleteCredit(id){
    this.http.delete<any>(environment.apiUrl+'Credit/'+id).pipe(catchError((err)=>{
      this.toastr.error('Error While Deleting Credit');
      return throwError(err);
    })).subscribe(res=>{
      let data = this.CreditSubject.value;
      const Index = data.findIndex(i=> i.id == id);
      data.splice(Index,1);
      this.CreditSubject.next(data);
      this.toastr.success('Credit Deleted Successfully');
    })
  }

  AddCredit(data){
    this.http.post<any>(environment.apiUrl+'Credit',data).pipe(catchError(err=>{
      this.toastr.error('Error While Adding Credit');
      return throwError(err);
    })).subscribe(res=>{
      let data = this.CreditSubject.value;
      data.push(res);
      this.CreditSubject.next(data);
      this.toastr.success('Credit Added Successfully');
    })
  }

  UpdateCredit(data){
    this.http.patch<any>(environment.apiUrl+'Credit',data).pipe(catchError(err=>{
      this.toastr.error('Error While Updating Credit');
      return throwError(err);
    })).subscribe(res=>{
      let request = this.CreditSubject.value;
      const Index = request.findIndex(i => i.id == data.id );
      request[Index] = res;
      this.CreditSubject.next(request);
      this.toastr.success('Credit Updated Successfully');
    })
  }

  SearchByName(data){
    this.http.get<any>(environment.apiUrl+'Credit/name/'+data).pipe(catchError(err=>{
      this.toastr.error('Error While Performing Search');
      return throwError(err)
    })).subscribe(res=>{
      this.CreditSubject.next(res);
    })
  }

  SearchByPhone(data){
    this.http.get<any>(environment.apiUrl+'Credit/phone/'+data).pipe(catchError(err=>{
      this.toastr.error('Error While Performing Search');
      return throwError(err)
    })).subscribe(res=>{
      this.CreditSubject.next(res);
    })
  }

  PayedCredit(data){
    this.http.patch<any>(environment.apiUrl+'Credit/payed/'+data,data).pipe(catchError(err=>{
      this.toastr.error('Error While Updating Credit');
      return throwError(err);
    })).subscribe(res=>{
      let request = this.CreditSubject.value;
      const Index = request.findIndex(i => i.id == data );
      request[Index] = res;
      this.CreditSubject.next(request);
      this.toastr.success('Payment Updated Successfully');
    })
  }
}
