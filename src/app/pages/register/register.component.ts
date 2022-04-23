import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { confirmPasswordIdentical } from "../../shared/confirm-password.directive";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";
import { NgxSpinnerService } from "ngx-spinner";

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
      Validators.pattern(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]+.+')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]+.+')
    ]),
    isASeller: new FormControl('',
    ),
  }, {validators: confirmPasswordIdentical});

  error: any = null;

  constructor(private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.userRegistrationForm.valid) {
      const newUser = {
        username: this.userRegistrationForm.get('username')?.value,
        email: this.userRegistrationForm.get('email')?.value,
        password: this.userRegistrationForm.get('password')?.value,
        hasAppliedForShopOwnership: this.userRegistrationForm.get('isASeller')?.value,
      };

      this.spinner.show();
      this.authService.registerUser(newUser).subscribe(success => {
        this.spinner.hide();
        // Reroute to another page
        this.router.navigateByUrl('/');
      });

    } else {
      this.error = "Invalid form";
    }

  }

}
