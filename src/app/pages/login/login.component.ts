import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) {
  }

  userLoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z][a-zA-Z]+.+')]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]+.+')]),
  });

  error: string | null = null;

  ngOnInit(): void {
  }

  submit() {
    if (this.userLoginForm.valid) {
      this.spinner.show();
      this.authService.login({identifier: this.userLoginForm.get('email')?.value, password: this.userLoginForm.get('password')?.value})
        .subscribe(res => {
          console.log(res);
          if (res.jwt != null) {
            this.spinner.hide();
            this.router.navigateByUrl('/');
            return;
          }

          alert('Email ou mot de passe incorrect');
          this.spinner.hide();
        });
    }
  }
}
