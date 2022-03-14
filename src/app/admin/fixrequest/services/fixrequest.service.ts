import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FixRequest } from 'src/app/shared/models/fixrequest-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FixrequestService {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  FixRequestSubject = new BehaviorSubject<any[]>([]);

  GetFixRequest(request){
    this.http.post<any>(environment.apiUrl+'FixRequest/GetFixRequest',request).subscribe(res=>{
      this.FixRequestSubject.next(res)
    })
  }

  AddFixRequest(data:FixRequest){
    return this.http.post<any>(environment.apiUrl+'FixRequest/AddFixRequest',data).pipe(catchError(err=>{
      this.toastr.error('Error While Adding Fix Request')
      return throwError(err)
    })).pipe(map(res=>{
      let request = this.FixRequestSubject.value
      request.push(res)
      this.FixRequestSubject.next(request)
      this.toastr.success('Fix Request Added Successfully');
      return res;
    }))
  }

  DeleteFixRequest(id){
    this.http.delete<any>(environment.apiUrl+'FixRequest/DeleteFixRequest?fixRequestId='+id).pipe(catchError(err=>{
      this.toastr.error('Error While Deleting Fix Request')
      return throwError(err)
    })).subscribe(res=>{
      let request = this.FixRequestSubject.value
      const Index = request.findIndex(i => i.id == id)
      request.splice(Index,1)
      this.FixRequestSubject.next(request)
      this.toastr.success('Fix Request Deleted Successfully')
    })
  }

  UpdateFixRequest(data){
    return this.http.patch<any>(environment.apiUrl+'FixRequest/UpdateFixRequest',data).pipe(catchError(err=>{
      this.toastr.error('Error While Updating Fix Request')
      return throwError(err)
    })).pipe(map(res=>{
      let request = this.FixRequestSubject.value;
      const Index = request.findIndex(i => i.id == data.id);
      request[Index] = res;
      this.FixRequestSubject.next(request);
      this.toastr.success('Fix Request Updated Successfully');
    }))
  }

  SearchFixRequests(data){
    this.http.post<any>(environment.apiUrl+'FixRequest/SearchFixRequests',data).subscribe(res=>{
      this.FixRequestSubject.next(res)
    })
  }
}

