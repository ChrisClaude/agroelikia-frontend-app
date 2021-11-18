import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  userLoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z][a-zA-Z]+.+')]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]),
  });

  error = null;

  ngOnInit(): void {
  }

  submit() {
    if (this.userLoginForm.valid) {
      this.authService.login({identifier: this.userLoginForm.get('email')?.value, password: this.userLoginForm.get('password')?.value})
        .subscribe(success => {
          console.log('login successful');
          this.router.navigateByUrl('/');
        });
    }
  }
}
