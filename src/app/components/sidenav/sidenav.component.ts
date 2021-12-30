import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {SidenavService} from "@/services/sidenav.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user: User | null = null;

  constructor(private authService: AuthService, private router: Router, private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  toggleSideNav () {
    this.sidenavService.toggle();
  }

  isShopOwner() {
    return this.authService.isShopOwner();
  };

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }

}
