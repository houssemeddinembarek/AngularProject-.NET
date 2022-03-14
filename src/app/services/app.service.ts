import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }
  CheckRoles() {
    let role = localStorage.getItem("role");
    if (role) {
      if (role == 'Admin') {
        this.router.navigate(['/admin'])
      } else {
        this.router.navigate(['/user'])
      }
    }
    else {
      this.router.navigate(['/login'])
    }
  }
}
