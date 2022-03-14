import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() collapseSideBarEvent = new EventEmitter<boolean>();
  isSideBarCollapsed = true;
  isMenuCollapsed = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  collapseSideBar():void{
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    this.collapseSideBarEvent.emit(this.isSideBarCollapsed)
  }
  Logout(){
    localStorage.clear()
    this.router.navigate(['/login'])

  }
}
