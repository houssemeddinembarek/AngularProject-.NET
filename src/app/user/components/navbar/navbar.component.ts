import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
