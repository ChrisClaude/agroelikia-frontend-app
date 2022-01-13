import {Component, OnInit} from '@angular/core';
import {AuthService} from "@/auth/services/auth.service";
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {SidenavService} from "@/services/sidenav.service";
import {CartService} from "@/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User | null = null;
  isHomePage: boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private sidenavService: SidenavService,
    public cartService: CartService,
    private _location: Location
  ) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.isHomePage = this.router.url === '/';
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
    return this.auth.isShopOwner();
  }

  toggleSideNav() {
    this.sidenavService.toggle();
  }

  navigateToCart() {
    this.router.navigate(['/cart'])
  }

  navigateToPreviousPage() {
    this._location.back();
  }
}
