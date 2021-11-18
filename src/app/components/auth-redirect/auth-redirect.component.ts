import { AuthService } from '../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styles: [],
})
export class AuthRedirectComponent implements OnInit {
  message: string = 'Loading...';
  provider: string = '';
  loginSuccess: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.provider = params['providerName'];

      if (this.provider === 'auth0') {
        this.authService
          .loginWithAuth0(this.route.snapshot.queryParams)
          .subscribe((data) => {
            if (data !== undefined) {
              localStorage.setItem('user', JSON.stringify(data.user));
              localStorage.setItem('token', data.jwt);
              this.loginSuccess = true;
            }

            if (this.loginSuccess) {
              this.message = 'You are being redirected to the home page';
              this.router.navigate(['/']);
            } else {
              this.message = 'An error occurred while logging in';
            }
          });
      }
    });
  }
}
