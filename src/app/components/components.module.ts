import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "@/components/layout/layout.component";
import {HeaderComponent} from "@/components/header/header.component";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {SidenavComponent} from "@/components/sidenav/sidenav.component";

const components = [LayoutComponent, HeaderComponent, SidenavComponent];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: components
})
export class ComponentsModule {
}
