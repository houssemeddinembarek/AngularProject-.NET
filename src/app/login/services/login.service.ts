import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoginInfo, LoginModel } from 'src/app/login/models/login-model';





@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient, private route:Router, private toastr:ToastrService) {
   }

   login(loginCreds:LoginModel){
     this.http.post<LoginInfo>(environment.apiUrl+'Auth/login',loginCreds).pipe(catchError(err => {
      if (err.code == 3) {
        this.toastr.error('Wrong Password')
      } else {
        this.toastr.error('Wrong Username')
      }
      return throwError(err);
    }))
      .subscribe((res:LoginInfo) => {
        this.toastr.success('Logged In')
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('role', res.role);
        localStorage.setItem('refreshToken', res.refreshToken);

        if (res.role == 'Admin') {
            this.route.navigate(['/admin'])
        }else{
          this.route.navigate(['/user'])
        }
      })
   }
}
