import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from '@angular/material/sidenav';


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatMenuModule,
  MatDialogModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSidenavModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
