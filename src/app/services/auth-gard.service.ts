import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const role = localStorage.getItem("role");
        const routeRole = route.data.role;
        if (role && routeRole) {
            if (!route.data.role.includes(role)) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }

        else {
            this.router.navigate(['/login']);
            return false;
        }

    }
}

export class RedirectGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
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
        return true;

    }
}
