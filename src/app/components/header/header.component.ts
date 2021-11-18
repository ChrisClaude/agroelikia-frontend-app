import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User | null = null;

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  login(): void {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }

  isShopOwner() {
    return this.user && this.user.role.name.toLowerCase() === "shop owner";
  }
}
