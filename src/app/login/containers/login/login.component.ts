import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LoginModel } from '../../models/login-model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: LoginService) { }

  ngOnInit(): void {
  }
  CredsSubmitted(value: LoginModel) {
    this.authService.login(value);
  }
}
