import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  // @ts-ignore
  private sidenav: MatSidenav;


  public setSidenav(sidenav: MatSidenav) {
    console.log('sidenav service', sidenav);
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}