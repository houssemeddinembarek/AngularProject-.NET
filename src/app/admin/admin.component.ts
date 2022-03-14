import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  isSideBarCollapsed = false;
  ngOnInit(): void {
  }

  collapseSidebar(value:boolean){
    this.isSideBarCollapsed = value;
  }

}
