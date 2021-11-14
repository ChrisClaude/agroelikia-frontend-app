import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@/services/auth.service';
import { environment } from '@/environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAccDropdownOpen: boolean = false;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    console.log(this.auth.getUser());
  }

  toggleAccountDropdown(): void {
    this.isAccDropdownOpen = !this.isAccDropdownOpen;
  }

  login(): void {
    this.document.location.href = `${environment.apiUrl}/connect/auth0`;
  }
}
