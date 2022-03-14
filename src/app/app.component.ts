import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Location } from '@angular/common'; // <--- Here
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private location: Location, private appService: AppService) { }
  ngOnInit(): void {
    if (this.location.path() == '')
      this.appService.CheckRoles();
  }
}
