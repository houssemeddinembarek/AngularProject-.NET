import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/login/models/login-model';

@Component({
  selector: 'login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.scss']
})
export class LoginForm implements OnInit {

  @Output() credSubmit = new EventEmitter<any>()
  loginForm = this.formBuilder.group({
    username:['',[Validators.required,Validators.minLength(6)]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  constructor(
    private formBuilder:FormBuilder,
    private route: Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.credSubmit.emit(new LoginModel(this.loginForm.value))
  }
}
