import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInjectorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('accessToken')
    if (token) {
      request = this.addToken(request, token);
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      catchError(err => {
        if (err.status == 401 || err.status == 403) {
          localStorage.clear();
          this.router.navigate(['/login'])
        } else
          return throwError(err.error)
      }))
  }
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
