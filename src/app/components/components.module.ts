import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "@/components/layout/layout.component";
import {HeaderComponent} from "@/components/header/header.component";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from '@angular/router';
import {SidenavComponent} from "@/components/sidenav/sidenav.component";

const components = [LayoutComponent, HeaderComponent, SidenavComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: components
})
export class ComponentsModule {
}
