import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { confirmPasswordIdentical } from "../../shared/confirm-password.directive";
import {Router} from '@angular/router';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z][a-zA-Z]+.+/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ]),
  }, {validators: confirmPasswordIdentical});

  error: any = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.userRegistrationForm.valid) {
      const newUser = {
        username: this.userRegistrationForm.get('username')?.value,
        email: this.userRegistrationForm.get('email')?.value,
        password: this.userRegistrationForm.get('password')?.value
      };
      this.authService.registerUser(newUser).subscribe(success => {
        // Reroute to another page
        this.router.navigateByUrl('/');
      });

      // this.userRegistrationForm.get('username')?.patchValue("");
      // this.userRegistrationForm.get('email')?.patchValue("");
      // this.userRegistrationForm.get('password')?.patchValue("");
      // this.userRegistrationForm.get('confirmPassword')?.patchValue("");
    } else {
      this.error = "Invalid form";
    }

  }

}
