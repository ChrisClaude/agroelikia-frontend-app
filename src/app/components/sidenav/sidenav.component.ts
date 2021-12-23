import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {SidenavService} from "@/services/sidenav.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user: User | null = null;

  constructor(private authService: AuthService, private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  public toggleSideNav () {
    this.sidenavService.toggle();
  }

}
